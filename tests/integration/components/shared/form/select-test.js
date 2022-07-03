import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | <Shared::Form::Select/>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      hbs`<Shared::Form::Select @aria-label="aria" @label="label"/>`
    );

    assert.dom('[data-test-form-select-wrapper]').exists();
    assert.dom('[data-test-form-select]').hasAria('label', 'aria');
    assert
      .dom('[data-test-form-default-option]')
      .hasText('label')
      .hasAttribute('selected');
    assert
      .dom('[data-test-form-select-chevron="svg"]')
      .hasAria('hidden', 'true');
  });
});
