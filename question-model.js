(function (root, factory) {
  "use strict";

  var api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.ArquiQuizQuestionModel = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var SCHEMA_VERSION = 1;
  var SUPPORTED_TYPES = ["single", "multiple", "sequence", "ordering", "matching"];

  function isPlainObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function addIssue(collection, path, code, message) {
    collection.push({ path: path, code: code, message: message });
  }

  function validateIdTextEntries(entries, path, minimum, errors) {
    if (!Array.isArray(entries)) {
      addIssue(errors, path, "array_required", "Must be an array.");
      return [];
    }
    if (entries.length < minimum) {
      addIssue(errors, path, "too_few_entries", "Must contain at least " + minimum + " entries.");
    }

    var ids = [];
    var seen = Object.create(null);
    entries.forEach(function (entry, index) {
      var entryPath = path + "[" + index + "]";
      if (!isPlainObject(entry)) {
        addIssue(errors, entryPath, "object_required", "Must be an object with stable id and text fields.");
        return;
      }
      if (!isNonEmptyString(entry.id)) {
        addIssue(errors, entryPath + ".id", "id_required", "Must be a non-empty string.");
      } else if (seen[entry.id]) {
        addIssue(errors, entryPath + ".id", "duplicate_id", "IDs must be unique within this list.");
      } else {
        seen[entry.id] = true;
        ids.push(entry.id);
      }
      if (!isNonEmptyString(entry.text)) {
        addIssue(errors, entryPath + ".text", "text_required", "Must be a non-empty string.");
      }
    });
    return ids;
  }

  function validateLegacyChoices(question, errors, warnings) {
    if (!Array.isArray(question.choices) || question.choices.length < 2) {
      addIssue(errors, "choices", "choices_required", "Legacy questions require at least two choices.");
    } else {
      question.choices.forEach(function (choice, index) {
        if (!isNonEmptyString(choice)) {
          addIssue(errors, "choices[" + index + "]", "choice_text_required", "Choice text must be a non-empty string.");
        }
      });
    }

    if (!Array.isArray(question.correct) || question.correct.length === 0) {
      addIssue(errors, "correct", "answer_required", "Legacy questions require at least one correct choice index.");
      return;
    }

    var seen = Object.create(null);
    question.correct.forEach(function (answerIndex, index) {
      if (!Number.isInteger(answerIndex)) {
        addIssue(errors, "correct[" + index + "]", "integer_required", "Correct choice indexes must be integers.");
      } else if (answerIndex < 0 || !Array.isArray(question.choices) || answerIndex >= question.choices.length) {
        addIssue(errors, "correct[" + index + "]", "index_out_of_range", "Correct choice index is outside the choices array.");
      } else if (seen[answerIndex]) {
        addIssue(errors, "correct[" + index + "]", "duplicate_answer", "Correct choice indexes must be unique.");
      } else {
        seen[answerIndex] = true;
      }
    });

    if (question.type === "single" && question.correct.length !== 1) {
      addIssue(errors, "correct", "single_cardinality", "Single-choice questions must have exactly one correct answer.");
    }
    if (question.type === "multiple" && question.correct.length < 2) {
      addIssue(errors, "correct", "multiple_cardinality", "Multiple-choice questions must have at least two correct answers.");
    }
    if (question.type === "sequence" && question.correct.length < 2) {
      addIssue(errors, "correct", "sequence_cardinality", "Legacy sequence questions must contain at least two ordered answers.");
    }
    if (question.ordered === true && question.type !== "sequence") {
      addIssue(warnings, "ordered", "display_order_only", "The legacy ordered flag preserves display order; it does not make the question an ordering interaction.");
    }
  }

  function rejectMixedLegacyFields(question, errors) {
    if (Object.prototype.hasOwnProperty.call(question, "choices")) {
      addIssue(errors, "choices", "mixed_schema", "Canonical interactive questions must use interaction data, not legacy choices.");
    }
    if (Object.prototype.hasOwnProperty.call(question, "correct")) {
      addIssue(errors, "correct", "mixed_schema", "Canonical interactive questions must use answer data, not legacy correct indexes.");
    }
  }

  function validateOrdering(question, errors) {
    rejectMixedLegacyFields(question, errors);
    if (question.schemaVersion !== SCHEMA_VERSION) {
      addIssue(errors, "schemaVersion", "unsupported_schema", "Ordering questions must declare schemaVersion " + SCHEMA_VERSION + ".");
    }
    if (!isPlainObject(question.interaction)) {
      addIssue(errors, "interaction", "object_required", "Ordering questions require an interaction object.");
      return;
    }

    var itemIds = validateIdTextEntries(question.interaction.items, "interaction.items", 2, errors);
    var slotIds = validateIdTextEntries(question.interaction.slots, "interaction.slots", 2, errors);
    if (!isPlainObject(question.answer) || !Array.isArray(question.answer.order)) {
      addIssue(errors, "answer.order", "order_required", "Ordering questions require an answer.order array of item IDs.");
      return;
    }
    if (slotIds.length && question.answer.order.length !== slotIds.length) {
      addIssue(errors, "answer.order", "slot_count_mismatch", "The correct order must contain exactly one item for every slot.");
    }

    var availableItems = Object.create(null);
    itemIds.forEach(function (id) { availableItems[id] = true; });
    var seenAnswers = Object.create(null);
    question.answer.order.forEach(function (itemId, index) {
      if (!isNonEmptyString(itemId) || !availableItems[itemId]) {
        addIssue(errors, "answer.order[" + index + "]", "unknown_item", "Every ordered answer must reference an interaction item ID.");
      } else if (seenAnswers[itemId]) {
        addIssue(errors, "answer.order[" + index + "]", "duplicate_item", "An item cannot occupy more than one ordering slot.");
      } else {
        seenAnswers[itemId] = true;
      }
    });
  }

  function validateMatching(question, errors) {
    rejectMixedLegacyFields(question, errors);
    if (question.schemaVersion !== SCHEMA_VERSION) {
      addIssue(errors, "schemaVersion", "unsupported_schema", "Matching questions must declare schemaVersion " + SCHEMA_VERSION + ".");
    }
    if (!isPlainObject(question.interaction)) {
      addIssue(errors, "interaction", "object_required", "Matching questions require an interaction object.");
      return;
    }

    var promptIds = validateIdTextEntries(question.interaction.prompts, "interaction.prompts", 2, errors);
    var optionIds = validateIdTextEntries(question.interaction.options, "interaction.options", 2, errors);
    if (typeof question.interaction.allowReuse !== "boolean") {
      addIssue(errors, "interaction.allowReuse", "boolean_required", "Matching questions must explicitly allow or reject option reuse.");
    }
    if (!isPlainObject(question.answer) || !Array.isArray(question.answer.matches)) {
      addIssue(errors, "answer.matches", "matches_required", "Matching questions require an answer.matches array.");
      return;
    }

    var availablePrompts = Object.create(null);
    var availableOptions = Object.create(null);
    promptIds.forEach(function (id) { availablePrompts[id] = true; });
    optionIds.forEach(function (id) { availableOptions[id] = true; });
    var matchedPrompts = Object.create(null);
    var usedOptions = Object.create(null);

    question.answer.matches.forEach(function (match, index) {
      var matchPath = "answer.matches[" + index + "]";
      if (!isPlainObject(match)) {
        addIssue(errors, matchPath, "object_required", "Each match must contain promptId and optionId.");
        return;
      }
      if (!isNonEmptyString(match.promptId) || !availablePrompts[match.promptId]) {
        addIssue(errors, matchPath + ".promptId", "unknown_prompt", "Every match must reference a prompt ID.");
      } else if (matchedPrompts[match.promptId]) {
        addIssue(errors, matchPath + ".promptId", "duplicate_prompt", "Every prompt must be matched exactly once.");
      } else {
        matchedPrompts[match.promptId] = true;
      }
      if (!isNonEmptyString(match.optionId) || !availableOptions[match.optionId]) {
        addIssue(errors, matchPath + ".optionId", "unknown_option", "Every match must reference an option ID.");
      } else if (question.interaction.allowReuse === false && usedOptions[match.optionId]) {
        addIssue(errors, matchPath + ".optionId", "reuse_not_allowed", "This matching question does not allow an option to be reused.");
      } else {
        usedOptions[match.optionId] = true;
      }
    });

    promptIds.forEach(function (promptId) {
      if (!matchedPrompts[promptId]) {
        addIssue(errors, "answer.matches", "unmatched_prompt", "Prompt " + promptId + " does not have a correct match.");
      }
    });
    Object.keys(matchedPrompts).forEach(function (promptId) {
      if (!availablePrompts[promptId]) {
        addIssue(errors, "answer.matches", "extra_prompt", "The answer contains a prompt that is not displayed.");
      }
    });
  }

  function validateQuestion(question, options) {
    var settings = options || {};
    var errors = [];
    var warnings = [];

    if (!isPlainObject(question)) {
      addIssue(errors, "question", "object_required", "Question must be an object.");
      return { valid: false, errors: errors, warnings: warnings };
    }
    if (!(Number.isInteger(question.id) || isNonEmptyString(question.id))) {
      addIssue(errors, "id", "id_required", "Question ID must be an integer or a non-empty string.");
    }
    if (!isNonEmptyString(question.text)) {
      addIssue(errors, "text", "text_required", "Question text must be a non-empty string.");
    }
    if (SUPPORTED_TYPES.indexOf(question.type) === -1) {
      addIssue(errors, "type", "unsupported_type", "Question type must be one of: " + SUPPORTED_TYPES.join(", ") + ".");
      return { valid: false, errors: errors, warnings: warnings };
    }

    if (question.type === "matching") {
      validateMatching(question, errors);
    } else if (question.type === "ordering") {
      validateOrdering(question, errors);
    } else {
      if (settings.allowLegacy === false) {
        addIssue(errors, "type", "legacy_disabled", "Legacy single, multiple, and sequence schemas are disabled for this validation.");
      }
      validateLegacyChoices(question, errors, warnings);
    }

    return { valid: errors.length === 0, errors: errors, warnings: warnings };
  }

  function validateQuestionBank(questions, options) {
    var errors = [];
    var warnings = [];
    if (!Array.isArray(questions)) {
      addIssue(errors, "questions", "array_required", "Question bank must be an array.");
      return { valid: false, errors: errors, warnings: warnings };
    }

    var seenIds = Object.create(null);
    questions.forEach(function (question, index) {
      var result = validateQuestion(question, options);
      var prefix = "questions[" + index + "]";
      result.errors.forEach(function (issue) {
        errors.push({ path: prefix + "." + issue.path, code: issue.code, message: issue.message });
      });
      result.warnings.forEach(function (issue) {
        warnings.push({ path: prefix + "." + issue.path, code: issue.code, message: issue.message });
      });
      if (question && (Number.isInteger(question.id) || isNonEmptyString(question.id))) {
        var idKey = typeof question.id + ":" + question.id;
        if (seenIds[idKey]) {
          addIssue(errors, prefix + ".id", "duplicate_question_id", "Question IDs must be unique within a bank.");
        } else {
          seenIds[idKey] = true;
        }
      }
    });
    return { valid: errors.length === 0, errors: errors, warnings: warnings };
  }

  function copyOptionalMetadata(source, target) {
    ["context", "category", "explanation", "source", "sourceUrl"].forEach(function (key) {
      if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    });
    return target;
  }

  function normalizeInteractiveQuestion(question) {
    var result = validateQuestion(question);
    if (!result.valid) {
      throw new Error("Invalid interactive question " + (question && question.id !== undefined ? question.id : "unknown") + ": " + result.errors.map(function (issue) {
        return issue.path + " " + issue.message;
      }).join("; "));
    }
    if (question.type === "matching" || question.type === "ordering") {
      return JSON.parse(JSON.stringify(question));
    }
    if (question.type !== "sequence") {
      throw new Error("Question " + question.id + " is not an interactive matching or ordering question.");
    }

    var items = question.choices.map(function (text, index) {
      return { id: "choice-" + index, text: text };
    });
    var slots = question.correct.map(function (_, index) {
      return { id: "position-" + (index + 1), text: "Position " + (index + 1) };
    });
    var normalized = {
      schemaVersion: SCHEMA_VERSION,
      id: question.id,
      text: question.text,
      type: "ordering",
      interaction: { items: items, slots: slots },
      answer: {
        order: question.correct.map(function (choiceIndex) { return "choice-" + choiceIndex; })
      }
    };
    return copyOptionalMetadata(question, normalized);
  }

  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    supportedTypes: Object.freeze(SUPPORTED_TYPES.slice()),
    validateQuestion: validateQuestion,
    validateQuestionBank: validateQuestionBank,
    normalizeInteractiveQuestion: normalizeInteractiveQuestion
  });
});
