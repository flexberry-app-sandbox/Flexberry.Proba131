import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba13-т-ч-рег-результ', 'Unit | Model | i-i-s-proba13-т-ч-рег-результ', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
