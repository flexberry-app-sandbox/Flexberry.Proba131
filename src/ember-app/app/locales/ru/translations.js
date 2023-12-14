import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProba13ВакантДолжнLForm from './forms/i-i-s-proba13-вакант-должн-l';
import IISProba13ДолжнСотрLForm from './forms/i-i-s-proba13-должн-сотр-l';
import IISProba13ОрганизацияLForm from './forms/i-i-s-proba13-организация-l';
import IISProba13ПланирСобесLForm from './forms/i-i-s-proba13-планир-собес-l';
import IISProba13РегРезультLForm from './forms/i-i-s-proba13-рег-результ-l';
import IISProba13РегистАнкетыLForm from './forms/i-i-s-proba13-регист-анкеты-l';
import IISProba13СотрудникиLForm from './forms/i-i-s-proba13-сотрудники-l';
import IISProba13ВакантДолжнEForm from './forms/i-i-s-proba13-вакант-должн-e';
import IISProba13ДолжнСотрEForm from './forms/i-i-s-proba13-должн-сотр-e';
import IISProba13ОрганизацияEForm from './forms/i-i-s-proba13-организация-e';
import IISProba13ПланирСобесEForm from './forms/i-i-s-proba13-планир-собес-e';
import IISProba13РегРезультEForm from './forms/i-i-s-proba13-рег-результ-e';
import IISProba13РегистАнкетыEForm from './forms/i-i-s-proba13-регист-анкеты-e';
import IISProba13СотрудникиEForm from './forms/i-i-s-proba13-сотрудники-e';
import IISProba13ВакантДолжнModel from './models/i-i-s-proba13-вакант-должн';
import IISProba13ДолжнСотрModel from './models/i-i-s-proba13-должн-сотр';
import IISProba13ОрганизацияModel from './models/i-i-s-proba13-организация';
import IISProba13ПланирСобесModel from './models/i-i-s-proba13-планир-собес';
import IISProba13РегРезультModel from './models/i-i-s-proba13-рег-результ';
import IISProba13РегистАнкетыModel from './models/i-i-s-proba13-регист-анкеты';
import IISProba13СотрудникиModel from './models/i-i-s-proba13-сотрудники';
import IISProba13ТЧРегРезультModel from './models/i-i-s-proba13-т-ч-рег-результ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba13-вакант-должн': IISProba13ВакантДолжнModel,
    'i-i-s-proba13-должн-сотр': IISProba13ДолжнСотрModel,
    'i-i-s-proba13-организация': IISProba13ОрганизацияModel,
    'i-i-s-proba13-планир-собес': IISProba13ПланирСобесModel,
    'i-i-s-proba13-рег-результ': IISProba13РегРезультModel,
    'i-i-s-proba13-регист-анкеты': IISProba13РегистАнкетыModel,
    'i-i-s-proba13-сотрудники': IISProba13СотрудникиModel,
    'i-i-s-proba13-т-ч-рег-результ': IISProba13ТЧРегРезультModel
  },

  'application-name': 'Menu',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Menu',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Menu',
          title: 'Menu'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'информация-об-организации': {
          caption: 'Информация об организации',
          title: 'Информация об организации',
          'i-i-s-proba13-вакант-должн-l': {
            caption: 'Вакант должн',
            title: ''
          },
          'i-i-s-proba13-организация-l': {
            caption: 'Организация',
            title: ''
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-proba13-рег-результ-l': {
            caption: 'РегРезультL',
            title: 'Рег результ'
          },
          'i-i-s-proba13-планир-собес-l': {
            caption: 'ПланирСобесL',
            title: 'Планир собес'
          },
          'i-i-s-proba13-регист-анкеты-l': {
            caption: 'РегистАнкетыL',
            title: 'Регист анкеты'
          }
        },
        'информация-о-сотрудниках': {
          caption: 'Информация о сотрудниках',
          title: 'Информация о сотрудниках',
          'i-i-s-proba13-должн-сотр-l': {
            caption: 'ДолжнСотрL',
            title: 'Должн сотр'
          },
          'i-i-s-proba13-сотрудники-l': {
            caption: 'СотрудникиL',
            title: 'Сотрудники'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba13-вакант-должн-l': IISProba13ВакантДолжнLForm,
    'i-i-s-proba13-должн-сотр-l': IISProba13ДолжнСотрLForm,
    'i-i-s-proba13-организация-l': IISProba13ОрганизацияLForm,
    'i-i-s-proba13-планир-собес-l': IISProba13ПланирСобесLForm,
    'i-i-s-proba13-рег-результ-l': IISProba13РегРезультLForm,
    'i-i-s-proba13-регист-анкеты-l': IISProba13РегистАнкетыLForm,
    'i-i-s-proba13-сотрудники-l': IISProba13СотрудникиLForm,
    'i-i-s-proba13-вакант-должн-e': IISProba13ВакантДолжнEForm,
    'i-i-s-proba13-должн-сотр-e': IISProba13ДолжнСотрEForm,
    'i-i-s-proba13-организация-e': IISProba13ОрганизацияEForm,
    'i-i-s-proba13-планир-собес-e': IISProba13ПланирСобесEForm,
    'i-i-s-proba13-рег-результ-e': IISProba13РегРезультEForm,
    'i-i-s-proba13-регист-анкеты-e': IISProba13РегистАнкетыEForm,
    'i-i-s-proba13-сотрудники-e': IISProba13СотрудникиEForm
  },

});

export default translations;
