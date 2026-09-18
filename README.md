# ArquiQuiz

Browser-based preparation for MB-820, PL-400, PL-900, and MB-800 Beta. Open `index.html` to select an exam. Study progress is stored locally per exam.

## MB-800 Beta

The MB-800 section contains 125 original English practice questions in four topic sets (28/40/14/43), with single/multiple choice, explanations, and Microsoft Learn references. Reviewed September 9, 2026, it has representative scenarios across the 22 skill areas and uses the shared Practice/Test modes and study tools. These are not official exam questions or exhaustive coverage of every setting and scenario.

See [MB800-CONTENT.md](MB800-CONTENT.md) for coverage, sources, maintenance guidance, and browser checks. The user-facing guide is available from the MB-800 dashboard.

## Interactive question layouts (development)

The local `feature/interactive-layouts` work introduces a shared, versioned data contract and an accessible renderer for matching and ordering interactions. Phase 3 connects canonical questions to Practice, Test, Quick Practice, case studies, scoring, saved results, summaries, Review Later, and answer-safe issue reports. No production question bank has been migrated yet, so the published quiz experience remains unchanged.

For local-only previewing, append `?interactivePreview=1` to a wizard URL. This enables canonical interactive questions on that local page without changing the default or publishing the feature. See [INTERACTIVE-QUESTION-MODEL.md](INTERACTIVE-QUESTION-MODEL.md) for the schema, renderer API, integration behavior, and migration rules.

The model can be checked with Node (`node tests/question-model.test.cjs`) or directly in a browser with `tests/question-model-browser.html`. The component test is `tests/interactive-question-browser.html`, the end-to-end session test is `tests/app-interactive-integration.html`, and `tests/interactive-question-demo.html` is the local manual playground. The broader `tests/question-banks-browser.html` page loads the four exam banks and verifies that their existing single, multiple, and sequence data remains compatible.
