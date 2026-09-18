# Interactive question model

ArquiQuiz schema version 1 adds two canonical interactive question types without changing the existing `single`, `multiple`, or legacy `sequence` formats. The schema is shared by every exam wizard through `question-model.js`.

This phase defines and validates data only. Rendering remains unchanged until the interactive component is introduced behind the local feature branch.

## Design guarantees

- Stable string IDs are used for prompts, options, items, and slots. Saved answers therefore do not depend on display order.
- Questions cannot mix canonical answer data with legacy `choices` or `correct` fields.
- Matching questions explicitly state whether an option can be reused.
- Every matching prompt has exactly one answer.
- Ordering can include unused distractor items; the number of ordered answers must equal the number of target slots.
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
