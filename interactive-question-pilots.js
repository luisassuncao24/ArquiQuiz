(function (root, factory) {
  "use strict";

  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./question-model.js"));
  } else {
    root.ArquiQuizInteractivePilots = factory(root.ArquiQuizQuestionModel);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function (questionModel) {
  "use strict";

  if (!questionModel) {
    throw new Error("ArquiQuizInteractivePilots requires ArquiQuizQuestionModel.");
  }

  var PILOT_DEFINITIONS = {
    pl900: [
      {
        sourceId: 9313,
        question: {
          schemaVersion: 1,
          id: 9313,
          text: "A company is investigating Microsoft Power Platform capabilities. Match each requirement to the Microsoft Power Platform service that meets it.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "multiple-data-sources", text: "Create an app that connects to multiple data sources." },
              { id: "secure-data-store", text: "Provide scalable, secure business-data storage." },
              { id: "reusable-logic", text: "Define reusable business logic for multiple apps." },
              { id: "weekday-sharepoint", text: "Update a SharePoint list every weekday." }
            ],
            options: [
              { id: "power-automate", text: "Power Automate" },
              { id: "power-pages", text: "Power Pages" },
              { id: "dataverse", text: "Microsoft Dataverse" },
              { id: "power-apps", text: "Power Apps" }
            ],
            allowReuse: true
          },
          answer: {
            matches: [
              { promptId: "multiple-data-sources", optionId: "power-apps" },
              { promptId: "secure-data-store", optionId: "dataverse" },
              { promptId: "reusable-logic", optionId: "dataverse" },
              { promptId: "weekday-sharepoint", optionId: "power-automate" }
            ]
          },
          explanation: "Power Apps creates apps that connect to many data sources. Dataverse provides secure business-data storage and reusable table-level logic. Power Automate runs scheduled workflows such as a weekday SharePoint update.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-apps/powerapps-overview",
            "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro",
            "https://learn.microsoft.com/en-us/power-automate/overview-cloud"
          ]
        }
      },
      {
        sourceId: 9351,
        question: {
          schemaVersion: 1,
          id: 9351,
          text: "A company uses a canvas app to record office visitors in a SharePoint list. A new receptionist must appear in a drop-down control and must be able to use the updated app. Arrange the required actions in the correct order.",
          type: "ordering",
          interaction: {
            items: [
              { id: "share-app", text: "Share the app with the receptionist." },
              { id: "update-items", text: "Update the drop-down control's Items property." },
              { id: "assign-security-role", text: "Assign a Dataverse security role to the receptionist." },
              { id: "publish-app", text: "Publish the app." },
              { id: "save-app", text: "Save the app." }
            ],
            slots: [
              { id: "position-1", text: "First" },
              { id: "position-2", text: "Second" },
              { id: "position-3", text: "Third" },
              { id: "position-4", text: "Fourth" }
            ]
          },
          answer: {
            order: ["update-items", "save-app", "publish-app", "share-app"]
          },
          explanation: "Update the control, save the changed app, publish the saved version so users receive it, and then share the app with the receptionist. A Dataverse security role is not required for this SharePoint-backed app scenario.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/save-publish-app",
            "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/share-app"
          ]
        }
      }
    ],
    pl400: [
      {
        sourceId: 2007,
        question: {
          schemaVersion: 1,
          id: 2007,
          text: "A company is developing a model-driven app that must use SharePoint Online for document storage and Exchange Online for email. Match each requirement to the correct configuration option.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "email", text: "Exchange Online email" },
              { id: "documents", text: "SharePoint Online document storage" }
            ],
            options: [
              { id: "dual-write", text: "Dual-write" },
              { id: "server-based-integration", text: "Server-based SharePoint integration" },
              { id: "power-settings", text: "Power settings" },
              { id: "server-side-sync", text: "Server-side synchronization" }
            ],
            allowReuse: false
          },
          answer: {
            matches: [
              { promptId: "email", optionId: "server-side-sync" },
              { promptId: "documents", optionId: "server-based-integration" }
            ]
          },
          explanation: "Server-side synchronization connects customer-engagement apps with Exchange Online. Server-based SharePoint integration enables document management through SharePoint Online.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-platform/admin/server-side-synchronization",
            "https://learn.microsoft.com/en-us/power-pages/configure/manage-sharepoint-documents"
          ]
        }
      },
      {
        sourceId: 2098,
        question: {
          schemaVersion: 1,
          id: 2098,
          text: "Solution A contains the custom_text column. Solution B contains a view that references that column. Both managed solutions are installed in a destination environment. Arrange the actions required to remove the column from the destination environment.",
          type: "ordering",
          interaction: {
            items: [
              { id: "deploy-solution-a", text: "Export Solution A as managed and import it into the destination environment." },
              { id: "delete-column", text: "Delete the custom_text column in the source environment." },
              { id: "remove-view-reference", text: "Remove the custom_text column from the Solution B view in the source environment." },
              { id: "deploy-solution-b", text: "Export Solution B as managed and import it into the destination environment." }
            ],
            slots: [
              { id: "position-1", text: "First" },
              { id: "position-2", text: "Second" },
              { id: "position-3", text: "Third" },
              { id: "position-4", text: "Fourth" }
            ]
          },
          answer: {
            order: ["remove-view-reference", "deploy-solution-b", "delete-column", "deploy-solution-a"]
          },
          explanation: "Remove and deploy the dependent view reference before deleting the required column. Then deploy the Solution A change so the managed column can be removed from the destination without an outstanding dependency.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-platform/alm/removing-dependencies",
            "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-field-solution-explorer"
          ]
        }
      }
    ],
    mb820: [
      {
        sourceId: 564,
        question: {
          schemaVersion: 1,
          id: 564,
          text: "You need to debug an incorrect value calculated by an AL report extension for the Standard Sales - Invoice report. Arrange the debugging actions in the correct order.",
          type: "ordering",
          interaction: {
            items: [
              { id: "inspect-value", text: "Inspect the NewTotalVATBaseLCY variable in the debugger." },
              { id: "run-report", text: "Run the Standard Sales - Invoice report to reach the breakpoint." },
              { id: "set-breakpoint", text: "Set a breakpoint where NewTotalVATBaseLCY is calculated." },
              { id: "start-debugger", text: "Start the configured AL debugging or attach session." }
            ],
            slots: [
              { id: "position-1", text: "First" },
              { id: "position-2", text: "Second" },
              { id: "position-3", text: "Third" },
              { id: "position-4", text: "Fourth" }
            ]
          },
          answer: {
            order: ["set-breakpoint", "start-debugger", "run-report", "inspect-value"]
          },
          explanation: "Set the breakpoint, start the appropriate AL debug or attach session, run the report so execution reaches the breakpoint, and inspect the variable value.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-debugging",
            "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-attach-debug-next"
          ]
        }
      }
    ]
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function isLocalPreviewEnabled(locationObject) {
    var currentLocation = locationObject || (typeof window !== "undefined" ? window.location : null);
    if (!currentLocation) return false;
    var hostname = currentLocation.hostname || "";
    var isLocal = currentLocation.protocol === "file:" || hostname === "localhost" ||
      hostname === "127.0.0.1" || hostname === "[::1]";
    if (!isLocal) return false;
    try {
      return new URLSearchParams(currentLocation.search || "").get("interactivePreview") === "1";
    } catch (error) {
      return false;
    }
  }

  function findSourceQuestion(questionBanks, sourceId) {
    for (var bankIndex = 0; bankIndex < questionBanks.length; bankIndex++) {
      var bank = questionBanks[bankIndex];
      if (!Array.isArray(bank)) continue;
      for (var questionIndex = 0; questionIndex < bank.length; questionIndex++) {
        if (bank[questionIndex] && bank[questionIndex].id === sourceId) return bank[questionIndex];
      }
    }
    return null;
  }

  function copySourceMetadata(source, target) {
    ["category", "source", "sourceUrl", "sources", "originalPractice"].forEach(function (key) {
      if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = clone(source[key]);
    });
    target.interactivePilot = {
      sourceQuestionId: source.id,
      sourceType: source.type,
      sourceOrdered: source.ordered === true
    };
    return target;
  }

  function createPilotSet(examKey, questionBanks, options) {
    var settings = options || {};
    if (settings.force !== true && !isLocalPreviewEnabled(settings.location)) return null;

    var definitions = PILOT_DEFINITIONS[String(examKey || "").toLowerCase()];
    if (!definitions || definitions.length === 0) return null;

    var errors = [];
    var questions = definitions.map(function (definition) {
      var source = findSourceQuestion(questionBanks || [], definition.sourceId);
      if (!source) {
        errors.push("Source question " + definition.sourceId + " was not found.");
        return null;
      }
      var question = copySourceMetadata(source, clone(definition.question));
      var validation = questionModel.validateQuestion(question, { allowLegacy: false });
      if (!validation.valid) {
        errors.push("Question " + question.id + ": " + validation.errors.map(function (issue) {
          return issue.path + " " + issue.message;
        }).join("; "));
        return null;
      }
      return question;
    }).filter(Boolean);

    if (errors.length > 0) {
      throw new Error("Interactive pilot migration failed for " + examKey + ": " + errors.join(" | "));
    }

    return {
      key: "interactive_pilot",
      label: "Interactive Layout Pilot",
      difficulty: "pilot",
      description: "Local-only Phase 4 review set containing source-native matching and ordering questions. It does not affect preparation progress, Quick Practice, Random Practice, or Exam Readiness.",
      data: questions,
      previewOnly: true,
      countsTowardPreparation: false,
      includeInRandom: false,
      supportsCaseStudy: false
    };
  }

  function getPilotIds(examKey) {
    var definitions = PILOT_DEFINITIONS[String(examKey || "").toLowerCase()] || [];
    return definitions.map(function (definition) { return definition.sourceId; });
  }

  return Object.freeze({
    isLocalPreviewEnabled: isLocalPreviewEnabled,
    createPilotSet: createPilotSet,
    getPilotIds: getPilotIds
  });
});
