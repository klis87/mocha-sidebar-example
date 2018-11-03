const x = require('./x');
const chai = require('chai')

describe('x', () => {
  it('should double input', () => {
    chai.assert.equal(x.dubble(2), 4);
  });

  it('should tripple input', () => {
    chai.assert.equal(x.tripple(2), 6);
  });
});
