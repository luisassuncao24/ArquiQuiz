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
      },
      {
        sourceId: 9016,
        question: {
          schemaVersion: 1,
          id: 9016,
          text: "A company has locations in multiple regions and needs to support isolated Power Platform development and production work. Match each requirement to the appropriate feature.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "regional-performance", text: "Provide the fastest response time for each geographic location." },
              { id: "isolate-lifecycle", text: "Create isolated test and production copies of apps and data." }
            ],
            options: [
              { id: "environment", text: "Environment" },
              { id: "security-group", text: "Security group" },
              { id: "sharepoint-library", text: "SharePoint library" }
            ],
            allowReuse: true
          },
          answer: {
            matches: [
              { promptId: "regional-performance", optionId: "environment" },
              { promptId: "isolate-lifecycle", optionId: "environment" }
            ]
          },
          explanation: "Power Platform environments provide regional deployment and lifecycle isolation. Security groups control access to an environment; SharePoint libraries do not provide environment isolation."
        }
      },
      {
        sourceId: 9068,
        question: {
          schemaVersion: 1,
          id: 9068,
          text: "A retail company needs to create and share near-real-time Power BI dashboards with store managers. Match each requirement to the appropriate tool.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "create-dashboard", text: "Create a dashboard that contains one store's sales information." },
              { id: "share-dashboard", text: "Share that dashboard with store managers." }
            ],
            options: [
              { id: "power-bi-service", text: "Power BI service" },
              { id: "power-bi-desktop", text: "Power BI Desktop" }
            ],
            allowReuse: true
          },
          answer: {
            matches: [
              { promptId: "create-dashboard", optionId: "power-bi-service" },
              { promptId: "share-dashboard", optionId: "power-bi-service" }
            ]
          },
          explanation: "Dashboards are created and shared in the Power BI service. Power BI Desktop creates reports but does not publish or share dashboards by itself."
        }
      },
      {
        sourceId: 9254,
        question: {
          schemaVersion: 1,
          id: 9254,
          text: "A company needs mobile apps for sales staff to photograph expense receipts and for accountants to update a shared Excel document. Match each scenario to the appropriate app type.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "sales-expenses", text: "Capture receipt photos and purchase details on mobile devices." },
              { id: "accounting-excel", text: "View and update a shared Excel document on mobile devices." }
            ],
            options: [
              { id: "canvas-app", text: "Canvas app" },
              { id: "model-driven-app", text: "Model-driven app" }
            ],
            allowReuse: true
          },
          answer: {
            matches: [
              { promptId: "sales-expenses", optionId: "canvas-app" },
              { promptId: "accounting-excel", optionId: "canvas-app" }
            ]
          },
          explanation: "Canvas apps support mobile-device capabilities and Excel as a data source. Model-driven apps require Dataverse."
        }
      },
      {
        sourceId: 9298,
        question: {
          schemaVersion: 1,
          id: 9298,
          text: "A company needs an external, mobile-friendly seminar-registration experience that integrates with a PCI-compliant payment provider. Match each requirement to the appropriate Power Platform component.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "external-registration", text: "Provide a responsive site where customers can register and prepay from mobile devices." },
              { id: "payment-integration", text: "Host the external registration experience that integrates with the payment provider." }
            ],
            options: [
              { id: "power-pages", text: "Power Pages" },
              { id: "canvas-app", text: "Canvas app" }
            ],
            allowReuse: true
          },
          answer: {
            matches: [
              { promptId: "external-registration", optionId: "power-pages" },
              { promptId: "payment-integration", optionId: "power-pages" }
            ]
          },
          explanation: "Power Pages provides the external responsive site. Payment-card handling remains the responsibility of the integrated PCI-compliant payment provider."
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
      },
      {
        sourceId: 4024,
        question: {
          schemaVersion: 1,
          id: 4024,
          text: "A model-driven app must calculate bicycle-finance payments and remind employees to validate data before saving. Match each requirement to the appropriate action, using out-of-box features before customizations.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "calculate-payments", text: "Calculate payments based on the financing period." },
              { id: "validation-reminder", text: "Show a reminder to validate entered information before saving." }
            ],
            options: [
              { id: "out-of-box", text: "Configure an out-of-box feature" },
              { id: "customize-app", text: "Customize the app" },
              { id: "edit-xml", text: "Edit XML" }
            ],
            allowReuse: true
          },
          answer: {
            matches: [
              { promptId: "calculate-payments", optionId: "out-of-box" },
              { promptId: "validation-reminder", optionId: "out-of-box" }
            ]
          },
          explanation: "A calculated column and a business rule are out-of-box capabilities. Custom code or XML editing is unnecessary for these requirements."
        }
      },
      {
        sourceId: 5227,
        question: {
          schemaVersion: 1,
          id: 5227,
          text: "You need to define the load order for CSS and HTML resources in a Power Apps component framework control manifest. Match each resource to its order value.",
          type: "matching",
          interaction: {
            prompts: [
              { id: "css-order", text: "CSS file order" },
              { id: "html-order", text: "HTML file order" }
            ],
            options: [
              { id: "order-1", text: "1" },
              { id: "order-2", text: "2" },
              { id: "order-3", text: "3" }
            ],
            allowReuse: true
          },
          answer: {
            matches: [
              { promptId: "css-order", optionId: "order-1" },
              { promptId: "html-order", optionId: "order-1" }
            ]
          },
          explanation: "Both listed resources use order 1 in the source manifest answer area."
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

  function isLocalEnvironment(locationObject) {
    var currentLocation = locationObject || (typeof window !== "undefined" ? window.location : null);
    if (!currentLocation) return false;
    var hostname = currentLocation.hostname || "";
    return currentLocation.protocol === "file:" || hostname === "localhost" ||
      hostname === "127.0.0.1" || hostname === "[::1]";
  }

  function isLocalPreviewEnabled(locationObject) {
    var currentLocation = locationObject || (typeof window !== "undefined" ? window.location : null);
    if (!isLocalEnvironment(currentLocation)) return false;
    try {
      return new URLSearchParams(currentLocation.search || "").get("interactivePreview") === "1";
    } catch (error) {
      return false;
    }
  }

  function isLegacyInteractionFallbackEnabled(locationObject) {
    var currentLocation = locationObject || (typeof window !== "undefined" ? window.location : null);
    if (!currentLocation) return false;
    try {
      return new URLSearchParams(currentLocation.search || "").get("legacyInteractions") === "1";
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

  /*
   * A legacy matrix can be promoted only when the source still carries every
   * prompt and its complete, numbered answer. This deliberately rejects OCR
   * fragments and ordinary multi-select questions: an interactive layout must
   * never be inferred from an answer key alone.
   */
  var LEGACY_ORDERING_IDS = {
    pl900: {
      9039: true, 9112: true, 9172: true, 9181: true, 9264: true,
      9284: true, 9286: true, 9335: true, 9349: true, 9351: true
    }
  };

  var LEGACY_INTERACTION_EXCLUSIONS = {
    pl400: {
      3154: "Command-designer sequence relies on a product behavior that is no longer supported.",
      3159: "Cross-app component-import sequence relies on a retired sharing pattern."
    },
    mb820: {
      560: "The extracted source does not retain the original No. Series code segments."
    }
  };

  function stableEntryId(prefix, value, index) {
    var normalized = String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 48);
    return prefix + "-" + (normalized || "item") + "-" + (index + 1);
  }

  function stripLegacyAnswerArea(text) {
    return String(text || "")
      .replace(/\n\s*Requirements\/scenarios in order:[\s\S]*$/i, "")
      .replace(/\s*Select the answer option that correctly matches every numbered item\.?\s*$/i, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function parseNumberedEntries(value) {
    var entries = [];
    var parts = String(value || "").split(/\s*\|\s*/);
    parts.forEach(function (part) {
      var match = part.match(/^\s*(\d+)\.\s*(.+?)\s*$/);
      if (!match) return;
      entries.push({ number: Number(match[1]), text: match[2].trim() });
    });
    return entries.length === parts.length ? entries : null;
  }

  function hasContiguousNumbers(entries) {
    return Array.isArray(entries) && entries.every(function (entry, index) {
      return entry.number === index + 1 && entry.text.length > 0;
    });
  }

  function parseNumberedPrompts(source) {
    var match = String(source.text || "").match(/Requirements\/scenarios in order:\s*([\s\S]*?)\s*Select the answer option that correctly matches every numbered item\.?\s*$/i);
    if (!match) return null;
    var entries = match[1].split(/\r?\n/).map(function (line) {
      var item = line.match(/^\s*(\d+)\.\s*(.+?)\s*$/);
      return item ? { number: Number(item[1]), text: item[2].trim() } : null;
    }).filter(Boolean);
    return hasContiguousNumbers(entries) ? entries : null;
  }

  function uniqueTexts(entries) {
    var seen = Object.create(null);
    return entries.filter(function (entry) {
      var key = entry.text.toLocaleLowerCase();
      if (seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function textKey(value) {
    return String(value || "").trim().toLocaleLowerCase();
  }

  function addMatchingInstruction(text) {
    var base = String(text || "").trim();
    if (/\bmatch\s+(?:each|the)\b/i.test(base)) return base;
    return base + " Match each requirement to the appropriate option.";
  }

  function buildNumberedLegacyInteraction(examKey, source) {
    if (source.type !== "single" || !Array.isArray(source.correct) || source.correct.length !== 1 ||
      !Array.isArray(source.choices) || !source.choices[source.correct[0]]) {
      return { reason: "The legacy question does not have one complete numbered answer." };
    }

    var prompts = parseNumberedPrompts(source);
    var answers = parseNumberedEntries(source.choices[source.correct[0]]);
    if (!prompts || !answers || prompts.length !== answers.length || !hasContiguousNumbers(answers)) {
      return { reason: "The numbered prompts and answer do not form a complete one-to-one structure." };
    }

    var baseText = stripLegacyAnswerArea(source.text);
    if (!baseText) return { reason: "The source question has no usable scenario text." };

    if (LEGACY_ORDERING_IDS[examKey] && LEGACY_ORDERING_IDS[examKey][source.id]) {
      var items = answers.map(function (answer, index) {
        return { id: stableEntryId("action", answer.text, index), text: answer.text };
      }).reverse();
      var idsByText = Object.create(null);
      items.forEach(function (item) { idsByText[item.text] = item.id; });
      return {
        question: {
          schemaVersion: 1,
          id: source.id,
          text: baseText,
          type: "ordering",
          interaction: {
            items: items,
            slots: answers.map(function (_, index) {
              return { id: "position-" + (index + 1), text: "Position " + (index + 1) };
            })
          },
          answer: { order: answers.map(function (answer) { return idsByText[answer.text]; }) }
        }
      };
    }

    var options = uniqueTexts(answers);
    if (options.length < 2) {
      return { reason: "The correct mapping exposes fewer than two trustworthy option labels." };
    }
    var optionIds = Object.create(null);
    var usedOptionIds = Object.create(null);
    options.forEach(function (option, index) {
      var id = stableEntryId("option", option.text, index);
      optionIds[option.text] = id;
      usedOptionIds[id] = 0;
    });
    var matches = prompts.map(function (prompt, index) {
      var optionId = optionIds[answers[index].text];
      usedOptionIds[optionId] += 1;
      return { promptId: "prompt-" + prompt.number, optionId: optionId };
    });
    var allowReuse = Object.keys(usedOptionIds).some(function (id) { return usedOptionIds[id] > 1; });
    return {
      question: {
        schemaVersion: 1,
        id: source.id,
        text: addMatchingInstruction(baseText),
        type: "matching",
        interaction: {
          prompts: prompts.map(function (prompt) { return { id: "prompt-" + prompt.number, text: prompt.text }; }),
          options: options.map(function (option, index) {
            return { id: stableEntryId("option", option.text, index), text: option.text };
          }),
          allowReuse: allowReuse
        },
        answer: { matches: matches }
      }
    };
  }

  function parseArrowPair(value) {
    var match = String(value || "").match(/^\s*(.+?)\s+->\s+(.+?)\s*$/);
    return match ? { prompt: match[1].trim(), option: match[2].trim() } : null;
  }

  function buildArrowPairInteraction(source) {
    if (source.type !== "multiple" || !Array.isArray(source.correct) || source.correct.length < 2 || !Array.isArray(source.choices)) {
      return { reason: "The legacy question does not contain multiple complete answer pairs." };
    }
    var pairs = source.correct.map(function (choiceIndex) { return parseArrowPair(source.choices[choiceIndex]); });
    if (pairs.some(function (pair) { return !pair; })) {
      return { reason: "At least one correct selection is not an explicit requirement-to-option pair." };
    }
    var promptKeys = Object.create(null);
    if (pairs.some(function (pair) {
      var key = pair.prompt.toLocaleLowerCase();
      if (promptKeys[key]) return true;
      promptKeys[key] = true;
      return false;
    })) {
      return { reason: "The source contains duplicate prompts and cannot be rendered as a one-to-one match." };
    }
    var expectedPromptKeys = Object.create(null);
    pairs.forEach(function (pair) { expectedPromptKeys[textKey(pair.prompt)] = true; });
    var sourcePairs = source.choices.map(parseArrowPair).filter(function (pair) {
      return pair && expectedPromptKeys[textKey(pair.prompt)];
    });
    var options = uniqueTexts(sourcePairs.map(function (pair) { return { text: pair.option }; }));
    if (options.length < 2) {
      return { reason: "The correct mapping exposes fewer than two trustworthy option labels." };
    }
    var optionIds = Object.create(null);
    var optionUses = Object.create(null);
    options.forEach(function (option, index) {
      var id = stableEntryId("option", option.text, index);
      optionIds[textKey(option.text)] = id;
      optionUses[id] = 0;
    });
    var matches = pairs.map(function (pair, index) {
      var optionId = optionIds[textKey(pair.option)];
      optionUses[optionId] += 1;
      return { promptId: "prompt-" + (index + 1), optionId: optionId };
    });
    var allowReuse = Object.keys(optionUses).some(function (id) { return optionUses[id] > 1; });
    return {
      question: {
        schemaVersion: 1,
        id: source.id,
        text: addMatchingInstruction(source.text),
        type: "matching",
        interaction: {
          prompts: pairs.map(function (pair, index) { return { id: "prompt-" + (index + 1), text: pair.prompt }; }),
          options: options.map(function (option, index) {
            return { id: stableEntryId("option", option.text, index), text: option.text };
          }),
          allowReuse: allowReuse
        },
        answer: { matches: matches }
      }
    };
  }

  function buildLegacyOrderingInteraction(source) {
    if (source.type !== "sequence" || !Array.isArray(source.choices) || !Array.isArray(source.correct) || source.correct.length < 2) {
      return { reason: "The legacy question does not retain a complete ordered action list." };
    }
    var answerItems = source.correct.map(function (choiceIndex) {
      return typeof choiceIndex === "number" ? source.choices[choiceIndex] : null;
    });
    if (answerItems.some(function (item) { return typeof item !== "string" || !item.trim(); })) {
      return { reason: "The legacy order references a missing action." };
    }
    if (uniqueTexts(answerItems.map(function (item) { return { text: item }; })).length !== answerItems.length) {
      return { reason: "The legacy order repeats an action label and cannot be rendered unambiguously." };
    }
    var items = source.choices.map(function (item, index) {
      return { id: "action-" + (index + 1), text: String(item).trim() };
    });
    if (items.length === answerItems.length) items = items.slice(1).concat(items.slice(0, 1));
    var idByText = Object.create(null);
    items.forEach(function (item) { idByText[item.text] = item.id; });
    return {
      question: {
        schemaVersion: 1,
        id: source.id,
        text: String(source.text || "").trim(),
        type: "ordering",
        interaction: {
          items: items,
          slots: answerItems.map(function (_, index) {
            return { id: "position-" + (index + 1), text: "Position " + (index + 1) };
          })
        },
        answer: { order: answerItems.map(function (item) { return idByText[item]; }) }
      }
    };
  }

  function isLegacyInteractionCandidate(examKey, source) {
    if (!source) return false;
    if (source.type === "sequence") return true;
    if (examKey === "pl900") {
      return Boolean(parseNumberedPrompts(source) && Array.isArray(source.correct) && source.correct.length === 1 &&
        Array.isArray(source.choices) && parseNumberedEntries(source.choices[source.correct[0]]));
    }
    return source.type === "multiple" && Array.isArray(source.correct) && source.correct.length >= 2 &&
      source.correct.every(function (choiceIndex) {
        return Array.isArray(source.choices) && Boolean(parseArrowPair(source.choices[choiceIndex]));
      });
  }

  function auditLegacyInteractionCandidate(examKey, source) {
    var excluded = (LEGACY_INTERACTION_EXCLUSIONS[examKey] || {})[source.id];
    if (excluded) return { sourceId: source.id, eligible: false, reason: excluded };

    var result = source.type === "sequence"
      ? buildLegacyOrderingInteraction(source)
      : examKey === "pl900"
        ? buildNumberedLegacyInteraction(examKey, source)
        : buildArrowPairInteraction(source);
    if (!result.question) return { sourceId: source.id, eligible: false, reason: result.reason };

    var validation = questionModel.validateQuestion(result.question, { allowLegacy: false });
    if (!validation.valid || validation.warnings.length > 0) {
      return {
        sourceId: source.id,
        eligible: false,
        reason: (validation.errors.concat(validation.warnings)).map(function (issue) {
          return issue.path + " " + issue.message;
        }).join("; ")
      };
    }
    return { sourceId: source.id, eligible: true, question: result.question };
  }

  function auditLegacyInteractionCandidates(examKey, questionBanks, options) {
    var settings = options || {};
    var manualIds = Object.create(null);
    if (settings.includeManualCandidates !== true) {
      (PILOT_DEFINITIONS[examKey] || []).forEach(function (definition) { manualIds[definition.sourceId] = true; });
    }
    var seen = Object.create(null);
    var result = { eligible: [], excluded: [] };
    (questionBanks || []).forEach(function (bank) {
      (bank || []).forEach(function (source) {
        if (!source || manualIds[source.id] || seen[source.id]) return;
        seen[source.id] = true;
        if (!isLegacyInteractionCandidate(examKey, source)) return;
        var audit = auditLegacyInteractionCandidate(examKey, source);
        if (audit.eligible) result.eligible.push(audit);
        else result.excluded.push(audit);
      });
    });
    result.eligible.sort(function (left, right) { return left.sourceId - right.sourceId; });
    result.excluded.sort(function (left, right) { return left.sourceId - right.sourceId; });
    return result;
  }

  function copySourceMetadata(source, target, mode) {
    ["category", "source", "sourceUrl", "sources", "originalPractice", "explanation"].forEach(function (key) {
      if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = clone(source[key]);
    });
    target.interactiveMigration = {
      sourceQuestionId: source.id,
      sourceType: source.type,
      sourceOrdered: source.ordered === true,
      legacyQuestion: {
        type: source.type,
        choices: Array.isArray(source.choices) ? clone(source.choices) : [],
        correct: Array.isArray(source.correct) ? clone(source.correct) : [],
        ordered: source.ordered === true
      }
    };
    if (mode === "pilot") {
      target.interactivePilot = {
        sourceQuestionId: source.id,
        sourceType: source.type,
        sourceOrdered: source.ordered === true
      };
    }
    return target;
  }

  function validateMigratedQuestion(examKey, source, canonicalQuestion, mode, errors, automatic) {
    var question = copySourceMetadata(source, clone(canonicalQuestion), mode);
    if (automatic) question.interactiveMigration.autoValidated = true;
    var validation = questionModel.validateQuestion(question, { allowLegacy: false });
    if (!validation.valid || validation.warnings.length > 0) {
      errors.push("Question " + question.id + ": " + (validation.errors.concat(validation.warnings)).map(function (issue) {
        return issue.path + " " + issue.message;
      }).join("; "));
      return null;
    }
    return question;
  }

  function createQuestions(examKey, questionBanks, mode) {
    examKey = String(examKey || "").toLowerCase();
    var definitions = PILOT_DEFINITIONS[examKey];
    if (!definitions || definitions.length === 0) return null;

    var errors = [];
    var questions = definitions.map(function (definition) {
      var source = findSourceQuestion(questionBanks || [], definition.sourceId);
      if (!source) {
        errors.push("Source question " + definition.sourceId + " was not found.");
        return null;
      }
      return validateMigratedQuestion(examKey, source, definition.question, mode, errors, false);
    }).filter(Boolean);

    var audit = auditLegacyInteractionCandidates(examKey, questionBanks || []);
    audit.eligible.forEach(function (entry) {
      var source = findSourceQuestion(questionBanks || [], entry.sourceId);
      if (!source) {
        errors.push("Source question " + entry.sourceId + " was not found.");
        return;
      }
      var question = validateMigratedQuestion(examKey, source, entry.question, mode, errors, true);
      if (question) questions.push(question);
    });

    if (errors.length > 0) {
      throw new Error("Interactive " + mode + " migration failed for " + examKey + ": " + errors.join(" | "));
    }
    questions.sort(function (left, right) { return left.id - right.id; });
    return questions;
  }

  function createCaseQuestions(examKey, testCase, mode) {
    var errors = [];
    var audit = auditLegacyInteractionCandidates(examKey, [testCase.questions || []], { includeManualCandidates: true });
    var questions = audit.eligible.map(function (entry) {
      var source = findSourceQuestion([testCase.questions || []], entry.sourceId);
      return validateMigratedQuestion(examKey, source, entry.question, mode, errors, true);
    }).filter(Boolean);
    if (errors.length > 0) {
      throw new Error("Interactive " + mode + " case migration failed for " + examKey + " / " + testCase.key + ": " + errors.join(" | "));
    }
    return questions;
  }

  function createPilotSet(examKey, questionBanks, options) {
    var settings = options || {};
    if (settings.force !== true && !isLocalPreviewEnabled(settings.location)) return null;

    var questions = createQuestions(examKey, questionBanks, "pilot");
    if (!questions) return null;

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

  function createRelease(examKey, questionBanks, options) {
    var definitions = PILOT_DEFINITIONS[String(examKey || "").toLowerCase()];
    if (!definitions || definitions.length === 0) return null;

    var settings = options || {};
    var questions = createQuestions(examKey, questionBanks, "release");
    var migratedIds = questions.map(function (question) { return question.id; });
    var compatibilityById = {};
    questions.forEach(function (question) { compatibilityById[String(question.id)] = question; });
    if (settings.force !== true && isLegacyInteractionFallbackEnabled(settings.location)) {
      return {
        enabled: false,
        questions: [],
        byId: {},
        compatibilityById: compatibilityById,
        migratedIds: migratedIds,
        fallbackReason: "legacyInteractions"
      };
    }

    var byId = {};
    questions.forEach(function (question) { byId[String(question.id)] = question; });
    return {
      enabled: true,
      questions: questions,
      byId: byId,
      compatibilityById: compatibilityById,
      migratedIds: migratedIds
    };
  }

  function createCaseRelease(examKey, testCases, options) {
    examKey = String(examKey || "").toLowerCase();
    var settings = options || {};
    var byCase = {};
    var compatibilityByCase = {};
    var questions = [];
    (testCases || []).forEach(function (testCase) {
      if (!testCase || !testCase.key || !Array.isArray(testCase.questions)) return;
      var migrated = createCaseQuestions(examKey, testCase, "release");
      if (migrated.length === 0) return;
      var byId = {};
      migrated.forEach(function (question) {
        byId[String(question.id)] = question;
        questions.push(question);
      });
      byCase[testCase.key] = byId;
      compatibilityByCase[testCase.key] = byId;
    });
    if (settings.force !== true && isLegacyInteractionFallbackEnabled(settings.location)) {
      return {
        enabled: false,
        questions: [],
        byCase: {},
        compatibilityByCase: compatibilityByCase,
        migratedCount: questions.length,
        fallbackReason: "legacyInteractions"
      };
    }
    return {
      enabled: questions.length > 0,
      questions: questions,
      byCase: byCase,
      compatibilityByCase: compatibilityByCase,
      migratedCount: questions.length
    };
  }

  function getPilotIds(examKey) {
    var definitions = PILOT_DEFINITIONS[String(examKey || "").toLowerCase()] || [];
    return definitions.map(function (definition) { return definition.sourceId; });
  }

  function getRegisteredExams() {
    return Object.keys(PILOT_DEFINITIONS).filter(function (examKey) {
      return PILOT_DEFINITIONS[examKey].length > 0;
    });
  }

  function createReviewCatalog(questionBanksByExam) {
    var banksByExam = questionBanksByExam || {};
    var catalog = [];
    getRegisteredExams().forEach(function (examKey) {
      var definitions = PILOT_DEFINITIONS[examKey];
      if (!definitions || definitions.length === 0) return;
      var banks = banksByExam[examKey];
      if (!Array.isArray(banks)) {
        throw new Error("Review catalog is missing question banks for " + examKey + ".");
      }
      var questions = createQuestions(examKey, banks, "review");
      questions.forEach(function (question) {
        var source = findSourceQuestion(banks, question.id);
        catalog.push({
          examKey: examKey,
          sourceId: question.id,
          sourceQuestion: clone(source),
          question: question
        });
      });
    });
    return catalog;
  }

  function createCaseReviewCatalog(caseStudiesByExam) {
    var catalog = [];
    Object.keys(caseStudiesByExam || {}).forEach(function (examKey) {
      (caseStudiesByExam[examKey] || []).forEach(function (testCase) {
        if (!testCase || !testCase.key || !Array.isArray(testCase.questions)) return;
        var questions = createCaseQuestions(examKey, testCase, "review");
        questions.forEach(function (question) {
          var source = findSourceQuestion([testCase.questions], question.id);
          catalog.push({
            examKey: examKey,
            caseKey: testCase.key,
            caseLabel: testCase.label || testCase.key,
            sourceId: question.id,
            sourceQuestion: clone(source),
            question: question
          });
        });
      });
    });
    return catalog;
  }

  return Object.freeze({
    isLocalEnvironment: isLocalEnvironment,
    isLocalPreviewEnabled: isLocalPreviewEnabled,
    isLegacyInteractionFallbackEnabled: isLegacyInteractionFallbackEnabled,
    createPilotSet: createPilotSet,
    createRelease: createRelease,
    createCaseRelease: createCaseRelease,
    createReviewCatalog: createReviewCatalog,
    createCaseReviewCatalog: createCaseReviewCatalog,
    auditLegacyInteractionCandidate: auditLegacyInteractionCandidate,
    auditLegacyInteractionCandidates: auditLegacyInteractionCandidates,
    getRegisteredExams: getRegisteredExams,
    getPilotIds: getPilotIds
  });
});
