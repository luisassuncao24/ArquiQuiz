/*
 * PassLeader PL-900 archive
 *
 * The supplied 2020-2022 PDFs yielded 68 structurally readable questions.
 * Only the entries below were imported: each one matched a question in the
 * verified PL-900 bank, so this archive reuses the verified wording, options,
 * question type, and answer key. Entries without a reliable match are excluded.
 */
var PL900_PASSLEADER_ARCHIVE_IDS = [
  9126, 9049, 9155, 9174, 9078, 9034, 9176, 9067,
  9009, 9087, 9233, 9116, 9137, 9099, 9110, 9065,
  9162, 9159, 9182, 9226, 9154, 9091, 9086, 9184,
  9076, 9029, 9153, 9037, 9002, 9186, 9011, 9132
];

var PL900_PASSLEADER_ARCHIVE_QUESTIONS = (function () {
  var source = pl900Questions.concat(pl900Questions2, pl900Questions3);
  var byId = {};

  source.forEach(function (question) {
    byId[question.id] = question;
  });

  return PL900_PASSLEADER_ARCHIVE_IDS.map(function (id) {
    return byId[id];
  }).filter(Boolean);
})();
