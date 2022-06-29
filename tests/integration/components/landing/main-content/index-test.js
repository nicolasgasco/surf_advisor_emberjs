import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { setupIntl, t } from 'ember-intl/test-support';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | <Landing::MainContent/>', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Landing::MainContent />`);

    assert.dom('[data-test-landing-main-content-wrapper]').exists();
    assert.dom('[data-test-landing-main-content-title]').hasText(
      t('index.title')
        .replaceAll(/<\/*span>/g, '')
        .replaceAll(/<br\/>/g, '')
    );
    assert.dom('[data-test-spots-selection-wrapper]').exists();
  });
});
