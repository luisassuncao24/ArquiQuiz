# Interactive layout final audit

Version `1.2.0` promotes the interactive question model from Beta to final release. The migration replaces a legacy representation only when the existing source record retains enough information to rebuild the interaction without inferring an answer.

The source arrays are never edited. At runtime, a canonical copy with the same numeric ID replaces the source record, preserving question counts, saved sessions, result history, and rollback compatibility.

## Final inventory

| Scope | Validated migrations | Method |
| --- | ---: | --- |
| PL-900 normal sets | 109 | Numbered requirement matrices and complete action sequences |
| PL-400 normal sets | 109 | Explicit `requirement -> option` pairs and complete action sequences |
| PL-400 case studies | 21 | Explicit pairs and complete sequences, isolated per case study |
| MB-820 normal sets | 1 | Complete source-backed ordering sequence |
| **Total** | **240** | — |

Of the 240 records, 20 use hand-reviewed definitions where the source needs an explicit distractor or source-specific interpretation. The other 220 are created by the conservative structural validator.

## Eligibility rules

A question is eligible only when all applicable checks pass:

- A sequence has at least two complete source actions and a complete answer order.
- A PL-900 matrix retains numbered requirements and a complete numbered answer with the same number of rows.
- A PL-400 or case-study matrix retains at least two explicit `requirement -> option` correct pairs.
- Prompt labels are unique, answer-option labels are usable, and the canonical schema has no validation errors or warnings.
- Ordering choices are not released in answer order.
- The canonical question preserves its source ID and a private legacy snapshot for old saved-result display.

Questions that do not meet these rules retain their established single-, multiple-choice, or legacy-sequence layout.

## Hand-reviewed definitions

| Exam | Source IDs | Reason for an explicit definition |
| --- | --- | --- |
| PL-900 | 9016, 9057, 9068, 9073, 9112, 9254, 9298, 9313, 9335, 9343, 9351 | The original matrix needs a source-specific distractor, reusable option, or ordering interpretation. |
| PL-400 | 2007, 2080, 2098, 2223, 3046, 3156, 4024, 5227 | The original source needs a source-specific distractor or retained product-context safeguard. |
| MB-820 | 564 | The stored action order is complete and manually verified. |

## Deliberately excluded

| Exam | Source ID | Reason |
| --- | ---: | --- |
| PL-900 | 9171 | The retained answer uses only one distinct option label, so the original matrix cannot be reconstructed faithfully. |
| PL-900 | 9228 | The retained operation labels are corrupted and do not form a trustworthy mapping. |
| PL-900 | 9312 | The extracted answer area is internally inconsistent about the trigger and connector steps. |
| PL-400 | 3154 | The sequence depends on command-designer behaviour that is no longer supported. |
| PL-400 | 3159 | The sequence depends on a retired cross-app component-import pattern. |
| MB-820 | 560 | The extracted source does not retain the original No. Series code segments. |

MB-800 remains unchanged: it is an original Beta practice bank, not a bank with retained source drag-and-drop questions to convert.

## Release safeguards

- Canonical records contain no top-level legacy `choices` or `correct` fields.
- The stored `interactiveMigration` snapshot retains prior choices and keys solely for saved-result compatibility; it is never rendered as an answer key during a quiz.
- `?legacyInteractions=1` restores the previous representation for a single page load while keeping new-format historical results readable.
- Case-study replacements are keyed by case-study key and question ID, preventing cross-case ID collisions.
- `interactive-review.html` reads the same registry and now includes all 240 final migrations without changing quiz progress.

## Verification

`tests/interactive-pilots-browser.html` validates every canonical question, evaluates its correct answer in the renderer, checks source immutability, rollback compatibility, and the 21 PL-400 case-study replacements. `tests/interactive-pilot-app-browser.html` verifies normal-set and case-study rendering in the real app. `tests/interactive-review-browser.html` verifies the 240-item signed-in review page.

`tests/interactive-migration-inventory-browser.html?audit=1` is a read-only inventory report for future audits. It lists candidates, successful structural conversions, and exclusions without modifying a question bank.
