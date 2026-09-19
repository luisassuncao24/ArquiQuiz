(function () {
  "use strict";

  var migrations = window.ArquiQuizInteractivePilots;
  var app = document.getElementById("review-app");
  var blocked = document.getElementById("review-blocked");
  function stopWithMessage(title, message, status) {
    blocked.querySelector("h1").textContent = title;
    blocked.querySelector("p").textContent = message;
    document.body.dataset.status = status;
  }

  if (!migrations) {
    stopWithMessage("Não foi possível carregar a revisão", "Falta o módulo de perguntas interativas. Atualiza a página e tenta novamente.", "error");
    return;
  }

  var hubAuthenticated = false;
  try { hubAuthenticated = window.localStorage.getItem("quiz_hub_authenticated") === "1"; } catch (error) { /* storage unavailable */ }
  if (!hubAuthenticated) {
    stopWithMessage("Entra primeiro no hub", "Acede ao ArquiQuiz pelo hub e introduz a palavra-passe. Depois, abre a revisão de perguntas interativas a partir do hub.", "auth-required");
    return;
  }

  var catalog;
  try {
    catalog = migrations.createReviewCatalog({
      pl900: [pl900Questions, pl900Questions2, pl900Questions3],
      pl400: [pl400Questions, pl400Questions2, pl400Questions3, pl400Questions4, pl400Questions5],
      mb820: [questionsSet2, questions, questionsOfficial],
      mb800: [mb800Questions]
    });
  } catch (error) {
    stopWithMessage("Não foi possível carregar a revisão", error.message, "error");
    return;
  }

  var examOrder = migrations.getRegisteredExams();
  catalog.sort(function (a, b) {
    return examOrder.indexOf(a.examKey) - examOrder.indexOf(b.examKey) || a.sourceId - b.sourceId;
  });

  var examFilter = document.getElementById("review-exam");
  var search = document.getElementById("review-search");
  var list = document.getElementById("review-list");
  var listCount = document.getElementById("review-list-count");
  var detail = document.querySelector(".review-detail");
  var interaction = document.getElementById("review-interaction");
  var evaluateButton = document.getElementById("review-evaluate");
  var resetButton = document.getElementById("review-reset");
  var result = document.getElementById("review-result");
  var explanation = document.getElementById("review-explanation");
  var previousButton = document.getElementById("review-previous");
  var nextButton = document.getElementById("review-next");
  var sourceDetails = document.querySelector(".review-original");
  var filtered = catalog.slice();
  var selected = null;
  var controller = null;

  function examLabel(key) {
    return key.toUpperCase().replace(/^(PL|MB)(\d)/, "$1-$2");
  }

  function entryKey(entry) {
    return entry.examKey + "-" + entry.sourceId;
  }

  function shortText(value) {
    var text = String(value || "").replace(/\s+/g, " ").trim();
    return text.length > 105 ? text.slice(0, 102) + "…" : text;
  }

  function updateUrl(entry) {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("question", entryKey(entry));
      window.history.replaceState(null, "", url.href);
    } catch (error) { /* file URLs may not support history replacement in every browser */ }
  }

  function renderList() {
    list.textContent = "";
    listCount.textContent = filtered.length + " de " + catalog.length + " perguntas";
    if (filtered.length === 0) {
      var empty = document.createElement("p");
      empty.className = "review-empty";
      empty.textContent = "Nenhuma pergunta corresponde à pesquisa.";
      list.appendChild(empty);
    }
    filtered.forEach(function (entry) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "review-list-item";
      button.dataset.question = entryKey(entry);
      button.setAttribute("aria-current", selected === entry ? "true" : "false");
      var label = document.createElement("strong");
      label.textContent = examLabel(entry.examKey) + " · Q" + entry.sourceId;
      var type = document.createElement("span");
      type.textContent = entry.question.type === "matching" ? "Correspondência" : "Ordenação";
      var preview = document.createElement("small");
      preview.textContent = shortText(entry.question.text);
      button.appendChild(label);
      button.appendChild(type);
      button.appendChild(preview);
      button.addEventListener("click", function () { selectEntry(entry); });
      list.appendChild(button);
    });
  }

  function renderSource(entry) {
    document.getElementById("review-source-text").textContent = entry.sourceQuestion.text;
    var choices = document.getElementById("review-source-choices");
    choices.textContent = "";
    (entry.sourceQuestion.choices || []).forEach(function (choice) {
      var item = document.createElement("li");
      item.textContent = choice;
      choices.appendChild(item);
    });
    sourceDetails.open = false;
  }

  function selectEntry(entry) {
    if (controller) controller.destroy();
    controller = null;
    selected = entry;
    detail.hidden = false;
    interaction.textContent = "";
    result.textContent = "";
    result.className = "review-result";
    explanation.textContent = "";
    explanation.hidden = true;
    evaluateButton.disabled = true;
    document.getElementById("review-meta").textContent = examLabel(entry.examKey) + " · Pergunta " + entry.sourceId + " · " + (entry.question.type === "matching" ? "Correspondência" : "Ordenação");
    document.getElementById("review-title").textContent = "Pergunta Q" + entry.sourceId;
    document.getElementById("review-question").textContent = entry.question.text;
    renderSource(entry);
    controller = window.ArquiQuizInteractiveQuestion.create(interaction, entry.question, {
      onChange: function (_, state) {
        evaluateButton.disabled = !state.isComplete;
        result.textContent = "";
        result.className = "review-result";
        explanation.hidden = true;
      }
    });
    var position = filtered.indexOf(entry);
    previousButton.disabled = position <= 0;
    nextButton.disabled = position >= filtered.length - 1;
    updateUrl(entry);
    renderList();
  }

  function applyFilters() {
    var term = search.value.trim().toLocaleLowerCase();
    filtered = catalog.filter(function (entry) {
      return (examFilter.value === "all" || entry.examKey === examFilter.value) &&
        (!term || String(entry.sourceId).indexOf(term) !== -1 ||
          entry.question.text.toLocaleLowerCase().indexOf(term) !== -1);
    });
    if (filtered.length === 0) {
      if (controller) controller.destroy();
      controller = null;
      selected = null;
      detail.hidden = true;
      renderList();
    } else if (!selected || filtered.indexOf(selected) === -1) {
      selectEntry(filtered[0]);
    } else {
      var position = filtered.indexOf(selected);
      previousButton.disabled = position <= 0;
      nextButton.disabled = position >= filtered.length - 1;
      renderList();
    }
  }

  examOrder.forEach(function (key) {
    var option = document.createElement("option");
    option.value = key;
    option.textContent = examLabel(key);
    examFilter.appendChild(option);
  });
  document.getElementById("review-count").textContent = catalog.length + " migrações";
  examFilter.addEventListener("change", applyFilters);
  search.addEventListener("input", applyFilters);
  previousButton.addEventListener("click", function () {
    var position = filtered.indexOf(selected);
    if (position > 0) selectEntry(filtered[position - 1]);
  });
  nextButton.addEventListener("click", function () {
    var position = filtered.indexOf(selected);
    if (position >= 0 && position < filtered.length - 1) selectEntry(filtered[position + 1]);
  });
  evaluateButton.addEventListener("click", function () {
    if (!controller || !controller.isComplete()) return;
    var evaluation = controller.showEvaluation({ revealCorrect: true, lock: true });
    evaluateButton.disabled = true;
    result.className = "review-result " + (evaluation.isCorrect ? "is-correct" : "is-incorrect");
    result.textContent = evaluation.isCorrect
      ? "Correto — todos os elementos estão no lugar certo."
      : evaluation.correctCount + " de " + evaluation.total + " elementos corretos. A solução está assinalada acima.";
    explanation.textContent = selected.question.explanation || "";
    explanation.hidden = !explanation.textContent;
  });
  resetButton.addEventListener("click", function () {
    if (!controller) return;
    controller.reset();
    evaluateButton.disabled = true;
    result.textContent = "";
    result.className = "review-result";
    explanation.hidden = true;
  });

  var requested = "";
  try { requested = new URLSearchParams(window.location.search).get("question") || ""; } catch (error) { /* no deep link */ }
  var initial = catalog.find(function (entry) { return entryKey(entry) === requested; }) || catalog[0];
  blocked.hidden = true;
  app.hidden = false;
  document.body.dataset.status = "ready";
  if (initial) selectEntry(initial);
  else {
    detail.hidden = true;
    renderList();
  }
})();
