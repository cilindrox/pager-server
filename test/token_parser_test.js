var expect = require('chai').expect;
var parser = require('../src/helpers/parser.js');

describe('Token parser', function() {
  it('extracts a token string', function(done) {
    var token = parser.parse({
      authorization: 'Bearer some token'
    });
    expect(token).to.eql('some token');
    done();
  });

  it('returns null for invalid params', function(done) {
    var token = parser.parse();
    expect(token).to.be.null;
    done();
  });
});
