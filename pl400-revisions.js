/*
 * PL-400 integrity revisions
 *
 * Applied after all question banks and case studies are loaded. Keeping the
 * corrections here makes their source-backed purpose clear and avoids silently
 * losing them when a generated question bank is refreshed.
 */
(function () {
  "use strict";

  var corrections = {
    2149: {
      correct: [1, 3],
      explanation: "The Power Apps Checker application user requires the Export Customizations and Solution Checker security roles. Export Customizations permits the solution export used for analysis, while Solution Checker grants the checker access it needs to run. The other listed roles do not provide this combination of permissions."
    },
    3157: {
      correct: [0, 4],
      explanation: "Tracing lets you inspect plug-in execution details and timing. Microsoft Dataverse Analytics provides the operational data needed to identify whether synchronous plug-ins are contributing to the performance issue. Data policies and Solution Checker do not provide this runtime diagnosis, and ISV Studio is not the applicable tool here."
    },
    5364: {
      correct: [0, 3],
      explanation: "Use BypassCustomPluginExecution on the create request or set the CrmServiceClient BypassPluginExecution property for the bulk-load client. Both approaches bypass custom plug-in execution without disabling the shared plug-in step for other users. SuppressCallbackRegistrationExpanderJob does not bypass plug-ins, and disabling the plug-in step would affect all users during business hours."
    },
    9106: {
      text: "You need to resolve the issues with the appointment data.\n\nUsers report that:\n- the email address of the user who created the appointment is missing\n- searches on the description information do not return any results\n\nThe source page shows the Quick Find All Appointments view with interface components around the Table columns area and the Filter by area.\n\nSelect the interface components to change.",
      choices: [
        "Interface component 1 -> Filter icon in the Table columns area",
        "Interface component 2 -> Edit filters in the Filter by area",
        "Interface component 1 -> Edit filters in the Filter by area",
        "Interface component 2 -> Filter icon in the Table columns area"
      ],
      explanation: "For the missing email address issue, use the Filter icon in the Table columns area to add the Created By email column to the Quick Find view. For the description search issue, use Edit filters in the Filter by area to add the description to the search criteria. The other options reverse the two interface components."
    },
    3042: {
      type: "single",
      text: "You are creating a canvas app for users to interact with contact data in Microsoft Dataverse.\n\nWhen users display contact data in the app, the following requirements must be met:\n- By default, all contact data must be displayed, unless data is entered into a text input control. If so, the data must be filtered based on the last name of the contact.\n- A new column must be added when retrieving the data source. The column must combine the Salutation and Full Name columns into a new column named Full Salutation.\n- All data must be sorted in alphabetical order based on the surname of the contact.\n\nYou need to finalize the Microsoft Power Fx formula."
    },
    9037: {
      correct: [2],
      explanation: "A component library is the correct choice for the Suitability Assessment Tool. It provides reusable canvas components that makers can include consistently across apps. A PCF control is a different custom-control development model; a view and a form do not provide a reusable app component."
    }
  };

  function isCodeOrLiteral(value) {
    return /^(?:https?:\/\/|@|#|`|(?:npm|pac|msbuild)\b|(?:odata|formContext|Xrm|service)\b|[a-z][A-Z]|[a-zA-Z_$][\w$]*(?:[.(=]|\.[a-zA-Z_$]))/.test(value);
  }

  function capitalizeDisplayLabel(value) {
    var trimmed = value.trim();
    if (!/^[a-z]/.test(trimmed) || isCodeOrLiteral(trimmed)) return value;
    var leading = value.slice(0, value.length - value.trimStart().length);
    return leading + trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  }

  function reviseQuestion(question) {
    var correction = corrections[question.id];
    if (correction) {
      if (correction.correct) question.correct = correction.correct.slice();
      if (correction.type) question.type = correction.type;
      if (correction.text) question.text = correction.text;
      if (correction.choices) question.choices = correction.choices.slice();
      if (correction.explanation) question.explanation = correction.explanation;
    }

    if (Array.isArray(question.choices)) {
      question.choices = question.choices.map(capitalizeDisplayLabel);
    }
  }

  [
    window.pl400Questions,
    window.pl400Questions2,
    window.pl400Questions3,
    window.pl400Questions4,
    window.pl400Questions5
  ].forEach(function (questionSet) {
    if (Array.isArray(questionSet)) questionSet.forEach(reviseQuestion);
  });

  if (Array.isArray(window.PL400_TEST_CASES)) {
    window.PL400_TEST_CASES.forEach(function (testCase) {
      testCase.questions.forEach(reviseQuestion);
    });
  }
})();
