import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | redirect_tiny_url', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:redirect-tiny-url');
    assert.ok(route);
  });
});
