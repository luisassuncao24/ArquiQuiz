# Interactive question model

ArquiQuiz schema version 1 adds two canonical interactive question types without changing the existing `single`, `multiple`, or legacy `sequence` formats. The schema is shared by every exam wizard through `question-model.js`.

The shared renderer is provided by `interactive-question.js` and `interactive-question.css`. Phase 3 connects it to quiz sessions. Phase 4 adds a local-only, source-backed migration pilot without modifying the production question banks.

## Design guarantees

- Stable string IDs are used for prompts, options, items, and slots. Saved answers therefore do not depend on display order.
- Questions cannot mix canonical answer data with legacy `choices` or `correct` fields.
- Matching questions explicitly state whether an option can be reused.
- Every matching prompt has exactly one answer.
- Ordering can include unused distractor items; the number of ordered answers must equal the number of target slots.
- Ordering validation warns when the available items are stored in the exact answer order, because that display order would reveal the answer.
- Legacy `sequence` questions can be normalized to the canonical ordering model.
- The legacy `ordered: true` flag only preserves the display order of choices. It never changes the interaction type.

## Matching example

```js
{
  schemaVersion: 1,
  id: "pl900-example-match",
  text: "Match each requirement to the appropriate Power Platform capability.",
  type: "matching",
  interaction: {
    prompts: [
      { id: "external-users", text: "Give external users access to business data" },
      { id: "automation", text: "Automate an approval process" }
    ],
    options: [
      { id: "power-pages", text: "Power Pages" },
      { id: "power-automate", text: "Power Automate" },
      { id: "power-bi", text: "Power BI" }
    ],
    allowReuse: false
  },
  answer: {
    matches: [
      { promptId: "external-users", optionId: "power-pages" },
      { promptId: "automation", optionId: "power-automate" }
    ]
  },
  explanation: "Power Pages supports external sites; Power Automate runs approval workflows."
}
```

## Ordering example

```js
{
  schemaVersion: 1,
  id: "pl400-example-order",
  text: "Place the deployment actions in the correct order.",
  type: "ordering",
  interaction: {
    items: [
      { id: "export", text: "Export the solution" },
      { id: "import", text: "Import the solution" },
      { id: "publish", text: "Publish all customizations" },
      { id: "distractor", text: "Delete the source environment" }
    ],
    slots: [
      { id: "first", text: "First" },
      { id: "second", text: "Second" },
      { id: "third", text: "Third" }
    ]
  },
  answer: {
    order: ["export", "import", "publish"]
  },
  explanation: "Export, import, and then publish the solution components."
}
```

## Validation API

```js
var result = ArquiQuizQuestionModel.validateQuestion(question);
var bankResult = ArquiQuizQuestionModel.validateQuestionBank(questionBank);
var canonical = ArquiQuizQuestionModel.normalizeInteractiveQuestion(legacySequenceQuestion);
```

Validation returns `{ valid, errors, warnings }`. Each issue contains a stable `path`, `code`, and human-readable `message` so future migration reports can identify the exact field that needs attention.

## Renderer API

```js
var interaction = ArquiQuizInteractiveQuestion.create(container, question, {
  initialResponse: savedResponse,
  onChange: function (response, state) {
    // state.reason and state.isComplete are safe to use for autosave/UI updates.
  }
});

interaction.getResponse();
interaction.isComplete();
interaction.evaluate();
interaction.setResponse(savedResponse);
interaction.showEvaluation({ revealCorrect: true, lock: true });
interaction.showEvaluation({ revealCorrect: false, lock: true });
interaction.reset();
interaction.destroy();
```

Correct answers are not written into the DOM until `showEvaluation({ revealCorrect: true })` is explicitly requested. With `revealCorrect: false`, the interaction is locked and marked only as recorded, which is suitable for Test mode. Locked controls remain keyboard-focusable and expose their state through ARIA labels.

The component supports:

- mouse drag-and-drop;
- touch or pointer selection followed by target selection;
- keyboard Tab navigation plus Enter/Space activation and Escape to cancel a selection;
- reusable and non-reusable matching options;
- ordering distractors;
- incomplete-answer restoration with stable IDs;
- responsive dark and light themes;
- legacy `sequence` normalization without changing its source record.

Use `tests/interactive-question-demo.html` for isolated local manual testing. It never reads or writes quiz progress.

## Quiz integration

Canonical matching and ordering questions now use the shared renderer in:

- Practice mode, including immediate correctness and partial-credit feedback;
- Test mode, with no correctness or answer key exposed before the summary;
- Quick Practice;
- standalone and combined case studies;
- score summaries and question breakdowns;
- Review Later and answer-safe issue reports.

The integration is disabled by default. Append `?interactivePreview=1` to a local wizard URL to enable it, or set `interactiveLayouts: true` in `QUIZ_CONFIG` for a dedicated test page. URL activation is restricted to local files, `localhost`, and loopback addresses. The existing single, multiple, and legacy sequence paths are unchanged.

Interactive session results use stable IDs and the following versioned shape:

```js
{
  questionId: "pl900-example-match",
  answerFormat: "interactive-v1",
  interactionType: "matching",
  isCorrect: true,
  partialScore: 1,
  selected: {
    type: "matching",
    matches: [
      { promptId: "external-users", optionId: "power-pages" },
      { promptId: "automation", optionId: "power-automate" }
    ]
  },
  correct: {
    matches: [
      { promptId: "external-users", optionId: "power-pages" },
      { promptId: "automation", optionId: "power-automate" }
    ]
  }
}
```

`tests/app-interactive-integration.html` exercises the complete flow in both modes, including Quick Practice, case studies, summaries, saved results, Review Later, and issue copying.

## Phase 4 pilot migration

`interactive-question-pilots.js` builds canonical copies of five existing source questions only when local preview is enabled:

- PL-900: questions 9313 (matching with option reuse) and 9351 (ordering with a distractor);
- PL-400: questions 2007 (matching with distractors) and 2098 (ordering);
- MB-820: question 564 (ordering).

The originals remain untouched and continue to power the normal quizzes. The pilot set is excluded from preparation progress, Random Practice, Quick Practice, Exam Readiness, weak-topic scheduling, and attempt history. MB-800 is intentionally excluded because its Beta questions are original practice content and are not converted source drag-and-drop questions.

Use `tests/interactive-pilots-browser.html` to verify source traceability, answer mappings, schema validity, local-only gating, analytics isolation flags, and immutability of the production banks. The detailed migration record is in `INTERACTIVE-PILOT-AUDIT.md`. Historical-progress migration and full-bank conversion remain separate later phases.
