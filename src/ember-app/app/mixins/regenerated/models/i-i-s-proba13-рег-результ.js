import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датРегРезСобес: DS.attr('date'),
  организация: DS.belongsTo('i-i-s-proba13-организация', { inverse: null, async: false }),
  планирСобес: DS.belongsTo('i-i-s-proba13-планир-собес', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-proba13-сотрудники', { inverse: null, async: false }),
  тЧРегРезульт: DS.hasMany('i-i-s-proba13-т-ч-рег-результ', { inverse: 'регРезульт', async: false })
});

export let ValidationRules = {
  датРегРезСобес: {
    descriptionKey: 'models.i-i-s-proba13-рег-результ.validations.датРегРезСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba13-рег-результ.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba13-рег-результ.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proba13-рег-результ.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРегРезульт: {
    descriptionKey: 'models.i-i-s-proba13-рег-результ.validations.тЧРегРезульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегРезультE', 'i-i-s-proba13-рег-результ', {
    датРегРезСобес: attr('Дата регистрации результатов собеседования', { index: 0 }),
    организация: belongsTo('i-i-s-proba13-организация', 'Наименование организации', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' }),
    сотрудники: belongsTo('i-i-s-proba13-сотрудники', 'Имена и должности участников собеседования', {
      фИОСотруд: attr('Ф и о сотруд', { index: 4, hidden: true }),
      должнСотр: belongsTo('i-i-s-proba13-должн-сотр', '', {
        должность: attr('Должность сотрудника', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: 3, displayMemberPath: 'фИОСотруд' }),
    планирСобес: belongsTo('i-i-s-proba13-планир-собес', 'Иметь при себе', {
      иметьПриСебе: attr('Иметь при себе', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'иметьПриСебе' }),
    тЧРегРезульт: hasMany('i-i-s-proba13-т-ч-рег-результ', 'Регистрация результатов собеседования', {
      итогСобес: attr('Итог собеседования', { index: 0 }),
      оценкаКандид: attr('Оценка кандидата', { index: 1 }),
      крКомИлиОбсРеш: attr('Краткий комментарий или обоснованное решение', { index: 2 })
    })
  });

  modelClass.defineProjection('РегРезультL', 'i-i-s-proba13-рег-результ', {
    датРегРезСобес: attr('Дата регистрации результатов собеседования', { index: 0 }),
    организация: belongsTo('i-i-s-proba13-организация', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 1 })
    }, { index: -1, hidden: true }),
    планирСобес: belongsTo('i-i-s-proba13-планир-собес', 'ФИО кандидата', {
      регистАнкеты: belongsTo('i-i-s-proba13-регист-анкеты', '', {
        фИОКандидата: attr('ФИО кандидата', { index: 2 }),
        вакантДолжн: belongsTo('i-i-s-proba13-вакант-должн', '', {
          должности: attr('Вакантная должность', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true }),
      иметьПриСебе: attr('Иметь при себе', { index: 5 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-proba13-сотрудники', 'Имена и должности участников собеседования', {
      фИОСотруд: attr('Имена и должности участников собеседования', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
