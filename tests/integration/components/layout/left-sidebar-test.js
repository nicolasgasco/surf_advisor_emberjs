import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | <Layout::LeftSidebar/>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Layout::LeftSidebar />`);

    assert.dom('[data-test-left-sidebar]').exists();
    assert.dom('[data-test-left-sidebar-img="svg"]').hasAria('hidden', 'true');
  });
});
