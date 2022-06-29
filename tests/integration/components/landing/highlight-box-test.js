import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { setupIntl, t } from 'ember-intl/test-support';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | landing/highlight-block', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Landing::HighlightBlock />`);

    assert.dom('[data-test-highlight-block]').exists();
    assert
      .dom('[data-test-highlight-block-title]')
      .hasText(
        t('landing.highlight-block.title') +
          t('landing.highlight-block.subtitle')
      );
    assert
      .dom('[ data-test-highlight-block-img="svg"]')
      .hasAria('hidden', 'true');
  });
});
