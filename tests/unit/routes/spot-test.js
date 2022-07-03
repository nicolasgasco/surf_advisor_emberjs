import { module, test } from 'qunit';
import { setupTest } from 'surf-advisor-emberjs/tests/helpers';

module('Unit | Route | spot', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:spot');
    assert.ok(route);
  });
});
