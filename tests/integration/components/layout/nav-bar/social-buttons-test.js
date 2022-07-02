import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { setupIntl, t } from 'ember-intl/test-support';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | layout/nav-bar/social-buttons',
  function (hooks) {
    setupRenderingTest(hooks);
    setupIntl(hooks);

    test('it renders', async function (assert) {
      await render(hbs`<Layout::NavBar::SocialButtons />`);

      assert.dom('[data-test-nav-bar-social-buttons-wrapper]').exists();
      assert
        .dom('[data-test-nav-bar-social-buttons-link="github"]')
        .hasAria('label', t('layout.nav-bar.social.github'))
        .hasAttribute('href', 'https://github.com/nicolasgasco/surf_advisor_emberjs')
        .hasAttribute('target', '_blank')
        .hasAttribute('rel', 'noopener noreferrer')
        .hasAttribute('tabindex', '0');
      assert
        .dom('[data-test-nav-bar-social-buttons-link="github"] > svg')
        .hasAria('hidden', 'true');
      assert
        .dom('[data-test-nav-bar-social-buttons-link="linkedin"]')
        .hasAria('label', t('layout.nav-bar.social.linkedin'))
        .hasAttribute('href', 'https://www.linkedin.com/in/nicolasgasco/')
        .hasAttribute('target', '_blank')
        .hasAttribute('rel', 'noopener noreferrer')
        .hasAttribute('tabindex', '0');
      assert
        .dom('[data-test-nav-bar-social-buttons-link="linkedin"] > svg')
        .hasAria('hidden', 'true');
    });
  }
);
