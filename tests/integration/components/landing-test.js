import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | <Landing/>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Landing />`);
    assert.dom('[data-test-landing-page-wrapper]').exists();
    assert.dom('[data-test-landing-page-main-content]').exists();
    assert.dom('[data-test-landing-page-cover-picture]').exists();
    assert.dom('[data-test-landing-page-highlight-block]').exists();
  });
});
