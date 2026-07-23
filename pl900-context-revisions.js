/*
 * Context restored from PL900-3-verified-questions-and-answers.md.
 *
 * The PDF import converted matching, hotspot, and ordering questions into
 * multiple-choice combinations. In many cases, the answer-area labels were
 * lost, leaving numbered answers with nothing to match. Keep the original
 * question IDs and answer keys, but add the missing numbered context.
 */
var PL900_QUESTION_CONTEXTS = {
  9005: ["Helps jump-start application development by providing business logic, security, and integrations.", "A set of records used to store data."],
  9007: ["Customers submit support requests through a website.", "Support requests are created and stored.", "Technicians are notified when a new request is entered.", "Technicians enter weekly status reports from a mobile app."],
  9012: ["Manage users and groups.", "Assign the Environment Maker role to a user."],
  9013: ["Build automated workflows that access multiple data sources.", "Create custom apps for specific business needs.", "Design interactive data visualizations."],
  9014: ["Field technicians capture a defective product's location and photo on a mobile device.", "Sales representatives use views and dashboards in a sales app.", "External customers access company data through a website."],
  9015: ["Show a date-of-birth field only when a traveler is under 18.", "Guide every travel agent through the same customer process.", "Send a confirmation email when a reservation is complete."],
  9016: ["Provide the fastest response time for each geographic location.", "Create isolated test and production copies of apps and data."],
  9022: ["How many trial environments must a five-person team create so every member can build independently?", "How many Dataverse databases are required for each environment?"],
  9027: ["View account analytics.", "Send a manager an approval request when a purchase exceeds $10,000.", "Provide a website chatbot that answers customer questions."],
  9035: ["Create no-code automated workflows that connect multiple systems.", "Create an app with a custom user experience.", "Create a mobile app that uses device capabilities."],
  9039: ["Bring the historical loan data into Dataverse.", "Prepare the model by learning from the historical data.", "Make the trained model available for use.", "Consume the model in a business app or automation."],
  9040: ["Validate data across fields regardless of which app creates it.", "Guide users through a consistent sequence of data-entry tasks.", "Accelerate development with a standard set of common business tables."],
  9041: ["Identify products that have no labels or serial numbers.", "Identify customers who might not pay invoices on time."],
  9042: ["Allow technicians to submit support requests through an app.", "Store customer data and synchronize it with Dynamics 365 Finance.", "Notify technicians when a new support request is entered."],
  9044: ["Automate a workflow.", "Start an action when an event occurs.", "Create a custom business application."],
  9045: ["Choose the type of app for a customizable internal video-streaming experience.", "Add video playback to the app by using drag-and-drop.", "Apply consistent company colors throughout the app."],
  9051: ["Import data from an Excel workbook automatically every day.", "Provide a chatbot that assists customers who need support."],
  9053: ["Run an automation from a Power Apps app when a condition is met.", "Identify the component whose operations are exposed as actions and triggers."],
  9057: ["Represent a pet owner while reusing standard person-related columns.", "Represent pet-specific data.", "Associate each pet record with its owner record."],
  9058: ["Keep an app's data below the Dataverse for Teams capacity limit.", "Give professional developers full Dataverse capabilities such as APIs and plug-ins."],
  9062: ["Combine workbook data into a chart that users can analyze.", "Show top departmental metrics and alert users when thresholds are reached.", "Show sales charts that users can filter by region."],
  9064: ["Select the combination that contains three valid ways to distribute or expose a Power BI dashboard to coworkers."],
  9068: ["Create dashboards that contain sales information for one store.", "Share those dashboards with store managers."],
  9069: ["Provide a phone-friendly reporting experience.", "Let users query data with natural language.", "Load and combine data from files."],
  9070: ["Display a chart that compares incoming calls with wait time and pin it to a dashboard.", "Notify a specific user when the number of waiting support calls exceeds 20.", "Display metrics from different related datasets."],
  9071: ["Select the combination that contains two valid Power BI distribution methods that support coworker access and collaboration."],
  9073: ["Quickly create an app for a complex Dataverse-backed business process with little or no code.", "Create a simple app with a highly customizable user-interface layout."],
  9074: ["Run an automation from an app when a condition is met.", "Identify the component that supplies actions and triggers for a service."],
  9082: ["Allow users to receive alerts when data exceeds specified limits.", "Let users filter data and export it to Excel for further analysis."],
  9083: ["Analyze high-level KPIs to make decisions.", "Drill down into the details behind a visual."],
  9085: ["Improve performance by reducing the effective size of large tables.", "Cache imported data locally for analysis."],
  9088: ["Show quarterly sales-to-date relative to a goal.", "Show the monthly sales trend for all regions.", "Show year-to-date sales as a percentage by region."],
  9089: ["Make the dashboard visible to coworkers.", "Add a report visual to the dashboard.", "Load Excel data into the dashboard."],
  9100: ["Create dashboards.", "Create reports.", "Create calculated columns.", "Configure security.", "Configure sharing."],
  9102: ["Dashboard A displays a lock when the accountant opens it.", "Dashboard B displays outdated data even though daily refresh is configured."],
  9106: ["Collaboratively onboard new suppliers and distributors.", "Publish discussions and announcements for a community."],
  9108: ["Display the date, time, and location of upcoming internal meetings.", "Create a meeting request from within the app.", "Display a customer's photo when viewing a contact record."],
  9112: ["Start a new Power Apps app.", "Add the required controls and components.", "Save the app.", "Make the app available to users."],
  9113: ["Select the combination containing three valid reasons an editable canvas app might not appear in Power Apps Studio."],
  9114: ["Open the list of apps.", "Start the sharing action.", "Choose the app and the security role that can use it.", "Choose a user and assign the role."],
  9117: ["Administration navigation element.", "Sales Log navigation element.", "Customers navigation element."],

  9123: ["Implement user authentication for the solution.", "Send data to a OneNote notebook in the same tenant."],
  9124: ["Synchronize three proprietary data sources that each require a different connector.", "Create three apps that all read from SharePoint lists.", "Create three scheduled flows that all copy data to Azure Data Lake."],
  9125: ["Store additional doctor profile data outside the Account and Contact tables.", "Store the doctor's specialty on the profile form.", "Let users choose one of ten insurance companies."],
  9128: ["Select the combination containing all supported locations where a maker can change a model-driven view's default filter and sort order."],
  9133: ["Integrate an app with external data and services.", "Automate a process across applications.", "Create an easily customized front end."],
  9134: ["Build a mobile app that uses the device camera and location.", "Detect objects in images."],
  9143: ["Define relationships between tables.", "Create data-entry forms.", "Define business rules and processes.", "Create views that show related information."],
  9145: ["Ensure authors securely access their own data.", "Apply a consistent design to site pages.", "Allow the public to read book announcements without signing in."],
  9146: ["Display one Dataverse record.", "Display records from a SharePoint list.", "Display multiple Dataverse records."],
  9148: ["Let a record owner grant another user access to the record.", "Transfer record ownership to another user.", "Associate the current record with another record."],
  9151: ["Select the combination containing three services or events that Power Automate can use to start a flow."],
  9158: ["Retrieve the five newest posts from the company's social page.", "Write the retrieved posts to the product database.", "Combine the author and link values into one value.", "Run the flow every hour."],
  9160: ["Runs automatically after a specified event.", "Guides a user through a defined set of stages and tasks.", "Runs at a specified date, time, or interval.", "Starts on demand."],
  9167: ["Allow Power Automate to communicate with a third-party application.", "Periodically detect changes in the third-party application."],
  9169: ["Ensure every team member follows the same task-completion steps.", "Let a user manually email the project lead after completing a task.", "Send a weekly list of completed tasks automatically."],
  9170: ["Start a flow when a user selects a button.", "Start a flow when a record is created.", "Guide a user through a series of steps in a model-driven app."],
  9171: ["Retrieve data from Microsoft Excel.", "Retrieve data from Azure Data Lake.", "Retrieve data from GitHub."],
  9172: ["Define how the flow starts.", "Add the next operation to the flow.", "Choose the service and operation that sends the text.", "Configure the operation's values.", "Store the completed flow."],
  9173: ["Start a flow when a user selects a button in a canvas app.", "Start a flow when a user selects a button in the Power Automate mobile app."],
  9178: ["Send an email automatically when a record changes.", "Ensure every salesperson follows the same sales process."],
  9179: ["Start processing when a weekly status report with an escalation is submitted.", "Branch based on whether the report contains an escalation request."],
  9180: ["Repeat actions until a condition becomes true.", "Choose among several branches based on a value.", "Choose between true and false branches."],
  9181: ["Create the interface where a team member selects a project-health response.", "Create the on-demand automation invoked by the interface.", "Branch according to the selected response.", "Send the appropriate email or mobile notification."],
  9190: ["Check the edited flow for errors and warnings.", "Run the flow with previously processed data.", "Observe the flow while it runs."],
  9194: ["Detect a newly uploaded Excel workbook by checking the source periodically.", "Start synchronization immediately when a user selects a button on the Account form."],
  9196: ["Type of app that can use the business rule.", "Result when City is set to New York while the rule condition tests for London.", "Form on which this Contact-table business rule is enforced."],
  9207: ["Let external customers sign in to a website and view ticket progress.", "Send high-value refund requests to managers for approval in Teams.", "Embed a picture gallery in the Customer Service app."],
  9210: ["Create and monitor cloud flows and initiate process mining.", "Start instant flows in the field and manage notifications.", "Create robotic process automation for Windows."],
  9224: ["Start when an email arrives at the support address.", "Evaluate whether the email is high priority.", "Add a row containing the email details to Excel."],
  9227: ["Find packaged solutions that fill Power BI capability gaps.", "Find a partner to help build a proof of concept."],
  9228: ["Import Excel data into Dataverse.", "Send the imported data to the ERP system."],
  9236: ["Compact form for mobile devices.", "Primary form for entering and editing record data.", "Compact record representation used in lookup results."],
  9237: ["Show a hidden field when a check box is selected.", "Display a list of customers and selected customer columns."],
  9244: ["Build a custom interface in Dynamics 365 that looks up a SharePoint repair item and adds notes.", "Create online real-time visualizations and dashboards for the repair team.", "Notify an agent in Teams and email the customer when a repair is completed."],

  9248: ["Show Order and Batch charts together.", "Guide workers through the standard picking and shipping process.", "List orders and allow users to reorder view columns.", "Require a shelf number when an aisle location is entered."],
  9249: ["Provide a fully customizable layout, design, and color scheme.", "Connect to multiple data sources.", "Guide users through data entry with a business process flow.", "Scan barcodes with a mobile device."],
  9253: ["Replace free-text City entry with a controlled list of values.", "Restrict the Postal Code column to four characters.", "Remove the time portion from the Last On Hold date/time column."],
  9254: ["Salespeople photograph receipts and enter purchase details on mobile devices.", "Accountants view and update a shared Excel document on mobile devices."],
  9263: ["Collect customer input and save it to one Dataverse row.", "Display multiple rows from a Dataverse table."],
  9264: ["Choose the Dataverse environment that will host the site.", "Choose the site template.", "Provide the site name and web address."],
  9267: ["Create a site where users submit applications online.", "Give Dynamics 365 customers access to knowledge and support resources.", "Create a site containing only a home page."],
  9269: ["Test the model's performance.", "Use the model from Power Apps or Power Automate.", "Build the model and add training data."],
  9275: ["Compare a current value with a defined target.", "Identify values outside the normally expected range.", "Find patterns in time-series data."],
  9279: ["Recognize that the employee wants to request time off.", "Ask the employee for a location.", "Recognize the city in the employee's response.", "Create the request in the HR system."],
  9282: ["Update data through an API hosted in Azure.", "Update files in SharePoint document-library folders.", "Ingest and transform data into Dataverse with a dataflow."],
  9284: ["Work in the environment containing the target Dataverse database.", "Choose Dataverse as the starting data source.", "Establish the Dataverse connection.", "Choose the table for the generated app."],
  9286: ["Create the appropriate type of flow for automating a local Windows application.", "Capture the user's data-entry actions.", "Expose values that the user supplies when the automation runs."],
  9287: ["Audit store displays with a tablet-specific layout.", "Create sales orders by following a business process flow.", "Display data from Dataverse, Excel, and SharePoint in one app."],
  9289: ["Detect negative language in an online review.", "Email the customer service manager when a negative review is found."],
  9292: ["Place multiple KPI widgets on one canvas.", "Visualize data as a line chart."],
  9293: ["Send a text automatically when a submitted report includes an escalation.", "Send a reminder every Sunday at 8 PM to users who have not submitted a report."],
  9295: ["Create a custom trade-show interface for entering potential customers.", "Create an interface for maintaining converted customers in SharePoint.", "Show dashboard metrics for customer conversions by trade show."],
  9298: ["Provide a responsive site where customers register and prepay from mobile devices.", "Host the registration experience that integrates with a PCI-compliant payment provider."],
  9299: ["Show the date, time, and location of upcoming meetings.", "Send a meeting request from the app.", "Categorize a real-world item from a photograph."],
  9300: ["Identify the selected gallery control.", "Choose the studio command used to test the app.", "Identify what must change to display dates as DD/MM/YYYY."],
  9305: ["Allow each salesperson to customize a view without affecting others.", "Let IT publish a view change that applies to everyone."],
  9307: ["On Monday, interact with a local website to record weekend events.", "Post a Teams message on demand when a staff member calls in sick.", "Send a Teams approval automatically when an email with a specified subject arrives."],
  9311: ["Store doctor profile data outside the Account and Contact tables.", "Store the doctor's specialty.", "Let users select one of ten insurance companies."],
  9312: ["Identify the flow's trigger step.", "Identify the other step that uses the same connector as Get response details."],
  9313: ["Create an app that connects to multiple data sources.", "Provide scalable, secure business-data storage.", "Define reusable business logic for multiple apps.", "Update a SharePoint list every weekday."],
  9322: ["Give salespeople read access to vendor inventory that the company does not maintain.", "Maintain company products with a guided approval process for sales discounts."],
  9324: ["Recognize keywords or questions that indicate the user's issue.", "Store a user's response for later use.", "Extract a specific type of information from a response."],
  9325: ["List appointments occurring in the next two weeks.", "Show customer-type and completed-appointment charts from the sitemap.", "Access notes, emails, and activities for one customer.", "Hide address columns when an appointment is marked online."],
  9328: ["Capture the actions needed to build the desktop automation.", "Execute the desktop flow during testing and validation."],
  9335: ["Reuse the existing customer data structure.", "Store the total number of leads.", "Set a flag automatically when total leads reaches 50."],
  9336: ["Define the doctor profile data structure.", "Define the doctor's specialty attribute.", "Store one doctor's set of profile values."],
  9340: ["Start when a new item is added to the SharePoint issue list.", "Send the acknowledgement email.", "Post the alert to the customer service team's Teams channel."],
  9343: ["Use a separate screen to create a new task.", "Make the layout scroll correctly on phones and tablets.", "Display and browse the list of spices."],
  9349: ["Open the tool used to create cloud flows.", "Describe the required automation in natural language.", "Have Copilot create the flow.", "Verify connections and test the flow.", "Confirm the completed automation."],
  9351: ["Add the receptionist to the drop-down control's data.", "Store the app changes.", "Make the saved version live.", "Give the receptionist access to the app."],
  9352: ["Let customers submit support requests through an app.", "Store customer data and synchronize it with Dynamics 365 Finance.", "Notify technicians when a new support request is entered."],
  9356: ["Display complex KPI and SLA visualizations in Teams.", "Store and host application data for Teams apps.", "Provide an extensible interface for updating SharePoint-list data."],
  9360: ["Show a hidden field when a check box is selected.", "Display related contacts and selected contact columns on the Account form."],
  9362: ["Enable business users to create custom applications without professional developers.", "Enable business users to automate repetitive processes and connect Microsoft 365 services."],
  9363: ["Update data through an API hosted in Azure.", "Update files in SharePoint document-library folders."],
  9365: ["Select the combination containing the three site properties that Copilot for site creation derives from a natural-language prompt."],
  9369: ["Let the coworker add or edit flow actions.", "Let the coworker run the flow but not delete it.", "Let the coworker view run history in the Power Automate maker portal."]
};

var PL900_TEXT_REVISIONS = {
  9003: "You are a customer service manager. You need to create a Power Pages site where customers can securely view and update their own support cases. Which data source should the site use to store and expose the customer and case data?",
  9017: "You have version 1.0.0.0 of a published Power Apps app. You create and publish version 2.0.0.0, and then restore the previous version. How many versions are displayed on the app's Versions tab?",
  9121: "A company has a Power Apps app that is used by most employees. The company is expanding into other countries and regions. You need to translate text generated in the app in near real time. Which service should you recommend?",
  9364: "A company uses Microsoft Teams as its primary collaboration tool. Which statements about using Microsoft Power Platform with Teams are true? Select all that apply."
};

var PL900_DATA_REVISIONS = {
  9003: {
    choices: ["Dynamics 365 connector", "Microsoft SharePoint", "Microsoft Azure Storage", "Microsoft Dataverse"],
    correct: [3]
  },
  9017: {
    choices: ["One version", "Two versions", "Three versions", "Four versions"],
    correct: [2]
  },
  9023: {
    text: "A company is creating a canvas app to track and analyze customer visits at its retail stores. The visit data is stored on-premises at each store. The app must make that data available when users launch it. Which tool should you use?",
    choices: ["Connector", "Microsoft Dataverse", "Data source", "Power Automate", "On-premises data gateway"],
    correct: [4]
  },
  9037: {
    text: "What is a benefit of deploying Microsoft 365 and Dynamics 365 apps in the same tenant?",
    choices: [
      "Use Microsoft Dataverse to connect to application data.",
      "Set up Microsoft 365 groups once to grant permissions to all data.",
      "Users can access both Microsoft 365 and Dynamics 365 by using single sign-on (SSO)."
    ],
    correct: [2]
  },
  9048: {
    choices: ["Microsoft Dataverse", "Business process flow", "Table metadata", "Business rule"],
    correct: [0]
  },
  9046: {
    text: "You want to create a Power Apps app with a custom sitemap for navigating between tables, dashboards, and other components. Which type of app should you create?",
    choices: ["Model-driven app", "Canvas app", "Power Pages site", "Canvas app created from a template"],
    correct: [0]
  },
  9047: {
    text: "A company is building apps that connect to several data sources and respond to events from those services. Which two operation types do connectors expose? Select all that apply.",
    choices: ["Plug-ins", "Actions", "Triggers"],
    correct: [1, 2]
  },
  9049: {
    choices: ["Demo website", "Live production website", "Test chat feature"],
    correct: [0]
  },
  9056: {
    text: "A company is evaluating AI Builder. Which statements about prebuilt AI Builder models are true? Select all that apply.",
    choices: [
      "Prebuilt AI Builder models are pretrained and ready to interpret business data.",
      "Prebuilt AI Builder models are available for both Power Automate and Power Apps."
    ],
    correct: [0, 1]
  },
  9063: {
    text: "You have a Power BI report. Which statements are true? Select all that apply.",
    choices: [
      "You can export data from a visualization in a Power BI report.",
      "You can show the data behind a report visual without exporting it.",
      "You can export data to view supporting data for a KPI."
    ],
    correct: [0, 1, 2]
  },
  9079: {
    text: "You are building Power BI visualizations for a team. Which statements are true? Select all that apply.",
    choices: [
      "Power BI can retrieve data from no more than two sources for each dashboard.",
      "Power BI visualizations can be used in canvas apps and model-driven apps.",
      "Power BI can display charts and list boxes on dashboards."
    ],
    correct: [1, 2]
  },
  9095: {
    text: "User1 shares a Power BI dashboard with User2, who works for another company. User2 can view it and forwards the sharing email to User3. User3 can view dashboards that he creates, but the forwarded link returns an error. Why?",
    choices: [
      "User3 must upgrade Power BI.",
      "User2 must sign out before User3 can sign in.",
      "Forwarding the email does not share the dashboard with User3.",
      "User1 used the wrong organizational account for Power BI."
    ],
    correct: [2]
  },
  9096: {
    text: "A company plans to implement Power BI. Which statements are true? Select all that apply.",
    choices: [
      "Power BI Report Builder is the only tool used to create reports for the Power BI service.",
      "The Power BI service can include calculated columns.",
      "Power BI Desktop can include calculated columns."
    ],
    correct: [1, 2]
  },
  9119: {
    text: "You create a canvas app by using the Generate from data feature and connect it to a Microsoft SharePoint list. Which statements are true? Select all that apply.",
    choices: [
      "A screen is generated that contains a browsable list of SharePoint list items.",
      "A screen is generated that allows users to update SharePoint list items."
    ],
    correct: [0, 1]
  },
  9098: {
    text: "You are viewing a shared Power BI report in the Power BI service. You need to add one visual to a dashboard as a tile. Which action should you use?"
  },
  9204: {
    choices: ["One connector", "Two connectors", "Three connectors", "Four connectors"],
    correct: [1]
  },
  9222: {
    text: "You create a Microsoft Power Automate flow. Which of the following statements are true? Select all that apply.",
    choices: [
      "A Power Automate flow button requires a user to provide input before the button can be selected.",
      "A Power Automate flow can only be triggered from virtual buttons in software.",
      "None of the above statements are true."
    ],
    correct: [2]
  },
  9138: {
    text: "A tutoring company has deployed a model-driven app for administration staff and a canvas app for teachers. Which statements are true? Select all that apply.",
    choices: [
      "Teachers can access the canvas app from desktop and mobile devices.",
      "Assigning security roles is the only action required to grant access to the canvas app.",
      "Administration staff can create personal views and dashboards in the model-driven app."
    ],
    correct: [0, 2]
  },
  9139: {
    choices: [
      "Add the app to a solution.",
      "Publish the app.",
      "Add a Power Apps component framework (PCF) control to the app."
    ],
    correct: [1]
  },
  9144: {
    text: "You are creating a canvas app that will be used in several countries and regions. Which statements are true? Select all that apply.",
    choices: [
      "The canvas app authoring environment adapts to the language setting of the author.",
      "When a canvas app runs on a mobile device, it adopts the app author's language.",
      "Numbers and dates in a Power Apps app automatically conform to the regional and language settings of the user's device."
    ],
    correct: [0, 2]
  },
  9168: {
    text: "For which scenarios can you use Power Automate? Select all that apply.",
    choices: [
      "Notify team members when a response is recorded in Microsoft Forms.",
      "Save email attachments to OneDrive for Business when an email is received.",
      "Receive notifications when negative comments about the company are posted on Twitter."
    ],
    correct: [0, 1, 2]
  },
  9185: {
    text: "A company plans to connect Power Apps to custom services for which no connectors are available. Which statements about custom connectors are true? Select all that apply.",
    choices: [
      "Custom connectors for customer-specific services do not require Microsoft review and certification.",
      "You can build a custom connector once and reuse it in Power Apps and Power Automate.",
      "You can make a custom connector publicly available to all Power Platform users without Microsoft certification."
    ],
    correct: [0, 1]
  },
  9191: {
    choices: [
      "Create a custom connector.",
      "Create a cloud flow that exports and imports the changed data.",
      "Export all data to Azure Blob Storage."
    ],
    correct: [1]
  },
  9195: {
    text: "Which statements about Power Automate capabilities are true? Select all that apply.",
    choices: [
      "You can trigger a Power Automate flow when an Excel or Word file is uploaded to a SharePoint site.",
      "You can use a Power Automate desktop flow to open a website and perform an action that creates a file.",
      "You can use a connector in a Power Automate cloud flow to retrieve data from a third-party data source."
    ],
    correct: [0, 1, 2]
  },
  9197: {
    text: "A tutoring company has deployed a model-driven app for administration staff and a canvas app for teachers. Which statements are true? Select all that apply.",
    choices: [
      "Teachers can access the canvas app by using a browser or the Power Apps mobile app.",
      "Administration staff can create personal views and dashboards in the model-driven app."
    ],
    correct: [0, 1]
  },
  9208: {
    text: "You are developing a Copilot Studio agent for a company. Which statements are true? Select all that apply.",
    choices: [
      "You must create a topic to specify how the agent responds to a user.",
      "You can use prebuilt entities or custom entities."
    ],
    correct: [0, 1]
  },
  9223: {
    text: "Which statements about Power Automate are true? Select all that apply.",
    choices: [
      "A Power Automate cloud flow can be added to a solution by using the Power Automate mobile app.",
      "Power Automate for desktop is an application that must be installed on a computer.",
      "Business process flows can be created by using the Power Automate portal."
    ],
    correct: [1, 2]
  },
  9239: {
    text: "A company plans to use Power BI to visualize data. Which statements are true? Select all that apply.",
    choices: [
      "Power BI lets users create and consume visualizations in one view by using data from several sources.",
      "Microsoft Power Platform uses Microsoft SQL Server databases to securely store and manage data used by business applications."
    ],
    correct: [0]
  },
  9242: {
    text: "You test a business process flow in a sandbox environment. After testing, you must copy only the business process flow to a production environment, without data or unrelated modifications. What should you do?",
    choices: [
      "Export the default solution.",
      "Create a view and export the view.",
      "Add the business process flow to a separate solution and export that solution.",
      "Export the form that contains the business process flow to a separate solution."
    ],
    correct: [2]
  },
  9259: {
    text: "A company uses a model-driven app to manage its sales process. You are creating a Power Automate cloud flow that sends a Teams message when a new order is recorded in Dataverse. Which flow component determines when the flow starts?",
    choices: ["An action", "A formula", "A trigger"],
    correct: [2]
  },
  9263: {
    choices: [
      "1. List | 2. Basic form",
      "1. Basic form | 2. Basic form",
      "1. List | 2. List",
      "1. Basic form | 2. List"
    ],
    correct: [3]
  },
  9273: {
    text: "You want to build and train a no-code machine-learning model that can generate predictions in Power Automate cloud flows. Which service should you use?",
    choices: ["AI Builder", "Azure Cognitive Services", "Azure Machine Learning", "Azure Cognitive Search"],
    correct: [0]
  },
  9302: {
    choices: [
      "Trigger a request for approval from a senior manager for high-value expenses.",
      "Upload and process a PDF file.",
      "Transfer a conversation to a live agent when the copilot cannot answer the question."
    ],
    correct: [2]
  },
  9326: {
    text: "A company is implementing Microsoft Power Platform. Which capability is available with Managed Environments?",
    choices: ["Pipelines", "Additional Dataverse capacity", "Longer cloud-flow run-history retention"],
    correct: [0]
  },
  9348: {
    text: "A company plans to implement a ticketing application using Microsoft Dataverse. Customers must be able to sign in through an external website and view details about their open cases. Which Microsoft Power Platform solution should the company use?",
    choices: ["Power Pages site", "Model-driven app", "Canvas app"],
    correct: [0]
  },
  9331: {
    text: "An environmental agency uses Specimen and Species tables in Microsoft Dataverse. The Specimen table has a Species lookup, Owner columns, a Name primary-name column, and a Specimen GUID column. Which statements are true? Select all that apply.",
    choices: [
      "Many specimens can be associated with one species.",
      "The Specimen table is organization-owned.",
      "The Name column is the primary key of the Specimen table."
    ],
    correct: [0]
  },
  9360: {
    choices: [
      "1. Form | 2. View",
      "1. View | 2. Form",
      "1. Form | 2. Form",
      "1. View | 2. View"
    ],
    correct: [0]
  },
  9363: {
    choices: [
      "1. Standard connector | 2. Custom connector",
      "1. Standard connector | 2. Standard connector",
      "1. Custom connector | 2. Custom connector",
      "1. Custom connector | 2. Standard connector"
    ],
    correct: [3]
  },
  9367: {
    text: "You create a canvas app for a company. A professional developer must be able to edit the app but must not be able to delete it. Which permission should you grant when sharing the app?",
    choices: ["User", "Owner", "Co-owner"],
    correct: [2]
  }
};

/*
 * The source PDF numbers 369 entries, but five numbers contain no question
 * body (131, 192, 220, 280, and 350). The original import also skipped ten
 * real questions. Restore those ten here while preserving their PDF numbers.
 */
var PL900_MISSING_QUESTIONS = [
  {
    id: 9070,
    text: "You are creating a Power BI screen for a call center. Match each requirement to the Power BI component that meets it.",
    type: "single",
    choices: [
      "1. Tile | 2. Alert | 3. DirectQuery",
      "1. Dashboard | 2. Subscription | 3. Import",
      "1. Report | 2. Alert | 3. Import",
      "1. Tile | 2. Subscription | 3. DirectQuery"
    ],
    correct: [0],
    explanation: "A pinned chart is a tile, threshold notifications use alerts, and DirectQuery can query related datasets without importing them."
  },
  {
    id: 9122,
    text: "A company plans to create a canvas app that connects to three databases, each of which uses a different proprietary format. What is the minimum number of connectors required?",
    type: "single",
    choices: ["Zero", "One", "Two", "Three"],
    correct: [3],
    explanation: "Each distinct proprietary data source requires its own connector."
  },
  {
    id: 9171,
    text: "You are creating a Power Automate flow. Match each data-retrieval requirement to the component you should use.",
    type: "single",
    choices: [
      "1. Connector | 2. Connector | 3. Connector",
      "1. Expression | 2. Connector | 3. Formula",
      "1. Formula | 2. Expression | 3. Connector",
      "1. Connector | 2. Formula | 3. Expression"
    ],
    correct: [0],
    explanation: "Power Automate uses connectors to access Excel, Azure Data Lake, and GitHub."
  },
  {
    id: 9183,
    text: "A business plans to use AI Builder. Which actions can it perform? Select all that apply.",
    type: "multiple",
    choices: [
      "Use a text-classification model to retrieve text and analyze its meaning.",
      "Tag Instagram posts that mention a new product.",
      "Send the number of product mentions to a Power BI dashboard."
    ],
    correct: [0, 1, 2],
    explanation: "The PDF's marked response is incorrect; the verification record confirms that all three actions are supported."
  },
  {
    id: 9219,
    text: "Which statements about custom connectors are true? Select all that apply.",
    type: "multiple",
    choices: [
      "Custom connectors use public or private APIs to connect to external data sources.",
      "Custom connectors cannot be used in Power Automate.",
      "A connector operation can be an action or a trigger."
    ],
    correct: [0, 2],
    explanation: "Custom connectors can be used by Power Automate, and connector operations are exposed as actions or triggers."
  },
  {
    id: 9250,
    text: "A canvas app stores information in SharePoint. A user currently copies that information into Microsoft Dataverse manually. You need to automate the transfer. What should you create?",
    type: "single",
    choices: [
      "A Power Automate cloud flow that uses the SharePoint and Dataverse connectors.",
      "A Power Apps component framework control that runs when the app loads.",
      "A business process flow that calls a desktop flow.",
      "A Power Apps component framework control that runs when the app saves.",
      "A cloud flow that only uses an email connector."
    ],
    correct: [0],
    explanation: "The source's highlighted option says to use no connectors and is defective. Moving data between SharePoint and Dataverse requires their connectors."
  },
  {
    id: 9281,
    text: "Which statements about Power Automate capabilities are true? Select all that apply.",
    type: "multiple",
    choices: [
      "You can trigger a flow when an Excel or Word file is uploaded to a SharePoint site.",
      "A desktop flow can open a cloud-based application and perform an action that creates a file.",
      "A connector in a cloud flow can insert third-party data into a data source used by a Power Apps app."
    ],
    correct: [0, 1, 2],
    explanation: ""
  },
  {
    id: 9330,
    text: "Which statements about pinning Power BI content to a dashboard are true? Select all that apply.",
    type: "multiple",
    choices: [
      "You must create a dashboard before you can pin a visual to it.",
      "Dashboards are created inside workspaces.",
      "You can pin an entire report page to a dashboard."
    ],
    correct: [1, 2],
    explanation: "A dashboard can be created as part of the pinning process; dashboards live in workspaces, and an entire report page can be pinned."
  },
  {
    id: 9333,
    text: "A company uses a model-driven app to track inquiries and orders. It wants customers to review orders and add inquiries through a self-service Power Pages site. Which statements describe Power Pages benefits? Select all that apply.",
    type: "multiple",
    choices: [
      "Power Pages always requires users to sign in before they can view or add information.",
      "Power Pages sites work across supported desktop and mobile browsers without device-specific configuration.",
      "Power Pages connects natively to the same Dataverse environment used by the model-driven app."
    ],
    correct: [1, 2],
    explanation: "Power Pages supports both anonymous and authenticated access, responsive browser experiences, and native Dataverse connectivity."
  },
  {
    id: 9342,
    text: "You are creating a Power Pages site. Which two Copilot features are identified in the source as available in Power Pages design studio? Select all that apply.",
    type: "multiple",
    choices: [
      "Generate copy text.",
      "Create automation that runs when a user submits data.",
      "Create AI-generated images.",
      "Create a webchat interface for site users.",
      "Create a site interface from a short description."
    ],
    correct: [3, 4],
    explanation: "The source's exam-era intended answers are webchat and creating an interface from a description. Newer product capabilities may also make generated text defensible."
  }
];

(function applyPL900ContextRevisions() {
  var banks = [pl900Questions, pl900Questions2, pl900Questions3];
  var replacements = [
    [/\bAccompany\b/g, "A company"],
    [/\bAcompany\b/g, "A company"],
    [/\bArapidly\b/g, "A rapidly"],
    [/\bIfa\b/g, "If a"],
    [/\bAl Builder\b/g, "AI Builder"],
    [/\bPower Bl\b/g, "Power BI"],
    [/\bPower Bi\b/g, "Power BI"],
    [/\bSharePnint\b/g, "SharePoint"],
    [/\bmodel-\s*driven\b/gi, "model-driven"],
    [/\bepps\b/gi, "apps"],
    [/â€”/g, "—"],
    [/â€™/g, "'"],
    [/â€œ/g, "“"],
    [/â€/g, "”"],
    [/Â»/g, ""],
    [/Â¢/g, ""]
  ];

  function normalizeImportedText(value) {
    if (typeof value !== "string") return value;
    replacements.forEach(function (replacement) {
      value = value.replace(replacement[0], replacement[1]);
    });
    return value;
  }

  PL900_MISSING_QUESTIONS.forEach(function (question) {
    var exists = banks.some(function (bank) {
      return bank.some(function (candidate) {
        return candidate && candidate.id === question.id;
      });
    });
    if (exists) return;

    var targetBank = question.id < 9120
      ? pl900Questions
      : question.id < 9245
        ? pl900Questions2
        : pl900Questions3;
    targetBank.push(question);
  });

  banks.forEach(function (bank) {
    bank.forEach(function (question) {
      if (!question) return;
      var dataRevision = PL900_DATA_REVISIONS[question.id] || {};
      question.text = normalizeImportedText(dataRevision.text || PL900_TEXT_REVISIONS[question.id] || question.text);
      if (dataRevision.choices) question.choices = dataRevision.choices;
      if (dataRevision.correct) question.correct = dataRevision.correct;
      if (dataRevision.type) question.type = dataRevision.type;

      question.text = question.text
        .replace(/(?:Instructions:\s*)?For each of the following statements,\s*select Yes (?:if|it) the statement is true[.,]?\s*/gi, "")
        .replace(/Otherwise,?\s*select No[.,]?\s*/gi, "")
        .trim();
      question.choices = question.choices.map(normalizeImportedText);
      question.explanation = normalizeImportedText(question.explanation);

      if (question.id === 9019) {
        question.type = "multiple";
        question.correct = [2, 4];
      }

      if (question.id === 9364) {
        question.choices = [
          "Apps, automations, and data stores can be created directly from Teams.",
          "Power BI content can be added to Teams conversations.",
          "Copilot Studio agents can be published directly to Teams."
        ];
        question.correct = [0, 1, 2];
      }

      var items = PL900_QUESTION_CONTEXTS[question.id];
      if (!items) return;

      var numberedItems = items.map(function (item, index) {
        return (index + 1) + ". " + item;
      }).join("\n");

      var baseText = question.text
        .replace(/\s*Select the option that correctly matches all requirements in the order listed\.\s*$/i, "")
        .trim();

      var importedAnswerArea = baseText.search(/\b(?:To answer|Answer Area|Hot Area|Select and Place)\b/i);
      if (importedAnswerArea >= 0) {
        baseText = baseText.slice(0, importedAnswerArea).trim();
      }

      question.text = baseText +
        "\n\nRequirements/scenarios in order:\n" +
        numberedItems +
        "\n\nSelect the answer option that correctly matches every numbered item.";
    });

    bank.sort(function (left, right) {
      return left.id - right.id;
    });
  });
})();
