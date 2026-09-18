# Interactive layout pilot audit

Phase 4 converts five existing questions into canonical matching or ordering copies for local evaluation. The source records are never mutated. The copies are generated only when `?interactivePreview=1` is used from a local file, `localhost`, or a loopback address.

| Exam | Source ID | Previous representation | Pilot representation | Integrity decision |
| --- | ---: | --- | --- | --- |
| PL-900 | 9313 | One choice containing a complete four-row mapping | Matching, four prompts, reusable options | Dataverse is intentionally reused for secure storage and reusable table logic. |
| PL-900 | 9351 | One choice containing the complete action sequence | Ordering, four slots, one distractor | Preserves update → save → publish → share and keeps the unrelated security-role action as a distractor. |
| PL-400 | 2007 | Multiple choice containing two mapping rows | Matching, two prompts, two distractors | Preserves server-side synchronization for Exchange and server-based SharePoint integration for documents. |
| PL-400 | 2098 | Legacy sequence | Ordering, four slots | Preserves the dependency-first solution deployment sequence. |
| MB-820 | 564 | One choice containing a complete numbered sequence | Ordering, four slots | Preserves breakpoint → debug/attach → run report → inspect variable. |

## Verification sources

- PL-900 9313: [Power Apps overview](https://learn.microsoft.com/en-us/power-apps/powerapps-overview), [Dataverse overview](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro), and [cloud-flow overview](https://learn.microsoft.com/en-us/power-automate/overview-cloud).
- PL-900 9351: [save and publish canvas apps](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/save-publish-app) and [share a canvas app](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/share-app).
- PL-400 2007: [server-side synchronization](https://learn.microsoft.com/en-us/power-platform/admin/server-side-synchronization) and [server-based SharePoint document integration](https://learn.microsoft.com/en-us/power-pages/configure/manage-sharepoint-documents).
- PL-400 2098: [remove Dataverse dependencies](https://learn.microsoft.com/en-us/power-platform/alm/removing-dependencies) and [delete a Dataverse column](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-field-solution-explorer).
- MB-820 564: [debugging in AL](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-debugging) and [attach and debug](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-attach-debug-next).

## Release safeguards

- The public/default question arrays retain their previous types, choices, and answer keys.
- Pilot records contain stable string IDs and no legacy `choices` or `correct` fields.
- Ordering item banks are deliberately not stored in answer order.
- The pilot set is excluded from preparation and recommendation analytics.
- MB-800 is excluded because there is no converted official drag-and-drop source to migrate faithfully.
