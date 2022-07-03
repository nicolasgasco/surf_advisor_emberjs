import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | <Shared::Form::Option/>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders as selected when the value is also the selected value', async function (assert) {
    await render(
      hbs`<Shared::Form::Option @value="value" @selectedValue="value" @aria-label="aria" @label="label"/>`
    );

    assert
      .dom('[data-test-form-option-selected]')
      .hasAria('selected', 'true')
      .hasAria('label', 'aria')
      .hasText('label')
      .hasAttribute('selected');
  });

  test('it renders as unselected when the value is not the selected value', async function (assert) {
    await render(
      hbs`<Shared::Form::Option @value="value" @selectedValue="other" @aria-label="aria" @label="label"/>`
    );

    assert
      .dom('[data-test-form-option-unselected]')
      .hasAria('selected', 'false')
      .hasAria('label', 'aria')
      .hasText('label')
      .hasNoAttribute('selected');
  });
});
