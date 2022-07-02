import { module, test } from 'qunit';
import { setupRenderingTest } from 'surf-advisor-emberjs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | title-case', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders one word (lowercase)', async function (assert) {
    this.set('inputValue', 'word');

    await render(hbs`{{title-case this.inputValue}}`);

    assert.dom(this.element).hasText('Word');
  });

  test('it renders one word (uppercase)', async function (assert) {
    this.set('inputValue', 'WORD');

    await render(hbs`{{title-case this.inputValue}}`);

    assert.dom(this.element).hasText('Word');
  });

  test('it renders 2 words (lowercase)', async function (assert) {
    this.set('inputValue', 'word1 word2');

    await render(hbs`{{title-case this.inputValue}}`);

    assert.dom(this.element).hasText('Word1 Word2');
  });

  test('it renders 2 words (uppercase)', async function (assert) {
    this.set('inputValue', 'WORD1 WORD2');

    await render(hbs`{{title-case this.inputValue}}`);

    assert.dom(this.element).hasText('Word1 Word2');
  });

  test('it renders 2 words (uppercase + lowercase)', async function (assert) {
    this.set('inputValue', 'WORD1 word2');

    await render(hbs`{{title-case this.inputValue}}`);

    assert.dom(this.element).hasText('Word1 Word2');
  });

  test('it renders 2 words separated by many spaces', async function (assert) {
    this.set('inputValue', 'word1         word2');

    await render(hbs`{{title-case this.inputValue}}`);

    assert.dom(this.element).hasText('Word1 Word2');
  });
});
