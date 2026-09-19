/* Run with node tests/question-model.test.cjs. No browser or network required. */
const assert = require('node:assert/strict');
const model = require('../question-model.js');

function issueCodes(result) {
  return result.errors.map(issue => issue.code);
}

const ordering = {
  schemaVersion: 1,
  id: 'ordering-valid',
  text: 'Put the actions in order.',
  type: 'ordering',
  interaction: {
    items: [
      { id: 'export', text: 'Export the solution' },
      { id: 'import', text: 'Import the solution' },
      { id: 'publish', text: 'Publish customizations' },
      { id: 'unused', text: 'Delete the environment' },
    ],
    slots: [
      { id: 'first', text: 'First' },
      { id: 'second', text: 'Second' },
      { id: 'third', text: 'Third' },
    ],
  },
  answer: { order: ['export', 'import', 'publish'] },
};
assert.equal(model.validateQuestion(ordering).valid, true);

const exposedOrdering = JSON.parse(JSON.stringify(ordering));
exposedOrdering.id = 'ordering-exposed';
exposedOrdering.interaction.items = exposedOrdering.interaction.items.slice(0, 3);
assert.ok(model.validateQuestion(exposedOrdering).warnings.some(issue => issue.code === 'answer_order_exposed'));

const matchingWithReuse = {
  schemaVersion: 1,
  id: 'matching-valid',
  text: 'Match each scenario.',
  type: 'matching',
  interaction: {
    prompts: [
      { id: 'p1', text: 'Scenario one' },
      { id: 'p2', text: 'Scenario two' },
    ],
    options: [
      { id: 'yes', text: 'Yes' },
      { id: 'no', text: 'No' },
    ],
    allowReuse: true,
  },
  answer: {
    matches: [
      { promptId: 'p1', optionId: 'yes' },
      { promptId: 'p2', optionId: 'yes' },
    ],
  },
};
assert.equal(model.validateQuestion(matchingWithReuse).valid, true);

const reuseRejected = JSON.parse(JSON.stringify(matchingWithReuse));
reuseRejected.id = 'matching-no-reuse';
reuseRejected.interaction.allowReuse = false;
assert.ok(issueCodes(model.validateQuestion(reuseRejected)).includes('reuse_not_allowed'));

const missingMatch = JSON.parse(JSON.stringify(matchingWithReuse));
missingMatch.id = 'matching-missing';
missingMatch.answer.matches.pop();
assert.ok(issueCodes(model.validateQuestion(missingMatch)).includes('unmatched_prompt'));

const unknownOption = JSON.parse(JSON.stringify(matchingWithReuse));
unknownOption.id = 'matching-unknown';
unknownOption.answer.matches[0].optionId = 'maybe';
assert.ok(issueCodes(model.validateQuestion(unknownOption)).includes('unknown_option'));

const mixedSchema = JSON.parse(JSON.stringify(ordering));
mixedSchema.id = 'ordering-mixed';
mixedSchema.choices = ['A', 'B'];
mixedSchema.correct = [0, 1];
assert.ok(issueCodes(model.validateQuestion(mixedSchema)).filter(code => code === 'mixed_schema').length === 2);

const legacySequence = {
  id: 3154,
  text: 'In which order should you perform the actions?',
  type: 'sequence',
  choices: ['Open designer', 'Add command', 'Publish', 'Unused distractor'],
  correct: [0, 1, 2],
  explanation: 'Open, add, and publish.',
};
const normalized = model.normalizeInteractiveQuestion(legacySequence);
assert.equal(normalized.type, 'ordering');
assert.deepEqual(normalized.answer.order, ['choice-0', 'choice-1', 'choice-2']);
assert.equal(normalized.interaction.items.length, 4);
assert.equal(normalized.interaction.slots.length, 3);
assert.equal(model.validateQuestion(normalized).valid, true);

const orderedSingle = {
  id: 'legacy-ordered-display',
  text: 'Choose the correct complete mapping.',
  type: 'single',
  choices: ['1. A | 2. B', '1. B | 2. A'],
  correct: [0],
  ordered: true,
};
const orderedSingleResult = model.validateQuestion(orderedSingle);
assert.equal(orderedSingleResult.valid, true);
assert.ok(orderedSingleResult.warnings.some(issue => issue.code === 'display_order_only'));
assert.throws(() => model.normalizeInteractiveQuestion(orderedSingle), /not an interactive/);

const validBank = model.validateQuestionBank([ordering, matchingWithReuse, legacySequence]);
assert.equal(validBank.valid, true);
const duplicateBank = model.validateQuestionBank([ordering, ordering]);
assert.ok(issueCodes(duplicateBank).includes('duplicate_question_id'));

assert.equal(model.schemaVersion, 1);
assert.ok(Object.isFrozen(model));
console.log('PASS: canonical matching/ordering contract, legacy sequence normalization, and validation guardrails.');
