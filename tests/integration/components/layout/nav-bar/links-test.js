import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { setupIntl, t } from 'ember-intl/test-support';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | <Layout::NavBar::Links/>', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Layout::NavBar::Links />`);

    assert.dom('[data-test-nav-bar-links-wrapper]').exists();
    assert
      .dom('[data-test-nav-bar-links-link="index"]')
      .hasText(t('layout.nav-bar.links.home'))
      .hasAttribute('href', '/');
    assert
      .dom('[data-test-nav-bar-links-link="about"]')
      .hasText(t('layout.nav-bar.links.about'))
      .hasAttribute('href', '/about');
  });
});
