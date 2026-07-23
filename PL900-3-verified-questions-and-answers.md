# PL-900 — Verified Questions and Answers

Source: **PL900 3.pdf**, 237 pages, numbered through question 369.

## Scope and method

- The document numbers 369 questions, but contains 364 actual question bodies. Questions 131, 192, 220, 280, 350 are omitted by the source itself.
- Results: **341 displayed answers verified**, **21 corrected**, and **7 source issues** (including the five missing question bodies).
- Each item is classified as single answer, multiple answer, hotspot/answer-area matrix, or drag-and-drop/matching.
- Diagram and answer-area questions were checked against the rendered PDF pages, not only OCR text.
- Product names are normalized where useful: Common Data Service → Microsoft Dataverse, Power Apps portals → Power Pages, Power Virtual Agents → Copilot Studio, and Azure AD → Microsoft Entra ID.
- Some questions test historical product behavior. Where current Microsoft functionality makes an item outdated or ambiguous, the note says so. This is a study aid, not a representation of current live exam content.

## Corrections and source issues

| Q | Verdict | Verified answer / issue |
|---:|---|---|
| 7 | Corrected | The displayed fourth mapping incorrectly repeats the portal; technicians need a mobile canvas app. |
| 43 | Corrected | Text classification does not itself perform sentiment analysis; the other two integrations are feasible. |
| 45 | Corrected | The displayed first selection is model-driven, but video streaming with drag-and-drop controls and themes is a canvas-app scenario. |
| 52 | Corrected | The displayed A/D combination is not valid; a change is not effective until the rule is activated. |
| 86 | Corrected | A workspace is for collaboration; a published app is the secure distribution vehicle for consumers. |
| 111 | Corrected | Automatic deactivation after six months is not by itself a GDPR requirement, while consent and age restrictions directly address lawful processing. |
| 129 | Corrected | A canvas app can be embedded in a model-driven form. Current Microsoft documentation does not support the claimed Microsoft Forms or Excel worksheet embedding; the source’s Excel “Yes” is outdated or erroneous. |
| 131 | Source issue | The PDF jumps from question 130 to 132; no question body or answer is present. |
| 139 | Corrected | The users and permissions are already configured; publishing makes the tested version available. Sharing again is not the missing step. |
| 165 | Corrected | Peek code/code view exposes the JSON for workflow actions and triggers without extra software. |
| 183 | Corrected | Text classification can analyze meaning; Power Automate/connectors can tag matching social posts and send aggregate results to Power BI. |
| 192 | Source issue | The PDF jumps from question 191 to 193; no question body or answer is present. |
| 199 | Corrected | Connectors expose operations as actions and triggers; tables are not a connector operation type. |
| 203 | Corrected | A custom connector may be used even when a standard connector exists, is not limited to instant flows, and can be mixed with standard connectors. |
| 220 | Source issue | The PDF jumps from question 219 to 221; no question body or answer is present. |
| 250 | Source issue | The displayed D (“cloud flow with no connectors”) cannot read SharePoint or write Dataverse. The item is defective as written. |
| 254 | Corrected | Excel is a supported canvas-app data source; model-driven apps require Dataverse. |
| 271 | Corrected | AI Builder does not offer the listed anomaly-detection model; category classification is the applicable prebuilt/custom model capability. |
| 280 | Source issue | The PDF jumps from question 279 to 281; no question body or answer is present. |
| 288 | Corrected | The view filters on current owner, is named “My USA Accounts,” and its sort/filter settings cannot guarantee the new Boston row’s ordinal position. |
| 296 | Corrected | Adding the model control to an app does not retrain or improve model accuracy; a custom model trained on company data does. |
| 342 | Source issue | This matches the exam-era intended answer. The item is now ambiguous because current Power Pages Copilot also supports AI-assisted text generation, making A defensible. |
| 350 | Source issue | The PDF jumps from question 349 to 351; no question body or answer is present. |
| 355 | Corrected | Authentication identifies the user, but table permissions restrict Dataverse rows to the signed-in user’s related company. |
| 357 | Corrected | A relationship models registrations across individuals and events and supports copying related details; a business rule cannot create that data model. |
| 358 | Corrected | A run can be resubmitted; standard cloud-flow run history is 28 days, not 90, and the desktop app does not manage cloud-flow runs. |
| 368 | Corrected | The SharePoint “item created” trigger responds to any new item in the watched list, not only items created by a flow owner. |
| 369 | Corrected | Run-only access permits invoking an instant flow but does not provide owner-level editing/run-history access. |

## Question-by-question key

### Question 1

**Type:** Single answer  
**PDF page(s):** 1  
**Verdict:** Verified

**Question (OCR transcription):**

> This question requires that you evaluate the underlined text to determine if it is correct.
>
> You have a Power Apps app. You create a new version of the app and then publish the new version. A
> customer goes through the process of restoring the previous version of the app. In the Version tab for
>
> the app, you will see two versions of the app.
>
> Review the underlined text. If it makes the statement correct, select "No change is needed.' If the
> statement is incorrect, select the answer choice that makes the statement correct.
>
> A. No change is needed.
>
> B. one
>
> D. four

**Correct answer:** Three versions

### Question 2

**Type:** Single answer  
**PDF page(s):** 1, 2  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Dynamics 365 Sales. The company uses a browser-based app named Sales Hub.
>
> You need to ensure that users can access data from mobile devices.Which app should users install?
>
> A. Dynamics 365 Remote Assist
> B. Dynamics 365 Finance
>
> Dynamics 365 Business Central

**Correct answer:** Dynamics 365 for Phones (historical product name)

**Verification note:** Current Dynamics 365 mobile experiences have changed, but this is the exam-era answer.

### Question 3

**Type:** Single answer  
**PDF page(s):** 2  
**Verdict:** Verified

**Question (OCR transcription):**

> You are a customer service manager.
>
> You need to implement a Power Apps portal that allows customers ==
>
> Which type of data source is used?
>
> A. Dynamics 365 Connector
> B. Microsoft SharePoint
>
> C. Microsoft Azure Storage
>
> D. Common Data Service ose |

**Correct answer:** Microsoft Dataverse (called Common Data Service in the question)

### Question 4

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 2, 3  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> You create a user-owned custom entity by using Common Data Service.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes No
> You can change the entity ownership from User to Oo Ke)
> Organization-owned.
> You can create a business rule for a custom entity that can |O} Oo
>
> be used in a Flow.

**Correct answer:** 1. No; 2. Yes

### Question 5

**Type:** Drag-and-drop / matching  
**PDF page(s):** 3  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> You need to explain the major components of the Common Data Model (CDM) and their functions.
> Match each term to its definition.
>
> Instructions: To answer, drag the appropriate term from the column on the left to its definition on the
>
> right. Each term may be used once, more than once, or not at all. Each correct match is worth one point.
>
> NOTE: Each correct selection is worth one point.
>
> Tools Answer Area
>
> Entities Purpose Tool
>
> Iba Helps jumpstart application development by leveraging 'Common Data Service
>
> business logic, security, and integrations.
> 'Conimon Data Service A set of records used to store data.
> | Common Data Model
> | Workflows

**Correct answer:** 1. Common Data Service/Dataverse; 2. Entities/Tables

### Question 6

**Type:** Single answer  
**PDF page(s):** 3, 4  
**Verdict:** Verified

**Question (OCR transcription):**

> A distribution company has multiple warehouses.
> Tax rates charged on sales orders need to be calculated based on locality and region.
> You need to recommend a cost-effective solution that can be implemented quickly.
>
> What should you recommend?
>
> _ A. Check AppSource for a tax add-on.
>
> B. Create alerts in Dynamics 365 Finance for tax table changes.
>
> C. Implement the Common Data Model.
>
> D. Run a Power BI report.
>
> E. Write scripts and code tax updates.

**Correct answer:** A — Check AppSource for a tax add-on

### Question 7

**Type:** Drag-and-drop / matching  
**PDF page(s):** 4, 5  
**Verdict:** Corrected

**Question (OCR transcription):**

> DRAG DROP -
> You manage the support team at a rapidly growing company.
>
> Customers and support technicians need a better experience when logging and responding to support
>
> requests, You need more visibility into what the support technicians are doing every week.
> You need to recommend tools to help the company's needs.
>
> Which tools should you recommend? To answer, drag the appropriate tools to the correct requirements.
> Each tool may be used once, more than once, or not at all. You may need to drag the split bar between
>
> panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Tools Answer Area
>
> Power Apps portal Requirement Tool
> Customers must be able to submit support
> requests by using a website.
> Pc ij
> eae Support requests must be created and stored. az
> 'Common Data Service
> + technicians must be notified when a new
> support request is entered.
>
> Support technicians must be able to enter a
>
> status report for work completed during the --
> previous week by using a mobile app.
>
> i
>
> 1. Power Apps Portal 2. Dataverse (common data service) 3. Power Automate 4.
> Power Apps Portal

**Correct answer:** 1. Power Pages/Power Apps portal; 2. Dataverse; 3. Power Automate; 4. Canvas app

**Verification note:** The displayed fourth mapping incorrectly repeats the portal; technicians need a mobile canvas app.

### Question 8

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 5  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> You are building Power Apps apps that use both Dynamics 365 Sales and Microsoft 365.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes No
> Dynamics 365 Sales and Microsoft 365 must be in the same = Q_ fe)
> tenant to allow Single Sign-On (SSO).
> You must download a product from AppSource to ensure fo}; °
>
> that SSO works with Dynamics 365 Sales and Microsoft 365.
>
> Yes, No

**Correct answer:** 1. Yes; 2. No

### Question 9

**Type:** Multiple answer  
**PDF page(s):** 5, 6  
**Verdict:** Verified

**Question (OCR transcription):**

> You need to implement Microsoft Business Applications along with the Microsoft Power platform.
>
> Which three Microsoft products are part of the Power platform? Each correct answer presents a
> complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> B. Azure Active Directory
>
> D. Azure Machine Learning
>
> EE)

**Correct answer:** A, C, E — Power Apps, Power Automate, Power BI

### Question 10

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 6  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A company plans to implement Power Platform apps. The company does not plan to use any
>
> development tools or plug-ins.
> Which actions can you perform?
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
> NOTE: Each correct selection is worth one point.
> Answer Area
> Statement Yes No
>
> You can synchronize account information from Dynamics 365 iKe)| ta}
> Sales with a third-party database.
>
> You can create invoices from orders and then send the ike) [e)
> invoices to the customer by using a Power Automate flow.

**Correct answer:** 1. Yes; 2. Yes

### Question 11

**Type:** Single answer  
**PDF page(s):** 6, 7  
**Verdict:** Verified

**Question (OCR transcription):**

> A large retail company implements Power Apps, Microsoft Flow, and the Common Data Service.
>
> The board of directors is asking whether users are finding value in the technology. The company would
>
> like to measure and report usage of the software.
> You need to recommend a tool to determine software usage.
>
> What should you recommend?
>
> A. Microsoft Intune
> B. Azure Stream Analytics
> YC. Power Platform Analytics
>
> D. Dynamics 365 Product Insights

**Correct answer:** C — Power Platform Analytics

### Question 12

**Type:** Drag-and-drop / matching  
**PDF page(s):** 7  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A company uses Power Apps.
> You need to perform administrative tasks for the company.
>
> Which admin centers should you use? To answer, drag the appropriate admin centers to the correct
> requirements. Each admin center may be used once, more than once, or not at all. You may need to drag
>
> the split bar between panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Admin centers Answer Area
>
> [ Azure Active Directory Requirement Admin center
> Dynamics 365 Admin center oo prs: | Azure Active Directory
> poeriogs Mininenet | Assign the Environment Maker role iarepcnictee |
>
> f toa user. t a -__}
> Power BI Admin portal

**Correct answer:** 1. Microsoft Entra admin center (Azure AD); 2. Power Platform admin center

### Question 13

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 7, 8  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> Arapidly growing company produces Office 365 licenses for all employees. The company wants to
> empower users to build apps, automate business processes, and analyze data without requiring li¢
>
> expertise or development skills and without increasing IT expenses and dependencies.
> You need to recommend tools so that users can accomplish specific tasks.
> Which tools should you recommend? To answer, select the appropriate options in the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Scenario Application
>
> Build automatic workflows that access multiple data sources. .
>
> Create custom apps that address specific business needs. Vv
> Al Builder
> Power Apps
> Power Autornate
> Azure Functions
> Power BI
>
> Design insightful data visualizations. Y.
> Al Builder
> Power Apps
> Power Automate
> Power BI

**Correct answer:** 1. Power Automate; 2. Power Apps; 3. Power BI

### Question 14

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 8, 9  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A company plans to use Power Platform to build apps which address specific business challenges.
>
> You need to recommend the appropriate types of Power Apps to use.
>
> What should you recommend? To answer, select the appropriate option in the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Scenario
>
> Field technicians need a mobile app to capture
>
> the location and the image of defective products.
>
> Sales representatives need to see different views
> and dashboards in the sales app.
>
> Power Apps Portals
> Common Data Service
>
> lv
>
> Canvas app
> Model-driven app
> Power Apps Portals

**Correct answer:** 1. Canvas app; 2. Model-driven app; 3. Power Pages/portal

### Question 15

**Type:** Drag-and-drop / matching  
**PDF page(s):** 9  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> A travel company plans to use the Power Platform to create tools that help travel agents book customer
>
> travel.
> You need to recommend solutions for the company.
>
> What should you recommend? To answer, drag the appropriate tools to the correct requirements. Each
> tool may be used once, more than once, or not at all. You may need to drag the split bar between panes
>
> or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Tools Answer Area
> Requirement Tool
>
> If a customer is travelling with a person under
> the age of 18, a field must display to collect Business rule
> date of birth for the under 18 traveler only.
>
> Ensure that all travel agents use the same
> process with all customers.
>
> Power BI Business process flow
>
> Send a confirmation email to customers after
> reservations are complete. Power Automate

**Correct answer:** 1. Business rule; 2. Business process flow; 3. Power Automate

### Question 16

**Type:** Drag-and-drop / matching  
**PDF page(s):** 9, 10  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> A company has locations in multiple regions. The company develops solutions based on Power Apps and
>
> Power Automate.
> You need to recommend features to support the implementation.
>
> Which Power Platform features should you recommend? To answer, drag the appropriate features to the
> correct requirements. Each feature may be used once, more than once, or not at all. You may need to
>
> drag the split bar between panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Features Answer Area
> Environment Requirement Feature
> Security group Ensure fastest response times for
>
> each company location.
>
> SharePoint library Create test and production copies
>
> of the data and apps.
>
> Environment, environment

**Correct answer:** 1. Environment; 2. Environment

### Question 17

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 10  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You have version 1.0.0.0 of a published Power Apps app. You create and publish version 2.0.0.0 of the
>
> app. A customer goes through the process of restoring the previous version of the app.
>
> How many versions of the app are displayed in the Version tab for the app? To answer, select the
> appropriate option in the answer area.
>
> Answer Area
>
> You will see | Ww versions of the app.
>
> RON =
>
> 3

**Correct answer:** Three environments

### Question 18

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 10, 11  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A company is evaluating ways to connect Power Platform apps to external services to perform complex
> activities.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statements Yeo No
>
> You can create a canvas app that scans and parses documents () fe)
> using Azure Cognitive Services and then adds the appropriate
> information to Dynamics 365 Sales.
>
> You can create a canvas app that uses Azure Cognitive Services °
> to read incident records and identify tickets that need to be
> escalated based on sentiment score.

**Correct answer:** 1. Yes; 2. Yes

### Question 19

**Type:** Multiple answer  
**PDF page(s):** 11  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Power Platform.
>
> You must ensure that users cannot share customer data with other users. You must also ensure that
> uses cannot connect to data sources unless you grant the user explicit permissions to access a data
>
> source.
> You need to recommend solutions to meet the company's security requirements.
> Which two types of policies should you recommend? Each correct answer presents part of the solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Office cloud policies
>
> B. Group Policy Objects
> "
>
> Y . environment-level policies
>
> YD. tenant-level policies 'MESLNSTED)
>
> E. preset security policies

**Correct answer:** Environment-level DLP policy; tenant-level DLP policy

### Question 20

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 11, 12  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> An organization plans to create Power Platform solutions and is evaluating Microsoft Dataverse.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Yes No
>
> Virtual table data is stored in Microsoft Dataverse. |O|
>
> Columns are used in forms and views. [oy e)

**Correct answer:** 1. No; 2. Yes

### Question 21

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 12  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Yes No
>
> Managed solutions can be used to group multiple Power Platform
>
> components together during solution development. ° °
>
> Managed solutions must be used to distribute a Power Platform fe) fe)
> application on AppSource.
> Managed solutions always protect Power Platform components (e) re)
>
> from editing when components are exported to another environment.
>
> NOYES,YES

**Correct answer:** 1. No; 2. Yes; 3. Yes

### Question 22

**Type:** Single answer  
**PDF page(s):** 12, 13  
**Verdict:** Verified

**Question (OCR transcription):**

> A team of five people plans to create Power Platform solutions for a company. Team members plan to
>
> initially use Power Platform trial instances to create solutions.
>
> Team members have questions about how many Power Platform instances and Common Data Service
> databases they need.
>
> You need to respond to the team.
>
> How should you respond? To answer, drag the appropriate responses to the correct questions. Each
> response may be used once, more than once, or not at all.
>
> You may need to drag the split bar between panes or scroll to view content.
>
> NOTE:
> Each correct selection is worth one point.
>
> Responses Answer Area
>
> Question
>
> 'One per tenant How many trial instances
> must the team create?
>
> tesa omen
> Data Service databases a
> One per Power Platform app must the team create?
>
> ONE PER USER
> ONE PER ENVIRONMENT

**Correct answer:** 1. One per user; 2. One per environment

### Question 23

**Type:** Single answer  
**PDF page(s):** 13, 14  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is creating a canvas app to track and analyze customer visits to their retail stores. Data about
> customer visits is store Q(GRprERIBeS) each retail store location.
>
> The app must display data about customer visits when users launch the app.
> You need to ensure that the data is available for consumption by the app.
>
> Which tool should you use?
>
> A. Connector
> B. Microsoft Dataverse
> C. Data source
>
> D. Power Automate
>
> | v E. Data gateway abiddeac
>
> ier
>
> ON PROMISES --> Data gateway

**Correct answer:** E — On-premises data gateway

### Question 24

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 14  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point. SECURITY ROLES = ppac (ALWAYS)
>
> Answer Area
> Statements Yes No
> Security roles are modified in Microsoft Azure O O
>
> Active Directory.
>
> Security Roles are assigned to each table. O O
>
> NO, NO
>
> Security roles in Power Platform are managed within Dataverse/Power Platform
> environments (via the Power Platform Admin Center or environment settings)
> Security roles are assigned to users or teams, not to tables.

**Correct answer:** 1. No; 2. No

### Question 25

**Type:** Single answer  
**PDF page(s):** 14, 15  
**Verdict:** Verified

**Question (OCR transcription):**

> A company currently does not separate testing, development and production as per standard
> Application Lifecycle Management (ALM) protocol. The company uses Power Apps for accounting and
> sales processes.
>
> The company needs to use only one login account per user. The company also must prevent
>
> development and testing from impacting production.
> You need to implement a solution to meet the requirements.
>
> Which method should you select?
>
> A. separate environments rontdddillend
>
> B. separate tenants
>
> C. separate Microsoft Azure Storage Blobs
>
> D. separate connectors

**Correct answer:** Create separate environments

### Question 26

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 15  
**Verdict:** Verified

**Question (OCR transcription):**

> A company creates the following Microsoft Power Platform environments to manage a custom model-
> driven app:
>
> Development
>
> Production
>
> You have been granted the System Administrator security role to the development environment and a
> custom security role named Project Team Member to the production environment.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Statements Yes No
> You will not be able to access the app until the System Administrator security O° °
> role is assigned to the app in the development environment.
>
> You can delete records in the development environment. ° °
> You will not be able to access the app until the Project Team Member ie) 12}
>
> security role is assigned to the app in the production environment.
>
> No, Yes, Yes

**Correct answer:** 1. No; 2. Yes; 3. Yes

### Question 27

**Type:** Drag-and-drop / matching  
**PDF page(s):** 15, 16  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A company uses Dynamics 365 Sales.
> You have the following requirements:
>
> View analytics on accounts.
>
> The model-driven app must automatically send an approval form to a manager when the purchase
>
> price is greater than $10,000.
>
> Create a chatbot for the webpage to interact with customer questions.
> You must use Microsoft Power Platform to extend the capabilities of Dynamics 365 Sales.
> You need to select an application for each requirement.
>
> Which application should you use? To answer, drag the appropriate application to the correct
> requirement. Each application may be used once, more than once, or not at all. You may need to drag
>
> the split bar between panes or scroll to view content.
> NOTE:
> Each correct selection is worth one point.
>
> Applications Answer Area
>
> Power ea
> Power Automate View analytics on accounts. [ Power Bi
>
> [pene Aas Automatically send approval [ Power Automate
> Power Portals Create chatbot for webpages. Power Virtual Agents.

**Correct answer:** 1. Power BI; 2. Power Automate; 3. Copilot Studio (Power Virtual Agents)

### Question 28

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 16  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> A company plans to use Power BI to visualize data from business systems.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes No
> You can display data aggregates and raw data in a Power BI fo} [@)
> report.
> You can display related data from multiple sources inthe same () {e)
>
> Power BI report.

**Correct answer:** 1. Yes; 2. Yes

### Question 29

**Type:** Multiple answer  
**PDF page(s):** 16, 17  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is evaluating ways that they can implement Al Builder.
> For which two scenarios can you use Al Builder? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Send emails to all users who subscribe to a service. POWER AUTOMATE
>
> B. Synchronize data from an external database. CONECTOR
>
> C. Collect data from several data sources and display a dashboard that shows POWER BI
> trending data.
>
> YD. Interpret images and perform an action based on the image.
>
> YE. Detect patterns in data and predict outcomes.

**Correct answer:** D, E — Interpret images/take action; recognize patterns/predict outcomes

### Question 30

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 17, 18  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A company plans to create Power Platform apps that consume industry-standard and proprietary data
>
> sources.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes No
> Custom connector cannot be used if a standard
> connector for the service is available. oO oO
> Custom connectors are supported in instant flows only. (e) oO
>
> Standard and custom connectors cannot be mixed within
> the same flow or app. O O
>
> NO, NO ,NO
>
> Reasoning:
>
> e
>
> Statement 1 > No - There is no restriction preventing you from using a
> custom connector even when a standard connector exists. You might prefer
> acustom connector for more control, specific endpoints, or proprietary
> needs.
>
> Statement 2 > No - Custom connectors are supported in all flow types -
> automated, instant, and scheduled flows - as well as in Power Apps and
> Logic Apps. They are not limited to instant flows only.
>
> Statement 3 > No - Standard and custom connectors can absolutely be
> mixed and used together within the same flow or app. This is acommon
> real-world scenario where you combine standard connectors (e.g., Office
> 365) with custom connectors for proprietary systems in a single solution.

**Correct answer:** 1. No; 2. No; 3. No

### Question 31

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 18  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A company is evaluating Power Platform and has questions about the role that Microsoft Dataverse plays
>
> in using Power Apps and Power Automate.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement
> Model-driven apps require a Microsoft Dataverse database.
> A flow instance can only access one Microsoft Dataverse database.
> Canvas apps require a Microsoft Dataverse database.
> Yes, No, No

**Correct answer:** 1. Yes; 2. No; 3. No

### Question 32

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 18, 19  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A company plans to create a Common Data Service environment.
>
> Yes
>
> No
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement
>
> You can create a Common Data Service environment
>
> in the Power Platform Admin center.
>
> You must enable data encryption after you create a
>
> Common Data Service environment.
>
> You can control security roles and privileges in a
> Common Data Service environment from the Power
>
> Apps Admin center.
>
> Yes
>
> (@) |
>
> |O|
>
> No
>
> re)

**Correct answer:** 1. Yes; 2. No; 3. Yes

**Verification note:** The administrative UI names in the question are historical.

### Question 33

**Type:** Multiple answer  
**PDF page(s):** 19  
**Verdict:** Verified

**Question (OCR transcription):**

> A company plans to use Al Builder to help improve business performance.
> You need ta determine which Al Models are available for use.
> Which three types of models can you use? Each correct answer presents a complete solution
>
> NOTE: Each correct selection is worth one point.
>
> A. linear regression
>
> Y B. prediction crane! |
>
> YC. object detection ", |
> D. anomaly detection
> E text classification ' ]

**Correct answer:** B, C, E — Prediction, object detection, text classification

### Question 34

**Type:** Multiple answer  
**PDF page(s):** 19, 20  
**Verdict:** Verified

**Question (OCR transcription):**

> 'A company uses Microsoft 365 and Dynamics 365 Sales. The company does not have any developers on
>
> its staff.
> You need to explain to the executives the benefits of using Power Platform apps.
> What are two benefits? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Users can send emails from Dynamics 365 Sales to their personal email
>
> addresses.
>
> v B. Users can create Power Apps to create apps for different departments. SEEN CED)
>
> v C. Users can use Power Automate to share information between Microsoft 365
>
> and Dynamics 365 Sales.
>
> D. The company can unify all the mobile devices to one vendor.

**Correct answer:** B, C — Power Apps for department apps; Power Automate for Microsoft 365/Dynamics 365 automation

### Question 35

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 20  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A company needs to create several workflows and applications to help streamline their sales operations.
> You need to determine which applications are appropriate for given scenarios.
>
> Which applications should you use? To answer, select the appropriate options in the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Scenario Application
>
> Create no-cod@SERTSREy hat use different systems. %
>
> Azure Logic Apps
>
> ipowe Logic Apps
>
> Power Automate

**Correct answer:** 1. Power Automate; 2. Power Apps; 3. Power Apps

### Question 36

**Type:** Single answer  
**PDF page(s):** 20, 21  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Dynamics 365 Supply Chain Management and Dynamics 365 Finance.
> User account data must be synchronized between the two systems.
> You need to ensure that the synchronized data is stored in one place.
>
> What should you use?
>
> A. Azure loT Central
>
> B. Azure Active Directory
>
> C. SQL Server
>
> Y D. Microsoft Dataverse

**Correct answer:** D — Microsoft Dataverse

**Verification note:** The wording says “user account data,” but the question’s intended data-integration store is Dataverse.

### Question 37

**Type:** Single answer  
**PDF page(s):** 21  
**Verdict:** Verified

**Question (OCR transcription):**

> What is a benefit of deploying Microsoft 365 and Dynamics 365 apps in the same tenant?
>
> A. Use Common Data Services to connect to application data.
>
> B. You only need to set up groups in Microsoft 365 for permissions to all data.
>
> v C. Users can access both Microsoft 365 and Dynamics 365 by using Single SoD:
> Sign-on (SSO).

**Correct answer:** C — Single sign-on (SSO)

### Question 38

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 21, 22  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You are creating a Power Apps app. You want to ensure that the app can be used by individuals who
>
> have a vision impairment.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes No
>
> Power Apps can use a screen reader without the need (e) oO
> for a connector.
>
> You can use an accessibility checker for Power Apps oO oO
> apps to check for accessibility violations and provide
> user interface tips.
>
> Yes, Yes

**Correct answer:** 1. Yes; 2. Yes

### Question 39

**Type:** Drag-and-drop / matching  
**PDF page(s):** 22  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A bank uses Power Platform apps and flows to support business processes.
>
> The company would like to use historical client data to predict whether a client's loan application is likely
>
> to be approved or rejected.
> You need to use Al Builder to implement the solution.
>
> Which four actions should you perform in sequence? To answer, move the appropriate actions from the
>
> list of actions to the answer area and arrange them in the correct order.
>
> Answer Area
> Actions
>
> Train the model. Import data into Common Data Service.
>
> Use the model in PowerApps or Power Automate. Train the model.
>
> Export data into Al Builder. Publish the model.
>
> PeSea tee Oc Use the model in PowerApps or Power Automate.
>
> Import data into Common Data Service.

**Correct answer:** 1. Import Dataverse data; 2. Train; 3. Publish; 4. Use in Power Apps or Power Automate

### Question 40

**Type:** Drag-and-drop / matching  
**PDF page(s):** 22, 23  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A company plans to implement solutions that use Microsoft Dataverse.
> You need to recommend features to meet the company's needs.
>
> Which features should you recommend? To answer, drag the appropriate features to the correct
> requirements. Each feature may be used once, more than once, or not at all. You may need to drag the
>
> split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Features Answer Area
>
> business rules Requirement Feature
>
> Validate data across multiple fields and entities regardless of Busiiesé riled
>
> business process flows the app used to create data.
>
> Common Data Model Create visual quides to ensure that users enter data and
>
> e business process flows
> perform tasks in a consistent manner.
>
> Accelerate development by using a standard set of entities | Common Data Model
> for the most common scenarios.

**Correct answer:** 1. Business rules; 2. Business process flows; 3. Common Data Model

### Question 41

**Type:** Drag-and-drop / matching  
**PDF page(s):** 23, 24  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A manufacturing company is evaluating Al Builder.
> You need to select Al Builder models to address specified requirements.
>
> Which model types should you use? To answer, drag the appropriate model types to the correct
> requirements. Each model type may be used once, more than once, or not at all. You may need to drag
> the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Model types Answer Area
> Requirement Model type
> form processing Identify products withoutlabels }
>
> : object detection
> or serial numbers.
>
> Identify customers who mightnot)
> pay their invoices on time. prediction

**Correct answer:** 1. Object detection; 2. Prediction

### Question 42

**Type:** Drag-and-drop / matching  
**PDF page(s):** 24  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> You manage the support team at a rapidly growing company.
>
> Support technicians need a better experience when logging and responding to support requests.
> You need to recommend tools to help the company's needs.
>
> Which tools should you recommend? To answer, drag the appropriate tools to the correct requirements.
> Each tool may be used once, more than once, or not at all. You may need to drag the split bar between
>
> panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Tools Answer Area
> Power Apps Requirement Tool
> PawarAlconatn: Support technicians must be able to submit Power Apps
>
> support requests by using an app.
>
> Power BI Customer data must be stored and synchronized
>
> with Dynamics 365 Finance. Microsoft Dataverse
>
> Microsoft Dataverse
>
> Support technicians must be notified when a new
> support request is entered.
>
> Power Automate

**Correct answer:** 1. Power Apps; 2. Dataverse; 3. Power Automate

### Question 43

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 24, 25  
**Verdict:** Corrected

**Question (OCR transcription):**

> HOTSPOT -
>
> A business is evaluating Al Builder.
>
> Which actions can you perform?
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes No
>
> You can use a text classification model in Al Builder to retrieve text [o]
> and perform sentiment analysist for ServiceNow incidents.
> You can tag Instagram posts that mention your new product. (O|
>
> You can send results about the number of mentions of your new Ke) (2)
> product in Instagram to Power BI for inclusion on a dashboard.

**Correct answer:** 1. No; 2. Yes; 3. Yes

**Verification note:** Text classification does not itself perform sentiment analysis; the other two integrations are feasible.

### Question 44

**Type:** Drag-and-drop / matching  
**PDF page(s):** 25, 26  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> Match each tool to its task. To answer, drag the appropriate tool from the column on the left to its task
>
> on the right. Each tool may be used once, more than once, or not at all.
> NOTE: Each correct match is worth one point.
>
> Tools Answer Area
>
> [Powersi Task Tool
> Power Automate Automate workflows. Power Automate
>
> Trigger an action from an event. Power Automate
>
> | Power Apps

**Correct answer:** 1. Power Automate; 2. Power Automate; 3. Power Apps

### Question 45

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 26, 27  
**Verdict:** Corrected

**Question (OCR transcription):**

> HOTSPOT -
>
> You are a retail director for a large clothing company. Each week you use the corporate YouTube channel
>
> to create a video that highlights new initiatives, and goals for retail operations.
> You need to design a Power Apps app that streams the videos to internal users.
> Which objects should you use? To answer, select the appropriate options in the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Action Option
> Implement the Power Apps app. vv
>
> Portal
>
> Use drag and drop to add a video to the app. a
>
> Apply consistent company colors to the app.
>
> Control

**Correct answer:** 1. Canvas app; 2. Control; 3. Theme

**Verification note:** The displayed first selection is model-driven, but video streaming with drag-and-drop controls and themes is a canvas-app scenario.

### Question 46

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 27  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT - sitemap = modeldriven app
>
> You want to create a Power Apps app that allows you to define a custom Sitemap.What should you do?
> To answer, select the appropriate options in the answer area.Hot Area:
>
> Answer Area
>
> Navigate to the Power Apps portal and create a
>
> me
>
> a portal app.
> an app by using a tempiate.

**Correct answer:** Model-driven app

### Question 47

**Type:** Multiple answer  
**PDF page(s):** 27, 28  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is building apps to support their business operations. The apps will use{@onnedtors}to access
> data from several data sources and respond to a number of events generated by components.
>
> Which two operations can you use for connectors? Each correct answer presents part of the solution.
>
> NOTE: Each correct selection is worth one point.
>
> B. Plug-ins
>
> Gateways

**Correct answer:** Actions and triggers

### Question 48

**Type:** Single answer  
**PDF page(s):** 28  
**Verdict:** Verified

**Question (OCR transcription):**

> You are a sales manager for a large retail organization.
>
> You are creating a Power Apps app that will display customer product purchase information from your
> old point-of-sale (POS) system and need to link those sales to the customer accounts and product sales
>
> in Dynamics 365 Commerce.
> You need to use the appropriate component.
>
> What should you use?
>
> v A. Microsoft Dataverse PePAL OTE
>
> B. business process flow
> C. entity metadata
>
> D. business rule

**Correct answer:** Microsoft Dataverse

### Question 49

**Type:** Single answer  
**PDF page(s):** 28, 29  
**Verdict:** Verified

**Question (OCR transcription):**

> You create a Power Virtual Agents chatbot.
>
> You need to share the bot with other team members so that they can try out the bot before you share
>
> the bot with customers.
>
> What should you use?
>
> (OA. demo website |
>
> B. live production website
>
> C. test chat feature

**Correct answer:** Demo website

### Question 50

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 29  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You are planning to use the Business Card Reader and Sentiment Analysis prebuilt Al models to build
> solutions.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes No
>
> The Business Card Reader model can be used
> with both Power Automate and Power Apps.
>
> The Sentiment Analysis model can be used
> Power Automate only.
>
> Yes, No

**Correct answer:** 1. Yes; 2. No

### Question 51

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 29, 30  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> Your company wants to create a help desk system and implement Dynamics 365 Customer Service.
> The company has the following requirements:
>
> Provide an application to allow support team staff to chat live with a customer.
> Automatically import data from a Microsoft Excel spreadsheet once a day.
>
> Provide a chatbot that can assist customers who need support.
> You need to determine which applications to use to meet the requirements.
> Which applications should you use? To answer, select the appropriate options in the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Requirement Application
> Automatically import data from a Microsoft Excel A
> spreadsheet once a day. Custom Connector
> Azure Data Lake
> Power Automate
> Power BI
> Provide a chatbot that can assist customers who v
> need support. Power Virtual Agent
> Power Automate

**Correct answer:** 1. Power Automate; 2. Copilot Studio (Power Virtual Agents)

### Question 52

**Type:** Multiple answer  
**PDF page(s):** 30  
**Verdict:** Corrected

**Question (OCR transcription):**

> You create a business rule on contact entity to enforce the requirement that users must enter either a
>
> telephone number, fax number, or an email when creating a new record.
>
> 'The company decides to remove fax number from the condition.
>
> You need to update the business rule.
>
> What ate two ways of achieving the goal? Each correct answer presents 2 complete solution,
>
> Note: Each correct selection is worth one point.
>
> €. Take a snapshot of the business rule and change the condition.
>
> @ D. Change the condition and activate the change.

**Correct answer:** A, B — Save a copy/change it and deactivate or delete the original; or deactivate the rule and change its condition

**Verification note:** The displayed A/D combination is not valid; a change is not effective until the rule is activated.

### Question 53

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 30, 31  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> You are learning about Power Apps and how to use triggers.
> Which objects should you use? To answer, select the appropriate options in the answer area
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Component
>
> When a condition is met, Power Apps app can trigger a iv
> connector.
> Power Automate flow.
> gateway.
> solution
>
> Actions and triggers are properties of a lv
>
> connector.
> gateway.
> solution.
>
> Power automate flow
> Conextor

**Correct answer:** 1. Power Automate flow; 2. Connector

### Question 54

**Type:** Single answer  
**PDF page(s):** 31  
**Verdict:** Verified

**Question (OCR transcription):**

> A coworker is creating an app in Power Apps and needs to automatically synchronize data from an
> external source. The coworker is unable to locate @ suitable
>
> Microsoft approved connector template in AppSource.
> You need to recommend a solution for the coworker.
>
> What should you recommend?
>
> / A. Create a custom connector.
>
> B. Ask the outside source to send you the data once a week.
>
> C. Use Power Automate to connect to the database.
>
> D. Open a ticket with Microsoft and request @ new connector.
>
> E. Use Microsoft Azure Service Bus.

**Correct answer:** Custom connector

### Question 55

**Type:** Multiple answer  
**PDF page(s):** 31, 32  
**Verdict:** Verified

**Question (OCR transcription):**

> ,
>
> 'A toy company creates a text classification model in Al Builder to monitor customer feedback for specific
>
> key words.
>
> When negative feedback is received for a toy, the company wants to proactively perform engineering
>
> reviews for the toy and schedule additional training sessions for workers who produce the toy.
> What are tivo possible ways to achieve the goal? Each correct answer presents a complete solution,
>
> NOTE: Each correct selection is worth one point.
>
> 7 Biren j
>
> B. Implement the Virtual Agent.
>
> ( Y . Build a Power Automate flow.
>
> D. Use the Common Data Model

**Correct answer:** Canvas app and Power Automate

### Question 56

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 32  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> A company is evaluating Al Builder.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Yes No
>
> Prebuilt Al Builder models are pretrained and are ready to interpret QO
> business data immediately. -
>
> Prebuilt Al Builder models exist for both Power Automate and fa fe)
> Power Apps.

**Correct answer:** 1. Yes; 2. Yes

### Question 57

**Type:** Drag-and-drop / matching  
**PDF page(s):** 32, 33  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> You are implementing a solution for an animal hospital.
> The animal hospital must contact owners regarding their pets.
>
> You need to model the owner and pet object information by using Microsoft Dataverse. The solution
>
> must minimize the amount of customization required:
>
> ONLY owner first name
> ONLY owner last name
> ONLY owner email address
> MUST owner date of birth
>
> ONLY pet name
>
> pet breed
>
> ONLY pet owner
>
> Which component should you use? To answer, drag the appropriate components to the correct data.
> Each component may be used once, more than once, or not at all. You may need to drag the split bar
>
> between panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Components Data Component
> Standard Dataverse table| The owner object Standard Dataverse table
> Custom Dataverse table | The pet object Custom Dataverse table
> The wnersemaatess
> Relationship Reference a pet record as belonging Relationship
> to an owner record

**Correct answer:** 1. Standard Dataverse table; 2. Custom table; 3. Relationship

### Question 58

**Type:** Drag-and-drop / matching  
**PDF page(s):** 33  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> 'A company plans to build canvas apps that will be used within Microsoft Teams.
> You need to identify the platform based on the design considerations.
>
> To answer, drag the appropriate platforms to the correct design considerations. Each platform may be
> used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to
>
> view content.
> NOTE: Each correct selection is worth one point.
> Answer Area
> Platforms Design consideration Platform
> Limit the number of rows to less than one million
> Dataverse that can exist for an application in Teams. Dataverse for Teams
>
> Ensure that professional developers have as many features
>
> Dataverse for Teams) available as possible, such as API access, plug-ins, and more,
>
> when developing applications for use within Teams.

**Correct answer:** 1. Dataverse for Teams; 2. Dataverse

### Question 59

**Type:** Single answer  
**PDF page(s):** 33, 34  
**Verdict:** Verified

**Question (OCR transcription):**

> You need to display sales orders greater than a specific threshold in a Power BI report.
>
> What should you use?
>
> v A filter _
>
> B. Power Query
>
> . Common Data Service
>
> D. connector

**Correct answer:** Filter

### Question 60

**Type:** Multiple answer  
**PDF page(s):** 34  
**Verdict:** Verified

**Question (OCR transcription):**

> You are a sales representative. You create a Power Bl report to visualize data from a Microsoft Excel
> workbook.
>
> Users need to be able to view and share the report.
>
> Which two actions should you perform? Each correct answer presents part of the solution.
>
> NOTE: Each correct selection is worth one point. A and D - correct answer
>
> A. Pin the report to a dashboard.
> B. Export the data.
> C Publish the dashboard.
>
> @ D. Share the dashboard.

**Correct answer:** A, D — Pin to a dashboard; share the dashboard

### Question 61

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 34, 35  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You create reports within Power BI to report on the status of a project. A manager asks you to share the
> reports with other team members. You decide to create a published app and set permissions to allow
> other team members to view the reports,
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes No
> The Power BI published app is stored within the Team site so ° °
>
> that others can install it.
> One of the other project managers installs and modifiers a ° °
>
> dashboard within the Power BI published app. The changes
> are automatically made into the original published app.
>
> No, No

**Correct answer:** 1. No; 2. No

### Question 62

**Type:** Drag-and-drop / matching  
**PDF page(s):** 35  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> A company plans to create an information portal that managers can use to view critical information
> about their teams.
>
> You need to recommend the type of Power BI components that the company should use.
>
> What should you recommend? To answer, drag the appropriate component types to the correct
> requirements. Each component type may be used once, more than once, or not at all. You may need to
>
> drag the split bar between panes or scroll to view content.
>
> NOTE. Each correct selection is worth one point.
>
> 'Component types Answer Area
> Dashboard } Requirement Component type
> Display data from a Microsoft Excel workbook that has f
> [ Report multiple into one chart.
>
> Display the top departmental goal metrics and alert users | Dashboard
> when specific thresholds targets are met. ae
>
> Display Sales charts that can be filtered by region. | Report

**Correct answer:** 1. Report; 2. Dashboard; 3. Report

### Question 63

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 35, 36  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> You have a Power BI report.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes No
> You can export data from a visualization in a Power BI fe)
> report.
>
> You can show the data behind a visual report on your
> screen without exporting the data.
> You can export data to view supporting data for a KPI. ey (e)
>
> Yes, yes, yes

**Correct answer:** 1. Yes; 2. Yes; 3. Yes

### Question 64

**Type:** Multiple answer  
**PDF page(s):** 36  
**Verdict:** Verified

**Question (OCR transcription):**

> You create a Power Bl dashboard that displays data from Dynamics 365 Customer Engagement.
> You need to share the Power BI dashboard with coworkers.
> What are three possible ways to achieve the goal? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> . Export the data into Common Data Service for others to manipulate in Power
> BI.
>
> D. Export the data to Microsoft Excel for coworkers to import and view in Power
> Bi.

**Correct answer:** 1. Workspace; 2. Publish as an app; 3. Embed reports

### Question 65

**Type:** Single answer  
**PDF page(s):** 36, 37  
**Verdict:** Verified

**Question (OCR transcription):**

> Your company has an on-premises Microsoft SQL Server database that contains legacy sales data. You
> must display information from the database in a new
>
> Power Apps app.
> You need to establish a secure connection between the database and the app.
>
> What should you use?
>
> A. Data source
>
> B. App
>
> D. Power Automate

**Correct answer:** On-premises data gateway

### Question 66

**Type:** Single answer  
**PDF page(s):** 37  
**Verdict:** Verified

**Question (OCR transcription):**

> A recent update has been made to a canvas app.
> The update causes usability issues.
> You need to roll back the app to a previous version.
>
> What should you do?
>
> B. Uninstall the app for all users and reinstall by using the package from a
> previous version.
>
> Deactivate the live app, import the previous version of the app, and then
> activate the app.
>
> D. Delete the app and create a new app based on the previous version.

**Correct answer:** Restore the previous app version

### Question 67

**Type:** Single answer  
**PDF page(s):** 37, 38  
**Verdict:** Verified

**Question (OCR transcription):**

> You are a district manager for a large retail organization. You train each store manager to use Power Bl to
> track sales and daily sales targets.
>
> A store manager remembers learning about the Analyze in Excel option but cannot find the option in
> their Power BI dashboard.
>
> You need to help the user resolve the issue.
>
> How should you advise the user?
>
> A. Install the Power BI Desktop app.
>
> B. Select the Spotlight button on the dashboard tile.
>
> . Subscribe to the dashboard and follow the email link.

**Correct answer:** Navigate to the underlying report

### Question 68

**Type:** Drag-and-drop / matching  
**PDF page(s):** 38  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> You are a district manager for a large retail company. You want to provide sales managers with deeper
>
> sales insights to ensure that they can make more informed decisions for their stores.
>
> Store managers must be able to view data in near real-time.
>
> You need to create and share a Power BI dashboard that can be used by the store managers.
>
> Which tools can you use? To answer, drag the appropriate reporting types to the correct requirements.
> Each reporting type may be used once, more than once, or not at all. You may need to drag the split bar
>
> between panes or scroll to view content. Create PBI dashboards that contain PBI service only
> a single store's sales information -_
>
> NOTE: Each correct selection is worth one point. _PBI Service only
>
> share that dashboard with your retail
> menagers
>
> Power BI Desktop only; Power BI service only

**Correct answer:** 1. Power BI service only; 2. Power BI service only

**Verification note:** Dashboards are created and shared in the Power BI service.

### Question 69

**Type:** Drag-and-drop / matching  
**PDF page(s):** 38, 39  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> A company uses Microsoft Excel workbooks to store consolidated sales data. Workbooks are stored on
>
> OneDrive for Business.
>
> Match each Power BI feature to its requirement. To answer, drag the appropriate features from the
> column on the left to its requirement on the right. Each option may be used once, more than once, or
> not at all.
>
> NOTE: Each correct match is worth one point.
>
> Features Answer Area
> Q&A Requirement Feature
> Mobile apps Enable user-friendly reporting on
>
> phones.
>
> Export to Excel
> Use natural language to query
>
> Get data from files and aggregate data.
>
> Features
>
> Export to Excel
>
> Get data from files _

**Correct answer:** 1. Mobile apps; 2. Q&A; 3. Get data from files

### Question 70

**Type:** Drag-and-drop / matching  
**PDF page(s):** 39, 40  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> Answer Area
> Requirement Feature
> Enable user-friendly reporting on litle mae
> phones.
> Use natural language to que
>
> guag' query Q&A
>
> and aggregate data.
>
> A company plans to display support call metrics on a screen that is visible to all call center staff.
>
> You need to recommend solutions to meet the company's requirements.
>
> What should you recommend? To answer, drag the appropriate components to the correct requirements.
>
> Each component may be used once, more than once, or not at all. You may need to drag the split bar
>
> between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Components
> Tile Theme
> Template App Alert
> Treemap DirectQuery
>
> Page Workspace
>
> Tile, Alert, directQuery
>
> Answer Area
> Requirement Component
>
> Display a chart with incoming calls versus wait time
> and pin the chart to a dashboard.
>
> Send a specific user a notification when the number of
> customer support calls waiting is over 20.
>
> Display metrics from different datasets that have
> related data.

**Correct answer:** 1. Tile; 2. Alert; 3. DirectQuery

### Question 71

**Type:** Multiple answer  
**PDF page(s):** 40, 41  
**Verdict:** Verified

**Question (OCR transcription):**

> You create a Power BI dashboard that displays Common Data Model data.
> You need to share the Power BI dashboard with coworkers and allow the coworkers to collaborate.
> What are two possible ways to achieve the goal? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> . Export the data to Microsoft Excel. Make required changes and then re-import
> the data.
>
> D. Create a Power Automate flow to export the data into a SQL Server database.

**Correct answer:** 1. Workspace; 2. Publish as an app

### Question 72

**Type:** Single answer  
**PDF page(s):** 41  
**Verdict:** Verified

**Question (OCR transcription):**

> You are using Dynamics 365 Sales.
>
> You need to create a Power BI report that includes customer office locations. The City and State columns
> must be combined to form one column on the report.What should you do?
>
> vA. Use Power Query Editor to merge columns.
>
> B. Import the data.
>
> C. Export data to Microsoft Excel.
>
> D. Create a view.

**Correct answer:** Merge queries in Power Query

### Question 73

**Type:** Drag-and-drop / matching  
**PDF page(s):** 41, 42  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> A company needs to create a series of mobile applications to empower their field engineers to
>
> accomplish several tasks with varying degrees of complexity.
>
> Match each app type to its definition. To answer, drag the appropriate app type from the column on the
>
> left to its definition on the right. Each app type may be used once, more than once, or not at all.
>
> NOTE: Each correct match is worth one point.
>
> App types Answer Area
>
> model-driven Petiniton App (ype
>
> aaa Quickly create apps for very complex business processes from data model-driven
> in Common Data Service with very little or no code.
>
> dataset
>
> canvas Create simple apps with a highly customizable user interface canvas
>
> layouts.

**Correct answer:** 1. Model-driven app; 2. Canvas app

### Question 74

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 42  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
> A user is starting to learn about Power Apps.
> Which objects should you use? To answer, select the appropriate options in the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Flow, conecter- flow

**Correct answer:** 1. Power Automate flow; 2. Connector

### Question 75

**Type:** Single answer  
**PDF page(s):** 42, 43  
**Verdict:** Verified

**Question (OCR transcription):**

> What is a benefit of deploying Microsoft 365 and Dynamics 365 apps in the same tenant?
>
> A. You do not need to manually back up data.
>
> ® . You can use Power BI to display data that comes from both environments.
>
> D. You can implement Single Sign-On (SSO).

**Correct answer:** D — Single sign-on (SSO)

### Question 76

**Type:** Single answer  
**PDF page(s):** 43  
**Verdict:** Verified

**Question (OCR transcription):**

> A company runs a call center to handle customer support inquiries.
>
> The company tracks metrics including the number of incoming calls and call resolution rates. The
>
> company wants to display the metrics on a shared screen that is visible to all call center staff.
> You need to recommend a visualization solution for the company.
>
> Which Power Platform feature should you recommend?
>
> A. Al Builder
>
> B. Power Automate
>
> C. Power Apps
>
> ~ D. Power Bl

**Correct answer:** Power BI

### Question 77

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 43, 44  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You are a regional sales manager for a large internet retailer. You create a series of Power BI reports and
>
> dashboards to help sales associates be more productive and increase sales.
> Sales are not increasing as expected.
>
> You need to determine if the new reports are being used and send emails to sales associates to provide
> guidance on how to use the reports and dashboards.
>
> Which features should you use? To answer, select the appropriate options in the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Requirement
>
> Send an email to the sales associates v
> on a predetermined schedule. tsa ---|
>
> Export
>
> Favorites
>
> Publisher
> Quantify the adoption usage from lv
> the sales associates. Explore
>
> Favorites
>
> [pane ment inspector

**Correct answer:** Subscribe and Usage metrics

### Question 78

**Type:** Multiple answer  
**PDF page(s):** 44, 45  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating Power BI reports.
> You need to choose which filters you can use for reports.
> Which three types of filters can you use? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> . database
>
> E. external

**Correct answer:** A, B, D — Drill-down, automatic, manual

### Question 79

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 45, 46  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> You are building Power BI visualizations for a team.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statements Yes No
> Power BI can only retrieve data from up to two different sources O (e)
> for each dashboard.
> Power BI visualizations can be used in canvas apps andmodel O e)
> driven apps.
> Power BI can display charts and list boxes on dashboards. (e) (e)
>
> No, Yes, Yes

**Correct answer:** 1. No; 2. Yes; 3. Yes

### Question 80

**Type:** Single answer  
**PDF page(s):** 46  
**Verdict:** Verified

**Question (OCR transcription):**

> 'A manufacturing company uses Internet of Things (IoT) devices to monitor the temperature in different
>
> parts of their warehouse.
>
> You need to view near real-time information from the loT devices in Power BI Service dashboards.
>
> Which tool should you use?
>
> A. Scheduled refresh dataset
>
> YB. Streaming dataset
>
> C. Content Pack dataset
>
> D. Power BI dataflows
>
> E. Quick Insights

**Correct answer:** B — Streaming dataset

**Verification note:** This is the historical near-real-time Power BI answer; streaming semantic models are now on a retirement path.

### Question 81

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 46, 47  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You have a Power BI report with a page named RevReceived. The page shows gross revenue received by
>
> your company. You want to create an almost identical page that shows net revenue instead of gross
>
> revenue.
>
> What should you do? To answer, select the appropriate option in the answer area.
>
> Answer Area
>
> You should
>
> modify the RevReceived page
>
> import the RevReceived page.
> copy the visuals from RevReceived to a new page.
>
> cecReceived pat

**Correct answer:** Duplicate the page, then update the duplicate

### Question 82

**Type:** Drag-and-drop / matching  
**PDF page(s):** 47  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A company plans to implement Power BI to analyze retail operations data.
> You need to recommend solutions for the company.
>
> Which Power BI components should the company use? To answer, drag the appropriate Power Bl
> components to the correct requirements. Each Power BI component may be used once, more than once,
>
> or not at all. You may need to drag the split bar between panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Power BI components Answer Area
>
> Requirement Power BI component
> Allow users to set and receive alerts when data
> changes beyond specified limits.
>
> View and filter data and export data to Microsoft
> Excel for further manipulation and analysis.
>
> dashboards
>
> DashBoards, reports

**Correct answer:** 1. Dashboards; 2. Reports

### Question 83

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 47, 48  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You are creating Power BI visualizations.
>
> You need to display the visuals where a user can perform each function.
>
> Which solution should you use? To answer, select the appropriate option in the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Requirement Solution
>
> Make decisions by analyzing high-level KPIs. vy.
> Power BI service
>
> Power BI Desktop
>
> Power BI dashboards
>
> Drill down into the details of a visual.
> Power BI reports
>
> Power BI Desktop
>
> Power BI dashboards
>
> Power BI dashboard, Power BI Reports

**Correct answer:** 1. Dashboard; 2. Report

### Question 84

**Type:** Single answer  
**PDF page(s):** 48  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is using Power BI.
> The company wants to see which data connectors are available for building dashboards.
> You need to evaluate the available connectors.
>
> What should you use to see all the available connectors?
>
> A. Power Bl Workspace
>
> B. Common Data Service
>
> C. Power BI Dataflows
>
> D. Power Platform admin center _ -
>
> Y E. Power Bl Desktop ]

**Correct answer:** Power BI Desktop

### Question 85

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 48, 49  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> A company is using Power BI.
> The company plans to analyze a large number of datasets.
> D ig it@hacompaay i edricerned that this may negatively impact performance.
> You need to identify and implement features to mitigate any performance issues.
> Which features should you use? To answer, select the appropriate options in the answer area.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Requirement
> Improve performance by reducing table size.
>
> Cache data locally on a user's device.

**Correct answer:** 1. Aggregations; 2. Import

### Question 86

**Type:** Single answer  
**PDF page(s):** 49, 50  
**Verdict:** Corrected

**Question (OCR transcription):**

> You create a set of dashboards and reports for a project team that combines data from different sources
>
> in Power BI. Some of the data is considered sensitive.
> You need to distribute the dashboards and reports securely to the team.
>
> What should you create?
>
> A. a custom data connector
>
> C. a Microsoft flow

**Correct answer:** B — A published Power BI app

**Verification note:** A workspace is for collaboration; a published app is the secure distribution vehicle for consumers.

### Question 87

**Type:** Multiple answer  
**PDF page(s):** 50  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating visuals in Power Bl.
>
> You create area charts, pie charts, and donut charts that use your company's data.
>
> You need to display the charts to others at the company.
>
> Which two objects can you add the charts to? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Power BI service
>
> YB. Power BI reports |
>
> C. Power BI desktop
>
> [ ~_ D. Power BI dashboards

**Correct answer:** Reports and dashboards

### Question 88

**Type:** Drag-and-drop / matching  
**PDF page(s):** 50, 51  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> A company is implementing Power BI to track sales.
>
> Each of the company's regions has specific quarterly and yearly sales goals.
> You need to build a Power BI dashboard for various reporting requirements.
>
> Which chart types should you use? To answer, drag the appropriate chart types to the correct
> requirements. Each chart type may be used once, more than once, or not at all. You may need to drag
>
> the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Chart types Requirement Chart type
> Donut Show the quarterly sales total to date in relation
> to the sales goal. KPis
> KPIs View the sales trend by month of the sales year inne
> Line chart to date for all regions.
> View the year-to-date sales as a percentage Donut
> Matrix by region.

**Correct answer:** 1. KPI; 2. Line chart; 3. Donut chart

### Question 89

**Type:** Drag-and-drop / matching  
**PDF page(s):** 51, 52  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> You create a Power BI dashboard.
>
> Match each option to its function. To answer, drag the appropriate option from the column on the left to
>
> its function on the right. Each option may be used once, more than once, or not at all.
>
> NOTE: Each correct match is worth one point.
>
> Products Answer Area
>
> Requirement
>
> Embed Ensure that coworkers can see the dashboard.
>
> Add a report tile to the dashboard.
>
> Product
>
> Share
>
> Display data from Microsoft Excel in the dashboard.
>
> Get Data
>
> Pin

**Correct answer:** 1. Share; 2. Pin; 3. Get Data

### Question 90

**Type:** Multiple answer  
**PDF page(s):** 52  
**Verdict:** Verified

**Question (OCR transcription):**

> You are using Dynamics 365 Sales.
>
> You need to pull data into a Power BI report for your team. The City and State columns must be
>
> combined to form one column on the report.
> Which function would you use? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> B. Import the data.
>
> Export data to Microsoft Excel.
>
> D. Create a view.

**Correct answer:** Merge queries in Power Query

### Question 91

**Type:** Single answer  
**PDF page(s):** 52, 53  
**Verdict:** Verified

**Question (OCR transcription):**

> A carpet cleaning company uses Dynamics 365 Sales.
>
> The process for entering customer information during onsite sales calls is very complicated. The
> company wants a simplified screen that allows salespeople to capture the customer name, phone
> number, and other information while speaking to the customer.
>
> You need to recommend a solution that works on various types of mobile devices.
>
> What should you recommend?
>
> A. Microsoft Dataverse
>
> B. Power Automate
>
> O alBuilder

**Correct answer:** Canvas app

### Question 92

**Type:** Multiple answer  
**PDF page(s):** 53  
**Verdict:** Verified

**Question (OCR transcription):**

> A company using Power Platform is implementing Power BI. The company plans to connect to several
> data sources and create reports and dashboards.
>
> You need to identify the data sources they can connect to.
> Which two data sources should you use? Each correct answer presents a complete solution.
>
> Note: Each correct selection is worth one point.
>
> . Microsoft OneNote
>
> D. Microsoft Word

**Correct answer:** Microsoft Excel and Dataverse

### Question 93

**Type:** Single answer  
**PDF page(s):** 53, 54  
**Verdict:** Verified

**Question (OCR transcription):**

> You create a multi-page Power BI report for an organization.
>
> You MUST enable salespeople in the organization to use the report to view data relevant to their sales
> region only.
>
> You need to enable security for the report.
>
> What should you use?
>
> A. sensitivity labels
> B. Microsoft Azure Active Directory
> . Microsoft Trust Center
>
> D. data loss prevention policies

**Correct answer:** Row-level security

### Question 94

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 54  
**Verdict:** Verified

**Question (OCR transcription):**

> HotsPoT- -_ tudo que que é customer self service = yes
>
> You are building a Power Apps portal by using the Customer Self-Service template.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Statement Yes No
> The Customer Self-Service portal supports Azure AD fe) fe)
> authentication.
> The Customer Self-Service portal has multi-language support. fe) O
> The Customer Self-Service portal supports web forms. re) ro)
>
> Yes, Yes, Yes

**Correct answer:** 1. Yes; 2. Yes; 3. Yes

### Question 95

**Type:** Single answer  
**PDF page(s):** 54, 55  
**Verdict:** Verified

**Question (OCR transcription):**

> User1 creates several Power BI dashboards for a company. User1 shares a dashboard with User2 who
> works for another company. User2 reports that she is able to view the dashboard. User2 forwards the
>
> email containing the dashboard sharing link that she received to User3.
>
> User3 reports that he receives an error message when he selects the link to view the dashboard. User3
>
> can view a dashboard that he has created.
> You need to determine why User3 receives an error.
>
> What is the issue?
>
> A. User3 is running an out-of-date version of Power BI and must upgrade to a
>
> newer version.
>
> B. User2 is signed in to the dashboard and must sign out before User3 can sign
>
> in.
>
> YC. Forwarding the email does not share the dashboard with User3. "
>
> D. User1 is signed in using the wrong organizational account for Power Bl.

**Correct answer:** Forwarding the email does not grant dashboard access

### Question 96

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 55  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> A company plans to implement Power Bl.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statements Yes No
> Power BI Report Builder is the only tool used to create reports to be published to the Power BI service. fo
> Power BI service can include calculated columns. ° oO
> Power Bi Desktop can include calcuated columns. modeling lo °

**Correct answer:** 1. No; 2. Yes; 3. Yes

### Question 97

**Type:** Single answer  
**PDF page(s):** 55, 56  
**Verdict:** Verified

**Question (OCR transcription):**

> You are developing reports for a company.
> You must create visualizations that include the following data:
>
> Invoices due from a third-party enterprise resource planning (ERP) system
> Number of calls made to the client from Microsoft Dataverse
>
> Microsoft Excel file data
> The reports must be displayed in a single page.
> You need to create the visualizations.
>
> What should you use?
>
> A. deployment pipelines
>
> B. tables
>
> ¢. columns
>
> _ D. dashboards

**Correct answer:** Dashboard

### Question 98

**Type:** Single answer  
**PDF page(s):** 56  
**Verdict:** Verified

**Question (OCR transcription):**

> You are using the Power BI service to view a visual on a report that has been shared with you.
> You need to add the visual to a dashboard as a tile.
>
> Which action should you perform?
>
> O Copy
>
> D. Spotlight

**Correct answer:** Pin

### Question 99

**Type:** Single answer  
**PDF page(s):** 56, 57  
**Verdict:** Verified

**Question (OCR transcription):**

> A company manages a chain of retail stores. The company stores a list of retail store names and numbers
> in one Power BI table. The company stores sales transaction data including a transaction ID in another
>
> table. The transaction ID includes the store number.
> You need to show the store name for all retail transactions in all Power BI reports.
>
> Which tool should you use?
>
> YA oreo ome |
>
> B. Power BI Service
>
> . Microsoft Excel
>
> D. Data Connector

**Correct answer:** Power Query Editor (Query Editor)

### Question 100

**Type:** Drag-and-drop / matching  
**PDF page(s):** 57, 58  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A company is using Power BI to build visualizations.
>
> The company's IT support team needs to know when to install Power BI Desktop on users' computers
>
> and where the Power Bl Service is enough to perform tasks.
> You need to recommend solutions for the company.
>
> What should you recommend? To answer, drag the appropriate components to the correct requirements
> Each component may be used once, more than once, or not at all. You may need to drag the split bar
>
> between panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Tools Answer Area
>
> Power BI Service only <a ia
>
> Power BI Desktop only a =
> Create reports. Tool
>
> Power BI Desktop or Power BI Service Create calculated columns. Tool
> Configure security. r ae Tool _
> Configure sharing. Tool
>
> Power BI service only, Both, beth, PewerBtserviee-onty,; Power BI service only
> desketop both

**Correct answer:** 1. Power BI service only; 2. Desktop or service; 3. Power BI Desktop only; 4. Desktop or service; 5. Power BI service only

**Verification note:** The third mapping reflects the exam-era feature set; web modeling capabilities have since expanded.

### Question 101

**Type:** Single answer  
**PDF page(s):** 58  
**Verdict:** Verified

**Question (OCR transcription):**

> A company creates a Power BI report for vendors to view purchase orders.
> Vendors must view the report by using their own tenant environment.
> You need to use a Power BI technology to allow vendors to view the report.
>
> What should you use?
>
> A. dashboard
>
> B. mobile app
>
> v C. template app
>
> D. workspace

**Correct answer:** Template app

### Question 102

**Type:** Drag-and-drop / matching  
**PDF page(s):** 58, 59  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> You create and share two Power BI dashboards with an accountant. You configure the dashboards to
>
> update daily.
>
> DashboardA shows a lock when the accountant tries to view the dashboard. DashboardB displays
> outdated data.
>
> You need to identify the issues for the dashboards.
>
> What are the issues? To answer, drag the appropriate issues to the correct dashboards. Each issue may
> be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll
>
> to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Issues Answer Area
>
> cana ime
>
> va
> ee

**Correct answer:** 1. Dashboard A — permissions on the dataset/semantic model; 2. Dashboard B — scheduled refresh has not run

### Question 103

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 59, 60  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
>
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statements Yes
> You can connect to external resources with Power BI Desktop but °
> not with the Power BI service.
> You can build and edit Power BI reports by using Power BI °
> Desktop or the Power Bi service.
> The only way to distribute a Power BI Desktop report is by Oo
> sending the PBIX file to others.
>
> No, Yes, No

**Correct answer:** 1. No; 2. Yes; 3. No

### Question 104

**Type:** Single answer  
**PDF page(s):** 60, 61  
**Verdict:** Verified

**Question (OCR transcription):**

> You create a Power App portal.
>
> When a user signs into the portal the following error displays: User not found
> You confirm that the user's sign in information is correct.
>
> You need to determine the cause of the error.
>
> What should you do?
>
> @ A. Disable custom error messages.
> B. Create a custom error message.
> C. Enable diagnostic tools in Lifecycle Services.
>
> D. Enable Maintenance mode.

**Correct answer:** A — Disable custom errors to expose detailed errors

### Question 105

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 61  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A company plans to build Power Apps portals.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes No
> You must use standard templates for building portals. O!} |O
>
> You can test portals in non-prodcution environments and
> then migrate the portals into production environments. ce) 12)
>
> When transitioning to the new version of a portal, you can
> display a customizable maintenance page until the new oO Oo
> portal is ready to be used.
>
> No, Yes, Yes

**Correct answer:** 1. No; 2. Yes; 3. Yes

### Question 106

**Type:** Drag-and-drop / matching  
**PDF page(s):** 61, 62  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A company is building a Power Apps portal.
> You need to select out-of-the-box portal types to meet the company's requirements.
>
> Which portal types should you use? To answer, drag the appropriate portal types to the correct
> requirements. Each portal type may be used once, more than once, or not at all. You may need to drag
>
> the split bar between panes or scroll to view content.
>
> Portal types
> partner portal
> community portal
>
> portal from blank
>
> customer self-service portal

**Correct answer:** 1. Partner portal; 2. Community portal

**Verification note:** Historical Power Apps portal templates.

### Question 107

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 62, 63  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> Answer Area
> Requirement
>
> Collaboratively onboard new
> suppliers and distributors.
>
> Publish a blog post announcing new
> suppliers.
>
> Portal type
>
> partner portal
>
> community portal
>
> A user is trying to understand the differences between the various ways apps can be built by using
>
> Power Apps.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement
>
> You can embed canvas apps in model-driven apps.
>
> A Power Apps portal can use only one data source.
>
> You must use Power BI to create reports in model-
>
> driven apps.
>
> Yes, No, No
>
> Yes

**Correct answer:** 1. Yes; 2. No; 3. No

### Question 108

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 63, 64  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A user is creating their first canvas app in Power Apps.
>
> The user does not know what types of controls they can include.
> You need to recommend solutions for the user.
>
> Which types of controls should you recommend using in Power Apps? To answer, select the appropriate
> options in the answer area.
>
> Answer Area
> Scenario Control
>
> View the date, time, and location of upcoming internal Ly]
>
> meetings. Meeting-screen template
> List box
>
> Create a meeting request from within the app. v
> Gallery
> List box
>
> Drill down into customer contact records in Dynamics 365 im
>
> Sales to view a photo of a customer you are meeting. a
> Addpictue =

**Correct answer:** 1. Gallery; 2. Meeting-screen template; 3. Image

### Question 109

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 64, 65  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You are designing a Power Apps solution that allows users to upload a status report directly to the
>
> company Microsoft SharePoint project management site from their mobile device.
> For each of the following statements, select Yes it the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes No
> You should build a model-driven app in Power Apps. O re)
> You should build a canvas app in Power Apps. (@) (@)
> Users must download and run the Power Apps mobile oO oO
>
> application to use the solution.
>
> Answer Area
> Statement Yes No
> You should build a model-driven app in Power Apps. Oo fe}
> You should build a canvas app in Power Apps. 'O}| oO
> Users must download and run the Power Apps mobile |O} @)
>
> application to use the solution.

**Correct answer:** 1. No; 2. Yes; 3. Yes

**Verification note:** The final “must download” statement is exam-era behavior for this mobile scenario.

### Question 110

**Type:** Single answer  
**PDF page(s):** 65  
**Verdict:** Verified

**Question (OCR transcription):**

> 'A company uses Dynamics 365 Supply Chain Management.
> The company wants to build customer user interfaces that add additional functionality.
> You need to recommend a solution for the company.
>
> What should you recommend?
>
> A. Power BI
>
> O AlBuilder
>
> D. Microsoft Flow

**Correct answer:** B — Power Apps canvas app

### Question 111

**Type:** Multiple answer  
**PDF page(s):** 65  
**Verdict:** Corrected

**Question (OCR transcription):**

> A company's customer-facing applications must comply with Global Data Protection Regulations (GDPR)
> regulations.
>
> You need to recommend actions to help ensure GDPR compliance.
> Which two features should the company use? Each correct answer presents part of the solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Force a user to update security questions after a specific amount of time.
>
> . Block users who are identified as minors. im

**Correct answer:** B, C — Capture dated consent; block identified minors

**Verification note:** Automatic deactivation after six months is not by itself a GDPR requirement, while consent and age restrictions directly address lawful processing.

### Question 112

**Type:** Drag-and-drop / matching  
**PDF page(s):** 65, 66  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> You need to create a mobile application which will allow sales associates to enter customer sales leads.
>
> Which four actions should you perform in sequence? To answer, move the appropriate actions from the
> list of actions to the answer area and arrange them in the correct order.
>
> Actions Answer Area
>
> Go to the Office 365 admin center. Create a new Power Apps app.
>
> Add components to the app.
>
> Save the app.
>
> (CJC)
>
> Publish the app.
>
> O
>
> Add flows to the app.

**Correct answer:** 1. Create the app; 2. Add components; 3. Save; 4. Publish

### Question 113

**Type:** Multiple answer  
**PDF page(s):** 66, 67  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Power Apps canvas apps.
>
> When a user opens Power Apps Studio in a browser and selects Apps | can edit, they do not see an app
> that they need to modify.
>
> You need to determine why the user cannot see the app.
> What are three possible reasons? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> E The environment does not have a Microsoft Dataverse database.

**Correct answer:** 1. Incorrect environment; 2. User is not a co-owner; 3. App was not shared

### Question 114

**Type:** Drag-and-drop / matching  
**PDF page(s):** 67  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> You create a model-driven app.
>
> The app is ready to be shared.
>
> You need to complete the process required to set the app up to be shared.
>
> How should you complete the process for setting up the app to be shared? To answer, drag the
> appropriate setting to the correct drop targets. Each source may be used once, more than once, or not at
>
> all. You may need to drag the split bar between panes or scroll to view content.
>
> Processes Answer Area
>
> Step Process
> 1 Select an app from the Power Apps list. |
>
> 2 | Select Share.
>
> 3 [Select the app and select a security role, |
>
> 4 [Select a user and choose a security role.

**Correct answer:** 1. Open the app list; 2. Select Share; 3. Select app/security role; 4. Select user and assign the role

### Question 115

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 67, 68  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> You are creating a model-driven app.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statements Yes No
> To add entities to an app, entities are dragged onto the app canvas =O (eo)
> from the components area.
> View definition is created in the component area of the app ie) °
> designer.
> You must save, validate, and publish your app for others to see the O° O°
> changes.
>
> No,No, Yes

**Correct answer:** 1. No; 2. No; 3. Yes

### Question 116

**Type:** Single answer  
**PDF page(s):** 68, 69  
**Verdict:** Verified

**Question (OCR transcription):**

> You create a canvas app that allows contractors to submit time they work against a project.
>
> Contractors must be able to use the canvas app to enter time. Contractors must not be able to perform
>
> any other actions in the app.
> You need to configure permissions for the contractors.
>
> Which type of permissions should you use?
>
> A. application-level
>
> B. task-level
>
> record-level
>
> D. field-level

**Correct answer:** Task-level permissions

**Verification note:** Historical terminology used by the source.

### Question 117

**Type:** Drag-and-drop / matching  
**PDF page(s):** 69, 70  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> You are creating a model-driven app to track requests for quotes.
>
> The app must use the following navigation structure:
> Sales -
>
> Sales Log
>
> Request for Quotes
> Projects
>
> Settings
> Customers
>
> Product Lines
>
> Sales Territories
> Administration -
>
> User Admin
> Users
>
> Roles
>
> You need to create the app navigation.
>
> Which sitemap component types should you use? To answer, drag the appropriate component types to
>
> the correct navigation elements. Each component type may be used once, more than once, or not at all.
>
> You may need to drag the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Component types Answer Area
> Area Navigation element
> Group Administration
> Subarea Sales log
>
> Customers
>
> Component type
>
> | Group
>
> Subarea
>
> | Subarea

**Correct answer:** 1. Administration — Area; 2. Sales Log — Group; 3. Customers — Subarea

### Question 118

**Type:** Single answer  
**PDF page(s):** 70  
**Verdict:** Verified

**Question (OCR transcription):**

> You have a Microsoft Excel workbook that contains a list of tasks for a project. You store the file in
>
> OneDrive for Business.
> You need to create a canvas app that allows team members to update the status of their tasks.
>
> What should you use?
>
> ~ A. the Generate an app from data feature _
>
> B. a custom action in Common Data Service
>
> C. Power Apps Checker
>
> D. the Open entity data in Excel feature

**Correct answer:** Generate an app from data

### Question 119

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 70, 71  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You create a canvas app by using the Generate from data feature. The app connects to a Microsoft
>
> SharePoint list.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes
>
> A screen is generated that contains a browsable |O|
> list of SharePoint list items.
>
> A screen is generated that allows users to update xe)
> SharePnint list item<¢

**Correct answer:** 1. Yes; 2. Yes

### Question 120

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 71, 72  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes
>
> Power Apps apps can run only mobile devices. O
> Power Apps can run only with Dynamic 365 products.
>
> If a user runs a Power Apps app that accesses
> information to which the user does not have access,
> the app grants the user permissions.
>
> No

**Correct answer:** 1. No; 2. No; 3. No

### Question 121

**Type:** Single answer  
**PDF page(s):** 72  
**Verdict:** Verified

**Question (OCR transcription):**

> translate text generated within the Power Apps app in near real-time.
> = Microsoft azure cognitive services
>
> A company has a Power Apps app that is used by most employees. The company is expanding to other
>
> countries/regions.
>
> You need to recommend a solution to translate text generated within the Power Apps app in near real-
>
> time.
>
> What should you recommend?
>
> A. Microsoft Azure Synapse Analytics
>
> Y B. Microsoft Azure Cognitive Services
>
> C. Common Data Service connector
>
> D. Power BI

**Correct answer:** Azure Cognitive Services Translator

### Question 122

**Type:** Single answer  
**PDF page(s):** 72, 73  
**Verdict:** Verified

**Question (OCR transcription):**

> A company plans to create a canvas app that connects to three databases with different proprietary
>
> database formats.
>
> What is the minimum number of connectors required?
>
> AO 3 ==> three databases with
> different proprietary database
> formats = 3 distinct connectors

**Correct answer:** Three connectors

### Question 123

**Type:** Drag-and-drop / matching  
**PDF page(s):** 73  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> A company plans to implement Power Apps in a Power Platform environment.
>
> You need to implement other required components.
>
> Match each option to its function. To answer, drag the appropriate option from the column on the left to
>
> its function on the right. Each option may be used once, more than once, or not at all.
>
> NOTE: Each correct match is worth one point.
>
> Products
>
> Answer Area
>
> Function
>
> custom connector
>
> Implement user authentication.
>
> Send data to a Microsoft OneNote
> notebook in the same tenant.
>
> model-driven app
>
> canvas app

**Correct answer:** 1. Microsoft Azure; 2. Power Automate

### Question 124

**Type:** Drag-and-drop / matching  
**PDF page(s):** 73, 74  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> Accompany plans to create canvas apps.
>
> Product
>
> Microsoft Azure
>
> Microsoft Flow
>
> What is the minimum number of connectors required? To answer, drag the appropriate number of
>
> connectors to the correct drop scenarios. Each number of connectors may be used once, more than
>
> 'once, or not at all. You may need to drag the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Number of Answer Area
>
> connectors
>
> lil
>
> 3,1, 1
>
> Scenario
> Synchronize data with three data sources that use
> different proprietary database formats.
>
> Create three Power Apps apps that each display
> data from a Microsoft SharePoint list.
>
> Create three Flows that each copy data to
> Microsoft Azure Data Lake on different schedules.
>
> Number of
> connectors
>
> UL

**Correct answer:** 1. Three; 2. One; 3. One

### Question 125

**Type:** Drag-and-drop / matching  
**PDF page(s):** 74, 75  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A medical office has a model-driven app that uses Microsoft Dataverse.
>
> You plan to create a screen that allows users to capture information about doctors. The screen must
>
> provide users the ability to enter or select the following information:
>
> a place to enter doctor profile data that is not part of the account table or the contact table
> a place to enter the doctor's specialty in the profile form
>
> a column for insurance with the ability to pick one of 10 different insurance companies
> You need to store the captured data in Common Data Service.
>
> What should you use to store the data? To answer, drag the appropriate components to the correct
> requirements. Each component may be used once, more than once, or not at all. You may need to drag
>
> the split bar between panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Options Answer Area
>
> - Requirement Option
> Field Store additional doctor profile data. Option
> Option set Store information about the doctor's specialty. Option
> Record Select an insurance company. Option
>
> Entity, Field and option set

**Correct answer:** 1. Table (entity); 2. Column (field); 3. Choice (option set)

### Question 126

**Type:** Single answer  
**PDF page(s):** 75  
**Verdict:** Verified

**Question (OCR transcription):**

> You create a Power Apps canvas app.
> You need to ensure that your coworkers can run the app.
>
> What should you do?
>
> ~ A. Share the app. _
>
> B. Send the URL for the app to coworkers.
> C. Publish the app.
>
> D. Create a Flow for the app.

**Correct answer:** Share

### Question 127

**Type:** Single answer  
**PDF page(s):** 75, 76  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Microsoft 365, Power Platform, and Dynamics 365. You do not assign permissions to any
>
> licensed users.
>
> Users are able to create and edit Power Apps canvas apps.in which environment are users creating and
> editing the apps?
>
> A. Production
> B. Default
>
> C. Sandbox
>
> <p

**Correct answer:** Default environment

### Question 128

**Type:** Multiple answer  
**PDF page(s):** 76  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses a model-driven app for their mobile sales activities.
>
> The company wants to modify the view that is used for sales orders. You MUST apply a new default filter
> to the view. You MUST also modify the default sorting for sales orders.You need to make the changes to
> the view.In which three locations can you make the changes? Each correct answer presents a complete
>
> solution.NOTE: Each correct selection is worth one point.
>
> Y A. Power Apps site "
> S )
>
> Y B. Solution Explorer "Most voreD
>
> €. Microsoft Azure DevOps
>
> YD. App Designer seost
> % JS
>
> E. Microsoft Visual Studio

**Correct answer:** 1. Power Apps maker portal; 2. Solution Explorer; 3. App Designer

### Question 129

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 76, 77  
**Verdict:** Corrected

**Question (OCR transcription):**

> HOTSPOT -
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes No
> You can embed a canvas app ina Microsoft Forms form to collect
> user feedback.
>
> You can embed a canvas app within a Microsoft Excel worksheet ° fo)
> to allow users to interact with data in a structured way.
>
> You can embed a canvas app within a Power Platform model- ° fe)
> driven app.
>
> ° fe)
>
> NO, yes, yes

**Correct answer:** 1. No; 2. No; 3. Yes

**Verification note:** A canvas app can be embedded in a model-driven form. Current Microsoft documentation does not support the claimed Microsoft Forms or Excel worksheet embedding; the source’s Excel “Yes” is outdated or erroneous.

### Question 130

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 77  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Yes No
> You can customize buttons and menu items in canvas apps fe} To)
> but cannot reorder the screens. ,
> You can add sections to your canvas app forms at any time. O fe)
> Screens can only be added when the canvas app is created.
> You can edit buttons in a Power Apps app only by using O fe)
>
> a third-party application.

**Correct answer:** 1. No; 2. No; 3. No

### Question 131

**Type:** Not present in source  
**PDF page(s):** —  
**Verdict:** Source issue

**Question (OCR transcription):**

> _The source PDF contains no question body for this number._

**Correct answer:** Source omission

**Verification note:** The PDF jumps from question 130 to 132; no question body or answer is present.

### Question 132

**Type:** Multiple answer  
**PDF page(s):** 77, 78  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating a canvas app that uses one connector.
> Which two objects are provided by the connector? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. customizations
> B. data sources
>
> E. triggers

**Correct answer:** C, E — Actions and triggers

### Question 133

**Type:** Drag-and-drop / matching  
**PDF page(s):** 78  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> A company is considering implementing PowerApps to help manage business processes. Users are trying
> to understand the purposes and benefits of PowerApps components.
>
> Match each benefit to its tool. To answer, drag the appropriate benefit from the column on the left to its
> tool on the right. Each benefit may be used once, more than once, or not at all.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Tools
>
> Benefit Tool
>
> canvas apps Easy data integration Ci
> Al Builder Low code / no code across applications CL]
> Power Auvomate Easy to customize front end i
>
> Conectores, power automate and canvas apps

**Correct answer:** 1. Connectors; 2. Power Automate; 3. Canvas app

### Question 134

**Type:** Drag-and-drop / matching  
**PDF page(s):** 78, 79  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A company plans to build new apps for the business to allow employees to work more efficiently.
> You need to recommend the appropriate types of Power Apps to meet the company's requirements.
>
> What should you recommend? To answer, drag the appropriate app types to the correct requirements.
> Each app type may be used once, more than once, or not at all. You may need to drag the split bar
> between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> App types Answer Area
>
> Requirement App ype
> Build mobile apps that use cameras and location data.
>
> Build a feature that detects objects in images. Al Builder

**Correct answer:** 1. Canvas app; 2. AI Builder

### Question 135

**Type:** Single answer  
**PDF page(s):** 79  
**Verdict:** Verified

**Question (OCR transcription):**

> 'A Power Apps developer has sufficient permissions to create apps, connections, and flows.
>
> 'The developer does not have permissions needed to access company data. main security role in Power apps
> = CDS user
>
> You need to grant the developer access to company data for an app.
>
> Which predefined security role should you assign to the developer?
>
> A. Environment Maker
>
> B. system Customizer
>
> D. Delegate

**Correct answer:** Dataverse User/Basic User security role

### Question 136

**Type:** Multiple answer  
**PDF page(s):** 79, 80  
**Verdict:** Verified

**Question (OCR transcription):**

> You create a model-driven app for a department.
> You need to make the model-driven app available to other department members,
> Which two methods should you use? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> C. Publish the app to AppSource.
>
> D. Deploy the application to other user's instances through PowerShell.

**Correct answer:** Share the app and assign the required security role

### Question 137

**Type:** Single answer  
**PDF page(s):** 80  
**Verdict:** Verified

**Question (OCR transcription):**

> A company has an online store to sell toys. The volume of order tracking requests has increased.
>
> You need to allow customers to use an interactive interface on the website to request order tracking
> information. Which technology should you use?
>
> A. Power Automate flows
> B. Power Bl
>
> C. Customer Service Insights
>
> YD. Copilot Studio copilots ee)

**Correct answer:** Copilot Studio (Power Virtual Agents)

### Question 138

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 80, 81  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A tutoring company has developed and deployed a model-driven app for the administration staff and a
> canvas app for teachers.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Statements Yes No
> te)
>
> Teachers can access the canvas app by using desktops and mobile (|
> devices.
>
> Only assignments of security roles are required for canvas app (@) |O|
> access.
> Administration staff can create personal views and dashboards in |o] fe)
>
> the model-driven app.

**Correct answer:** 1. Yes; 2. No; 3. Yes

### Question 139

**Type:** Single answer  
**PDF page(s):** 81  
**Verdict:** Corrected

**Question (OCR transcription):**

> You complete development and testing of a new canvas app. You add users to a security team and
> assign the security team permissions to the app.
>
> Users are unable to view the app.
> You need to ensure that users can launch and use the app.
>
> What should you do?
>
> A. Add the application to the solution.
>
> B. Publish the application. "
>
> D. Add a Power Apps Component Framework (PCF) control to the application.

**Correct answer:** B — Publish the application

**Verification note:** The users and permissions are already configured; publishing makes the tested version available. Sharing again is not the missing step.

### Question 140

**Type:** Single answer  
**PDF page(s):** 81, 82  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating a canvas app to enable users to order tickets. You create an input field for users to input
>
> the number of tickets to order.
>
> Users must order a maximum of four tickets and a minimum of two tickets. If a user enters a number
> except 2, 3, or 4, the input field must display in red. If a user enters the numbers 2, 3, or 4, the input field
>
> must display in green.
> You need to color the input field based on the user input.
>
> What should you use?
>
> B. gallery
>
> O connector
>
> D. calculated column

**Correct answer:** Formula

### Question 141

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 82  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> A company plans to implement Power Platform solutions.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Yes No
> Users can interact with canvas apps directly Ke; O
> in Microsoft SharePoint and Teams.
>
> Users can interact with model-driven apps O l¢ \
> directly in Microsoft SharePoint and Teams.

**Correct answer:** 1. Yes; 2. No

### Question 142

**Type:** Multiple answer  
**PDF page(s):** 82, 83  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is considering implementing Power Platform. The company must minimize development
>
> costs.
>
> For which three scenarios should you consider implementing Power Apps Portals? Each correct answer
>
> presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. acustomer support website that includes knowledgebase search and as Tara
> support for document uploads
>
> YB. a public website that supports multilingual communities with forums and
> blogs support
>
> C. a secure website for mobile users that is available only by using a VPN into the
> corporate network
>
> D. asecure website for vendors accessing data stored in Common Data Service ]
>
> E, an internal website for employees with limited access to Dynamics 365
> Finance data

**Correct answer:** A, B, D — Customer-support site with knowledge search/uploads; multilingual public community site; secure vendor site backed by Dataverse

### Question 143

**Type:** Drag-and-drop / matching  
**PDF page(s):** 83  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A company is building a model-driven app.
> You need to create and configure the objects needed for the app.
>
> Which component categories should you use? To answer, drag the appropriate component categories to
> the correct objects. Each component category may be used once, more than once, or not at all. You may
>
> need to drag the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Component
> categories Component
> Object category
> Ul . ; eet
> Relationship between applications | pata
> Data
> , Entry forms Ul
> Logic
> . Business rule process Logic
> Visualization
> Views to review similar information | Ul}

**Correct answer:** 1. Data; 2. User interface; 3. Logic; 4. User interface

### Question 144

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 83, 84  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You are creating a canvas app that will be used in several countries/regions.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes
>
> Canvas app authoring environment will adapt to the language
> setting of the author.
>
> When running a canvas app on a mobile device, the app
> adopts the app author's language.
>
> to the regional and language settings for a user's device.
>
> Yes, NO, N@yes
>
> (2)
> 12)
> Numbers and dates in Power Apps app automatically conform xq

**Correct answer:** 1. Yes; 2. No; 3. Yes

### Question 145

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 84, 85  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> A company publishes e-books for independent authors.
>
> The company wants to implement a Power Apps portal solution to make announcements about
>
> upcoming books to the general public.
> You need to recommend features for the company.
> Which features should you use? To answer, select the appropriate options in the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Requirement Action
> Ensure that book authors can securely access vv
> their data. Authenticate external users.
> Access data in Common Data Service.
> Browse content anonymously.
> Customize layouts.
> Ensure consistent page design across the A |
> website. Authenticate external users.
> Access data in Common Data Service.
> Use page templates.
> Browse content anonymously.
> Ensure that the public can access announcements |_ v)
> about upcoming books. Authenticate external users.
> Use page templates.
> Browse content anonymously.
>
> Authenticate external users, use page templates, Browse content anonymously

**Correct answer:** 1. Authenticate external users; 2. Page templates; 3. Anonymous access

### Question 146

**Type:** Drag-and-drop / matching  
**PDF page(s):** 85  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A company is building a Power Apps Portal.
>
> You need to select page components.
>
> Which components should you use? To answer, drag the appropriate components to the correct
> requirements. Each component may be used once, more than once, or not at all. You may need to drag
>
> the split bar between panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Components Answer Area
>
> - Reauiremen component
> Display a single record from
> [irame | Microsoft Dataverse.
>
> Display a list of records from a
>
> Microsoft SharePoint list.
>
> Display a list of records from
> Microsoft Dataverse.
>
> Form, list, list

**Correct answer:** 1. Form; 2. iFrame; 3. List

### Question 147

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 85, 86  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> A company plans to implement Power Apps.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes No
>
> Building Power Apps apps requires proficiency in
> JavaScript programming. e) |O}
>
> You must select one of the app templates to
> create an app. oO |O]

**Correct answer:** 1. No; 2. No

### Question 148

**Type:** Drag-and-drop / matching  
**PDF page(s):** 86, 87  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> You are assigning record level privileges for Power Apps and Model-Driven Apps.
>
> Which privilege should you use to ensure access for each scenario? To answer, drag the appropriate
> privileges to the correct requirements. Each privilege may be used once, more than once, or not at all.
>
> You may need to drag the split bar between panes or scroll to view content.
>
> Privileges Answer Area
> kppend Requirement Privilege
> Assign ] Allow users to grant access to a record they own to other Share
> users.
> | Share Grant ownership of a record to another user. | Assign
>
> Allow the users to associate the current record with another Repend
> record.

**Correct answer:** Share; Assign; Append

### Question 149

**Type:** Multiple answer  
**PDF page(s):** 87  
**Verdict:** Verified

**Question (OCR transcription):**

> You overwrite a Power Automate flow by editing the definition and saving the changes.
> You need to be able to revert a flow to the current state.
> Which two options can you use? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> B. Rename
>
> D. Share

**Correct answer:** A, C — Export and Save As

### Question 150

**Type:** Single answer  
**PDF page(s):** 87, 88  
**Verdict:** Verified

**Question (OCR transcription):**

> You have a Power Automate to create a flow that automatically sends email to a project manager when
> project team members mark a task as complete.
>
> Project team members are prematurely marking tasks as complete. Project leads must validate that tasks
> are complete before an email is sent to the project manager to announce task completion.
>
> You need to modify the flow.
>
> Which component should you use?
>
> A. aprocess argument
>
> anexpression
>
> D. atrigger
>
> E asolution

**Correct answer:** Condition

### Question 151

**Type:** Multiple answer  
**PDF page(s):** 88  
**Verdict:** Verified

**Question (OCR transcription):**

> 'A company uses Power Automate.
>
> Which three items can trigger flows? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Lifecycle Services
>
> B. Microsoft 365 Admin center

**Correct answer:** 1. Dataverse; 2. Outlook/Microsoft 365; 3. Windows desktop

### Question 152

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 88, 89  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> A software company plans to use Power Automate.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes No
> You must certify custom connectors before users in other | [s}}
> departments within your organization can use the
> connectors.
> You must use Microsoft Azure API apps to create a public e}} {o}]
> custom connector.
>
> No, No

**Correct answer:** 1. No; 2. No

### Question 153

**Type:** Single answer  
**PDF page(s):** 89  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is using Power Automate to automate business processes.
> You need to run a flow when a user presses a button in an app.
>
> Which trigger type should you recommend?
>
> @ A. Power Apps
>
> B. fora selected row
>
> C. manually trigger a flow

**Correct answer:** Power Apps trigger

### Question 154

**Type:** Single answer  
**PDF page(s):** 89, 90  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses a manual process to manage escalations for customer support calls.
> You must use Power Automate to automate the process for routing escalated calls.
> You need to create the flow.
>
> Which type of connector should you use?
>
> A. Microsoft Excel
>
> |G Office 365 Users

**Correct answer:** Dataverse connector

### Question 155

**Type:** Single answer  
**PDF page(s):** 90  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating a Power Automate flow.
>
> The flow must read each item in a Microsoft SharePoint list that details sales opportunities and set the
> value for a field named Status to Overdue if the value of a field named Follow up is less than or equal to
>
> the current date.
> You need to select the appropriate component to cycle through the entire list.
>
> Which component should you use?
>
> A. Condition '
>
> B. Connector
>
> ~ ¢. Action
>
> D. Trigger

**Correct answer:** Action — Apply to each

### Question 156

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 90, 91  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> You are creating a Power Automate approval flow.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
>
> No.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statements Yes No
>
> The addition of an expense report to a Microsoft OneDrive O Oo
> folder can initiate an approval flow.
>
> Approvals must follow a sequential order of approval. oO (e)

**Correct answer:** 1. Yes; 2. No

### Question 157

**Type:** Single answer  
**PDF page(s):** 91, 92  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Power Automate.
>
> Each time a work order is created, a service manager must review and approve the work order before a
>
> worker is dispatched.
>
> You need to create a flow to enforce the process.
>
> A. plug-in
> YB. approval flow '
> C. business rule
>
> D. team flow
>
> E. scheduled flow

**Correct answer:** Approval flow

### Question 158

**Type:** Drag-and-drop / matching  
**PDF page(s):** 92, 93  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> You plan to use Power Automate to monitor what people are saying about your company's products.
>
> You store the feedback for research and development purposes.
> You need to recommend Power Automate components to use for the solution.
>
> To answer, drag the appropriate components to the correct requirements. Each component may be used
> once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view
>
> content.
> NOTE: Each correct selection is worth one point.
>
> Components Answer Area
> action Requirement Component
> ean Retrieve the top five posts from your company's Facebook page. Component
> mic Enter the resulting posts into the product database. Component
> Combine author and link fields into a single field. Component
> trigger
> Run flow every hour. Component
> Components Answer Area
> action Requirement Component
> Retrieve the top five posts from your company's Facebook page. action
> 5 Enter the resulting posts into the product database. action
> Combine author and link fields into a single field. ressiol
> trigger expr n
>
> Run flow every hour. trigger

**Correct answer:** 1. Action; 2. Action; 3. Expression; 4. Trigger

### Question 159

**Type:** Single answer  
**PDF page(s):** 93  
**Verdict:** Verified

**Question (OCR transcription):**

> You are new to working with Microsoft Flow. You create a flow that extracts birth dates for users and
>
> then sends a birthday greeting email to users on their birthday.
>
> The flow does not properly extract birth dates.
>
> Where should you make changes?
>
> A. Connectors
>
> B. Expression
>
> '
>
> C. Templates

**Correct answer:** Expression

### Question 160

**Type:** Drag-and-drop / matching  
**PDF page(s):** 93, 94  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> A company plans to use Power Automate to automate tasks.
>
> Match each flow type to its description. To answer, drag the appropriate flow type from the column on
>
> the left to its description on the right. Each option may be used once, more than once, or not at all.
>
> NOTE: Each correct match is worth one point.
>
> Flow types Answer Area
> maoraiad Description
> business process a flow that runs after it is triggered by an event
>
> scheduled a flow that quides a user through a set of tasks
>
> rain a flow that runs after a specified number of days
>
> a flow that allows you to start tasks on-demand
>
> Flow type
> automated
> business process
> scheduled
>
> instant

**Correct answer:** 1. Automated cloud flow; 2. Business process flow; 3. Scheduled cloud flow; 4. Instant cloud flow

### Question 161

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 94  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A company plans to synchronize data between Dynamics 365 Supply Chain management and Dynamics
> 365 Sales.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes No
>
> You can implement a process-based integration
> by using the Data Integration feature. [@) .@)
>
> You can use Microsoft Azure Data Migration
> to synchronize data between the apps. ce) e)

**Correct answer:** 1. Yes; 2. No

### Question 162

**Type:** Single answer  
**PDF page(s):** 94, 95  
**Verdict:** Verified

**Question (OCR transcription):**

> A company has a website. The website includes a form that allows the company to collect information
>
> about leads.
>
> You need to set up an automated workflow to create leads in Dynamics 365 Sales when leads are created
>
> on the company's custom website.
>
> What should you create?
>
> A. Task Flow Moonee
> ~ B. Power Automate flow
> C. Dynamics 365 workflow
>
> D. Business Process Flow

**Correct answer:** Power Automate

### Question 163

**Type:** Multiple answer  
**PDF page(s):** 95  
**Verdict:** Verified

**Question (OCR transcription):**

> 'A company builds and sells residential apartments. The company uses Dynamics 365 Sales to manage
>
> sales opportunities.
> Management must receive notifications on their mobile devices when sales opportunities are created.
>
> You need to recommend the appropriate Microsoft Power Platform components to address the
>
> requirements.
>
> Which two components should you recommend to invoke the notification process? Each correct answer
>
> presents part of the solution.
>
> NOTE: Each selection is worth one point.
>
> A. AlBuilder
>
> D. Power BI

**Correct answer:** Power Automate with the Dataverse connector

### Question 164

**Type:** Multiple answer  
**PDF page(s):** 95, 96  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Microsoft 365, SharePoint Online, and Dynamics 365 Sales.
>
> You need to recommend tools to build a solution that meets the following requirements:
>
> Synchronize data daily -
>
> from an external Microsoft SQL Server instance.
>
> » Send a report automatically to specific company executives.
>
> » Ensure that opportunities over a specified amount are approved by a sales manager.
>
> Which two tools or components should you recommend? Each correct answer presents part of the
> solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Microsoft Excel
>
> B. Microsoft Word
>
> D. Microsoft Dataverse

**Correct answer:** Power BI and Power Automate

### Question 165

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 96  
**Verdict:** Corrected

**Question (OCR transcription):**

> HOTSPOT -
>
> You plan to send an email notification to a user when a new file is placed in a specific folder in OneDrive
>
> for Business.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes No
>
> You can create a flow without writing a single line of code
> and deploy the flow to a production environment. oO fe)
>
> You can add additional actions to the built-in Power
> Automate templates. ° 12)
>
> You can view the code that implements workflow actions
> and triggers without installing additional software. ° '@]
>
> Yes, yes, no

**Correct answer:** 1. Yes; 2. Yes; 3. Yes

**Verification note:** Peek code/code view exposes the JSON for workflow actions and triggers without extra software.

### Question 166

**Type:** Single answer  
**PDF page(s):** 96, 97  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Dynamics 365 Seles. Every time an opportunity is created, a Power Automate flow runs
>
> to email the opportunity to the sales manager.
> The sales manager leaves the company. You disable all accounts for the sales manager.
>
> You need to ensure that the new sales manager automatically receives email about opportunities when
>
> they are created.
>
> What should you do?
>
> 'A. Modify the flow and ensure that the correct manager's email is listed in the
>
> From field.
>
> ~ B. Modify the flow and ensure that the correct manager's email is listed inthe M°STVo™®
>
> To field.
>
> C. Grant the new sales manager access to the departed sales manager's inbox.
>
> D. Modity the flow and ensure that the flow prompts the user to type the correct
>
> 'email for the To field.
>
> E. Create a flow that automatically forwards opportunity emails to the new sales
>
> manager.

**Correct answer:** To field

### Question 167

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 97  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> Acompany plans to create a workflow that periodically runs a Dynamics 365 action based on data in
>
> third-party cloud-based solutions.
>
> Which features should you use to create the workflow? To answer, select the appropriate options in the
>
> answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Action Component
>
> Ensure that Power Automate can interact v
>
> with the third-party application. Triggers
> Logic Apps
> Connectors
> Gateways
>
> Periodically check for data changes in the v
>
> third-party application. Actions
> Triggers
> Connectors
> DirectQuery
>
> Connectors and triggers

**Correct answer:** 1. Connector; 2. Trigger

### Question 168

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 97, 98  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> For which scenarios can you use Power Automate?
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes No
>
> Notify team members when a response is recorded
> in a form in Microsoft Forms. ° (e)
>
> When email is received, save email attachments
> to OneDrive for Business. (e) oe)
>
> Receive notifications when negative comments '
> about the company are posted on Twitter. Be

**Correct answer:** 1. Yes; 2. Yes; 3. Yes

### Question 169

**Type:** Drag-and-drop / matching  
**PDF page(s):** 98  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> A project deadline is approaching. The project manager reports that there are still a number of critical
>
> tasks that are not complete.
> You need to implement Power Automate to help streamline processes.
>
> Which types of flows should you use? To answer, drag the appropriate flow types to the correct
> requirement. Each flow type may be used once, more than once, or not at all. You may need to drag the
>
> split bar between panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> automated Requirement Flow type
> Ensure that all of the steps for completing tasks
>
> are consistently followed by all team members.
>
> Ensure that users can manually send an email to
>
> the project lead whenever a task is completed.
>
> Automatically send a list of completed tasks
>
> at the end of each week.
>
> Business process, instant, scheduled
>
> business process
>
> 2
> 2
> zZ
> 3

**Correct answer:** 1. Business process flow; 2. Instant cloud flow; 3. Scheduled cloud flow

### Question 170

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 98, 99  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You are creating a number of Power Automate flows.
>
> You need to select the triggers for the flows.
>
> Which flow types should you use? To answer, select the appropriate options in the answer area.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Requirement
>
> Trigger a flow when a button is selected.
>
> Trigger a flow when a record is created.
>
> Guide a user through a series of steps
> in a model-driven app.

**Correct answer:** 1. Instant cloud flow; 2. Automated cloud flow; 3. Business process flow

### Question 171

**Type:** Drag-and-drop / matching  
**PDF page(s):** 99, 100  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> You are creating a Power Automate flow.
>
> Flow type
>
> Vv
> UI Flow
> Automatic
> Business Process Flow
> Instant
>
> iv
>
> UI Flow
>
> [Automatic
>
> Business Process Flow
> Instant
>
> ;
> UI Flow
>
> Automatic
>
> Business Process Flow
> Instant
>
> You need to retrieve data from several sources including Microsoft Excel, Azure Data Lake and GitHub.
>
> What should you use? To answer, drag the appropriate components to the correct data sources. Each
>
> component may be used once, more than once, or not at all. You may need to drag the split bar between
>
> panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Components Datasource | Component
>
> Microsoft Excel i
> Azure Data Lake LC]
>
> Formula GitHub
>
> I
>
> Connector, connector, connector
>
> tudo connector

**Correct answer:** Connector for each listed integration

### Question 172

**Type:** Drag-and-drop / matching  
**PDF page(s):** 100, 101  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> A company provides on-site architectural consulting services to residential and business customers. The
> company wants to implement a simple alert system where a consultant can press a button on their
>
> mobile device to send the user's location to the company as a text notification.
> You need to build a button flow that sends the notification.
>
> In which order should you perform the actions? To answer, move all actions from the list of actions to tk
>
> answer area and arrange them in the correct order.
>
> Select and Place: . .
> Trigger - Step - Connector - Properties - Save
>
> . Answer Area
> Actions
>
> Add a newstep to the flow.
>
> Add a trigger.
>
> Select a connector and action
> to send text notifications.
>
> Set the action's properties.
>
> Save the flow.
>
> Add a trigger
>
> Add a new step to the flow
>
> Select a connector and action to send text notifications
> Set the actions properties
>
> Save the flow
>
> PWNS

**Correct answer:** 1. Trigger; 2. Step; 3. Connector/action; 4. Properties; 5. Save

### Question 173

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 101, 102  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A company is using Power Automate to automate business processes.
>
> You need to recommend triggers for Instant flows.
>
> What trigger types should you recommend? To answer, select the appropriate options in the answer
>
> area.
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Requirement
>
> Run a flow when the user presses a button
> in a canvas app.
>
> Run a flow when user presses a button
> in the mobile Flow app.
>
> Trigger type
>
> lv
>
> PowerApps
>
> for a selected row
>
> manually trigger a flow
>
> for a selected file (OneDrive for a Business)
>
> lv
>
> PowerApps
>
> for a selected row
>
> manually trigger a flow
>
> for a selected file (SharePoint)

**Correct answer:** 1. Power Apps; 2. Manually trigger a flow

### Question 174

**Type:** Single answer  
**PDF page(s):** 102  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Dynamics 365 Supply Chain Management.
> You need to use Power Automate to automate the process of receiving and tracking raw materials.
>
> Which type of connector should you use?
>
> A. Common Data Service
>
> B. Dynamics 365
>
> D. Dynamic Signal

**Correct answer:** Dynamics 365 Finance and Operations

### Question 175

**Type:** Single answer  
**PDF page(s):** 102, 103  
**Verdict:** Verified

**Question (OCR transcription):**

> A company performs on-site inspections and services for air industrial equipment.
>
> Field technicians must perform a series of maintenance checks every time they visit a customer site.
> Every technician performs maintenance steps in a different order. Some technicians miss steps.
>
> You need to ensure that all technicians perform the same steps in the same order.
>
> What should you use?
>
> B. Al Builder
> Business rule
>
> D. Virtual Agent

**Correct answer:** Business process flow

### Question 176

**Type:** Multiple answer  
**PDF page(s):** 103  
**Verdict:** Verified

**Question (OCR transcription):**

> You have a Power Automate flow that saves attachments from emails into OneDrive for Business.
> You need to determine why the flow is not working.
> What are three possible ways to achieve the goal? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Navigate to the Power Automate admin center and view the projects.
>
> B. Navigate to the Action Items section of the Power Automate portal.
>
> C. Enable Repair Tips for the flow. '
>
> | YD. Navigate to the flow and view the run history. ' |
>
> v E. Navigate to the Power Automate web portal and click view notifications. :

**Correct answer:** Repair Tips; run history; notifications

### Question 177

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 103, 104  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> A company plans to implement Power Automate.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> NOTE: Each correct selection is worth one point. button = Instant flow
>
> Answer Area
> Yes No
> Business Process Flows are considered automatic flows. (e) |O
>
> You must create an automatic flow to launch a flow when a user oOo
> selects a button on a form.

**Correct answer:** 1. No; 2. No

### Question 178

**Type:** Drag-and-drop / matching  
**PDF page(s):** 104, 105  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> You plan to create a model-driven app for a company that sells plants and garden suppliers.
> The app must meet the following requirements:
>
> Automatically send email to a customer when a record is modified.
>
> Ensure that all sales people follow the same steps when processing sales.
> You need to create Power Automate flows for the app.
>
> Which types of flows should you create? To answer, drag the appropriate flow types to the correct
> requirements. Each flow type may be used once, more than once, or not at all. You may need to drag the
>
> split bar between panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Flow types Answer Area
> Button Requirement Flow type
> Automatic Send email to customers. Automatic
> Scheduled Ensure that salespeople follow the Business Process
> ; same steps.
> Business Process

**Correct answer:** 1. Automated cloud flow; 2. Business process flow

### Question 179

**Type:** Drag-and-drop / matching  
**PDF page(s):** 105  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> 'A company is creating a canvas app to manage weekly status reports from users about projects
>
> Status reports must be created weekly. Users can enter project tasks with descriptions. Users can aleo
>
> 'add escalation requests for tasks that ae late or at risk.
>
> When a status report is submitted with an escalation request, the app must automatically send a text
>
> _message to the submitter's manager. A reminder must be sent at 8 PM on Sunday to everyone who has
>
> not yet submitted a status report for the previous week,
>
> 'You need to identify the appropriate components to use in the solution
>
> What should you use? To answer, drag the appropriate implementation mechanisms to the correct
>
> 'requirements. Each implementation mechanism may be used once, more then once, or not at all. You
>
> may need to drag the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> implementation Mechanisms
>
> -
>
> 'nower he
>
> Implementation Mechansre
>
> =
>
> [roves
>
> 'on the report submason.
>
> Automata urd test message bated
>
> Implementation Mechanar
>
> [one
>
> Atoraly send a remie at 8PM.
>
> Implemertanon Mecharsm
>
> 'ese on a msn tos ep
>
> (Bosness proces ws
>
> Tri
>
> ns
>
> trigger and condition
>
> '

**Correct answer:** 1. Trigger; 2. Condition

**Verification note:** The submission event triggers the text-message flow; the reminder depends on the missing-report condition at the scheduled time.

### Question 180

**Type:** Drag-and-drop / matching  
**PDF page(s):** 105, 106  
**Verdict:** Verified

**Question (OCR transcription):**

> ,
>
> DRAG DROP -
>
> You are creating a Power Automate solution.
>
> You need to selact a Power Automate control action for each function in the flaw.
>
> Which control action should you use? To answer, drag the appropriate contral actions to the correct
>
> functions. Each control action may be used once, more than once, or not at all. You may need to drag the
>
> split bar between panes or scroll to view content,
>
> NOTE: Each correct selectian is worth one point.
>
> Answer Area
>
> Function
>
> Control action
>
> Control actions
>
> Do until
>
> Continue performing a set of actions
>
> Do until
>
> unless a condition becomes true.
>
> Apply to each
>
> Allow multiple branches to be created
>
> 'Switch
>
> based on a set of options.
>
> 'Switch
>
> Allow two branches to be created
>
> Condition
>
> based on a true/false condition.
>
> Condition

**Correct answer:** 1. Do until; 2. Switch; 3. Condition

### Question 181

**Type:** Drag-and-drop / matching  
**PDF page(s):** 106, 107  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> A company is using the Power Platform.
>
> The company would like to create a project health check solution. For each active project, team members
> will use the tool to select one of the following options:
>
> Things are going well.
>
> Ineed help.
>
> If things are going will, an email is sent to the manager letting them know that no intervention is
>
> needed.
>
> If the team member needs help, a mobile notification is sent to the manager letting them know the team
>
> needs assistance
> You need to create the solution.
>
> Which four actions should you perform in sequence? To answer, move the appropriate actions from the
>
> list of actions to the answer area and arrange them in the correct order.
>
> Actions Answer Area
>
> Create a Business
> Process flow.
>
> Add the actions.
>
> Create a Power Apps app.
>
> Create a button flow.
>
> VO
> OO
>
> Create an automated flow.
>
> Add the triggers.
>
> Create a Power Automate
> Virtual Agents chatbot.
>
> Add the conditions.
>
> Ordem
>
> Acao
>
> 19
>
> Create a Power Apps app.
>
> 22
>
> Create a button fl
>
> 32
>
> Add the conditions.
>
> 40
>
> Add the actions.

**Correct answer:** 1. Power Apps app; 2. Button/instant flow; 3. Conditions; 4. Actions

### Question 182

**Type:** Single answer  
**PDF page(s):** 107, 108  
**Verdict:** Verified

**Question (OCR transcription):**

> You are building a Power Automate flow to manage sales.
>
> The sales team saves quotes as PDF files to a Microsoft OneDrive folder. You create a Microsoft
>
> SharePoint list to help the sales team manage follow ups to quotes.
>
> You need to copy the customer name, phone number, and the amount of the potential sale from the
>
> sales quote and insert the data into the SharePoint list.
>
> Which Al Builder model should you use?
>
> A. key phrase extraction
>
> B. sentiment analysis
>
> Y C. text recognition
>
> D. language detection

**Correct answer:** Text recognition

### Question 183

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 108, 109  
**Verdict:** Corrected

**Question (OCR transcription):**

> HOTSPOT -
>
> A business plans to including Al Builder.
>
> Which actions can you perform?
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select I
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement
>
> Yes
>
> No
>
> You can use a text classification model in Al
>
> xX
>
> Builder to retrieve text and analyze its meaning
>
> You can tag Instagram posts that mention your
>
> new product.
>
> You can send results about the number of
>
> mentions of your new product in Instagram to
>
> Power BI for inclusion on a dashboard.
>
> -yes;ne;-ne-

**Correct answer:** 1. Yes; 2. Yes; 3. Yes

**Verification note:** Text classification can analyze meaning; Power Automate/connectors can tag matching social posts and send aggregate results to Power BI.

### Question 184

**Type:** Multiple answer  
**PDF page(s):** 109  
**Verdict:** Verified

**Question (OCR transcription):**

> A company wants users to start using Power Automate to improve personal productivity.
> You need to create a flow.
> Which two elements must you include? Each correct answer presents part of the solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. expression
>
> B. condition
>
> '

**Correct answer:** Action and trigger

### Question 185

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 109, 110  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> Accompany plans to use Power Apps to connect to a series of custom services. There are no connectors
>
> available for the custom services.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Yes
> Custom connectors for customer-specific services do rey fe)
> not require review and certification by Microsoft.
>
> You can build a custom connector once and reuse the
>
> connector for Power Apps and Power Automate. |o| ie)
> You can make custom connectors publicly available
>
> for all Power Platform users without having Microsoft @) |O|
> certify the connector.

**Correct answer:** 1. Yes; 2. Yes; 3. No

### Question 186

**Type:** Multiple answer  
**PDF page(s):** 110, 111  
**Verdict:** Verified

**Question (OCR transcription):**

> You plan to use Power Automate to perform data-management tasks when users interact with data in
>
> the common data model.
>
> Which three types of events can generate a trigger for the tasks? Each correct answer presents a
>
> complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. when a record is displayed in a view
>
> E. when a record is read

**Correct answer:** Delete, create, and update

### Question 187

**Type:** Multiple answer  
**PDF page(s):** 111  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Dynamics 365 Supply Chain Management.
>
> When a sales order is created for one of the customers that a specific user manages, a Microsoft Outlook
>
> task must be created to remind the user to perform any follow up activities that are required.
> You need to implement the functionality to create Outlook tasks.
> Which two features should you use? Each correct answer presents part of the solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. A\ Builder
>
> B. Power Apps
>
> v C. Business Events = }
>
> YD. Power Automate es ee
>
> E. Common Data Service

**Correct answer:** Business events and Power Automate

### Question 188

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 111, 112  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> 'A company uses a third party application and an approval process via email, At the end of the month,
>
> the IT department enters the data into Microsoft Excel to create pivot charts.
>
> The Excel pivot charts must use the same data source as Dynamics 365 Field Service to generate charts
>
> and reports.
>
> You need to recommend a solution.
>
> What should you recommend? To answer, select the appropriate configuration in the answer area,
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Requirement Solution
>
> Create an approval workflow. Ly]
> Dynamics 365 Workflow Notifications
> Microsoft Outlook Integration
>
> Al Builder
>
> Microsoft Flow
>
> Connect to report data. Tv]
> Common Data Service and Power BI
> Third-party from AppSource
> Custom Cade flat file integration
> Dynamics 365 Field Service
>
> Microsoft flow , CDS and PowerBIl

**Correct answer:** Power Automate with Dataverse/Power BI

### Question 189

**Type:** Single answer  
**PDF page(s):** 112  
**Verdict:** Verified

**Question (OCR transcription):**

> This question requires that you evaluate the underlined text to determine if it is
> correct.
>
> A company requires that service representatives schedule customer visits every six months. Each service
> representative is required to enter a scheduled task for the next checkup as they are leaving a client site.
> A service representative wants to automate task entry by creating a business process flow that can be
>
> initiated from the service call screen on a phone.
>
> Review the underlined text. If it makes the statement correct, select No change is needed.' If the
>
> statement is incorrect, select the answer choice that makes the statement correct.
>
> A. No change is needed.
>
> B. a scheduled
>
> Y C aninstant
>
> D. an action

**Correct answer:** Instant cloud flow

### Question 190

**Type:** Drag-and-drop / matching  
**PDF page(s):** 112, 113  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> You create a flow by using a template. You want to add support for additional business scenarios.
> You need to ensure that the new workflow does not break existing functionality.
>
> Which flow editing utilities should you use? To answer, drag the appropriate tools to the correct
> requirements. Each tool may be used once, more than once, or not at all. You may need to drag the split
>
> bar between panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Tools Answer Area
>
> Test Requirement Tool
> Fas Chair Check the new flow for any errors or Flow Checker
> warnings.
> Run the flow using previously | re
> processed data.
> Monitor the flow as it is running. Test

**Correct answer:** 1. Flow Checker; 2. Test; 3. Test

### Question 191

**Type:** Single answer  
**PDF page(s):** 113, 114  
**Verdict:** Verified

**Question (OCR transcription):**

> You are implementing Power Apps for a company.
>
> Data from an online proprietary accounting system must be automatically updated every four hours into
> Microsoft Dataverse without creating duplicates. Only changes to the data must be added. Thousands of
>
> records are added per hour.
>
> You need to set up the technology to ensure that the data is integrated every four hours.
>
> What should you do?
>
> A. Create a custom connector.
>
> YB. Create a Cloud flow that exports and imports the data. ia
>
> C. Export all data to Azure Blob storage.

**Correct answer:** B — Create a cloud flow that exports and imports the data

### Question 192

**Type:** Not present in source  
**PDF page(s):** —  
**Verdict:** Source issue

**Question (OCR transcription):**

> _The source PDF contains no question body for this number._

**Correct answer:** Source omission

**Verification note:** The PDF jumps from question 191 to 193; no question body or answer is present.

### Question 193

**Type:** Multiple answer  
**PDF page(s):** 114, 115  
**Verdict:** Verified

**Question (OCR transcription):**

> A company wants to use Power Automate to send email alerts to a specific employee whenever the
>
> company is mentioned in a Twitter post.
> You need to create the flow.
>
> From which two locations can you create the required flow? Each correct answer presents a complete
>
> solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. amobile app
>
> B. a browser
>
> C. adesktop application
>
> D. Dynamics 365

**Correct answer:** Mobile app and web browser

### Question 194

**Type:** Drag-and-drop / matching  
**PDF page(s):** 115, 116  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
> You are creating a Power Apps solution for a company that manufactures bicycles.
> The company has the following requirements:
>
> A vendor uploads a Microsoft Excel workbook to the company each week. The workbook contains
> lists of parts and their current prices. You must automatically import the data into Microsoft
> Dataverse as soon as the workbook is uploaded. You must send specific users an alert when new
>
> files are uploaded.
>
> Synchronize customer data with a proprietary accounting database when a user selects a button on
>
> the Account form.
> You need to recommend the trigger types to use to meet the requirements.
>
> Which trigger types should you use? To answer, drag the appropriate trigger types to the correct
> requirements. Each trigger type may be used once, more than once, or not at all. You may need to drag
>
> the split bar between panes or scroll to view content.
> NOTE: Each correct selection is worth one point.
>
> Trigger types Answer Area
> Bush trigger
> Requirement 'Trigger type
> Poking trigger Send a notification when an Excel workbook is uploaded.
> Triggers for scheduled flows Synchronize customer data with a proprietary accounting
> database.
>
> Triggers for business process flow
>
> Paling trigger push iigger push and push

**Correct answer:** 1. Polling trigger; 2. Push trigger

### Question 195

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 116, 117  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement
>
> You can trigger a Power Automate flow when you upload a Microsoft Excel or
> Word file to a SharePoint site.
>
> You can use a Power Automate desktop flow to open a website and perform
> an action that creates a file.
>
> You can use @ connector in a Power Automate cloud flow to retrieve data
> from a third-party data source.
>
> Answer Vv Discussion

**Correct answer:** 1. Yes; 2. Yes; 3. Yes

### Question 196

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 117, 118  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You create the following business rule:
>
> ser Metter Scape: nary > tee
>
> f Contact: New business rule
>
> * &£ 6 @
>
> Use the drop-down menus to select the answer choice that answers each question based on the
>
> information presented in the graphic.
>
> NOTE: Each correct selection is worth one point.
>
> ED ANSWER
>
> Questions
>
> Answer choice
> Which apps can use the business rule? ( v
> | Canvas
> |Model-driven
> Power BI
> A user sets the value of the Address 1: City column to New vy,
>
> York. What happens to the Address 1: State/Province column? |The column remains visible.
>
> The column becomes hidden.
> The column becomes mandatory.
>
> Where is the business rule enforced? |
> | Account table main forms
>
> Contact table main forms
>
> Contact table quick view forms

**Correct answer:** 1. Model-driven apps; 2. The State/Province column remains visible; 3. Contact table main forms

**Verification note:** The rule condition is City = London, so entering New York does not invoke the hide action.

### Question 197

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 118, 119  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT-
>
> A tutoring company has developed and deployed a model-driven app for the administration staff and a
>
> canvas app for teachers.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statements Yes No
> Teachers can access the canvas app by using a browser or a 1@) 12)
> mobile app.
> Administration staff can create personal views and dashboards in Oo 1@)
> the model-driven app.

**Correct answer:** 1. Yes; 2. Yes

### Question 198

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 119, 120  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A company plans to use Power Apps to connect to a series of custom services. There are no connectors
>
> available for the custom services.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes No
> Custom connectors require review and certification by @} 1e)
> Microsoft.
> You can build a custom connector once and reuse the ° 0
> connector for Power Apps and Power Automate.
> You can make custom connectors publicly available (e) ie)
> on the maker portal for any company without having
> Microsoft certify the connector.
>
> Answer Vv Discussion

**Correct answer:** 1. No; 2. Yes; 3. No

### Question 199

**Type:** Multiple answer  
**PDF page(s):** 120  
**Verdict:** Corrected

**Question (OCR transcription):**

> You are creating a canvas app that uses one connector.
> Which two objects are provided by the connector? Each correct answer presents a complete solution
>
> NOTE: Each correct selection is worth one point.
>
> A. customizations
>
> [ Y B. actions Se oT ]
>
> f Y C tables |
>
> D. triggers

**Correct answer:** B, D — Actions and triggers

**Verification note:** Connectors expose operations as actions and triggers; tables are not a connector operation type.

### Question 200

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 120, 121  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> An organization is considering using Power Platform to improve business processes.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
>
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Yes
> You can add a custom Microsoft Dataverse entity to the Dynamics 365 O
> Sales Hub navigation.
> You can embed a Power Platform canvas app in your organization's oO
> Microsoft Teams channel.

**Correct answer:** 1. Yes; 2. Yes

### Question 201

**Type:** Single answer  
**PDF page(s):** 121  
**Verdict:** Verified

**Question (OCR transcription):**

> 'A company plans to move an on-premises customer service data management system to a cloud-
>
> managed solution.
>
> The customer service application must be replaced by a model-driven application. The company uses
> Microsoft SQL Server Integration Services (SSIS) packages to move data from the on-premises database
>
> system to a third-party enterprise resource planning (ERP) system.
> You need to replace the SSIS packages for data transfer.
>
> What should the conppany use in place of the packages to move the data?
>
> A. r Platform connector
>
> B. Microsoft Azure Data Lake
>
> C. Power Virtual Agents
>
> ( a owt nrton ramanae so

**Correct answer:** Power Platform connector

### Question 202

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 121, 122  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> A company plans to create a Microsoft Dataverse environment.
> For each of the following statements, select Yes if the statement is true, Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statements Yes No
> You can create a Microsoft Dataverse environment in the Power Platform O (e)
> Admin center.
> You must enable data encryption after you create a Microsoft Dataverse () oO
> environment.
> You can control security roles and privileges in a Microsoft Dataverse Oo oO
>
> environment from the Power Apps Admin center.
>
> Yes, No, Yes

**Correct answer:** 1. Yes; 2. No; 3. Yes

### Question 203

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 122  
**Verdict:** Corrected

**Question (OCR transcription):**

> HOTSPOT -
> A company plans to create Power Platform apps that use industry-standard and proprietary data sources.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> 'Statement Yes No
> Custom connectors can be used if a standard connector for ° ° nO, NOnYES
> the service is available.
> Custom connectors are supported in instant flows only. Oo °
> Standard and custom connectors can be mixed within the oO °
>
> same flow or app.

**Correct answer:** 1. Yes; 2. No; 3. Yes

**Verification note:** A custom connector may be used even when a standard connector exists, is not limited to instant flows, and can be mixed with standard connectors.

### Question 204

**Type:** Single answer  
**PDF page(s):** 122, 123  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating a canvas app.
>
> The app must display a list of records from a Microsoft Excel spreadsheet stored in Microsoft OneDrive.
> 'An app user must be able to update the item details and save the details back into the spreadsheet or
>
> email the item details to themselves by using a button.
> You need to identify how many connectors are required to complete the app.
>
> How many connectors should you use?
>
> v A. two '
>
> B. three
>
> C. four

**Correct answer:** Two connectors

### Question 205

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 123  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> A company plans to use Microsoft Power Platform connectors to automate an existing business process
>
> that includes Power Automate cloud flows and canvas apps.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Premium connector capabilities
> Statement Yes
> Users require a Power Apps or Power Automate licensing plan 6
> to create solutions that use premium connectors.
>
> Premium connectors must be created before they can be
> Used ina solution.
>
> Premium connectors can be used in both canvas apps and fe)
> Power Automate cloud flows.

**Correct answer:** 1. Yes; 2. No; 3. Yes

### Question 206

**Type:** Single answer  
**PDF page(s):** 123, 124  
**Verdict:** Verified

**Question (OCR transcription):**

> A colleague builds an automated cloud flow and shares it with you.
>
> The flow starts when a new account record is added to a model-driven app. The flow then sends an
>
> approval to the director of the company in Microsoft Teams. When the director grants the approval, the
>
> flow updates the status of the account record to active and sends a templated welcome email to the new
>
> account.
> You need to identify the connector that provides the trigger for this flow.
>
> Which connector should your select?
>
> A. Approvals
>
> B. Microsoft Dataverse
>
> C. Microsoft 365 Outlook
>
> D. Microsoft Teams

**Correct answer:** Microsoft Dataverse

### Question 207

**Type:** Drag-and-drop / matching  
**PDF page(s):** 124, 125  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> A company is implementing a customer service solution by using Dynamics 365 Customer Service. The
>
> company is extending the solution to meet additional business requirements.
> The solution has the following requirements:
>
> External customers can log on to a secure website and view the progress of customer service tickets.
>
> Refund requests over a certain value can be automatically sent for managerial approval in Microsoft
>
> Teams.
>
> Embed a gallery of pictures within the Dynamics 365 Customer Service app.
> You need to use Microsoft Power Platform technologies to implement the solution.
>
> Which technology should you use? To answer, drag the appropriate technologies to the correct
> requirements. Each technology may be used once, more than once, or not at all. You may need to drag
>
> the split bar between panes or scroll to view content.
>
> Answer Area
> Requirement Technology
>
> External customers can log on to a secure website and view Power Pages
> the progress of customer service tickets.
>
> Refund requests over a certain value can be automatically Power Automate
> sent for managerial approval in Microsoft Teams.
>
> Embed a gallery of pictures with the case form within the Canvas apps
> Dynamics 365 Customer Service app.

**Correct answer:** 1. Power Pages; 2. Power Automate; 3. Canvas app

### Question 208

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 125  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> You are developing a Copilot Studio copilot for a company.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes
> You must create a topic to specify how a copilot responds toauser.
> You can use prebuilt entities or custom defined entities. °
>
> sie

**Correct answer:** 1. Yes; 2. Yes

### Question 209

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 125, 126  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> A company creates unmanaged model-driven apps.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> Answer Area
>
> Statement Yes
> Forms can be modified after they are created. °
> An App Maker can create personal views and system views. °
> Forms must be published to display new columns. °

**Correct answer:** 1. Yes; 2. Yes; 3. Yes

### Question 210

**Type:** Drag-and-drop / matching  
**PDF page(s):** 126, 127  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP -
>
> Match each Microsoft Power Automate app to its capability. To answer, move the appropriate Power
> Automate app from the column on the left to its capabilities on the right. You may use each Power
>
> Automate app once, more than once, or not at all.
>
> NOTE: Each correct match is worth one point.
>
> Power Automate apps Power Automate app capabilities
> Power Automate for Desktop Capability Power Automate app
> Power Automate Mobile Create and monitor all types of Power Automate
>
> cloud flows and initiate process mining.
> Power Automate Portal
> Start Power Automate instant flows in the field
>
> and manage notifications.
>
> Create robotic process automation.

**Correct answer:** 1. Portal/Power Pages; 2. Mobile; 3. Desktop

### Question 211

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 127  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> You are authoring a Power Virtual Agents bot for a company that sells flowers and shrubs.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes
> You can use the prebuilt Postal Code entity to recommend 3)
>
> plants that will work within a customer's growing zone.
> You can create a custom entity to offer color and plant (3)
>
> choices for landscaping options that can be made available
> for customer orders.

**Correct answer:** 1. Yes; 2. Yes

### Question 212

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 127, 128  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
>
> You are authoring a Power Virtual Agents chatbot for a company.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
> NOTE: Each correct selection is worth one point.
>
> Hot Area
>
> Answer Area
>
> Statement Yes
>
> When escalating to a live person from a chatbot, the customer
> must restate their issue and other information collected.
>
> You can customize the greeting topic for every chatbot To)
> that you author.

**Correct answer:** 1. No; 2. Yes

### Question 213

**Type:** Multiple answer  
**PDF page(s):** 128, 129  
**Verdict:** Verified

**Question (OCR transcription):**

> You are added to a dashboard within a workspace.
>
> You need to identify where you can view the dashboard.
>
> No
>
> In which two places can you view the dashboard? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Microsoft Power Platform admin center
>
> | YB. Microsoft Power BI service ioe
>
> C. Microsoft Power BI desktop
>
> | YD. Microsoft Power BI mobile app

**Correct answer:** Power BI service and mobile app

### Question 214

**Type:** Multiple answer  
**PDF page(s):** 129  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating a report in a Power Bl service by using a dataset.
> You need to add a visual.
> In which two ways can you add the visual? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> B. Use Power BI Q&A.
>
> D. Pina page from another report.
>
> E. Pina visual from another report.

**Correct answer:** Select the visual and drag the field to it

### Question 215

**Type:** Single answer  
**PDF page(s):** 129, 130  
**Verdict:** Verified

**Question (OCR transcription):**

> You are editing an existing Power Automate cloud flow. Every day, the flow adds a list of tasks to
> Microsoft Planner for each email received in a complaints mailbox. The flow then sends a message to
>
> you in a Microsoft Teams chat when it completes.
> You add an action to the end of the flow to post a Teams message to the central office channel.
>
> You need to update the flow so that tomorrow it will post the message in the central office channel and
>
> in the direct chat to yourself.
>
> Which action should you perform next?
>
> A. Add parameters to the action.
>
> B. Turn the flow on.
>
> . Create a connection.

**Correct answer:** Save

### Question 216

**Type:** Single answer  
**PDF page(s):** 130  
**Verdict:** Verified

**Question (OCR transcription):**

> A manufacturing company receives daily shipments that arrive at any time during the day.
>
> A mailroom manager signs for the shipment, and then sends an email from Microsoft Outlook to the
> receptionist when the shipment is available, The receptionist sends a text message to each driver to let
>
> them know that items within the shipment are ready for delivery.
>
> The company builds a Microsoft Power Automate flow that sends the text messages automatically to all
> drivers as soon as the receptionist receives the email.
>
> You need to identify the component that allows the Power Automate flow to start without the
>
> intervention of the receptionist.
>
> Which component should you select?
>
> A. Copilot
>
> B. Connector MOST VCIED,
>
> C. Al Builder
>
> D. Power BI

**Correct answer:** Connector

### Question 217

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 130, 131  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise,
>
> select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statements Yes No
> A Microsoft Power Platform environment must contain a Microsoft °
> Dataverse database.
>
> An app created in an environment can only connect to the data ° °
> sources that are deployed in the same environment.
>
> Microsoft Dataverse for Teams environments are automatically
>
> created for all members of the team when you create a Microsoft ° °
>
> Power Platform app in Microsoft Teams.
>
> No, No, Yes

**Correct answer:** 1. No; 2. No; 3. Yes

### Question 218

**Type:** Single answer  
**PDF page(s):** 131  
**Verdict:** Verified

**Question (OCR transcription):**

> A company has an online store to sell toys. The volume of order tracking requests has increased.
>
> You need to allow customers to use an interactive interface on the website to request order tracking
>
> information.
>
> Which technology should you use?
>
> A. Power Automate flows
>
> B. Customer Service Insights
>
> ~ C. Power Virtual Agents chatbots tdetibtclbeed
>
> D. Power Bl

**Correct answer:** Copilot Studio (Power Virtual Agents)

### Question 219

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 131, 132  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> Note: Each correct selection is worth one point.

**Correct answer:** 1. Yes; 2. No; 3. Yes

### Question 220

**Type:** Not present in source  
**PDF page(s):** —  
**Verdict:** Source issue

**Question (OCR transcription):**

> _The source PDF contains no question body for this number._

**Correct answer:** Source omission

**Verification note:** The PDF jumps from question 219 to 221; no question body or answer is present.

### Question 221

**Type:** Single answer  
**PDF page(s):** 132, 133  
**Verdict:** Verified

**Question (OCR transcription):**

> You are developing a Microsoft Power Platform solution. The solution uses data stored in Microsoft Excel,
>
> a Microsoft Dataverse database, and an Azure SQL database.
>
> You must create several visuals to enable the data to display on a screen without moving the data out of
>
> its source location.
> You need to create the visuals.
>
> Which tool should you use?
>
> A. Power Automate
> B. Power Platform Center of Excellence Starter Kit
>
> C. Power Virtual Agents
>
> [ ~_ D. Power Bl OS TNCIED |

**Correct answer:** Power BI

### Question 222

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 133, 134  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
> You create a Microsoft Power Automate flow.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes No
>
> A Power Automate flow button requires a user
>
> to provide input before clicking a flow button. ° °
>
> A Power Automate flow can only be triggered
> from virtual buttons in software. ° 1)

**Correct answer:** 1. No; 2. No

### Question 223

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 134, 135  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
>
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statements Yes No
> A Power Automate cloud flow can be added to a solution by using ° ro)
> the Power Automate mobile app.
>
> Power Automate for desktop is an application that must be installed
> ona computer. °
> Business process flows can be created by using the Power
>
> Automate portal. ° °
>
> No, Yes, Yes

**Correct answer:** 1. No; 2. Yes; 3. Yes

### Question 224

**Type:** Drag-and-drop / matching  
**PDF page(s):** 135  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company uses Microsoft Power Platform to manage support tickets.
>
> Customers submit support requests by sending an email to a support email address.
>
> All high-priority emails must be logged into a Microsoft Excel sheet for historical purposes.
> You need to identify the components that are required for logging the emails in Excel.
>
> Which components should you use? To answer, drag the appropriate components to the correct
> requirements. Each component may be used once, more than once, or not at all. You may need to drag
>
> the split bar between panes or scroll to view content.
>
> Note: Each correct selection is worth one point.
>
> Answer Area
> Components Requirement Component
> Start a workflow when an email is sent to a specific
> [rotor] Saree CL]
> Evaluate whether an email is high priority in the flow
> by using a condition.
>
> Create a row in Excel with information about incoming
> tested -
>
> Trigger, action, action

**Correct answer:** 1. Trigger; 2. Action; 3. Action

### Question 225

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 135, 136  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT -
> You are authoring a Copilot Studio copilot for a company.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statement Yes No
> You must create a custom action to display a knowledge base ° fo)
>
> article that answers a common support question.
>
> You can use Power Automate to retrieve a customer's contact ° °
> number in order to verify they are an authorized user and
> their support plan SLA.
>
> saci

**Correct answer:** 1. No; 2. Yes

### Question 226

**Type:** Single answer  
**PDF page(s):** 136  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Microsoft 365 and Power Platform. You do not assign permissions to any licensed users.
> Users are able to create and edit Power Apps canvas apps.
>
> In which environment are users creating and editing the apps?
>
> vA. Production
>
> B. Test '
>
> C. Sandbox
>
> Ce

**Correct answer:** A — Production

**Verification note:** Licensed users create apps in the tenant’s default environment, whose environment type is Production.

### Question 227

**Type:** Drag-and-drop / matching  
**PDF page(s):** 136, 137  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company plans to implement Power BI.
> The company wants to implement some specific features that Power BI does not include.
> You need to recommend solutions for the company.
>
> What should you recommend? To answer, drag the appropriate solutions to the correct requirement.
> Each solution may be used once, more than once, or not at all. You may need to drag the split bar
>
> between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Solutions Answer Area
> Microsoft Appsource Requirement Solution
> - --- + Evaluate solutions that meet current gaps in Power BI
> Microsoft Lifecycle Services ] capabilites.
> Tisch lam Tadeo ) Evaluate the services of multiple companies to identity a
> partner that can assist in building a proof-of-concept [
> solution.
>
> Microsoft AppSource, Microsoft azure marketplace

**Correct answer:** 1. AppSource; 2. Azure Marketplace

### Question 228

**Type:** Drag-and-drop / matching  
**PDF page(s):** 137  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> You need to read data from a Microsoft Excel file into Microsoft Dataverse and then copy that data into
>
> an enterprise resource planning (ERP) system.
> You need to configure the connector.
>
> What should you use? To answer, drag the appropriate operations to the correct actions. Each operation
> may be used once, more than once, or not at all. You may need to drag the split bar between panes or
>
> scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Operations Answer Area
> [ Tigger ] Action Operation
>
> [Action J Import into Microsoft Dataverse. (
> [ Business process flow] Synchronize data to ERP system. C
>
> [ Businessrule
>
> Action, action

**Correct answer:** 1. Action; 2. Action

### Question 229

**Type:** Multiple answer  
**PDF page(s):** 137, 138  
**Verdict:** Verified

**Question (OCR transcription):**

> You are designing Power BI dashboards and reports to analyze the financial date for a company.
> You must analyze the past three years of data from the company's accounting system.
>
> You need to ensure that dashboards only display required data.
>
> What are two possible ways to achieve the goal? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> @ A. Create aggregations.
>
> B. Import data into Microsoft Detaverse.
>
> C. Share dashboards.
>
> D. Create calculated columns.

**Correct answer:** A, D — Create aggregations; create calculated columns

**Verification note:** Importing into Dataverse and sharing a dashboard do not themselves constrain the displayed financial data.

### Question 230

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 138  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statements Yes No
> Power Virtual Agents chatbots can be created directly fe) fe)
> in Microsoft Teams.
>
> Power Virtual Agent chatbots can use the bot testing feature
> directly within Microsoft Teams.
>
> Yes, yes

**Correct answer:** 1. Yes; 2. Yes

### Question 231

**Type:** Single answer  
**PDF page(s):** 138, 139  
**Verdict:** Verified

**Question (OCR transcription):**

> A company creates a Power Apps app named Inventory Management.
> Users report issues accessing the app.
> You need to open a support ticket with Microsoft.
>
> In which location should you create the support ticket?
>
> A. Inventory Management app
>
> B. Microsoft 365 admin center
>
> f YC. Microsoft Power Platform admin center |
>
> D. Maker portal

**Correct answer:** C — Microsoft Power Platform admin center

### Question 232

**Type:** Multiple answer  
**PDF page(s):** 139  
**Verdict:** Verified

**Question (OCR transcription):**

> 'A company uses a Microsoft Excel spreadsheet to record raw material quality daily.
>
> The company's chief technology officer (CTO) wants to use a model-driven app to record the
>
> information.
>
> The chief executive officer (CEO) will fund the development of the app for the CTO only if the CEO
>
> understands the benefits of using a model-driven app.
> You need to identify the benefits of model-driven apps.
>
> Which two benefits of using a model-driven app should you identify? Each correct answer presents a
> complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> The app may continue to use the existing Excel spreadsheet as a source of
> data.
>
> D. Both staff members and anonymous users may use the app.

**Correct answer:** Prebuilt tables/forms/views and cross-device responsive behavior

### Question 233

**Type:** Single answer  
**PDF page(s):** 139, 140  
**Verdict:** Verified

**Question (OCR transcription):**

> 'A company uses Dynamics 365 Sales. The company uses a browser-based app named Sales Hub.
> You need to ensure that users can access data from Sales Hub by using mobile devices.
>
> Which app should users install?
>
> A. Dynamics 365 Remote Assist
>
> B. Dynamics 365 Business Central
>
> . Dynamics 365 Finance

**Correct answer:** Dynamics 365 for Phones

**Verification note:** Historical product name.

### Question 234

**Type:** Single answer  
**PDF page(s):** 140  
**Verdict:** Verified

**Question (OCR transcription):**

> ,
>
> 'You create a canvas app that uses @ Microsoft Excel spreadsheet asa data source.
>
> 'The spreadsheet contains a lst of pets. Each column in the spreadsheet isa different attribute about a
>
> pet
>
> You need ta create an interface to allow users to save a new pet record tothe spreadsheet.
>
> What is the minimum numberof controls you need to implement to create the interface?
>
> A. One contro an edt form control
>
> ne
>
> G. Three controis:a text input contro, a date picker control, and a combo box
>
> control
>
> . Four controls: a text input control, a date picker control, a combo box contra,
>
> 'and a button control

**Correct answer:** Edit form and Button — two controls

### Question 235

**Type:** Multiple answer  
**PDF page(s):** 140, 141  
**Verdict:** Verified

**Question (OCR transcription):**

> 'A company creates canvas apps for its sales team.
>
> 'A.user creates a canvas app from a data source.
>
> You need to determine the screens created,
>
> Which three sereens should you identify? Each correct answer presents part ofthe solution,
>
> NOTE: Each correct selection is worth one point.
>
> A. welcome
>
> YB. edit/ereate
>
> Y browse
>
> YD. dltails
>
> «
>
> E, dolete

**Correct answer:** Browse screen; details screen; edit/create screen

### Question 236

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 141, 142  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> You are creating a model-driven app.
>
> You need to add forms to the app.
>
> Which form types should you use? To answer, select the appropriate options in the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Requirement
>
> Form type
>
> a compact form for mobile devices
>
> Card
>
> Quick Create
>
> Quick View
>
> a basic form for data entry
>
> Main
>
> Quick Create
>
> Quick View
>
> a compact form for use in web clients to edit records
>
> lv
>
> Advanced Find Views
>
> Associated Views
>
> Lookup Views
>
> Public Views
>
> Card, Main and lookup views

**Correct answer:** Card form; Main form; Lookup view

### Question 237

**Type:** Drag-and-drop / matching  
**PDF page(s):** 142, 143  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company uses a model-driven app for its sales team.
>
> You must customize a form to meet the following requirements:
>
> If a check box is checked, a hidden field must appear.
>
> The form must display a list of customers and fields about customers.
>
> You need to identify the components a developer must configure to meet the requirements.
>
> What should you identify?
>
> To answer, drag the appropriate components to the correct requirements. Each component may be used
>
> once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view
>
> content.
>
> NOTE: Each correct selection is worth one point.
>
> Components
>
> Answer Area
>
> Column
>
> Requirement
>
> Hidden field appears
>
> View
>
> Form
>
> List of customers and fields displays
>
> Table
>
> Form, view

**Correct answer:** 1. Form; 2. View

### Question 238

**Type:** Single answer  
**PDF page(s):** 143  
**Verdict:** Verified

**Question (OCR transcription):**

> 'A company uses a model-driven app.
>
> You add several columns to a form,
>
> Users state the new columns do not appear on the form.
> You need to fix the issue.
>
> What should you do?
>
> A. Create a Power Automate flow.
>
> B. Create a business rule
>
> . Ensure columns are in one section of the form only.
> D. Copy the form and rename it
>
> ~ E. Publish the form. eae

**Correct answer:** Publish the form

### Question 239

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 143, 144  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> 'A company plans to use Power BI to visualize data.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Othemise, select
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Power 8! allows users to create and consume visualizations in one
> view by using data from several different sources.
>
> Power Platform uses Microsoft SQL Server databases to securely fo)
> store and manage data used by business applications.
>
> Lusesnial

**Correct answer:** 1. Yes; 2. No

### Question 240

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 144  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> A company creates unmanaged model-driven epps.
>
> For each of the following statements, select Yes if the statement is true, Otherwise, select No,
>
> Answer Area
> Statements Yes
> Administrators can modify forms. (6)
> An App Maker can create personal views and system views. (@)
>
> An App Maker does not need to publish form changes for new columns to a)
> appear.
>
> Statements
>
> Administrators can modify forms.
>
> 'An App Maker can create personal views and system views.
>
> 'An App Maker does not need to publish form changes for new columns to
>
> .
> e)
> (6)
>
> 1e)
> ie)

**Correct answer:** 1. Yes; 2. Yes; 3. No

### Question 241

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 144, 145  
**Verdict:** Verified

**Question (OCR transcription):**

> ,
>
> HOTSPOT
>
> For each of the following statements, select Yes if the statement is true. Othemise, select No.
>
> Answer Area
> Statements Yes
>
> Sharing a model-driven app and sharing a canvas app both send an email ()
> with the link to the app to the users.
>
> Admini: rs assign Power security roles and permissi (e)
> identically for canvas apps, model-driven apps, and shared apps.
>
> You must publish both personal and system views before a user may oO
> consume them.

**Correct answer:** 1. No; 2. No; 3. No

### Question 242

**Type:** Single answer  
**PDF page(s):** 145  
**Verdict:** Verified

**Question (OCR transcription):**

> You test a business process flow in a sandbox environment.
>
> When you complete testing, you must copy the business process flow to a production environment
>
> without bringing any data or other modifications with it.
> YOU must meet the requirements.
>
> What should you do?
>
> A. Export the default solution.
> B. Create a view and export the view.
> '
>
> YC. Add the business process flow to a separate solution. Export the solution.
>
> D. Export the form that contains the business process flow to a separate solution.

**Correct answer:** Export as a separate solution

### Question 243

**Type:** Single answer  
**PDF page(s):** 145, 146  
**Verdict:** Verified

**Question (OCR transcription):**

> You create a Power Apps app and Power Automate flow.
> You need to combine multiple types of field values into a single string value and format the string.
>
> What should you use?
>
> A. condition
>
> B. switch
>
> C. environment variable
>
> YD. expression

**Correct answer:** Expression

### Question 244

**Type:** Drag-and-drop / matching  
**PDF page(s):** 146, 147  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP.
>
> A customer service department uses Microsoft Dynamics 365 Customer Service to manage repair
>
> requests. The repair team tracks their efforts using a Microsoft SharePoint list.
>
> The company must use Microsoft Power Platform to connect the repair team with the Dynamics 365
>
> Customer Service solution.
>
> The solution must meet the following requirements:
>
> Requirement
>
> Requirement 7 From a custom page in the Dynamics 265 interface, allow the customer service team to input a repair number, view
> the details of the corresponding SharePoint list item. and add notes for the repair team.
>
> Requirement 2 Create a report that visualizes real-time customer service information that the repair team can access online and use
> to create dashboards.
>
> Requirement 3 'Automatically send a Microsoft Teams message to a customer service agent and an email to the customer when @
> repair team member completes a repair.
>
> You need to implement the appropriate technologies to meet the requirements.
>
> Which technologies should you use? To answer, drag the appropriate technologies to the correct
> scenarios. Each technology may be used once, more than once, or not at all. You may need to drag the
>
> split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Technologies Answer Area
> Microsoft Power BI Scenario
> Reqiurement1
> Canvas app
> Microsoft Power Automate Reqiurement2
> Microsoft Power Virtual Agents chatbot Reqiurement3
>
> Answer Area
>
> Scenario Technology
>
> Reqiurement1 Canvas app
>
> Reqiurement2 Microsoft Power BI
>
> Reqiurement3 Microsoft Power Automate

**Correct answer:** 1. Canvas app; 2. Power BI; 3. Power Automate

### Question 245

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 147, 148  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> You receive a copy of a Power Automate cloud flow from a colleague.
> For each of the following statements, select Yes if the statement is true. Otherwise, select N
>
> NOTE: Each correct selection is worth one point.
>
> Statement Yes No
>
> You can create a new flow that is a copy of the
> original flow.
>
> You can modify the original flow. 2 %
>
> Answer VY Discussion

**Correct answer:** 1. Yes; 2. No

**Verification note:** A received copy can be saved as a new flow, but it does not grant edit rights to the original.

### Question 246

**Type:** Single answer  
**PDF page(s):** 148  
**Verdict:** Verified

**Question (OCR transcription):**

> The front desk of a hotel uses a model-driven app to check in guests.
>
> The hotel wants to create a canvas app for the housekeeping staff to manage cleaning supplies. The
>
> canvas app will connect to a new instance of Microsoft Dataverse.
>
> You need to create a new environment for the housekeeping staff.
>
> What should you use?
>
> A. Microsoft 365 admin center
>
> YB. Microsoft Power Platform admin center
>
> C. Power Apps maker portal
>
> D. Microsoft Azure portal

**Correct answer:** Power Platform admin center

### Question 247

**Type:** Single answer  
**PDF page(s):** 148, 149  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses a model-driven app to record customers' dietary preferences.
>
> You need to change the order of the columns in a personal view that you created on the Contact table.
>
> Where should you change the order?
>
> A. Power Apps Studio
>
> B. App designer
>
> ® . Model-driven app
>
> D. Microsoft Power Platform admin center

**Correct answer:** Model-driven app

### Question 248

**Type:** Drag-and-drop / matching  
**PDF page(s):** 149  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> 'A manufacturing company is building a model-driven app to manage its warehouse. The app has two
>
> custom tables: Order and Batch.
> You need to identify the appropriate component for each required function of the app.
>
> Which component should you choose for each function? To answer, drag the appropriate components to
> the correct functions. Each component may be used once, more than once, or not at all. You may need to
>
> drag the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Components Answer Ares
> Function 'Component
> Busineis process ow
> Display 2 set of charts visualizing the order and batch data
> canmad ft the seme time
> Guide wers through the standars process of pking and
> 'Business rule shipping an order.
> Show 3 lat of all orders and atow users to reorder the Component
> View cours
> --$ Make the shelf number mandatory on 2 form when 2 user Comporent
>
> records the aisle location of a batch

**Correct answer:** 1. Dashboard; 2. Business process flow; 3. View; 4. Business rule

### Question 249

**Type:** Drag-and-drop / matching  
**PDF page(s):** 149, 150  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> Match each type of Power Apps app to its capability.
>
> To answer, drag the appropriate app type from the column on the left to its capability on the right. Each
> app type may be used once, more than once, or not at all.
>
> NOTE: Each correct match is worth one point.
>
> App types Answer Area
>
> in =
> Enables fully customizable layout, design, and color scheme a
>
> Connects to multiple data sources -a
> Uses business process flows to guide users through a data entry process -_a
>
> Canvas app, canvas app, model driven app, canvas app

**Correct answer:** 1. Fully customizable layout — Canvas app; 2. Multiple data sources — Canvas app; 3. Business process flows — Model-driven app; 4. Barcode scanning — Canvas app

### Question 250

**Type:** Single answer  
**PDF page(s):** 150  
**Verdict:** Source issue

**Question (OCR transcription):**

> 'A company uses a Power Apps canvas app to enter information. The canvas app uses a Microsoft
>
> SharePoint list to store information.
>
> Auser manually copies the information to a Microsoft Dataverse instance.
> You must automate the manual process.
>
> You need to create a solution to meet the requirement.
>
> What should you do?
>
> A. Create a Power Apps Component Framework (PCF) control for the OnLoad
>
> events.
>
> B. Create a business process flow that calls a Power Automate desktop flow.
>
> CG. Create a Power Apps Component Framework (PCF) control for the OnSave
> event.
>
> E Create a Power Automate cloud flow with a connector to email.

**Correct answer:** No valid option; intended solution: a Power Automate cloud flow using SharePoint and Dataverse connectors

**Verification note:** The displayed D (“cloud flow with no connectors”) cannot read SharePoint or write Dataverse. The item is defective as written.

### Question 251

**Type:** Multiple answer  
**PDF page(s):** 150, 151  
**Verdict:** Verified

**Question (OCR transcription):**

> An airline company wants to use Power Apps to manage its lost luggage desk.
> You need to determine whether the company should build a canvas app or a model-driven app.
>
> Which two questions should you ask to determine which type of app the company should use? Each
>
> correct answer presents part of the solution.
>
> NOTE: Each correct selection is worth one point.
>
> B. Which Microsoft Azure Active Directory (Azure AD) users or groups will use the
> app?
>
> . Will the app be used with mobile or tablet devices?
>
> E. will the app builders have coding skills?

**Correct answer:** A, D — Ask which data sources will be used and whether a specific layout is required

### Question 252

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 151, 152  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> You create a model-driven app. You need to determine which customizations can be made to table
>
> forms.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
>
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statements
>
> Yes
>
> No
>
> A form can be made visible only to users who have been assigned
>
> a specific security role.
>
> The label of a column on a form can be different than the column
>
> display name.
>
> You can edit the system view named Quick Find to change the title
>
> and subtitle displayed for records in a look-up column.
>
> Answer Area
>
> Statements
>
> Yes
>
> A form can be made visible only to users who have been assigned
>
> a specific security role.
>
> The label of a column on a form can be different than the column
>
> display name.
>
> You can edit the system view named Quick Find to change the title
>
> and subtitle displayed for records in a look-up column.

**Correct answer:** 1. Yes; 2. Yes; 3. No

### Question 253

**Type:** Drag-and-drop / matching  
**PDF page(s):** 152, 153  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company uses a model-driven app to manage customer data.
>
> The company requires updates to the account table main form. The updates must be made within the
>
> app.
> You need to make the required updates.
>
> Which changes should you make to meet each requirement? To answer, drag the appropriate changes i
> the correct requirements. Each change may be used once, more than once, or not at all. You may need i
>
> drag the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Changes: Answer Area
> | Greate anew column. Requirement 'Change
>
> ' Require the city to be selected from a drop-down instead of [ Change
> Edit the existing column. entered as text
> Restrict the maximum number of characters of the Postal [ Change
> code column to 4.
> Remove the time component from the Last on hold time [arange
> datetime column.
>
> New, EDIT, EDIT

**Correct answer:** 1. Create a new Choice column; 2. Edit the existing choice; 3. Edit the existing choice

### Question 254

**Type:** Drag-and-drop / matching  
**PDF page(s):** 153, 154  
**Verdict:** Corrected

**Question (OCR transcription):**

> DRAG DROP.
>
> A company implements Microsoft Power Apps on the Microsoft Power Platform.
>
> Sales team members must take photos of their travel expense receipts and enter basic information about
>
> purchases.
>
> The accounting team must be able to view and update records in a shared Microsoft Excel document on
>
> mobile devices.
>
> You need to select the type of Power Apps app for each scenario.
>
> Which type of app should you use? To answer, drag the appropriate apps to the correct scenarios. Each
>
> app may be used once, more than once, or not at all. You may need to drag the split bar between panes
>
> or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Apps
>
> Answer Area
>
> Scenario
>
> App
>
> | Canvas app
>
> Sales team
>
> App
>
> Model-driven app
>
> Accounting team
>
> App
>
> canvas / model driven

**Correct answer:** 1. Canvas app; 2. Canvas app

**Verification note:** Excel is a supported canvas-app data source; model-driven apps require Dataverse.

### Question 255

**Type:** Multiple answer  
**PDF page(s):** 154, 155  
**Verdict:** Verified

**Question (OCR transcription):**

> A company creates canvas apps that use a data source from its sales team.
>
> To meet company device policies, you must determine the available app formats the sales team can
>
> select when the sales team creates the canvas.
>
> You need to determine the available app formats.
>
> Which two app formats should you select? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Android
>
> Os.
>
> ios
>
> Mobile
>
> OD.
>
> Desktop
>
> Tak

**Correct answer:** Phone/mobile and tablet form factors

### Question 256

**Type:** Single answer  
**PDF page(s):** 155  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is undergoing a digital transformation by using Microsoft Power Platform.
>
> Departments in the company have the following requirements:
>
> Customer service | Allow customers without Microsoft Power Platform licenses to create their own account and log customer sence tickets
>
> Fookbes
>
> 'Alow technvcians to take photos of warehouse equipment with thew mobile devices and record detatls about equipment
>
> condition.
>
> Finance
>
> ily copy details from Fwvakces received in a shared ralbox into the finance system
>
> Create a Iist of key words and phrases used by customers who provided
>
> You need to determine which department can use a canvas app to meet its requirement.
>
> For which department should you develop a canvas app?
>
> [ ~ A. Facilities
>
> B. Finance
>
> C. Customer service
>
> D. Marketing

**Correct answer:** Facilities

### Question 257

**Type:** Single answer  
**PDF page(s):** 155, 156  
**Verdict:** Verified

**Question (OCR transcription):**

> A.user requests the removal of the Fax column from the following form in a model-driven app:
>
> «
>
> CE sme sive ecove + New Ch Deacate Ai Conect |
>
> Arison G delete O Fetresh
>
> Shue
>
> @ Hone
>
> oon
>
> ww oy
>
> recent
>
> v
>
> Alpine Ski House -sves
>
> essere | Reanstnortens | GQ
>
> ® Povo
>
> v
>
> 'Summary Details Reloted ~
>
> cones
>
> 'ACCOUNT INFORMATION
>
> IE recovers
>
> Tentine
>
> +7
>
> 2 sewn
>
> R contac
>
> Aecour ame
>
> * pine Si House
>
> toner avai.
>
> Prone
>
> 5555555555
>
> .
>
> °
>
> Modlied on 17/023 440 Put
>
> i
>
> =
>
> 1 Note modiied by 8 FNULNU
>
> 2e0
>
> Website
>
> Inapsdtemmaipnesowe.
>
> (ab fas tan eer guna monger om tay
>
> View mote
>
> Parent Account
>
> =
>
> Taher Sybet
>
> re
>
> Asses Steet
>
> pine tane
>
> Which form should you open in the app designer?
>
> A. Account
>
> f B. Information
>
> . Summary

**Correct answer:** Information form

### Question 258

**Type:** Single answer  
**PDF page(s):** 156, 157  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses a custom-built system to record financial data that runs on a manager's machine.
>
> The system does not have an API. New customer details must be manually entered into the system by
> the manager from a central spreadsheet. The user interface of the system contains the complex business
>
> logic that is needed for the manual customer data entry process.
>
> You need to ensure that new customer details can be entered into the system automatically by using
>
> Power Automate.
>
> Which type of flow should you create?
>
> A. automated cloud
>
> B. business process
>
> yY C. desktop '
>
> D. instant cloud

**Correct answer:** Desktop

### Question 259

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 157, 158  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> A company uses a model-driven app to manage its sales process.
>
> You are creating a Power Automate cloud flow that will send you a message in Microsoft Teams when a
>
> new order is recorded in Microsoft Dataverse.
>
> How should you configure the flow? Select the answer that correctly completes the sentence.
>
> Answer Area
> To determine when the flow will start, you must select | v)
> an action
> a formula
> a trigger

**Correct answer:** Trigger

### Question 260

**Type:** Single answer  
**PDF page(s):** 158  
**Verdict:** Verified

**Question (OCR transcription):**

> 'A company uses Dynamics 365 Supply Chain Management.
>
> When a sales order is created for one of the customers that a specific user manages, a Microsoft Outlook
> task must be created to remind the user to perform any follow up activities that are required.
>
> You need to implement the functionality to create Outlook tasks.
>
> Which feature should you use?
>
> A. Business Events
> AlBuilder
> D. Microsoft Dataverse
>
> E Power Bl

**Correct answer:** Power Automate

### Question 261

**Type:** Single answer  
**PDF page(s):** 158, 159  
**Verdict:** Verified

**Question (OCR transcription):**

> You build a custom Al Builder model and use it in Power Automate cloud flows.
> Users report that they are not able to use the model in their flows.
> You need to allow users to access the model in their flows.
>
> Which action should you perform on the model?
>
> B. edit
> publish
>
> D. train
>
> ==

**Correct answer:** Publish

### Question 262

**Type:** Multiple answer  
**PDF page(s):** 159  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is considering using Power Pages for its website.
> You need to identify the capabilities of Power Pages.
> What are two capabilities of Power Pages? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Supporting multiple languages Ace
>
> YB. Providing low-code websites hosted as a service honda
>
> C. Supplying OData feeds
>
> D. Creating customized styling for each user

**Correct answer:** Multilingual, low-code hosted website capability

### Question 263

**Type:** Drag-and-drop / matching  
**PDF page(s):** 159, 160  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP.
>
> You create a Power Pages site to share Microsoft Dataverse data with external customers
> Customers must be authenticated to view data.
> You need to configure Power Pages.
>
> Which component should you use for each requirement? To answer, drag the appropriate components
> to the correct requirements. Each component may be used once, more than once, or not at all. You may
> need to drag the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Components Answer Area
>
> Requirement Component
>
> Collect data from customers and store the data in a table. -)
> Display multiple rows from a table. CL]
>
> El] a
> > a |
> Fe

**Correct answer:** 1. Basic form; 2. List

**Verification note:** Historical portal terminology; these are now called forms and lists.

### Question 264

**Type:** Drag-and-drop / matching  
**PDF page(s):** 160  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> You need to deploy a Power Pages site by using a template.
>
> Which three actions should you perform in sequence? To answer, move the appropriate actions from the
>
> list of actions to the answer area and arrange them in the correct order.
>
> atone daower hose
> [ere rane od ve mess ]
>
> [sends Moet Daven enone |
>
> [Chests conection io Mawech Date 1
> bah he se
> Choose 2 template.
>
> =z

**Correct answer:** 1. Select a Dataverse environment; 2. Choose a template; 3. Enter a name and web address

### Question 265

**Type:** Multiple answer  
**PDF page(s):** 160, 161  
**Verdict:** Verified

**Question (OCR transcription):**

> A company requires a Power Pages site that uses one of the site design templates provided with Power
> Pages to build its website on.
>
> You need to deploy the site.
> Which three pages will be included in the site? Each correct answer presents part of the solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Forums
>
> Summary

**Correct answer:** B, D, E — Home page, Search results, Contact us

### Question 266

**Type:** Multiple answer  
**PDF page(s):** 161  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Microsoft Power Platform to monitor social media.
>
> You create a Power Automate cloud flow to process social media messages that positively mention the
>
> company and its products.
> You need to choose a connector to perform sentiment analysis on the social media messages.
> Which two connectors can you use in the flow? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Azure Communication Services Chat
>
> B. Language - Question Answering
>
> Y AlBuilder Cid ]
>
> D. Azure Application Insights
>
> YE. Azure Cognitive Service for Language 'Most vortD |

**Correct answer:** AI Builder and Azure Cognitive Service for Language

### Question 267

**Type:** Drag-and-drop / matching  
**PDF page(s):** 161, 162  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP.
>
> You are planning to deploy Power Pages websites.
> You need to choose the appropriate type of template for each requirement for the websites.
>
> Which types of templates should you use? To answer, drag the appropriate templates to the correct
> requirements. Each template may be used once, more than once, or not at all. You may need to drag the
>
> split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Templates 'Answer Area
>
> Posen Tete
>
> (aioe -] Provide building blocks forthe ste. -----
> Create a site that allows users to submit applications online. |
> Cais te iene eerie Scenes: 7]
>
> knowledge and support resources.
>
> Create a site with a single home page. |_|
>
> Answer Area
>
> Requirement Template
>
> Create a site that allows users to submit applications online. Scenario-based
> Create a site for Microsoft Dynamics 365 customers to access Customer self-service
> knowledge and support resources.
>
> Create a site with a single home page. Blank page

**Correct answer:** 1. Scenario-based template; 2. Customer self-service template; 3. Blank page

### Question 268

**Type:** Single answer  
**PDF page(s):** 162, 163  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is considering using Power Pages for its website.
> You need to determine whether the use cases for Power Pages meet the company's requirements.
>
> What is a use case for Power Pages?
>
> YA. Sharing data with customers
>
> B. Building mobile apps for iOS
>
> C. Performing repetitive tasks
>
> D. Creating visualizations of data

**Correct answer:** Sharing data with customers

### Question 269

**Type:** Drag-and-drop / matching  
**PDF page(s):** 163, 164  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> You are managing a custom model through its lifecycle in Al Builder.
> You need to determine the earliest status the model should be in to perform actions.
>
> What is the earliest status required for each action? To answer, drag the appropriate statuses to the
>
> correct actions. Each status may be used once, more than once, or not at all. You may need to drag the
> split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
> Statuses Answer Area
>
> Action
> Test the performance of the model.
>
> Status
>
> Use the model in Power Apps and Power Automate.
>
> Build the model and add data.
>
> 'i
> TT
>
> Answer VY Discussion

**Correct answer:** 1. Trained; 2. Published; 3. Draft

### Question 270

**Type:** Single answer  
**PDF page(s):** 164  
**Verdict:** Verified

**Question (OCR transcription):**

> with customers
>
> ring dat
>
> 'A company stores its customer warranty information in Microsoft Dataverse.
>
> Authenticated and authorized customers must be able to access their own warranty information without
>
> requiring a user-assigned Microsoft Power Platform license.
> You need to share warranty information with these customers.
>
> What should you use?
>
> A. Power BI report
>
> B. Model-driven app
>
> D. Canvas app

**Correct answer:** C — Power Pages site

### Question 271

**Type:** Multiple answer  
**PDF page(s):** 164, 165  
**Verdict:** Corrected

**Question (OCR transcription):**

> 'A company is considering using Al Builder to gain insights into its data.
> You need to determine whether the use cases for Al Builder meet the company's requirements.
> What are three use cases for Al Builder? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> D. Conversational language understanding

**Correct answer:** A, B, E — Prediction, object detection, category classification

**Verification note:** AI Builder does not offer the listed anomaly-detection model; category classification is the applicable prebuilt/custom model capability.

### Question 272

**Type:** Multiple answer  
**PDF page(s):** 165  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating a self-service solution to handle incoming sales support calls.
>
> The solution must detect the caller's location and translate any information the caller provides from the
> caller's native language to English.
>
> Which two components should you use? Each correct answer presents part of the solution.
>
> NOTE: Each correct selection is worth one point.
>
> 'A. Power Virtual Agents
>
> Y B. Microsoft Azure Cognitive Services SboBacl) |
>
> v C. AlBuilder Language Detection Model heated asi }
>
> D. Microsoft Dynamics 365 Remote Assist for mobile

**Correct answer:** B, C — Azure Cognitive Services; AI Builder Language Detection model

### Question 273

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 165, 166  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
> You build solutions based on Microsoft Power Platform.
>
> You want to generate predictions in Power Automate cloud flows by using machine learning (ML)
> models.
>
> You need to choose how to build and train the ML models to perform predictions.
>
> Select the answer that correctly completes the sentence.
>
> Answer Area
>
> Building and training no-code ML models for use with
> Microsoft Power Platform flows is performed by using
>
> Ba
>
> Al Builder
> Azure Cognitive Services
> Azure Machine Learning
> Azure Cognitive Search

**Correct answer:** AI Builder

**Verification note:** AI Builder is the no-code model-building service for Power Platform.

### Question 274

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 166, 167  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> Accompany uses a cloud app built by the IT department. The app has a publicly available API to
>
> manage employee availability.
>
> You are creating an automated flow by using Power Automate that will send an email to an
>
> employee's manager when that employee is recorded as sick in the app.
>
> You need to choose the appropriate type of connector for the flow.
>
> Select the answer that correctly completes the sentence.
>
> Answer Area
>
> Use a
>
> connector to trigger the Power Automate cloud flow.
> custom
>
> premium
>
> standard

**Correct answer:** Custom connector

### Question 275

**Type:** Drag-and-drop / matching  
**PDF page(s):** 167, 168  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company uses Power BI.
> The company wants to use Al Insights in Power BI to make data-driven decisions.
> You need to select the appropriate insight type for each requirement.
>
> Which insight types should you select? To answer, drag the appropriate insight types to the correct
> requirements. Each insight type may be used once, more than once, or not at all. You may need to drag
>
> the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Insight types Answer Area
> 'Anomalies Requirement Insight type
> Key Performance indicator (KPI) analysis Evaluate the current value against a defined
> target.
> Trends
>
> Identify data that is outside the boundary of
> normally expected values.
>
> Find patterns in time-series data.
>
> Discussiop

**Correct answer:** KPIs; anomalies; trends

### Question 276

**Type:** Single answer  
**PDF page(s):** 168  
**Verdict:** Verified

**Question (OCR transcription):**

> You create a canvas app by using the option labeled Start from data. You connect a spreadsheet that
>
> contains customer records. The customer records are displayed in a list on a screen labeled Browse.
> You need to modify @ property of the control on the screen.
>
> Which control should you modify?
>
> A. Display form
>
> B. Icon
>
> . Search
>
> ( ~ D. Gallery valet

**Correct answer:** Gallery

### Question 277

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 168, 169  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
>
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> The date and time are the triggers for a scheduled cloud flow.
>
> Cloud flows must be exported to a Microsoft Excel file to copy
> them to another environment.
>
> Users must create desktop flows to share them without being an
> administrator.

**Correct answer:** 1. Yes; 2. No; 3. No

### Question 278

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 169, 170  
**Verdict:** Verified

**Question (OCR transcription):**

> Tuestion 20 [°) 300
>
> HOTSPOT
>
> A company uses Microsoft Dataverse to manage business data.
>
> You need to import date into Dataverse from other data sources by using dataflow.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selections is worth one point.
>
> Answer Area
> Statements Yes No
> You can access data sources in a dataflow by using the connectors O O
> that are used with Power Automate.
> You can use Power Query to shape and transform the data in a @) O
> dataflow.
> You can run dataflows on a schedule to refresh the data in Dataverse. O O
>
> iswer V Discussion

**Correct answer:** 1. No; 2. Yes; 3. Yes

### Question 279

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 170, 171  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> Accompany is building a Power Virtual Agents chatbot to assist employees.
>
> You need to select the features the bot will use when employees request time off.
>
> Which features should you select? To answer, select the appropriate options in the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Step
>
> An employee opens the conversation by saying. "I need to
> take time off."
>
> The chatbot requests the employee's location.
>
> The chatbot recognizes the name of the city the employee
> provides.
>
> The chatbot creates the time off request in the human
> resources system.
>
> Feature
>
> Action
> Entity
> Trigger phrase
>
> Action
> Show a message node
> Trigger phrase
>
> Entity
> Show a message node
> Trigger phrase
>
> Action
> Entity
> Show a message node
>
> Answer Area
>
> Step Feature
> An employee opens the conversation by saying. "| need to Re
> take time off." Action
> Enti
> The chatbot requests the employee's location. - Ty)
> Action
> The chatbot recognizes the name of the city the employee _ 7)
> provides.
> Show a message node
> Trigger phrase
> The chatbot creates the time off request in the human ; by)
> resources system.
> Show a message node

**Correct answer:** 1. Trigger phrase; 2. Show a message; 3. Entity; 4. Action

### Question 280

**Type:** Not present in source  
**PDF page(s):** —  
**Verdict:** Source issue

**Question (OCR transcription):**

> _The source PDF contains no question body for this number._

**Correct answer:** Source omission

**Verification note:** The PDF jumps from question 279 to 281; no question body or answer is present.

### Question 281

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 171, 172  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Statement Yes No
>
> You can trigger a Power Automate flow when you upload a Microsoft Excel or re) oO
> Word file to a SharePoint site
>
> You can use a Power Automate desktop flow to open a cloud-based ° 1@)
> application and perform an action that creates a file.
>
> You can use a connector in a Power Automate cloud flow to insert data into a oO 1@)
> Power Apps app data source from a third-party data source
>
> Yes, Yes, Yes

**Correct answer:** 1. Yes; 2. Yes; 3. Yes

### Question 282

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 172, 173  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> A company uses Microsoft Power Platform to connect to multiple data sources and manage business
>
> data.
>
> The low-code components in Microsoft Power Platform must be able to create and update data in these
>
> data sources.
>
> You need to access the required data by using Microsoft Power Platform components.
>
> Which component should you use for each requirement? To answer, select the appropriate options in
>
> the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
>
> Requirement
> Update data in an AP! hosted in Azure.
>
> Update files in SharePoint document library folders.
>
> Ingest and transform data into Microsoft Dataverse
> by using dataflows.
>
> Component
>
> Custom connector
> Microsoft Dataverse
> Power Query
>
> Microsoft Teams connector
> Microsoft Dataverse
>
> Power Query
>
> Standard connector
>
> Microsoft Dataverse
> Power Query
> Standard connector
>
> Answer Area
>
> Requirement
> Update data in an AP! hosted in Azure.
>
> Custom connector
>
> off Dataverse
>
> Power Query
>
> Update files in SharePoint document library folders. : Bhd |
> Microsoft Teams connector
> Microsoft Dataverse
> Power Q
>
> Ingest and transform data into Microsoft Dataverse
> by using dataflows.
>
> dard connector

**Correct answer:** 1. Custom connector; 2. Standard connector; 3. Power Query

### Question 283

**Type:** Single answer  
**PDF page(s):** 173, 174  
**Verdict:** Verified

**Question (OCR transcription):**

> A hotel develops a housekeeping checklist for its housekeeping staff to use when they finish cleaning a
>
> room.
>
> The housekeeping staff MUST be able to use their mobile device to add a check mark for each
> completed task and take a picture of the prepared bed.
>
> The results of the checklist for each room must be stored in a SharePoint list.
> You need to select the Microsoft Power Platform component that fulfills the requirement.
>
> Which component should you select?
>
> A. Power Pages site
>
> B. Power Virtual Agents chatbot
>
> C. Power BI report
>
> D. Model-driven app
>
> v_E. Canvas app

**Correct answer:** Canvas app

### Question 284

**Type:** Drag-and-drop / matching  
**PDF page(s):** 174, 175  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company creates a new instance of Microsoft Dataverse to store customer information.
> Customer service agents require a simple, three-screen canvas app to interact with the Dataverse data
> You need to create the app.
>
> Which four actions should you perform in sequence? To answer, move the appropriate actions from the
>
> list of actions to the answer area and arrange them in the correct order.
>
> Actions Answer Area
>
> Choose whether to connect directly or oO)
> |
>
> through an on-premises data gateway.
> Create a Dataverse connection. | 3 |
>
> Select Dataverse from the Start from section.
>
> OO
>
> Choose a table. 4
>
> Switch to the environment with Dataverse.
>
> 1. Switch to the environment with Dataverse. You want to create in the right
> environment
>
> 2. Select Dataverse from the Start from section
>
> 3. Create a dataverse connection
>
> 4. Choose a table

**Correct answer:** 1. Switch environment; 2. Start with Dataverse; 3. Create/select a connection; 4. Select a table

### Question 285

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 175, 176  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> Your company has created a Power Virtual Agents chatbot to assist employees with common questions
>
> such as checking their vacation balances, office opening hours, and travel expense policies.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Power Virtual Agents capabilities
>
> Statements Yes No
> To retrieve the user's vacation balance, the bot can use an e) 3)
> action.
>
> Topics are components the bot can recognize in user dialog, (e) °
>
> such as the name of a particular office.
>
> Auser needs to enter an exact trigger phrase for the bot to (e) @)
> respond with appropriate information.
>
> Yes, No, No

**Correct answer:** 1. Yes; 2. No; 3. No

### Question 286

**Type:** Drag-and-drop / matching  
**PDF page(s):** 176, 177  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company uses Power Automate.
>
> The company wants to automate a user's data entry into an older Windows application on the user's
>
> local computer.
>
> You need to configure the automation to meet the following requirements:
>
> Automatically capture the user's data entry actions.
>
> Enable the user to specify the values to be entered when the automation is run on the computer.
>
> Which three actions should you manually perform in sequence? To answer, move the appropriate actions
>
> from the list of actions to the answer area and arrange them in the correct order.
>
> Actions
>
> Record tasks.
>
> | Add input variables.
>
> Answer area
>
> | Add flow variables.
>
> |
> }
> | Create a new desktop flow. |
>
> | Create a new cloud flow.
>
> Answer area
>
> Create a new desktop flow.
> Record tasks.
>
> Add input variables.

**Correct answer:** 1. Desktop flow; 2. Record; 3. Input variables

### Question 287

**Type:** Drag-and-drop / matching  
**PDF page(s):** 177, 178  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
> A company uses Microsoft Power Apps and Microsoft Azure to modernize its mobile workforce.
> The company needs to identify solutions for three use cases:
>
> An app to audit retail store displays with a tablet-specific layout for its unique screen dimensions
>
> An app to create sales orders that uses business process flows
>
> An app to display product information that uses data from a Microsoft Dataverse instance, Microsoft
> Excel, and Microsoft SharePoint
>
> You need to identify the correct app types to use.
>
> Which apps should you use? To answer, drag the appropriate app types to the correct apps. Each app
> type may be used once, more than once, or not at all. You may need to drag the split bar between panes
>
> or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> App types Answer Area
> Logic App App type
> \iModal-driven | App to audit retail store displays App types
>
> App to create sales orders [ App types
> Canvas
>
> App to display product information App types
>
> Canvas, model driven, canvas

**Correct answer:** 1. Canvas app; 2. Model-driven app; 3. Canvas app

### Question 288

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 178, 179  
**Verdict:** Corrected

**Question (OCR transcription):**

> HOTSPOT
>
> You save and publish the following view in the view designer:
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statements Yes No
>
> When you create a new account in the city of Boston, it will
> be shown as the second row.
>
> @)
>
> All users will see the same number of rows in this view. 12)
>
> To switch to this view, users should choose Accounts with 1e)
> USA addresses from the dropdown list.

**Correct answer:** 1. No; 2. No; 3. No

**Verification note:** The view filters on current owner, is named “My USA Accounts,” and its sort/filter settings cannot guarantee the new Boston row’s ordinal position.

### Question 289

**Type:** Drag-and-drop / matching  
**PDF page(s):** 179, 180  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP.
>
> A customer service manager runs a call center and support portal for customers seeking assistance.
>
> The customer service manager learns customers are unhappy with support by reading reviews online,
>
> which has become a time-consuming task.
> The customer service manager has the following requirements:
>
> Any negative reviews are automatically identified.
>
> Any negative review should generate an email notification to the customer service manager.
> You need to identify the components to create a solution.
>
> What should you identify to meet the requirements? To answer, select the appropriate options in the
>
> answer area.
>
> Solutions Solutions
>
> Object detector
> , Requirement Solution
> fext recognition
> 99 Identify negative language within the text of a review.
> Power Automate Send an email notification.
> Sentiment analysis
>
> Solutions
>
> Requirement Solution
>
> Identify negative language within the text of a review. | Sentonent analysis
>
> Send an email notification. Power Automate

**Correct answer:** 1. Sentiment analysis; 2. Power Automate

### Question 290

**Type:** Single answer  
**PDF page(s):** 180, 181  
**Verdict:** Verified

**Question (OCR transcription):**

> You are building a canvas app to allow users to record their expenses. The app also will support screen
>
> readers for users with visual impairments.
> You have the following requirements:
>
> Use a tool that identifies potential issues.
>
> Use a tool that provides suggestions for modifying the app.
> You need a tool that meets the requirements.
>
> Which tool should you use?
>
> A. Flow Checker
>
> B. Microsoft Trust Center
>
> C. Microsoft Power Platform admin center
>
> ~_D. Accessibility Checker '

**Correct answer:** Accessibility Checker

### Question 291

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 181, 182  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> You work for a restaurant. The chef prepares the menu based on the availability of produce at the
> farmer's market. Every Friday evening, you open the farmer's market website to view the list of
> vendors who will attend the market on Saturday morning, copy the list into an email, and send it to
> the chief.
>
> You need to use Power Automate to replace this manual task.
>
> Select the answer that correctly completes the sentence.
>
> Types of Power Automates
>
> To open the website and read the data, you need to
>
> use a lw. flow.
> automated
> desktop
> instant
> scheduled
>
> Types of Power Automates
>
> To open the website and read the data, you need to
>
> use a v flow.
>
> automated
> desktop
> instant

**Correct answer:** Desktop

### Question 292

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 182, 183  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
> A company uses Power BI to report key performance indicators (KPIs).
> The company requires that the KPIs contain the following:
>
> Multiple widgets in a single canvas
>
> Visualization of data in a line chart
> You need to implement the Power BI components.
>
> Which components should you use? To answer, select the appropriate options in the answer area.
> Power BI components
>
> Requirement Power BI component
>
> Multiple widgets in a single canvas | Vv
>
> Dashboard
> Dataset
> Report
>
> Visualization of data in a line chart lv
> Dashboard
> Dataset
>
> Report
>
> Template app
>
> Dashboard, report

**Correct answer:** 1. Dashboard; 2. Report

### Question 293

**Type:** Drag-and-drop / matching  
**PDF page(s):** 183, 184  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company is creating a canvas app to manage weekly status reports from users about projects.
>
> Status reports must be created weekly. Users can enter project tasks with descriptions. Users can alsc
> add escalation requests for tasks that are late or at risk. When a status report is submitted with an
> escalation request, the app must automatically send a text message to the submitter's manager. A
> reminder must be sent at 8 PM on Sunday to everyone who has not yet submitted a status report fo!
>
> previous week.
> You need to identify the appropriate components to use in the solution.
>
> What should you use? To answer, drag the appropriate implementation mechanisms to the correct
> requirements. Each implementation mechanism may be used once, more than once, or not at all. You
>
> may need to drag the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
> Answer Area
>
> Implementation Mechanisms Action Implementation Mechanism
>
> Business process flows
> Automatically send a text message
> based on the report submission. Co)
> Al Builder Automatically send a reminder at 8 PM
> based on a missing status report rd
>
> Cloud flows, cloud flows

**Correct answer:** 1. Automated cloud flow; 2. Scheduled cloud flow

### Question 294

**Type:** Single answer  
**PDF page(s):** 184, 185  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is building a model-driven app for employees to record customer orders.
>
> The company requires that an alphanumeric customer identification number be manually recorded with
>
> each new customer record in Dataverse. The customer table is already configured.
> You need to configure the customer identification number on the customer table in Dataverse.
>
> What should you use?
>
> L ~ A. column
>
> B. relationship
>
> C. dataflow
>
> D. table

**Correct answer:** Column

### Question 295

**Type:** Drag-and-drop / matching  
**PDF page(s):** 185, 186  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company evaluates Microsoft tools for its employees.
>
> The company uses Microsoft Excel to enter potential customer information from trade shows.
>
> When potential customers create their first sale with the company, a Microsoft SharePoint list records
>
> them as converted to a customer.
>
> The company must report which trade shows convert the most potential customers to actual customers.
>
> You need to identify the tools that meet the requirements.
>
> Which tools should you use? To answer, drag the appropriate solutions to the correct requirements. Each
>
> solution may be used once, more than once, or not at all. You may need to drag the split bar between
>
> panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Solutions
>
> Microsoft Forms
>
> Microsoft Power BI
>
> Microsoft Power Apps
>
> Answer Area
>
> Requirement
>
> Create and maintain potential customers by using
> a custom user interface application for trade shows.
>
> Create and maintain customers by using
> an interface application for the list in SharePoint.
>
> View a reporting dashboard that includes metrics
> on converted customers.
>
> Power apps, Power apps, power bi
>
> Solution

**Correct answer:** 1. Power Apps; 2. Power Apps; 3. Power BI

### Question 296

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 186, 187  
**Verdict:** Corrected

**Question (OCR transcription):**

> HOTSPOT
>
> A company enhances its data by using an Al Builder prebuilt model.
>
> The company determines that the model does not provide good results for the company's unique data.
> You need to increase the accuracy of the predictions made by the model.
>
> Select the answer that correctly completes the sentence.
>
> Answer Area
>
> You canincrease the accuracy of the prebuilt model by iv
> adding data to the model
> adding Microsoft Dataverse to the environment
> building a custom model
>
> inserting the Al Builder control for the model into a canvas app

**Correct answer:** Build a custom AI Builder model

**Verification note:** Adding the model control to an app does not retrain or improve model accuracy; a custom model trained on company data does.

### Question 297

**Type:** Single answer  
**PDF page(s):** 187  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating a canvas app.
> You select the form factor of the app.
> You need to add a source of the data.
>
> What should you use?
>
> A. screen
> ~ B. connector
> C. formula
>
> D. control

**Correct answer:** B — Connector

### Question 298

**Type:** Drag-and-drop / matching  
**PDF page(s):** 187, 188  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> 'A company has an upcoming seminar. The invitation will be sent to an existing customer base.
>
> The event manager wants the customers to register and prepay from their mobile devices. The chief
>
> security officer requires any technology with payment data to be PCI compliant.
> You need to identify the components of the solution,
>
> What should you identify to meet the requirements? To answer, move the appropriate solutions to the
> correct requirements. You may use each solution once, more than once, or not at all, You may need to
>
> move the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Solutions Requirement Solution
>
> ee
>
> ee
> 4 for payment processing.
>
> Power pages, power pages

**Correct answer:** 1. Power Pages; 2. Power Pages

**Verification note:** Power Pages supplies the responsive registration/payment UI; the payment provider integrated with it must meet PCI requirements.

### Question 299

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 188, 189  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> A user is creating their first Power Apps canvas app.
>
> Which types of controls should you use for each scenario? To answer, select the appropriate options in
>
> the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Scenario Control
>
> View the date, time, and location of upcoming internal iw
>
> meetings Meeting-screen template
> Gallery
> List box
>
> Send a meeting request from within the app. iv
> Function
> Gallery
> Intelligent control
>
> Categorize a real-world item based on a photograph. iv
> Image
> Object detection
> |Add picture
>
> Answer Area
> Scenario Control
>
> View the date, time, and location of upcoming internal
> meetings.
>
> Send a meeting request from within the app.
>
> Categorize a real-world item based on a photograph.

**Correct answer:** 1. Gallery; 2. Function; 3. Object detection

### Question 300

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 189, 190  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> 'A company creates a canvas app that allows employees to manage their vacation requests. The app also
> contains the company's holiday closures, as shown in the following graphic.
>
> emt 9 bly | + ome e Sigs ee
>
> = Treeview
>
> 'Company Holidays
>
> Fay, December 25
>
> Saturday, December 26 = 2
> Thursday, December 31
>
> Friday, January 01
>
> a
>
> Use the drop-down menus to select the answer choice that answers each question based on the
>
> information presented in the graphic.
>
> Use the drop-down menus to select the answer choice that answers each question based on the
> information presented in the graphic.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Questions Answer choice
> What is the name of the gallery control iv
> thatis selected? CompanyHolidaysGallery
> Holidays_1
> Company Holidays
> Which icon in the top-right corner of the screen lv
> should you select to test the app? Stethoscope
> Play
> Speech bubble
> 'What should you change to update the format | Vv
> of the dates to DD/MM/YYYY? formula
> control
> data source
>
> Answer Area
>
> Questions Answer choice
>
> What is the name of the gallery control
> that is selected?
>
> Which icon in the top-right corner of the screen
> should you select to test the app? hoscope
>
> Speech bubble
>
> What should you change to update the format
> of the dates to DD/MM/YYYY?
>
> data source

**Correct answer:** 1. CompanyHolidaysGallery; 2. Play; 3. Formula

### Question 301

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 190, 191  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> A tutoring company has developed and deployed a model-driven app for the administration staff and a
>
> canvas app for teachers
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Statements Yes No
> Teachers can access the canvas app by using desktops and mobile ¢
>
> devices.
>
> To access the model-driven app, users must be assigned (
>
> a security role.
>
> Administration staff can create personal views and dashboards in
> the model-driven app.

**Correct answer:** 1. Yes; 2. Yes; 3. Yes

### Question 302

**Type:** Single answer  
**PDF page(s):** 191  
**Verdict:** Verified

**Question (OCR transcription):**

> You develop a Copilot Studio copilot in a Microsoft Teams channel.
> You need to identify the operations the copilot can perform.
>
> Which action can the copilot perform?
>
> A. Trigger a request for approval from a senior manager for high-value expenses.
>
> B. Upload and process a PDF file.
>
> [ Y C. Transfer a chat to a live person if the copilot cannot answer the question. IO> OLED |

**Correct answer:** C — Transfer the chat to a live person

**Verification note:** This is the question’s intended Copilot Studio capability; live-agent handoff requires a configured engagement hub.

### Question 303

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 191, 192  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
> A company uses the receipt processing model of Al Builder in a canvas app to process expenses.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Statements Yes No
> Receipt processing requires a photo taken by using the Oo e)
> camera control in the canvas app.
> Receipt processing can extract data from printed text on a @) Oo
> receipt.
> Receipt processing can extract data from handwritten text on Oo @)
> a receipt.
>
> No, Yes, No

**Correct answer:** 1. No; 2. Yes; 3. No

### Question 304

**Type:** Single answer  
**PDF page(s):** 192, 193  
**Verdict:** Verified

**Question (OCR transcription):**

> You review a Power BI report about a company's sales data in Power BI.
>
> You open an insight notification and observe that one of the company stores has a higher sales value
>
> than the target sales value in the previous quarter.
> You need to identify the insight that is shown in the notification.
>
> Which insight is used?
>
> ~_A. key performance indicator (KPI) analysis cilia
>
> B. significant anomaly
>
> C. trend reversal
>
> D. recent trend

**Correct answer:** KPI

### Question 305

**Type:** Drag-and-drop / matching  
**PDF page(s):** 193, 194  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company wants to use a model-driven app for its sales team.
>
> The Sales manager wants to ensure each team member can modify their own views without affecting
>
> other views. The IT manager wants to ensure the view is updated for all users.
> You need to identify the type of view for the model-driven app.
>
> Which view type will meet the requirements? To answer, select the appropriate options in the answer
>
> area.
>
> NOTE: Each correct selection is worth one point.
>
> View Types Model-driven app views
> personal
> Requirement View Type
> public Sales manager
> system IT manager
>
> Model-driven app views
>
> Requirement View Type
>
> Sales manager personal
>
> IT manager public

**Correct answer:** 1. Personal view; 2. Public view

### Question 306

**Type:** Single answer  
**PDF page(s):** 194, 195  
**Verdict:** Verified

**Question (OCR transcription):**

> A shipping company is evaluating Microsoft Power Platform services and capabilities.
>
> The company requires an app that can track and manage stock items. The company has no existing data
>
> or images to assist with app creation.
>
> You need to demonstrate the ease of the process to create an app and a data model by using natural
>
> language.
>
> Which platform feature or option should you use for the demonstration?
>
> t Y A. Copilot
>
> B. Start with data
>
> C. Start from an image
>
> D. Power Automate
>
> E. Al Builder

**Correct answer:** Copilot

### Question 307

**Type:** Drag-and-drop / matching  
**PDF page(s):** 195, 196  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
> A company is evaluating the use of Microsoft Power Automate to eliminate manual, repetitive tasks.
> You need to recommend the appropriate type of Power Automate flow for each scenario.
>
> Which type of Power Automate flow should you recommend? To answer, move the appropriate Power
> Automate flow types to the correct scenarios. You may use each scenario once, more than once, or not at
>
> all. You may need to move the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Power Automate flow types Power Automate flows
>
> Scenario Power Automate flow type
> On Monday mornings browse to alocalnewswebsteand -§ [---_]
>
> log any weekend events.
> Automated cloud flow
> When a staff member calls in sick, post a message ae
> in the office Microsoft Teams channel.
>
> When the manager's mailbox receives an email with L]
> the subject Approval, send a Teams approval.
> Power Automate flows
>
> Scenario Power Automate flow type
>
> On Monday mornings, browse to a local news website and Desktop flow
>
> log any weekend events.
>
> When a staff member calls in sick. post a message Instant cloud flow
>
> in the office Microsoft Teams channel.
>
> When the manager's mailbox receives an email with Automated cloud flow
>
> the subject Approval, send a Teams approval.

**Correct answer:** 1. Desktop flow; 2. Instant cloud flow; 3. Automated cloud flow

### Question 308

**Type:** Single answer  
**PDF page(s):** 196  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Dataverse to store information about its products and stock levels.
>
> The company requires a solution that allows existing customers and potential new customers to perform
>
> the following self-service actions:
>
> Locate information about available products.
> Register their information for marketing materials.
>
> Create their own orders.
> You need to recommend a Microsoft Power Platform component that meets the requirements.
>
> Which component should you recommend?
>
> A. Power BI
>
> YB. Power Pages PERBIaC)
>
> C. Canvas app
>
> D. Model-driven app

**Correct answer:** Power Pages

### Question 309

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 196, 197, 198  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> An automobile manufacturer requires workers to collect information about car defects in a defect sheet.
>
> Submitted defect sheets must be reviewed by floor managers.
>
> Historically, workers have left out key information from the defect sheets. The floor manager then must
>
> contact the worker who submitted the sheet to obtain the missing information.
>
> The automobile manufacturer requires a process that ensures that the floor manager receives a fully
>
> completed defect sheet on initial submission.
> You need to recommend a Microsoft Power Platform service that fulfills the manufacturer requirements.
>
> Select the answer that correctly completes the sentence.
>
> Microsoft Power Platform service solution
>
> A digital version of the defect sheet with rules to ensure pre-submission
> completion can be created by using bd
>
> an Al Builder Model.
>
> a Power Apps app.
>
> a Power Automate cloud flow.
> a Power Bi report.
>
> cairn

**Correct answer:** Power Apps

### Question 310

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 198, 199  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> A company is implementing Microsoft Power Platform for its business users. The business users are
>
> specialists in their subject area but unfamiliar with the Microsoft Power Platform configuration.
>
> The business users require assistance with the Microsoft Power Platform app and automation
>
> configuration.
> You need to recommend a feature to assist the users with the configuration.
>
> Select the answer that correctly completes the sentence.
>
> Features that assist with Microsoft Power Platform configuration
>
> To assist business users with the creation of apps and automations by using natural language in Microsoft Power
> Platform, they can use bd
> Copilot. |
> |Al Builder. |
> Microsoft 365.
> Power Automate. |
>
> Features that assist with Microsoft Power Platform configuration
>
> To assist business users with the creation of apps and automations by using natural language in Microsoft Power
>
> ee - a
>
> Microsoft 365.
> Power Automate.

**Correct answer:** Copilot

### Question 311

**Type:** Drag-and-drop / matching  
**PDF page(s):** 199, 200  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
> A medical office has a model-driven app that uses Microsoft Dataverse.
>
> You plan to create a screen that allows users to capture information about doctors. The screen must
>
> provide users the ability to enter or select the following information:
>
> a place to enter doctor profile data that is not part of the account table or the contact table
> a place to enter the doctor's specialty in the profile form
>
> a column for insurance with the ability to pick one of 10 different insurance companies
> You need to store the captured data in Microsoft Dataverse.
>
> What should you use to store the data? To answer, drag the appropriate components to the correct
> requirements. Each component may be used once, more than once, or not at all. You may need to drag
>
> the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Options Answer Area
>
> Table Requirement Option
>
> Column Store additional doctor profile Option
> data.
>
> Choice Store information about the Opti
> doctor's specialty. sata
>
> Row Select an insurance company. Option
>
> Answer Area
>
> Requirement Option
>
> Store additional doctor profile Table
> data.
>
> Store information about the Column
> doctor's specialty.
>
> Select an insurance company. Choice

**Correct answer:** 1. Table; 2. Column; 3. Choice

### Question 312

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 200, 201  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> You are editing the Power Automate cloud flow depicted in the following screenshot:
>
> ' Start an approval process and vend an email on Macrosoft Form submission 2 Undo Neck ents GB Save Vy How checker
> [o; ee Ou
> Ow
> ®
> ~ 2
> rs door
> u-- i
> EM Send an emai for approval O) > a: Peete
>
> You need to perform a step analysis to determine how the flow uses its connectors and the connector
>
> components.
> What is the result of the step analysis? To answer, select the appropriate options in the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Step analysis Result
> Which step is a trigger?
> Get response details
> Start an approval
> Send an email for approval
> When a new response is submitted
> Which step uses the same connector as Get bd
> response details? Start an approval
> Send an email for approval
> When a new response is submitted
>
> When a new response is submitted / When a new response is submitted

**Correct answer:** 1. “When a new response is submitted” trigger; 2. Microsoft Forms connector

### Question 313

**Type:** Drag-and-drop / matching  
**PDF page(s):** 201, 202  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company is investigating Microsoft Power Platform capabilities.
>
> Match each service to its capability. To answer, move the appropriate service from the column on the left
>
> to its capability on the right. You may use each service once, more than once, or not at all.
>
> NOTE: Each correct match is worth one point.
>
> Microsoft Power Platform service - Microsoft Power Platform service capabilities
> capabilities
>
> Dataverse
>
> Capability Service
>
> pouler Angs Quickly create an app that can connect to multiple data sources.
>
> D - Provision lable and highly secure data stor
> Power Automate ovision a scalable and highly secure data store.
>
> Power Pages Define common logic within the context of multiple apps.
>
> Update a SharePoint list every weekday by using common logic
>
> Capability Service
>
> Quickly create an app that can connect to multiple data sources. Power Apps
>
> Provision a scalable and highly secure data store. Dataverse
> Define common logic within the context of multiple apps. Dataverse
>
> Update a SharePoint list every weekday by using common logic. Power Automate

**Correct answer:** 1. Power Apps; 2. Dataverse; 3. Dataverse; 4. Power Automate

### Question 314

**Type:** Multiple answer  
**PDF page(s):** 202, 203  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is implementing Microsoft Power Platform. The company currently stores data in a SQL
> Server database.
>
> You need to explain the key benefits of Dataverse compared to SQL Server.
> Which three benefits should you explain? Each correct answer presents part of the solution.
>
> NOTE: Each correct selection is worth one point.
>
> D. Administrators can manage all aspects of the underlying platform.
>
> E. Dataverse can be hosted on different cloud providers to improve resiliency.

**Correct answer:** A, B, C — No-code schema changes; native Dynamics 365 customer-engagement integration; Azure extensibility options

### Question 315

**Type:** Single answer  
**PDF page(s):** 203  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating a Power Pages website for a company.
>
> You create the pages and provide branding for the site. You now must make the site visible across the
>
> internet.
> You need to select the tool to use to make the site available.
>
> Which tool should you use?
>
> A. Design studio kessitbididlesd
>
> B. Visual Studio Code
>
> €. Portal management app
>
> D. Power Automate maker portal

**Correct answer:** Design studio

### Question 316

**Type:** Single answer  
**PDF page(s):** 203, 204  
**Verdict:** Verified

**Question (OCR transcription):**

> Your company uses a SharePoint list to track customer order information, including manufacturing
>
> status.
>
> Employees find the list difficult to read and update when using their mobile devices. You have a
>
> requirement to improve the usability of interacting with order data while on mobile devices.
> You need to determine which Microsoft Power Platform capability will meet the requirements.
>
> Which capability should you choose?
>
> A. Power BI report
>
> B. Power Automate cloud flow
>
> v . Canvas app

**Correct answer:** Canvas app

### Question 317

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 204, 205  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> You are creating a Power Pages site for a company. The site will allow customers to t
>
> progress of existing support requests and create new requests.
> You need to select the relevant data source for the Power Pages site.
>
> Select the answer that correctly completes the sentence.
>
> Support request data source
>
> New support requests will be added to x.
> SharePoint.
> Dataverse.
> SQL Server.

**Correct answer:** Microsoft Dataverse

### Question 318

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 205  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> A company is assessing the capabilities of Dataverse.
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
> Dataverse capabilities
>
> Statement
>
> Dataverse can be hosted in the cloud and on-premises.
>
> Dataverse includes a common schema of business objects by default.
> Dataverse can support up to 8 TB of storage per instance.
>
> No, ves, Yo

**Correct answer:** 1. No; 2. Yes; 3. No

**Verification note:** Dataverse is cloud-hosted, includes standard business tables, and the absolute 8-TB-per-instance statement is not a platform guarantee.

### Question 319

**Type:** Single answer  
**PDF page(s):** 205, 206  
**Verdict:** Verified

**Question (OCR transcription):**

> oooF
> o0oo¢g
>
> You create a canvas app by using the option labeled Start from data. You connect a spreadsheet that
>
> contains customer records. The customer records are displayed in a list on a screen labeled Browse.
> You need to apply a filter to the control that displays the customer records.
>
> Which control should you modify?
>
> A. Display form
>
> B. Icon
>
> C. Search
>
> v D. Gallery '

**Correct answer:** Gallery

### Question 320

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 206, 207  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> A company plans to use Power BI to visualize data.
>
> Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select
> No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Yes No
> Power BI allows users to create and consume visualizations in one O° te)
> view by using data from several different sources.
> Power Platform uses Microsoft SharePoint Online lists to securely ° °
> store and manage data used by business applications.

**Correct answer:** 1. Yes; 2. No

### Question 321

**Type:** Single answer  
**PDF page(s):** 207  
**Verdict:** Verified

**Question (OCR transcription):**

> A company plans to implement customer engagement apps in Dynamics 365 Customer Service.
>
> The company plans to deploy a portal that connects to Customer Service. Customers must be able to log
>
> in and access details about open cases.
>
> You need to identify the Microsoft Power Platform capability that provides the required functionality.
>
> Which solution should you use?
>
> A. Canvas app
>
> B. Model-driven app
>
> YC. Power Pages site

**Correct answer:** Power Pages

### Question 322

**Type:** Drag-and-drop / matching  
**PDF page(s):** 207, 208  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company has a sales team and a support team.
>
> The company has the following requirements:
>
> The sales team must be able to access on-hand inventory from vendors. The back-office support
>
> team does not store or maintain the data.
>
> The back-office support team must maintain a list of items that the company sells. The list must
>
> include a business process flow for any sales price discounts.
>
> You need to create a Power Apps app that supports the teams by using native Power Apps functionality.
>
> Which type of Power Apps app should you create? To answer, move the appropriate Power Apps types to
> the correct teams. You may use each Power Apps type once, more than once, or not at all. You may need
>
> to move the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Power Apps types Power Apps types for Teams
> Canvas app Team Power Apps type
> Model-driven app Suet teon
>
> Support team
>
> Power Apps types for Teams
> Team Power Apps type
>
> Sales team Canvas app
>
> Support team -_| Model-driven app

**Correct answer:** 1. Canvas app; 2. Model-driven app

### Question 323

**Type:** Single answer  
**PDF page(s):** 208, 209  
**Verdict:** Verified

**Question (OCR transcription):**

> A company has built a Power Apps app to take pictures of and store business card data during a
>
> seminar.
> The company wants to select a tool that can extract data from the pictures.
> You need to identify the tool.
>
> Which tool should you select?
>
> A. Microsoft Dataverse
>
> B. Azure Machine Learning
>
> D. Copilot Studio

**Correct answer:** AI Builder

### Question 324

**Type:** Drag-and-drop / matching  
**PDF page(s):** 209, 210  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> You need to build a Copilot Studio copilot for a company.
>
> Which components should you use? To answer, drag the appropriate components to the correct
> requirements. Each component may be used once, more than once, or not at all. You may need to drag
>
> the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Components Answer Area
> Entity Requirement Component
>
> laieaw Foon Identity keywords or questions and relate them to issues. [|
>
> Variable Store a response that a user enters for later use.
> Identity a specific type of information from a user response.
> J

**Correct answer:** 1. Trigger phrase; 2. Variable; 3. Entity

### Question 325

**Type:** Drag-and-drop / matching  
**PDF page(s):** 210, 211  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP.
>
> You plan to implement a model-driven app for a company. Employees will use the app to manage
>
> appointments with customers.
> The app must meet the following requirements:
>
> Allow employees to create lists of appointments that occur in the next two weeks.
>
> Display a pie chart of customer types and a bar chart of completed appointments by employee from
>
> the sitemap.
> Allow employees to access notes, emails, and other activities for a particular customer.
>
> Automatically hide the appointment address columns if an appointment is marked as online.
> You need to identify the required components for the model-driven app.
>
> Which components should you use? To answer, move the appropriate components to the correct
> requirements. You may use each component once, more than once, or not at all. You may need to move
>
> the split bar between panes or scroll to view content.
>
> Model-driven app components
> Business rule Requirement
> Create lists of appointments.
>
> it
>
> 2
> s
>
> board
>
> Display the visuats.
> Form
>
> Allow access to notes, emails. and other activities.
>
> i
> Hit,
>
> 'Automatically hide the appointment address columns.
>
> View, Dashboards, form, business rule

**Correct answer:** 1. View; 2. Dashboard; 3. Form; 4. Business rule

### Question 326

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 211, 212  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
> A company is implementing Microsoft Power Platform.
>
> Select the answer that correctly completes the sentence.
>
> Managed environment capabilities
>
> Managed environments enable the use of
>
> ceca
>
> VER
>
> SUGGESTED ANS
>
> Managed environment capabilities
>
> additional capacity
> longer log retention
> pipelines
>
> Managed environments enable the use of
>
> lv
>
> pipelines
>
> additional capacity
> longer log retention

**Correct answer:** Pipelines

### Question 327

**Type:** Multiple answer  
**PDF page(s):** 212, 213  
**Verdict:** Verified

**Question (OCR transcription):**

> A large manufacturing company operates a single enterprise resource planning (ERP) application. The
> company uses SQL Server with an outdated web interface that does not work with modern browsers.
>
> The company requires a new application interface that uses the capabilities of Microsoft Power Platform.
>
> The key requirements for the solution are:
>
> » Users must be able to read/write data.
> connector para se ligar ao erp
>
> * Due to data privacy concerns, all data must remain within the EP application.
> » Where possible, costs must be minimized.
> You need to recommend platform features to implement the requirements.
>
> Which two features should you recommend? Each correct answer presents part of the solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Dataverse
>
> . Power BI report
>
> E. Dataflow

**Correct answer:** Connector and Power Apps

### Question 328

**Type:** Drag-and-drop / matching  
**PDF page(s):** 213, 214  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
> You are planning to build a Power Automate desktop flow.
> The flow must meet the following requirements:
> Open an application and allow a user to enter data into fields.
> Be tested and validated before deployment into a production environment.
> You need to create and test the flow.
>
> Which desktop flow functions should you use? To answer, move the appropriate desktop flow functions
> to the correct requirements. You may use each desktop flow function once, more than once, or not at all.
>
> You may need to move the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> O flow O flow
>
> [Recorder ] Requirement Desktop flow function
>
> Create the flow.
>
> [ Sub flows
>
> Test the flow.
> [run

**Correct answer:** 1. Recorder; 2. Run

### Question 329

**Type:** Single answer  
**PDF page(s):** 214  
**Verdict:** Verified

**Question (OCR transcription):**

> A retailer has decided to build a canvas app for employees. The app can run on tablets. The application
> has a custom authentication system.
>
> The company wants to ensure that if an employee uses another application on the tablet, they are
> automatically signed out of the canvas app after five minutes.
>
> You need to identify the control to trigger the action.
>
> Which control should you select?
>
> A. Screen
> B. Display form
> vy C. Timer
>
> D. Toggle

**Correct answer:** Timer

### Question 330

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 214, 215  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> You need to create a Power BI dashboard. For each of the following statements, select Yes if the
> statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Pinning process in Power Bi service
>
> Statement Yes No
> 'You must create your dathboard before pinning a visual
>
> Dashboards are created inside workspaces.
>
> You can choose to pin an entire report page to your dashboard
>
> casts

**Correct answer:** 1. No; 2. Yes; 3. Yes

### Question 331

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 215, 216  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> An environmental agency creates tables named Specimen and Species in Microsoft Dataverse to reco
> specimens that are collected on nature walks as well as their species. Some of the columns of the
>
> Specimen table are shown in the following image:
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> 'Statements Yes No
> Many specimens can be associated with a given species )
> The Specimen table is organization owned. O co}
> The Name column is the primary key of the Specimen table. O )
>
> nswi Discussion

**Correct answer:** 1. Yes; 2. No; 3. No

**Verification note:** The Species lookup supports many specimens per species; Owner columns show user/team ownership; Name is the primary-name column, not the GUID primary key.

### Question 332

**Type:** Multiple answer  
**PDF page(s):** 216  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is using Microsoft Power Platform services to enhance business productivity.
> You need to identify the business productivity scenarios that Copilot can solve.
> Which three benefits can Copilot provide? Each correct answer presents a complete solution.
>
> Note: Each correct selection is worth one point.
>
> A. Allow model-driven app users to ask questions about their data.
> @ B. Create canvas apps by describing what makers want to build.
>
> C. Trigger an automated Power Automate flow.
> D. Explain the functionality of an existing Power Automate flow.
>
> E. Read an image of a business card and extract text values.

**Correct answer:** A, B, D — Ask questions about model-driven app data; create canvas apps from descriptions; explain an existing Power Automate flow

### Question 333

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 216, 217  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> A company uses a model-driven app to track inquiries and orders from customers.
>
> The company requires self-serve options for customers to review existing orders and add new inquiries.
> You need to explain why the company should use Power Pages to build a site with these options.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> Potential benefits of using Power Pages
>
> Statement Yes No
> Power Pages always requires the customer to sign in before viewing or adding any ° fo)
> information.
>
> The Power Pages site works seamlessly across browsers and mobile devices without ° °
> configur
>
> Power Pages can provide native connectivity to the same instance of Dataverse as the ° °

**Correct answer:** 1. No; 2. Yes; 3. Yes

### Question 334

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 217, 218  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> A company shares a dashboard with you.
> You need to add a visual to the dashboard.
>
> Select the answer that correctly completes the sentence.
>
> Power BI Q&A
> With Power BI Q&A, you can create new visuals by using
>
> | Power Fx
> | Power Query
> | natural language

**Correct answer:** Natural language

### Question 335

**Type:** Drag-and-drop / matching  
**PDF page(s):** 218, 219  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP.
>
> A colleague is creating a data model in Dataverse.
> The data model requires the following configuration:
>
> Information regarding customers must be tracked within the model.
> The city, telephone number, and total leads generated must be stored for each customer.
>
> If a user updates the total number of leads to 50, then an appropriate flag field must be set in
> Dataverse.
>
> Existing functionality must be used where available.
> You need to recommend the steps to create the data model.
>
> Which three actions should be performed in sequence? To answer, move the appropriate actions from
>
> the list of actions to the Data model customization steps area and arrange them in the correct order.
>
> Actions Data model customization steps
>
> Create a number column.
>
> Create a lookup column.
>
> Create a cloud flow.
>
> Create a custom table.
>
> Customize the Account table.
>
> Create a business rule.
>
> Peseee
>
> UGGESTED ANSWER
>
> Data model customization steps
>
> Customize the Account table.
>
> Create a number column.
>
> Create a business rule.

**Correct answer:** 1. Customize the Account table; 2. Add a Number column; 3. Add a business rule

### Question 336

**Type:** Drag-and-drop / matching  
**PDF page(s):** 219, 220  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
> A medical office has a model-driven app that uses Microsoft Dataverse.
>
> You plan to create a screen that allows users to capture information about doctors. The screen must
>
> provide users the ability to enter or select the following information:
>
> a place to enter doctor profile data that is not part of the account table or the contact table
> a place to enter the doctor's specialty in the profile form
>
> a place to store many data points of information about a specific doctor's profile
> You need to store the captured data in Microsoft Dataverse.
>
> What should you use to store the data? To answer, drag the appropriate components to the correct
> requirements. Each component may be used once, more than once, or not at all. You may need to drag
> the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Options Answer Area
>
> Table Requirement Option
> Store additional doctor profile
>
> Column data.
> Store information about the
>
> Row doctor's specialty.
> Store doctor profile
> information for many doctors.
>
> Answer Area
> Requirement Option
>
> Store additional doctor profile
> data.
>
> Store information about the
> doctor's specialty.
>
> Store doctor profile Row
> information for many doctors.

**Correct answer:** 1. Table; 2. Column; 3. Row

### Question 337

**Type:** Single answer  
**PDF page(s):** 220  
**Verdict:** Verified

**Question (OCR transcription):**

> A company is evaluating the capabilities in Microsoft Power Platform.
>
> The company requires native integration with an existing Bootstrap template to facilitate a responsive
>
> design across devices.
> You need to recommend the service that facilitates the integration.
>
> Which service should you recommend?
>
> B. Power Automate
> . Power Apps
>
> D. Copilot

**Correct answer:** Power Pages

### Question 338

**Type:** Multiple answer  
**PDF page(s):** 220, 221  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating a Power Pages site for a company.
> The company requires a chart on a page to visualize data held within Dataverse.
> You need to add the chart to the page.
> Which two features can you use? Each correct answer presents a complete solution. (Choose two.)
>
> NOTE: Each coned selection is worth one point.
>
> A. Canvas app pie chart control
>
> Canvas app line chart control
>
> ==

**Correct answer:** Power BI tile and model-driven chart

### Question 339

**Type:** Single answer  
**PDF page(s):** 221  
**Verdict:** Verified

**Question (OCR transcription):**

> Tenant - Environment - Table - Column - Row
> An enterprise company is evaluating the Microsoft Power Platform security model.
> You need to identify the lowest possible level that the authorization can be applied against.
>
> Which level should you identify?
>
> A. tenant
>
> = =
>
> C. environment
>
> D. column

**Correct answer:** Column

### Question 340

**Type:** Drag-and-drop / matching  
**PDF page(s):** 221, 222  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
> Your company uses a SharePoint list to track issues raised by customers.
>
> You need to create a Power Automate cloud flow that will send an acknowledgement email to the
> customer when a new item is added to the SharePoint list. The flow should then alert the customer
>
> service team by posting a message on their Teams channel.
>
> Which connector components should you use to complete the flow? To answer, move the appropriate
> connector component to the correct flow step. You may use each connector component once, more than
>
> once, or not at all. You may need to move the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Connector components Power Automate flows
>
> | Teams action _| Flow step Connector component
> | Outlook action ] Start the flow. |
> | Outlook trigger Send the email.
>
> Se. ee L
> SharePoint trigger Post the message. |
>
> Power Automate flows
> Flow step Connector component
> Start Gu flow: SharePoint trigger |
> Send the email. Outlook action
>
> Post the message. | Teams action

**Correct answer:** 1. SharePoint trigger; 2. Outlook action; 3. Teams action

### Question 341

**Type:** Single answer  
**PDF page(s):** 222  
**Verdict:** Verified

**Question (OCR transcription):**

> You are using Microsoft Copilot Studio to create a copilot for your Power Pages.
> You need the copilot to start from the beginning of the conversation if user input is unrecognized.
>
> What should you configure?
>
> A. Trigger
>
> B. Fallback topic
>
> C. Al features
>
> D. Error message

**Correct answer:** Fallback topic

### Question 342

**Type:** Multiple answer  
**PDF page(s):** 222, 223  
**Verdict:** Source issue

**Question (OCR transcription):**

> You plan to deploy a Power Pages website to manage common customer requests.
>
> You plan to use Copilot capabilities to improve site management produ
>
> ia
> You need to use the Copilot features that are available in Power Pages design studio.
> Which two features should you use? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> A. Generate copy text.
>
> B. Create an automation that triggers when a user submits data.
>
> Create Al-generated images.
>
> D. Create a webchat interface for site users.
>
> v E Greate an interface based on a short description.

**Correct answer:** D, E — Create a webchat interface; create an interface from a short description

**Verification note:** This matches the exam-era intended answer. The item is now ambiguous because current Power Pages Copilot also supports AI-assisted text generation, making A defensible.

### Question 343

**Type:** Drag-and-drop / matching  
**PDF page(s):** 223  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> You have a list of spices on Microsoft SharePoint. You are creating a canvas app to organize the spices.
>
> You need to be able to perform the following actions with the app:
>
> Use a separate screen in the app to add a task.
> Display and scroll through the list of spices on your phone or tablet.
> Update information such as brand and purchase date when you drill down to one of the spice
>
> records.
>
> You need to identify the controls that help you create these features.
>
> Match each control to its requirement. To answer, move the appropriate control from the column on the
>
> left to its requirement on the right. You may use each control once, more than once, or not at all.
>
> NOTE: Each correct match is worth one paint.
>
> Controls Types of controls for requirements
> neon -
> Create nen sk |
>
> Display the list of current spices.
> sie cna one
> |
>
> Types of controls for requirements
> Requirement Control
>
> Create a new task.
>
> Scroll on different devices, container
>
> Form
> Display the list of current spices, | Gallery
>
> Vertical
>
> Form

**Correct answer:** 1. Form; 2. Vertical container; 3. Gallery

### Question 344

**Type:** Multiple answer  
**PDF page(s):** 223, 224  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating a dashboard in the Power Bl service.
> You need to identify where you can find visuals to pin to your dashboard.
> From which two components can you pin visuals? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
> Dataverse
>
> D. Power Automate
>
> E. Semantic model
>
> galery - mostrar lista de dados
> form - criar/editar dados
>
> vertical container - layout + scroll
> responsivo

**Correct answer:** Q&A and Report

### Question 345

**Type:** Single answer  
**PDF page(s):** 224  
**Verdict:** Verified

**Question (OCR transcription):**

> Your coworkers create Power Apps and Power Automate flows to improve business processes.
>
> You need to prevent your coworkers from using the YouTube connector in the company tenant.
>
> What should you create?
>
> A. security role
>
> B. dataflow
>
> . business rule
>
> YD. data loss prevention policy

**Correct answer:** Data loss prevention (DLP) policy

### Question 346

**Type:** Single answer  
**PDF page(s):** 224, 225  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Dynamics 365 Seles.
>
> The company requires an interface for back-office staff. The solution must meet the following
>
> requirements:
>
> Existing custom tables must be visible in the interface.
> The user experience must resemble that of the existing Dynamics 365 Sales app.
>
> Users must have the ability to edit or create new data.
>
> You need to recommend a Power Platform capability that can achieve these requirements with the least
>
> configuration effort,
>
> Which capability should you recommend?
>
> A. Power BI report
>
> B. Power Pages site
>
> . Model-diven app
>
> D. Canvas app

**Correct answer:** Model-driven app

### Question 347

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 225  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
> You are building a Power Apps canvas app.
>
> The canvas app must run a complex, multistep workflow directly whenever a user presses a custom
> button in the app.
>
> You need to select the Power Platform service to use.
>
> Select the answer that correctly completes the sentence.
>
> Execute workflows from a Power Apps canvas app
>
> To run workflows directly when buttons are selected, makers can use
>
> Power BI
> Dataverse
> Copilot Studio
> Power Automate

**Correct answer:** Power Automate

### Question 348

**Type:** Single answer  
**PDF page(s):** 225, 226  
**Verdict:** Verified

**Question (OCR transcription):**

> A company plans to implementa ticketing application using Microsoft Dataverse.
>
> n. Customers must be able
>
> The company plans to deploy a portal that connects to the ticketing appl
>
> to log in and access details about open cases.
> You need to identify the Microsoft Power Platform capability that provides the required functionality.
>
> Which solution should you use?
>
> YA. Power Pages site
>
> B. Model-driven app
>
> . Canvas app

**Correct answer:** Power Pages

### Question 349

**Type:** Drag-and-drop / matching  
**PDF page(s):** 226, 227  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company is using Power Platform.
>
> The company requires an automation that sends an email to the sales manager. The automation must
> run whenever a new account is created in Dataverse. You plan to build the automation by using natural
>
> language capabilities.
> You need to create the automation by describing it with natural language.
>
> Which five actions should you perform in sequence? To answer, move the appropriate actions from the
> list of actions to the answer area and arrange them in the correct order.
>
> Create a Power Automate automation Answer Area
>
> | Generate the flow. {i
>
> [Open the Power Automate maker portal | (2) | ae Se
> [Review the flow connections end vest the evtomation || [3] [
>
> | Describe the automation to Copilot. ) [4]
>
> | Select and use a template. | [s]
>
> [Approve the automation. ]
>
> [Open the Power Automate for desktop app.
>
> Answer Area
> |1| | Open the Power Automate maker portal |
>
> |2| | Describe the automation to Copilot.
> |3. | Generate the flow. |
> 4 | Review the flow connections and test the automation.
>
> '5 | Approve the automation.

**Correct answer:** 1. Open the Power Automate maker portal; 2. Describe the automation to Copilot; 3. Generate the flow; 4. Review connections and test; 5. Approve the automation

### Question 350

**Type:** Not present in source  
**PDF page(s):** —  
**Verdict:** Source issue

**Question (OCR transcription):**

> _The source PDF contains no question body for this number._

**Correct answer:** Source omission

**Verification note:** The PDF jumps from question 349 to 351; no question body or answer is present.

### Question 351

**Type:** Drag-and-drop / matching  
**PDF page(s):** 227, 228  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP,
>
> A company uses a canvas app to record visitors to its offices in a SharePoint list. The app screen includes
>
> a drop-down control for the names of receptionists.
> The name of a new receptionist must be added to the drop-down control.
>
> You need to ensure the new receptionist can use the app and select their own name when they create
>
> new visits.
> Which four actions should you perform in sequence? To answer, move the appropriate actions from the
>
> list of actions to the answer area and arrange them in the correct order.
>
> Access data from a canvas app Answer Area
> | Save the app. HO
>
> al _ ]
>
> Es
>
> | Share the app with the recepti
>
> Grant the receptionist a security role. [4] [
> Publish the app.
>
> e@ WildMongoose993
> The correct sequence is:
>
> Update the drop-down control items property.
> Save the app.
> Publish the app.
>
> Share the app with the receptionist.

**Correct answer:** 1. Update the drop-down Items property; 2. Save; 3. Publish; 4. Share

### Question 352

**Type:** Drag-and-drop / matching  
**PDF page(s):** 228  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP.
>
> You manage the support team at a rapidly growing company.
> Support technicians need a better experience when logging and responding to support requests.
> You need to recommend tools to help the company's needs.
>
> Which tools should you recommend? To answer, drag the appropriate tools to the correct requirements.
> Each tool may be used once, more than once, or not at all. You may need to drag the split bar between
>
> panes or scroll to view content.
>
> Note: Each correct selection is worth one point.
>
> Tools 'Answer Area
> see te
> Customers must be able to submit support requests by using an app. (7
> Customer data must be stored and synchronized with Dynamics 365 Finance. |
>
> amneaand Support technicians must be notified when anew support requestisentered. [|
>
> sims

**Correct answer:** 1. Power Apps; 2. Dataverse; 3. Power Automate

### Question 353

**Type:** Single answer  
**PDF page(s):** 228, 229  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Dataverse to store information about the products the company sells.
>
> The company requires an interface that will allow unauthenticated external users to browse product
>
> information from a mobile device.
>
> You need to recommend the Microsoft Power Platform component that the company should use to
>
> create the interface.
>
> Which component should you recommend?
>
> A. Power Pages site
>
> B. Canvas app
>
> ¢. Model-driven app

**Correct answer:** Power Pages

### Question 354

**Type:** Multiple answer  
**PDF page(s):** 229  
**Verdict:** Verified

**Question (OCR transcription):**

> Accompany uses a Power Pages site for customers to track orders.
> You plan to add a new field to the existing order form.
>
> You need to determine where you can complete this action in Power Pages design studio.
> Which two design workspaces can you use? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> B. Security
> O setup
>
> D. styling

**Correct answer:** Pages workspace and Data workspace

### Question 355

**Type:** Single answer  
**PDF page(s):** 229, 230  
**Verdict:** Corrected

**Question (OCR transcription):**

> You are building a Power Pages site. Azure Entra ID site authentication is already configured.
>
> You add a page to the site, which is visible to all users. You must configure the page to display coupon
>
> information relating to the company of the user who is currently signed in.
>
> You need to recommend the security feature to implement to meet the requirements.
> Which feature should you recommend?
>
> A. Site visibility
>
> B. Table permission
>
> D. Page permission
>
> =p

**Correct answer:** B — Table permission

**Verification note:** Authentication identifies the user, but table permissions restrict Dataverse rows to the signed-in user’s related company.

### Question 356

**Type:** Drag-and-drop / matching  
**PDF page(s):** 230, 231  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company is evaluating Power Platform services.
> Users in the company have Teams as their core application. The users have the following requirements:
>
> Managers must frequently review complex key performance indicator (KPI) and service-level
> agreement (SLA) visualizations for customers. Managers do not have any Power Platform licenses
>
> assigned.
> Users require the ability to create and host apps with their own data store.
>
> Because the company uses numerous SharePoint lists to store business data, it requires an
> extensible interface to update the data.
>
> You need to explain how each Power Platform service can be used within Teams.
>
> Which services should you use for each requirement? To answer, move the appropriate services to the
> correct requirements. You may use each service once, more than once, or not at all. You may need to
> move the split bar between panes or scroll to view content.
>
> NOTE: Each correct selection is worth one point.
>
> Power Platform services List of services that can be incorporated within Teams
> Requirement Power Platform service
> Display complex KPI and SLA visualizations. [sd
>
> Store and host application data for Teams. [-~«@YS;
> vost a
> Dataverse for Teams
>
> List of services that can be incorporated within Teams
> Requirement Power Platform service
>
> Display complex KPI and SLA visualizations. Power Bl
>
> Store and host application data for Teams. Dataverse for Teams
>
> Update SharePoint list data. Power Apps

**Correct answer:** 1. Power BI; 2. Dataverse for Teams; 3. Power Apps

### Question 357

**Type:** Single answer  
**PDF page(s):** 231  
**Verdict:** Corrected

**Question (OCR transcription):**

> You are creating a date model in Dataverse for an event planning company.
>
> Individuals can register for multiple events during a cycle. When event planners create an event, details
>
> regarding the individuals must copy over to the new event automatically. Organizations must be blocked
>
> from registering. You create the table for the events.
>
> You need to identify which Dataverse component to use to finalize the model.
>
> Which component should you identify?
>
> A. Customer column
>
> YB. Business rule
>
> C. Relationship
>
> D. Choice column

**Correct answer:** C — Relationship

**Verification note:** A relationship models registrations across individuals and events and supports copying related details; a business rule cannot create that data model.

### Question 358

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 231, 232  
**Verdict:** Corrected

**Question (OCR transcription):**

> HOTSPOT
>
> You are managing several Power Automate cloud flows for a company.
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select N
>
> NOTE: Each correct selection is worth one point.
>
> Power Automate cloud flows statements
>
> Statement
>
> A cloud flow run can be resubmitted.
>
> fo)
>
> O
>
> oO
>
> °
>
> Cloud flow run history in the Power Automate maker portal is
>
> stored for up to 90 days.
>
> fo)
>
> °
>
> You can use the Power Automate for desktop application to
>
> manage cloud flow runs.

**Correct answer:** 1. Yes; 2. No; 3. No

**Verification note:** A run can be resubmitted; standard cloud-flow run history is 28 days, not 90, and the desktop app does not manage cloud-flow runs.

### Question 359

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 232  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> A company schedules all-hands meetings a few days before they occur. The meetings are scheduled on
>
> paper only and advertised on the office bulletin board.
> The meeting hosts observe that attendance is low for the meetings.
>
> The company requires an automation that allows the office manager to send an SMS to employees the
>
> night before the meeting to remind them to attend.
> You need to select the correct type of Power Automate flow to create.
>
> Select the answer that correctly completes the sentence.
>
> Create a Power Automate flow
> You need to build a cloud flow with a trigger type of
> automated
> instant
> scheduled

**Correct answer:** Scheduled cloud flow

### Question 360

**Type:** Drag-and-drop / matching  
**PDF page(s):** 232, 233  
**Verdict:** Verified

**Question (OCR transcription):**

> DRAG DROP
>
> A company uses a model-driven app for its sales team.
> You must customize a form to meet the following requirements:
>
> Ifa checkbox is selected, a hidden field must appear.
>
> The account form must display a list of contacts and fields about contacts.
> You need to identify the components a developer must configure to meet the requirements.
> What should you identify?
>
> To answer, drag the appropriate components to the correct requirements. Each component may be used
> 'once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view
>
> content.
>
> NOTE: Each correct selection is worth one point.
>
> 'Components Answer Area
>
> Requirement Component
>
> Hidden field appears |
> Display related contacts -s
>
> Answer Area
>
> Requirement Component
> Hidden field appears Form
>
> Display related contacts View

**Correct answer:** 1. Form; 2. View

### Question 361

**Type:** Single answer  
**PDF page(s):** 233  
**Verdict:** Verified

**Question (OCR transcription):**

> You are creating a canvas app so staff members can order and pick up items from a warehouse.
> The app requires a control that displays pictures with no customization.
> You need to add the control.
>
> Which type of control should you use?
>
> O A. Input
>
> O List box
>
> D. Combo box

**Correct answer:** Gallery

### Question 362

**Type:** Multiple answer  
**PDF page(s):** 233, 234  
**Verdict:** Verified

**Question (OCR transcription):**

> A company uses Microsoft 365. The company does not have any developers on its staff.
> You need to explain to the executives the benefits of using Power Platform apps.
> What are two benefits? Each correct answer presents a complete solution.
>
> NOTE: Each correct selection is worth one point.
>
> B. Users can send emails from Microsoft 365 to their personal email addresses.
>
> The company can unify all the mobile devices to one vendor.

**Correct answer:** 1. Power Apps; 2. Power Automate

### Question 363

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 234, 235  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> 'A company uses Microsoft Power Platform to connect to multiple data sources and manage business
>
> data.
>
> The low-code components in Microsoft Power Platform must be able to create and update data in these
>
> data sources.
> You need to access the required data by using Microsoft Power Platform components.
>
> Which component should you use for each requirement? To answer, select the appropriate options in
>
> the answer area.
>
> NOTE: Each correct selection is worth one point.
>
> Answer Area
> Requirement Component
> Update data in an API hosted in Azure. 4
> Custom connector
> Microsoft Dataverse
> Power Query
> Update files in SharePoint document library folders. x
> Microsoft Teams connector
> Microsoft Dataverse
> Power Query
> Standard connector
> custom connector
> Answer Area
> Requirement Component
> Update data in an API hosted in Azure. init
> Custom connector
> Update files in SharePoint document library folders. ~
>
> Microsoft Teams connector
> Microsoft Dataverse
>
> a a

**Correct answer:** 1. Custom connector; 2. Standard connector

### Question 364

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 235  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> For each of the following statements, select Yes if the statement is true. Otherwise, select No.
>
> NOTE: Each correct selection is worth one point.
>
> List of statements relating to various Power Platform services
>
> Statement
> Apps, automations, and data stores can be created directly from Teams,
> Power BI content can be added to Teams conversations.
>
> Agents can be published directly into Teams.
>
> [ avower «a

**Correct answer:** 1. Yes; 2. Yes; 3. Yes

### Question 365

**Type:** Multiple answer  
**PDF page(s):** 235, 236  
**Verdict:** Verified

**Question (OCR transcription):**

> You need to generate a Power Pages site for your company.
>
> You decide to use Copilot for site creation to generate your site.
>
> Yes No
> fe} fo}
> (o} eo}
> ° °
> Yes No
> °
> O°
> °
>
> You need to select the site components that Copilot for site creation will create or set for you based on
>
> your prompt.
>
> Which three site components should you select? Each correct answer presents a complete solution.
>
> Choose three.
>
> NOTE: Each correct selection is worth one point.
>
> O A. Forms
>
> Lists

**Correct answer:** 1. Site name; 2. Web address/URL; 3. Home page

### Question 366

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 236  
**Verdict:** Verified

**Question (OCR transcription):**

> ,
>
> HOTSPOT
> A company is evaluating capabilities in Power Platform.
>
> The company requires a proof-of-concept application for external vendors to access warranty agreement
>
> information. The application must be created quickly.
>
> The vendor management team provides you with a description of how the website should look and feel.
> You need to determine which platform feature to use to create the application by using natural
> language
>
> Select the answer that correctly completes the sentence.
>
> Creating an application
>
> To create the application, you should use Ba
> Visual Studio Code
> Copilot for site creation
> Power Apps maker portal
> Power Pages design studio

**Correct answer:** Copilot for site creation

### Question 367

**Type:** Hotspot / answer-area matrix  
**PDF page(s):** 236, 237  
**Verdict:** Verified

**Question (OCR transcription):**

> HOTSPOT
>
> You create a canvas app for a company.
>
> A colleague who is a professional developer offers to help you optimize the app. To do this, the
>
> developer must be able to edit the app but not delete it.
> You need to share the app with the developer.
> Select the answer that correctly completes the sentence.
>
> Share a canvas app
>
> When you share the app, you need to grant the developer oi
> User permissions
> Owner permissions
> Co-owner permissions
>
> Foon | pannus

**Correct answer:** Share as a co-owner

### Question 368

**Type:** Single answer  
**PDF page(s):** 237  
**Verdict:** Corrected

**Question (OCR transcription):**

> You create an automated cloud flow that is triggered when a new item is added to a SharePoint list that
>
> is used by all coworkers.
> You need to determine which user interaction with the SharePoint list will trigger your flow.
>
> Whose item addition to the SharePoint list will trigger the flow?
>
> _ A. Primary owners of the flow
> B. Co-owners of the flow
>
> C. All coworkers

**Correct answer:** C — All coworkers

**Verification note:** The SharePoint “item created” trigger responds to any new item in the watched list, not only items created by a flow owner.

### Question 369

**Type:** Drag-and-drop / matching  
**PDF page(s):** 237  
**Verdict:** Corrected

**Question (OCR transcription):**

> DRAG DROP
>
> You create an instant cloud flow outside of a solution.
>
> A coworker must be able to interact with the flow in multiple ways.
> You need to set up the flow for the coworker to interact with it.
>
> Match each action to its scenario. To answer, move the appropriate action from the column on the left to
>
> its requirement on the right. You may use each action once, more than once, or not at all.
>
> NOTE: Each correct match is worth one point.
>
> Actions Share a flow with a colleague
> ferent son
>
> sore reato -
> Vm row te -a
>
> View towrnsinthe Power Aitomate miterpora,. [--+d
> -

**Correct answer:** 1. Add actions — share as co-owner; 2. Trigger but not delete — share as run-only; 3. View runs in the Power Automate maker portal — share as co-owner

**Verification note:** Run-only access permits invoking an instant flow but does not provide owner-level editing/run-history access.

## Microsoft references used for verification

- [PL-900 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-900)
- [Microsoft Dataverse overview](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro)
- [Embed a canvas app in a model-driven form](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/embed-canvas-app-in-form)
- [View underlying Power Automate code](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/use-peekcode-addnotes)
- [Troubleshoot Power Automate triggers and 28-day run history](https://learn.microsoft.com/en-us/troubleshoot/power-platform/power-automate/flow-run-issues/triggers-troubleshoot)
- [Power Pages table permissions](https://learn.microsoft.com/en-us/power-pages/security/table-permissions)
- [Copilot Studio live-agent handoff](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-hand-off)
