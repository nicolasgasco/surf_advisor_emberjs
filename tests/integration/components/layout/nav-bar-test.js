import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | <Layout::NavBar/>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Layout::NavBar />`);

    assert.dom('[data-test-nav-bar-wrapper]').exists();
    assert.dom('[data-test-nav-bar-links-wrapper]').exists();
    assert.dom('[data-test-nav-bar-social-buttons-wrapper]').exists();
    assert.dom('[data-test-nav-bar-lang-selector-wrapper]').exists();
  });
});
