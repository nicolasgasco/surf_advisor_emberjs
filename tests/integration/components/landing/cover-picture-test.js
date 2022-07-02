import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { setupIntl, t } from 'ember-intl/test-support';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | <Landing::CoverPicture/>', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Landing::CoverPicture />`);

    assert.dom('[data-test-cover-picture-wrapper]').exists();
    assert
      .dom('[data-test-cover-picture-img]')
      .hasAria('hidden', 'true')
      .hasAttribute('src', '/asssets/img/cover.jpg')
      .hasAttribute('alt', '');
    assert
      .dom('[data-test-cover-picture-small]')
      .hasText(t('landing.cover-picture.copyright'));
  });
});
