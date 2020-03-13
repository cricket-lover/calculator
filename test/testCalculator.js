const assert = require('assert');

const sum = function(a, b) {
  return a + b;
};

describe('', function() {
  it('should give the sum of two positive numbers', function() {
    assert.equal(sum(1, 2), 3);
  });
});
