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

  banks.forEach(function (bank) {
    bank.forEach(function (question) {
      if (!question) return;
      question.text = normalizeImportedText(PL900_TEXT_REVISIONS[question.id] || question.text);
      question.choices = question.choices.map(normalizeImportedText);
      question.explanation = normalizeImportedText(question.explanation);

      if (question.id === 9017) {
        question.choices[3] = "Three versions";
      }

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

      question.text = baseText +
        "\n\nRequirements/scenarios in order:\n" +
        numberedItems +
        "\n\nSelect the answer option that correctly matches every numbered item.";
    });
  });
})();
