/* Run with node tests/pl900-md-review.test.cjs. No browser or network required. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const context = vm.createContext({});

for (const file of [
  'pl900-questions.js',
  'pl900-questions2.js',
  'pl900-questions3.js',
  'pl900-context-revisions.js'
]) {
  vm.runInContext(read(file), context, { filename: file });
}

const bank = [
  ...context.pl900Questions,
  ...context.pl900Questions2,
  ...context.pl900Questions3
];
const byId = new Map(bank.map(question => [question.id, question]));

const connectorObjects = byId.get(9199);
assert.equal(connectorObjects.type, 'multiple');
assert.deepEqual(Array.from(connectorObjects.correct), [1, 2]);
assert.deepEqual(
  Array.from(connectorObjects.correct, index => connectorObjects.choices[index]),
  ['Actions', 'Tables']
);

const supplyChainTask = byId.get(9260);
assert.equal(supplyChainTask.type, 'multiple');
assert.deepEqual(Array.from(supplyChainTask.correct), [2, 3]);
assert.deepEqual(
  Array.from(supplyChainTask.correct, index => supplyChainTask.choices[index]),
  ['Business events', 'Power Automate']
);
assert.match(supplyChainTask.text, /Which two features should you use\?/);

const sortedView = byId.get(9288);
assert.deepEqual(Array.from(sortedView.correct), [0]);
assert.match(sortedView.text, /only existing row is Alpine Ski House in Aspen/i);
assert.equal(
  sortedView.choices[sortedView.correct[0]],
  'When you create a new account in the city of Boston, it will be shown as the second row.'
);

const flowAndConnector = byId.get(9074);
assert.deepEqual(Array.from(flowAndConnector.correct), [2]);
assert.ok(!/conecter|Flow,\s*connector/i.test(flowAndConnector.choices.join(' ')));
assert.equal(new Set(flowAndConnector.choices).size, flowAndConnector.choices.length);

for (const question of bank) {
  assert.ok(question.choices.length >= 2, 'Question has alternatives: ' + question.id);
  assert.equal(new Set(question.correct).size, question.correct.length, 'Distinct answer indexes: ' + question.id);
  question.correct.forEach(index => {
    assert.ok(Number.isInteger(index) && index >= 0 && index < question.choices.length, 'Valid answer index: ' + question.id);
  });
  if (question.type === 'multiple') {
    assert.ok(question.correct.length >= 2, 'Multiple-choice cardinality: ' + question.id);
  } else {
    assert.equal(question.type, 'single', 'Supported question type: ' + question.id);
    assert.equal(question.correct.length, 1, 'Single-choice cardinality: ' + question.id);
  }
}

assert.match(read('index.html'), /APP_VERSION = "1\.2\.0-beta\.2"/);
assert.match(read('pl900.html'), /pl900-context-revisions\.js\?v=1\.1\.2/);
console.log('PASS: PL-900 Markdown cross-check corrections and bank cardinality checks.');
