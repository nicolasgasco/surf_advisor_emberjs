import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { setupIntl, t } from 'ember-intl/test-support';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | <LanguageSelector>',
  function (hooks) {
    setupRenderingTest(hooks);
    setupIntl(hooks);

    test('it renders', async function (assert) {
      await render(hbs`<Layout::NavBar::LanguageSelector />`);

      assert.dom('[data-test-nav-bar-lang-selector-wrapper]').exists();
      assert.dom('[data-test-nav-bar-lang-selector-select]').hasAria('label', t("layout.nav-bar.language-selector.aria-label"));
    });
  }
);
