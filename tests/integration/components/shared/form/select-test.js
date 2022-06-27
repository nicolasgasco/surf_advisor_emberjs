import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | shared/form/select', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Shared::Form::Select />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Shared::Form::Select>
        template block text
      </Shared::Form::Select>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
