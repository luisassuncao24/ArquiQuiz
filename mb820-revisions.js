/* MB-820 integrity revisions applied after the question banks are loaded. */
(function () {
  "use strict";

  var corrections = {
    528: {
      text: "You have a per-tenant extension with interface 'IDiscount Calculation' that defines GetLine(var Line: Variant) and GetDiscount(): Decimal. Codeunit 50108 'Discount Mgmt.' implements this interface. The codeunit uses VariantLine as the parameter name in GetLine, and has an additional DiscountIsValid(DocumentDate: Date): Boolean procedure not in the interface.\n\nWhich statement is true?"
    },
    547: {
      text: "You create a page with the PageType property set to RoleCenter. You need to add links to the second-level navigation bar. What should you do?"
    },
    554: {
      text: "You create a page with the PageType property set to RoleCenter. You need to add an action that lets users quickly create a new record. What should you do?"
    },
    555: {
      text: "You create a page with the PageType property set to RoleCenter. You need to configure the Role Center navigation bar. What should you do?"
    },
    556: {
      text: "You create a page with the PageType property set to RoleCenter. You need to add a link that opens a related page from the navigation bar. What should you do?"
    },
    559: {
      text: "You create a page with the PageType property set to RoleCenter. You need a quick-create action that appears with the plus icon. What should you do?"
    },
    564: {
      text: "You plan to debug a report extension for the Standard Sales - Invoice report. You created Report Extension \"Ext Standard Sales - Invoice\" with ID 50100 and added code in the VATAmountLine section. The client says that the value of the NewTotalVATBaseLCY column is incorrect.\n\nWhich sequence correctly orders the four debugging actions?"
    },
    571: {
      text: "You need to use a query data type to retrieve required data. Complete the code by selecting one option for each blank.\n\nif QueryA.???()\nthen begin\n  while QueryA.???() do begin\n    // process records\n  end;\nend;"
    }
  };

  function reviseQuestion(question) {
    var correction = corrections[question.id];
    if (correction && correction.text) question.text = correction.text;
  }

  [
    typeof questions !== "undefined" ? questions : null,
    typeof questionsSet2 !== "undefined" ? questionsSet2 : null,
    typeof questionsOfficial !== "undefined" ? questionsOfficial : null
  ].forEach(function (questionSet) {
    if (Array.isArray(questionSet)) questionSet.forEach(reviseQuestion);
  });

  if (typeof TEST_CASES !== "undefined" && Array.isArray(TEST_CASES)) {
    TEST_CASES.forEach(function (testCase) {
      testCase.questions.forEach(reviseQuestion);
    });
  }
})();
