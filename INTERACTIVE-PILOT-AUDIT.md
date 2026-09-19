# Interactive layout migration audit

Phases 4 and 5 converted 14 existing questions into canonical matching or ordering copies for local evaluation. Phase 6 releases the validated copies in the normal quiz sets. The source records are never mutated; runtime replacements preserve each original numeric question ID and the overall set counts.

| Exam | Source ID | Previous representation | Released representation | Integrity decision |
| --- | ---: | --- | --- | --- |
| PL-900 | 9057 | One choice containing a three-row mapping | Matching, three prompts, one distractor | Preserves standard table for the owner, custom table for pet data, and a relationship between them. |
| PL-900 | 9073 | One choice containing a two-row mapping | Matching, two prompts, one distractor | Preserves model-driven for a complex Dataverse process and canvas for a custom layout. |
| PL-900 | 9112 | One choice containing the complete action sequence | Ordering, four slots | Preserves create app → add components → save → publish. |
| PL-900 | 9313 | One choice containing a complete four-row mapping | Matching, four prompts, reusable options | Dataverse is intentionally reused for secure storage and reusable table logic. |
| PL-900 | 9335 | One choice containing the selected three-step sequence | Ordering, three slots, three distractors | Reuses Account, adds the number column, and then defines the business rule. |
| PL-900 | 9343 | One choice containing a three-row control mapping | Matching, three prompts, one distractor | Preserves Form for record creation, vertical container for scrolling, and Gallery for browsing. |
| PL-900 | 9351 | One choice containing the complete action sequence | Ordering, four slots, one distractor | Preserves update → save → publish → share and keeps the unrelated security-role action as a distractor. |
| PL-400 | 2007 | Multiple choice containing two mapping rows | Matching, two prompts, two distractors | Preserves server-side synchronization for Exchange and server-based SharePoint integration for documents. |
| PL-400 | 2080 | Multiple choice containing two mapping rows | Matching, two prompts, one distractor | Uses a standard table for Dataverse-managed doctor data and a virtual table for external medication data. |
| PL-400 | 2098 | Legacy sequence | Ordering, four slots | Preserves the dependency-first solution deployment sequence. |
| PL-400 | 2223 | Legacy sequence | Ordering, four slots | Preserves create solution → add component reference → build → deploy. |
| PL-400 | 3046 | Multiple choice containing two mapping rows | Matching, two prompts, one distractor | Uses elastic storage for high-volume signals and standard storage for relational configuration. |
| PL-400 | 3156 | Multiple choice containing two mapping rows | Matching, two prompts, two distractors | Preserves SVG for scalable images and RESX for localized strings. |
| MB-820 | 564 | One choice containing a complete numbered sequence | Ordering, four slots | Preserves breakpoint → debug/attach → run report → inspect variable. |

## Verification sources

- PL-900 9313: [Power Apps overview](https://learn.microsoft.com/en-us/power-apps/powerapps-overview), [Dataverse overview](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro), and [cloud-flow overview](https://learn.microsoft.com/en-us/power-automate/overview-cloud).
- PL-900 9351: [save and publish canvas apps](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/save-publish-app) and [share a canvas app](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/share-app).
- PL-900 9057: [create a custom Dataverse table](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-custom-entity) and [Dataverse table relationships](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-entity-relationships).
- PL-900 9073: [model-driven app overview](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-driven-app-overview) and [canvas app overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/getting-started).
- PL-900 9112: [create a blank canvas app](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/app-from-image) and [save and publish canvas apps](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/save-publish-app).
- PL-900 9335: [edit a table](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/edit-entities), [create columns](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-fields), and [create a business rule](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-create-business-rule).
- PL-900 9343: [canvas-app forms](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/add-form), [vertical containers](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-vertical-container), and [galleries](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery).
- PL-400 2007: [server-side synchronization](https://learn.microsoft.com/en-us/power-platform/admin/server-side-synchronization) and [server-based SharePoint document integration](https://learn.microsoft.com/en-us/power-pages/configure/manage-sharepoint-documents).
- PL-400 2098: [remove Dataverse dependencies](https://learn.microsoft.com/en-us/power-platform/alm/removing-dependencies) and [delete a Dataverse column](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-field-solution-explorer).
- PL-400 2080: [standard and custom tables](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-custom-entity) and [virtual tables](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-virtual-entities).
- PL-400 2223: [package a code component in a solution](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/import-custom-controls).
- PL-400 3046: [standard and elastic table selection](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-elastic-tables).
- PL-400 3156: [model-driven app web-resource types](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/web-resources) and [RESX localization](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/custom-page-localize).
- MB-820 564: [debugging in AL](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-debugging) and [attach and debug](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-attach-debug-next).

## Candidates deliberately excluded

- PL-400 3154: its stored sequence says to add a data source in command designer, but current Microsoft documentation states that additional tables can't be added directly there.
- PL-400 3159: its cross-app component-import flow relies on a retired feature; component libraries are now recommended.
- PL-400 2062: the wording mixes `Cascade Active` behavior with the `Cascade User Owned` answer and is therefore internally inconsistent.
- MB-820 560: the extracted question does not retain the four original code segments needed to validate its No. Series order safely.

## Release safeguards

- The loaded source arrays retain their previous types, choices, and answer keys; replacement happens in the app's derived set data.
- Released records contain stable interaction IDs and no top-level legacy `choices` or `correct` fields.
- Ordering item banks are deliberately not stored in answer order.
- The same numeric question IDs prevent duplicates and preserve in-progress session lookup.
- Each released record carries a private compatibility snapshot so pre-release result histories still show their choice labels.
- `?legacyInteractions=1` restores the old question representation for a controlled page load and can still display new-format saved results.
- `interactive-review.html` reads this migration registry automatically for local-only, progress-free manual inspection; it is not a separate manually maintained question bank.
- MB-800 is excluded because there is no converted official drag-and-drop source to migrate faithfully.
