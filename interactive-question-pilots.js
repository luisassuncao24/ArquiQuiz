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
        sourceId: 9057,
        question: {
          schemaVersion: 1,
          id: 9057,
          text: "An animal hospital needs to model pet owners and pets in Microsoft Dataverse while minimizing customization. Match each requirement to the appropriate Dataverse component.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "pet-owner", text: "Represent a pet owner while reusing standard person-related columns." },
              { id: "pet-data", text: "Represent pet-specific data." },
              { id: "owner-link", text: "Associate each pet record with its owner record." }
            ],
            options: [
              { id: "relationship", text: "Relationship" },
              { id: "standard-table", text: "Standard Dataverse table" },
              { id: "custom-table", text: "Custom table" },
              { id: "business-rule", text: "Business rule" }
            ],
            allowReuse: false
          },
          answer: {
            matches: [
              { promptId: "pet-owner", optionId: "standard-table" },
              { promptId: "pet-data", optionId: "custom-table" },
              { promptId: "owner-link", optionId: "relationship" }
            ]
          },
          explanation: "Use the standard Contact table for person-related owner information, create a custom table for pet-specific data, and relate each pet to its owner with a Dataverse table relationship.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-custom-entity",
            "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-entity-relationships"
          ]
        }
      },
      {
        sourceId: 9073,
        question: {
          schemaVersion: 1,
          id: 9073,
          text: "A company needs mobile applications for field engineers. Match each requirement to the most appropriate Power Apps app type.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "complex-process", text: "Quickly create an app for a complex Dataverse-backed business process with little or no code." },
              { id: "custom-layout", text: "Create a simple app with a highly customizable user-interface layout." }
            ],
            options: [
              { id: "canvas-app", text: "Canvas app" },
              { id: "power-pages", text: "Power Pages site" },
              { id: "model-driven-app", text: "Model-driven app" }
            ],
            allowReuse: false
          },
          answer: {
            matches: [
              { promptId: "complex-process", optionId: "model-driven-app" },
              { promptId: "custom-layout", optionId: "canvas-app" }
            ]
          },
          explanation: "Model-driven apps suit data-dense, process-driven Dataverse scenarios. Canvas apps give makers full control over the interface and can connect to many data sources.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-driven-app-overview",
            "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/getting-started"
          ]
        }
      },
      {
        sourceId: 9112,
        question: {
          schemaVersion: 1,
          id: 9112,
          text: "You need to create a mobile Power Apps application that allows sales associates to enter customer sales leads. Arrange the required actions in the correct order.",
          type: "ordering",
          interaction: {
            items: [
              { id: "publish-app", text: "Publish the app." },
              { id: "add-components", text: "Add the required controls and components." },
              { id: "create-app", text: "Start a new Power Apps app." },
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
            order: ["create-app", "add-components", "save-app", "publish-app"]
          },
          explanation: "Create the app, add the required controls and functionality, save the work, and publish the saved version so it becomes available to users.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/app-from-image",
            "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/save-publish-app"
          ]
        }
      },
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
      },
      {
        sourceId: 9335,
        question: {
          schemaVersion: 1,
          id: 9335,
          text: "A company must track customers in Dataverse, store each customer's total number of leads, and set a flag automatically when that total reaches 50. Existing functionality must be reused where possible. Arrange the required configuration actions in the correct order.",
          type: "ordering",
          interaction: {
            items: [
              { id: "create-custom-table", text: "Create a custom customer table." },
              { id: "create-business-rule", text: "Create a business rule that sets the flag." },
              { id: "create-number-column", text: "Create a number column for the total number of leads." },
              { id: "create-cloud-flow", text: "Create a cloud flow that replaces the business rule." },
              { id: "customize-account", text: "Customize the standard Account table." },
              { id: "create-lookup", text: "Create a lookup column for the lead total." }
            ],
            slots: [
              { id: "position-1", text: "First" },
              { id: "position-2", text: "Second" },
              { id: "position-3", text: "Third" }
            ]
          },
          answer: {
            order: ["customize-account", "create-number-column", "create-business-rule"]
          },
          explanation: "Reuse the standard Account table for customers, add a number column to hold the lead total, and then create a business rule that sets the flag when the total reaches 50.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/edit-entities",
            "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-fields",
            "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-create-business-rule"
          ]
        }
      },
      {
        sourceId: 9343,
        question: {
          schemaVersion: 1,
          id: 9343,
          text: "You are creating a canvas app to organize a SharePoint list of spices. Match each requirement to the Power Apps control that best meets it.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "create-task", text: "Use a separate screen to create a new task." },
              { id: "responsive-scroll", text: "Make the layout scroll correctly on phones and tablets." },
              { id: "browse-spices", text: "Display and browse the list of spices." }
            ],
            options: [
              { id: "gallery", text: "Gallery" },
              { id: "form", text: "Form" },
              { id: "vertical-container", text: "Vertical container" },
              { id: "text-input", text: "Text input" }
            ],
            allowReuse: false
          },
          answer: {
            matches: [
              { promptId: "create-task", optionId: "form" },
              { promptId: "responsive-scroll", optionId: "vertical-container" },
              { promptId: "browse-spices", optionId: "gallery" }
            ]
          },
          explanation: "A Form creates or edits one record, a vertical container can provide responsive vertical layout and scrolling, and a Gallery displays and browses a set of records.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/add-form",
            "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-vertical-container",
            "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery"
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
      },
      {
        sourceId: 2080,
        question: {
          schemaVersion: 1,
          id: 2080,
          text: "A healthcare center is developing a canvas app. Match each data requirement to the appropriate Dataverse table type.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "doctors", text: "Store and manage doctor information directly in Dataverse." },
              { id: "medications", text: "Display prescription-medication data that remains in an external database." }
            ],
            options: [
              { id: "virtual-table", text: "Virtual table" },
              { id: "activity-table", text: "Activity table" },
              { id: "standard-table", text: "Standard table" }
            ],
            allowReuse: false
          },
          answer: {
            matches: [
              { promptId: "doctors", optionId: "standard-table" },
              { promptId: "medications", optionId: "virtual-table" }
            ]
          },
          explanation: "A standard table stores data in Dataverse. A virtual table exposes data from an external source at runtime without replicating it into Dataverse.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-custom-entity",
            "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-virtual-entities"
          ]
        }
      },
      {
        sourceId: 2223,
        question: {
          schemaVersion: 1,
          id: 2223,
          text: "You are creating and packaging a Power Apps component framework code component for a Dynamics 365 Sales environment. Arrange the solution actions in the correct order.",
          type: "ordering",
          interaction: {
            items: [
              { id: "deploy-solution", text: "Import or deploy the built solution to the target environment." },
              { id: "create-solution", text: "Create a solution project." },
              { id: "build-solution", text: "Build the component project and solution." },
              { id: "add-reference", text: "Add the component project reference to the solution." }
            ],
            slots: [
              { id: "position-1", text: "First" },
              { id: "position-2", text: "Second" },
              { id: "position-3", text: "Third" },
              { id: "position-4", text: "Fourth" }
            ]
          },
          answer: {
            order: ["create-solution", "add-reference", "build-solution", "deploy-solution"]
          },
          explanation: "Create the solution project, add a reference to the code component, build the component and solution package, and then import or deploy the resulting solution.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-apps/developer/component-framework/import-custom-controls"
          ]
        }
      },
      {
        sourceId: 3046,
        question: {
          schemaVersion: 1,
          id: 3046,
          text: "A company manages IoT sensors that transmit data every second and displays the data in a model-driven app. Match each data category to the appropriate Dataverse table type.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "sensor-events", text: "High-volume, rapidly ingested IoT sensor readings." },
              { id: "sensor-config", text: "Relational configuration data for sensor devices." }
            ],
            options: [
              { id: "standard-table", text: "Standard table" },
              { id: "virtual-table", text: "Virtual table" },
              { id: "elastic-table", text: "Elastic table" }
            ],
            allowReuse: false
          },
          answer: {
            matches: [
              { promptId: "sensor-events", optionId: "elastic-table" },
              { promptId: "sensor-config", optionId: "standard-table" }
            ]
          },
          explanation: "Elastic tables are designed for high-volume, high-throughput data such as IoT signals. Standard tables suit relational configuration data that requires strong consistency and richer transactional behavior.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-elastic-tables"
          ]
        }
      },
      {
        sourceId: 3156,
        question: {
          schemaVersion: 1,
          id: 3156,
          text: "A model-driven app needs a resizable image that does not lose quality and language-localized text returned through the client API. Match each requirement to the appropriate web-resource type.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "scalable-image", text: "Display an image that can be resized without loss of quality." },
              { id: "localized-text", text: "Store language-localized strings for use by client code." }
            ],
            options: [
              { id: "resx", text: "RESX" },
              { id: "png", text: "PNG" },
              { id: "svg", text: "SVG" },
              { id: "xsl", text: "XSL" }
            ],
            allowReuse: false
          },
          answer: {
            matches: [
              { promptId: "scalable-image", optionId: "svg" },
              { promptId: "localized-text", optionId: "resx" }
            ]
          },
          explanation: "SVG is a scalable vector-image web resource, while RESX is the string-resource format used for localized text.",
          verificationSources: [
            "https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/web-resources",
            "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/custom-page-localize"
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
      description: "Local-only Phase 5 expansion containing source-native matching and ordering questions. It does not affect preparation progress, Quick Practice, Random Practice, or Exam Readiness.",
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
