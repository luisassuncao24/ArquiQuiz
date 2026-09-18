(function (root, factory) {
  "use strict";

  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./question-model.js"));
  } else {
    root.ArquiQuizInteractiveQuestion = factory(root.ArquiQuizQuestionModel);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function (questionModel) {
  "use strict";

  if (!questionModel) {
    throw new Error("ArquiQuizInteractiveQuestion requires ArquiQuizQuestionModel.");
  }

  var instanceCounter = 0;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function findById(entries, id) {
    for (var index = 0; index < entries.length; index++) {
      if (entries[index].id === id) return entries[index];
    }
    return null;
  }

  function createElement(tagName, className, text) {
    var element = document.createElement(tagName);
    if (className) element.className = className;
    if (text !== undefined && text !== null) element.textContent = text;
    return element;
  }

  function replaceChildren(element, child) {
    while (element.firstChild) element.removeChild(element.firstChild);
    if (child) element.appendChild(child);
  }

  function closestWithAttribute(start, rootElement, attributeName) {
    var element = start;
    while (element && element !== rootElement) {
      if (element.nodeType === 1 && element.hasAttribute(attributeName)) return element;
      element = element.parentNode;
    }
    return null;
  }

  function create(container, sourceQuestion, options) {
    if (!container || container.nodeType !== 1) {
      throw new Error("Interactive question container must be a DOM element.");
    }

    var settings = options || {};
    var question = questionModel.normalizeInteractiveQuestion(sourceQuestion);
    if (question.type !== "matching" && question.type !== "ordering") {
      throw new Error("Interactive renderer supports matching and ordering questions only.");
    }

    var instanceId = "arquiquiz-iq-" + (++instanceCounter);
    var isMatching = question.type === "matching";
    var items = isMatching ? question.interaction.options : question.interaction.items;
    var targets = isMatching ? question.interaction.prompts : question.interaction.slots;
    var allowReuse = isMatching && question.interaction.allowReuse === true;
    var placements = Object.create(null);
    var selectedItemId = null;
    var disabled = settings.disabled === true;
    var reviewState = null;
    var statusMessage = "";
    var destroyed = false;

    var rootElement = createElement("section", "iq-component iq-" + question.type);
    rootElement.setAttribute("data-iq-instance", instanceId);
    rootElement.setAttribute("data-iq-type", question.type);
    container.appendChild(rootElement);

    var correctByTarget = Object.create(null);
    if (isMatching) {
      question.answer.matches.forEach(function (match) {
        correctByTarget[match.promptId] = match.optionId;
      });
    } else {
      targets.forEach(function (target, index) {
        correctByTarget[target.id] = question.answer.order[index];
      });
    }

    function countPlacementsForItem(itemId) {
      var count = 0;
      targets.forEach(function (target) {
        if (placements[target.id] === itemId) count++;
      });
      return count;
    }

    function getResponse() {
      if (isMatching) {
        return {
          type: "matching",
          matches: targets.filter(function (target) {
            return Boolean(placements[target.id]);
          }).map(function (target) {
            return { promptId: target.id, optionId: placements[target.id] };
          })
        };
      }
      return {
        type: "ordering",
        order: targets.map(function (target) { return placements[target.id] || null; })
      };
    }

    function evaluate() {
      var correctCount = 0;
      var completedCount = 0;
      targets.forEach(function (target) {
        if (placements[target.id]) completedCount++;
        if (placements[target.id] === correctByTarget[target.id]) correctCount++;
      });
      return {
        isComplete: completedCount === targets.length,
        isCorrect: completedCount === targets.length && correctCount === targets.length,
        correctCount: correctCount,
        completedCount: completedCount,
        total: targets.length,
        response: getResponse()
      };
    }

    function emitChange(reason) {
      if (typeof settings.onChange === "function") {
        settings.onChange(getResponse(), {
          reason: reason,
          selectedItemId: selectedItemId,
          isComplete: evaluate().isComplete
        });
      }
    }

    function announce(message) {
      statusMessage = message;
    }

    function focusControl(kind, id) {
      if (!id) return;
      var attributeName = kind === "option" ? "data-iq-option-id" : "data-iq-target-id";
      var controls = rootElement.querySelectorAll("[" + attributeName + "]");
      for (var index = 0; index < controls.length; index++) {
        if (controls[index].getAttribute(attributeName) === id) {
          controls[index].focus();
          return;
        }
      }
    }

    function render(focusRequest) {
      if (destroyed) return;
      var fragment = document.createDocumentFragment();

      var instructions = createElement("p", "iq-instructions");
      instructions.id = instanceId + "-instructions";
      instructions.textContent = allowReuse
        ? "Choose an option, then choose one or more targets. The selected option remains available for reuse. You can also drag options with a mouse."
        : "Choose an option, then choose its target. Choose a completed target to move its option. You can also drag options with a mouse.";
      fragment.appendChild(instructions);

      var layout = createElement("div", "iq-layout");
      var bankSection = createElement("section", "iq-bank");
      var bankTitle = createElement("h3", "iq-section-title", isMatching ? "Available options" : "Available actions");
      bankSection.appendChild(bankTitle);
      var bank = createElement("div", "iq-option-list");
      bank.setAttribute("role", "list");

      items.forEach(function (item) {
        var usedCount = countPlacementsForItem(item.id);
        var option = createElement("button", "iq-option");
        option.type = "button";
        option.setAttribute("data-iq-option-id", item.id);
        option.setAttribute("aria-describedby", instructions.id);
        option.setAttribute("aria-pressed", selectedItemId === item.id ? "true" : "false");
        option.setAttribute("aria-disabled", disabled ? "true" : "false");
        option.draggable = !disabled;
        if (selectedItemId === item.id) option.classList.add("is-selected");
        if (usedCount > 0) option.classList.add("is-used");

        var handle = createElement("span", "iq-drag-handle", "☷");
        handle.setAttribute("aria-hidden", "true");
        var optionText = createElement("span", "iq-option-text", item.text);
        option.appendChild(handle);
        option.appendChild(optionText);
        if (usedCount > 0) {
          var useLabel = allowReuse && usedCount > 1 ? "Used " + usedCount + " times" : "Placed";
          option.appendChild(createElement("span", "iq-option-state", useLabel));
        }
        bank.appendChild(option);
      });
      bankSection.appendChild(bank);

      var targetSection = createElement("section", "iq-targets");
      targetSection.appendChild(createElement("h3", "iq-section-title", isMatching ? "Match each requirement" : "Correct order"));
      var targetList = createElement("div", "iq-target-list");

      targets.forEach(function (target, index) {
        var assignedItemId = placements[target.id] || null;
        var assignedItem = assignedItemId ? findById(items, assignedItemId) : null;
        var targetCard = createElement("div", "iq-target");
        targetCard.setAttribute("data-iq-target-card", target.id);

        var targetHeading = createElement("div", "iq-target-heading");
        targetHeading.appendChild(createElement("span", "iq-target-number", String(index + 1)));
        targetHeading.appendChild(createElement("span", "iq-target-text", target.text));
        targetCard.appendChild(targetHeading);

        var targetControls = createElement("div", "iq-target-controls");
        var slot = createElement("button", "iq-slot");
        slot.type = "button";
        slot.setAttribute("data-iq-target-id", target.id);
        slot.setAttribute("aria-describedby", instructions.id);
        slot.setAttribute("aria-disabled", disabled ? "true" : "false");
        var correctAnswerMessage = null;
        if (assignedItem) {
          slot.classList.add("is-filled");
          slot.appendChild(createElement("span", "iq-slot-value", assignedItem.text));
        } else {
          slot.appendChild(createElement("span", "iq-slot-placeholder", selectedItemId ? "Place selected option here" : "Choose an option, then select this target"));
        }

        if (reviewState && reviewState.revealCorrect) {
          if (assignedItemId === correctByTarget[target.id]) {
            slot.classList.add("is-correct");
            slot.setAttribute("aria-label", target.text + ": correct, " + (assignedItem ? assignedItem.text : "no answer"));
          } else {
            slot.classList.add("is-incorrect");
            var correctItem = findById(items, correctByTarget[target.id]);
            correctAnswerMessage = createElement("p", "iq-correct-answer", "Correct answer: " + (correctItem ? correctItem.text : "Unavailable"));
            slot.setAttribute("aria-label", target.text + ": incorrect");
          }
        } else if (reviewState) {
          slot.classList.add("is-recorded");
          slot.setAttribute("aria-label", target.text + ": answer recorded");
        } else {
          slot.setAttribute("aria-label", target.text + ": " + (assignedItem ? assignedItem.text : "empty"));
        }
        targetControls.appendChild(slot);

        if (assignedItem && !disabled) {
          var clearButton = createElement("button", "iq-clear", "Remove");
          clearButton.type = "button";
          clearButton.setAttribute("data-iq-clear-target", target.id);
          clearButton.setAttribute("aria-label", "Remove " + assignedItem.text + " from " + target.text);
          targetControls.appendChild(clearButton);
        }
        targetCard.appendChild(targetControls);
        if (correctAnswerMessage) targetCard.appendChild(correctAnswerMessage);
        targetList.appendChild(targetCard);
      });
      targetSection.appendChild(targetList);

      layout.appendChild(bankSection);
      layout.appendChild(targetSection);
      fragment.appendChild(layout);

      var progress = evaluate();
      var completion = createElement("p", "iq-completion", progress.completedCount + " of " + progress.total + " targets completed");
      completion.setAttribute("aria-hidden", "true");
      fragment.appendChild(completion);

      var liveStatus = createElement("div", "iq-live-status iq-visually-hidden", statusMessage);
      liveStatus.setAttribute("role", "status");
      liveStatus.setAttribute("aria-live", "polite");
      liveStatus.setAttribute("aria-atomic", "true");
      fragment.appendChild(liveStatus);

      replaceChildren(rootElement, fragment);
      if (focusRequest) focusControl(focusRequest.kind, focusRequest.id);
    }

    function selectItem(itemId) {
      if (disabled || !findById(items, itemId)) return;
      reviewState = null;
      if (selectedItemId === itemId) {
        selectedItemId = null;
        announce("Selection cleared.");
      } else {
        selectedItemId = itemId;
        announce(findById(items, itemId).text + " selected. Now choose a target.");
      }
      render({ kind: "option", id: itemId });
    }

    function removeItemFromOtherTarget(itemId, destinationTargetId) {
      if (allowReuse) return;
      targets.forEach(function (target) {
        if (target.id !== destinationTargetId && placements[target.id] === itemId) {
          delete placements[target.id];
        }
      });
    }

    function placeItem(itemId, targetId, reason) {
      var item = findById(items, itemId);
      var target = findById(targets, targetId);
      if (disabled || !item || !target) return;
      reviewState = null;
      removeItemFromOtherTarget(itemId, targetId);
      placements[targetId] = itemId;
      announce(item.text + " placed in " + target.text + ".");
      if (!allowReuse) selectedItemId = null;
      emitChange(reason || "place");
      render({ kind: "target", id: targetId });
    }

    function activateTarget(targetId) {
      if (disabled) return;
      var target = findById(targets, targetId);
      if (!target) return;
      if (selectedItemId) {
        placeItem(selectedItemId, targetId, "place");
        return;
      }

      var assignedItemId = placements[targetId];
      if (assignedItemId) {
        selectedItemId = assignedItemId;
        if (!allowReuse) {
          delete placements[targetId];
          emitChange("pick-up");
        }
        announce(findById(items, assignedItemId).text + " selected from " + target.text + ". Choose another target.");
        render({ kind: "option", id: assignedItemId });
        return;
      }
      announce("Choose an option before selecting " + target.text + ".");
      render({ kind: "target", id: targetId });
    }

    function clearTarget(targetId) {
      if (disabled || !placements[targetId]) return;
      var item = findById(items, placements[targetId]);
      delete placements[targetId];
      reviewState = null;
      announce((item ? item.text : "Answer") + " removed.");
      emitChange("remove");
      render({ kind: "target", id: targetId });
    }

    function handleClick(event) {
      if (disabled) return;
      var option = closestWithAttribute(event.target, rootElement, "data-iq-option-id");
      if (option) {
        selectItem(option.getAttribute("data-iq-option-id"));
        return;
      }
      var clearButton = closestWithAttribute(event.target, rootElement, "data-iq-clear-target");
      if (clearButton) {
        clearTarget(clearButton.getAttribute("data-iq-clear-target"));
        return;
      }
      var target = closestWithAttribute(event.target, rootElement, "data-iq-target-id");
      if (target) activateTarget(target.getAttribute("data-iq-target-id"));
    }

    function handleKeyDown(event) {
      if (disabled) return;
      if (event.key === "Escape" && selectedItemId) {
        event.preventDefault();
        var previousSelection = selectedItemId;
        selectedItemId = null;
        announce("Selection cleared.");
        render({ kind: "option", id: previousSelection });
        return;
      }
      if (event.key !== "Enter" && event.key !== " " && event.key !== "Spacebar") return;
      var control = closestWithAttribute(event.target, rootElement, "data-iq-option-id") ||
        closestWithAttribute(event.target, rootElement, "data-iq-clear-target") ||
        closestWithAttribute(event.target, rootElement, "data-iq-target-id");
      if (!control) return;
      event.preventDefault();
      control.click();
    }

    function handleDragStart(event) {
      if (disabled) return;
      var option = closestWithAttribute(event.target, rootElement, "data-iq-option-id");
      if (!option || !event.dataTransfer) return;
      var itemId = option.getAttribute("data-iq-option-id");
      event.dataTransfer.effectAllowed = allowReuse ? "copy" : "move";
      event.dataTransfer.setData("text/plain", itemId);
      option.classList.add("is-dragging");
      selectedItemId = itemId;
      announce(findById(items, itemId).text + " picked up. Drop it on a target.");
    }

    function handleDragOver(event) {
      if (disabled) return;
      var target = closestWithAttribute(event.target, rootElement, "data-iq-target-id");
      if (!target) return;
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = allowReuse ? "copy" : "move";
      target.classList.add("is-drag-over");
    }

    function handleDragLeave(event) {
      var target = closestWithAttribute(event.target, rootElement, "data-iq-target-id");
      if (target) target.classList.remove("is-drag-over");
    }

    function handleDrop(event) {
      if (disabled) return;
      var target = closestWithAttribute(event.target, rootElement, "data-iq-target-id");
      if (!target || !event.dataTransfer) return;
      event.preventDefault();
      var itemId = event.dataTransfer.getData("text/plain");
      target.classList.remove("is-drag-over");
      if (findById(items, itemId)) placeItem(itemId, target.getAttribute("data-iq-target-id"), "drop");
    }

    function handleDragEnd() {
      var dragging = rootElement.querySelectorAll(".is-dragging, .is-drag-over");
      for (var index = 0; index < dragging.length; index++) {
        dragging[index].classList.remove("is-dragging", "is-drag-over");
      }
    }

    function setResponse(response, setOptions) {
      var responseOptions = setOptions || {};
      if (!response || typeof response !== "object") throw new Error("Interactive response must be an object.");
      var nextPlacements = Object.create(null);
      var usedItems = Object.create(null);

      if (isMatching) {
        if (!Array.isArray(response.matches)) throw new Error("Matching response requires a matches array.");
        response.matches.forEach(function (match) {
          if (!match || !findById(targets, match.promptId)) throw new Error("Matching response contains an unknown prompt ID.");
          if (!findById(items, match.optionId)) throw new Error("Matching response contains an unknown option ID.");
          if (nextPlacements[match.promptId]) throw new Error("Matching response contains the same prompt more than once.");
          if (!allowReuse && usedItems[match.optionId]) throw new Error("Matching response reuses an option that cannot be reused.");
          nextPlacements[match.promptId] = match.optionId;
          usedItems[match.optionId] = true;
        });
      } else {
        if (!Array.isArray(response.order)) throw new Error("Ordering response requires an order array.");
        if (response.order.length > targets.length) throw new Error("Ordering response contains more answers than slots.");
        response.order.forEach(function (itemId, index) {
          if (itemId === null || itemId === undefined) return;
          if (!findById(items, itemId)) throw new Error("Ordering response contains an unknown item ID.");
          if (usedItems[itemId]) throw new Error("Ordering response uses the same item more than once.");
          nextPlacements[targets[index].id] = itemId;
          usedItems[itemId] = true;
        });
      }

      placements = nextPlacements;
      selectedItemId = null;
      reviewState = null;
      announce("Saved answer restored.");
      if (responseOptions.emit !== false) emitChange("restore");
      render();
      return getResponse();
    }

    function reset(resetOptions) {
      placements = Object.create(null);
      selectedItemId = null;
      reviewState = null;
      disabled = Boolean(resetOptions && resetOptions.disabled);
      announce("All placements cleared.");
      if (!resetOptions || resetOptions.emit !== false) emitChange("reset");
      render();
    }

    function showEvaluation(evaluationOptions) {
      var revealCorrect = Boolean(evaluationOptions && evaluationOptions.revealCorrect);
      var shouldLock = !evaluationOptions || evaluationOptions.lock !== false;
      reviewState = { revealCorrect: revealCorrect };
      disabled = shouldLock;
      selectedItemId = null;
      var result = evaluate();
      announce(revealCorrect
        ? (result.isCorrect ? "All answers are correct." : result.correctCount + " of " + result.total + " answers are correct.")
        : "Answer recorded. Results are hidden.");
      render();
      return result;
    }

    function setDisabled(value) {
      disabled = Boolean(value);
      if (disabled) selectedItemId = null;
      if (!disabled) reviewState = null;
      render();
    }

    function destroy() {
      if (destroyed) return;
      destroyed = true;
      rootElement.removeEventListener("click", handleClick);
      rootElement.removeEventListener("keydown", handleKeyDown);
      rootElement.removeEventListener("dragstart", handleDragStart);
      rootElement.removeEventListener("dragover", handleDragOver);
      rootElement.removeEventListener("dragleave", handleDragLeave);
      rootElement.removeEventListener("drop", handleDrop);
      rootElement.removeEventListener("dragend", handleDragEnd);
      if (rootElement.parentNode) rootElement.parentNode.removeChild(rootElement);
    }

    rootElement.addEventListener("click", handleClick);
    rootElement.addEventListener("keydown", handleKeyDown);
    rootElement.addEventListener("dragstart", handleDragStart);
    rootElement.addEventListener("dragover", handleDragOver);
    rootElement.addEventListener("dragleave", handleDragLeave);
    rootElement.addEventListener("drop", handleDrop);
    rootElement.addEventListener("dragend", handleDragEnd);

    if (settings.initialResponse) {
      setResponse(settings.initialResponse, { emit: false });
    } else {
      render();
    }

    return Object.freeze({
      getQuestion: function () { return clone(question); },
      getResponse: getResponse,
      isComplete: function () { return evaluate().isComplete; },
      evaluate: evaluate,
      setResponse: setResponse,
      reset: reset,
      showEvaluation: showEvaluation,
      setDisabled: setDisabled,
      destroy: destroy
    });
  }

  return Object.freeze({ create: create });
});
