# ArquiQuiz

Browser-based preparation for MB-820, PL-400, PL-900, and MB-800 Beta. Open `index.html` to select an exam. Study progress is stored locally per exam.

## MB-800 Beta

The MB-800 section contains 125 original English practice questions in four topic sets (28/40/14/43), with single/multiple choice, explanations, and Microsoft Learn references. Reviewed September 9, 2026, it has representative scenarios across the 22 skill areas and uses the shared Practice/Test modes and study tools. These are not official exam questions or exhaustive coverage of every setting and scenario.

See [MB800-CONTENT.md](MB800-CONTENT.md) for coverage, sources, maintenance guidance, and browser checks. The user-facing guide is available from the MB-800 dashboard.

## Interactive question layouts

Version `1.2.0` finalizes the shared, versioned data contract and accessible renderer for matching and ordering interactions. Canonical questions work in Practice, Test, Quick Practice, case studies, scoring, saved results, summaries, Review Later, and answer-safe issue reports. A full source-structure audit released 240 validated migrations: 109 PL-900 normal questions, 109 PL-400 normal questions, 21 PL-400 case-study questions, and one MB-820 question. Questions with ambiguous, corrupted, or obsolete source data intentionally retain their existing layout.

The migrated questions now appear automatically wherever their original question would appear, including normal sets, Random Practice, Quick Practice, Exam Readiness, and weak-topic review. Existing sessions and completed-result reviews remain compatible. For emergency comparison or rollback, append `?legacyInteractions=1` to an exam page to restore the previous choice representation for that page load. MB-800 remains unchanged because its Beta bank contains original practice material rather than converted official drag-and-drop questions.

For maintenance, `interactive-review.html` is available on the published site and locally after an existing hub sign-in, without appearing in the learner-facing hub. It lists all 240 entries from the shared normal-bank and case-study registries automatically, supports filtering and direct links such as `interactive-review.html?question=pl400-2080`, lets you answer and reset each interaction, and keeps the previous wording behind a comparison panel. It does not write exam progress. As with the rest of this static site, the browser-side hub session is a convenience gate, not server-side access control.

See [INTERACTIVE-QUESTION-MODEL.md](INTERACTIVE-QUESTION-MODEL.md) for the schema and integration behavior, and [INTERACTIVE-PILOT-AUDIT.md](INTERACTIVE-PILOT-AUDIT.md) for the migrated question manifest and verification record.

The model can be checked with Node (`node tests/question-model.test.cjs`) or directly in a browser with `tests/question-model-browser.html`. The component test is `tests/interactive-question-browser.html`, the end-to-end session test is `tests/app-interactive-integration.html`, the full migration and case-study test is `tests/interactive-pilots-browser.html`, and the public-release, rollback, case-study rendering, and saved-result compatibility test is `tests/interactive-pilot-app-browser.html`. The review page has its own browser test at `tests/interactive-review-browser.html`, and `tests/interactive-migration-inventory-browser.html?audit=1` provides a read-only audit inventory. `tests/interactive-question-demo.html` remains the isolated manual playground. The broader `tests/question-banks-browser.html` page loads the four source banks and verifies that their existing single, multiple, and sequence data remains compatible.
