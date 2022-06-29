import { module, test } from 'qunit';
import { fillIn, select, visit } from '@ember/test-helpers';
import { setupIntl, t } from 'ember-intl/test-support';
import { setupApplicationTest } from 'surf-advisor-emberjs/tests/helpers';

module('Acceptance | Change language', function (hooks) {
  setupApplicationTest(hooks);
  setupIntl(hooks);

  test('default language is English', async function (assert) {
    await visit('/');
    assert.deepEqual(this.intl.locale, ['en-us']);
    assert.dom('[data-test-nav-bar-lang-selector-select]').hasProperty('value', 'en');
  });

  test('language is Spanish when visiting /es', async function (assert) {
    await visit('/es');
    assert.deepEqual(this.intl.locale, ['es-es']);
    assert.dom('[data-test-nav-bar-lang-selector-select]').hasProperty('value', 'es');
  });

  test('language is English when visiting /en', async function (assert) {
    await visit('/en');
    assert.deepEqual(this.intl.locale, ['en-us']);
    assert.dom('[data-test-nav-bar-lang-selector-select]').hasProperty('value', 'en');
  });

  test('changes language to Spanish correctly', async function (assert) {
    await visit('/');
    assert.deepEqual(this.intl.locale, ['en-us']);
    assert.dom('[data-test-nav-bar-lang-selector-select]').hasProperty('value', 'en');
    await fillIn('[data-test-nav-bar-lang-selector-select]', 'es');
    assert.deepEqual(this.intl.locale, ['es-es']);
    assert.dom('[data-test-nav-bar-lang-selector-select]').hasProperty('value', 'es');
  });

  test('changes language to Spanish and then English correctly', async function (assert) {
    await visit('/');
    assert.deepEqual(this.intl.locale, ['en-us']);
    assert.dom('[data-test-nav-bar-lang-selector-select]').hasProperty('value', 'en');
    await fillIn('[data-test-nav-bar-lang-selector-select]', 'es');
    assert.deepEqual(this.intl.locale, ['es-es']);
    assert.dom('[data-test-nav-bar-lang-selector-select]').hasProperty('value', 'es');
    await fillIn('[data-test-nav-bar-lang-selector-select]', 'en');
    assert.deepEqual(this.intl.locale, ['en-us']);
    assert.dom('[data-test-nav-bar-lang-selector-select]').hasProperty('value', 'en');
  });
});
