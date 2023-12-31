import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba13-должн-сотр', 'Unit | Serializer | i-i-s-proba13-должн-сотр', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba13-должн-сотр',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proba13-итог-собес',

    'model:i-i-s-proba13-вакант-должн',
    'model:i-i-s-proba13-должн-сотр',
    'model:i-i-s-proba13-организация',
    'model:i-i-s-proba13-планир-собес',
    'model:i-i-s-proba13-рег-результ',
    'model:i-i-s-proba13-регист-анкеты',
    'model:i-i-s-proba13-сотрудники',
    'model:i-i-s-proba13-т-ч-рег-результ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
