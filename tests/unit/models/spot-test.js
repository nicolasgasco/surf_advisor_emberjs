import { module, test } from 'qunit';
import { setupTest } from 'surf-advisor-emberjs/tests/helpers';

module('Unit | Model | spot', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('spot', {});
    assert.ok(model);
  });
});
