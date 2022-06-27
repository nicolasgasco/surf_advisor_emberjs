import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { setupIntl, t } from 'ember-intl/test-support';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | <About/>', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<About/>`);

    assert.dom('[data-test-about-page-main-wrapper]').exists();

    assert
      .dom('[data-test-about-page-title]')
      .hasText(t('about.title').replaceAll(/<\/*span>/g, ''));
    assert.dom('[data-test-about-page-goal]').hasText(t('about.text.goal'));
    assert.dom('[data-test-about-page-intro]').hasText(t('about.text.intro'));

    assert
      .dom('[data-test-about-page-list-intro]')
      .hasText(t('about.text.feature-list.intro'));
    assert
      .dom('[data-test-about-page-list-locales]')
      .hasText(t('about.text.feature-list.locales'));
    assert
      .dom('[data-test-about-page-list-styles]')
      .hasText(t('about.text.feature-list.styles'));
    assert
      .dom('[data-test-about-page-list-ember-data]')
      .hasText(t('about.text.feature-list.ember-data'));
    assert
      .dom('[data-test-about-page-list-svg-jar]')
      .hasText(t('about.text.feature-list.svg-jar'));

    assert
      .dom('[data-test-about-page-text-surfing]')
      .hasText(t('about.text.surfing'));
    assert
      .dom('[data-test-about-page-text-socials]')
      .hasText(t('about.text.socials'));

    assert
      .dom('[data-test-about-page-portrait]')
      .hasAttribute('src', '/asssets/img/portrait.jpeg');
    assert.dom('[data-test-about-page-portrait]').hasAttribute('alt', '');
    assert
      .dom('[data-test-about-page-portrait]')
      .hasAttribute('aria-hidden', 'true');
  });
});
