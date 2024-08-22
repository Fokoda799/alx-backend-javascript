const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the server

describe('Index page', function() {
  const baseUrl = 'http://localhost:7865';

  before(function(done) {
    this.server = app.listen(7865, done); // Start the server
  });

  after(function(done) {
    this.server.close(done); // Stop the server
  });

  it('should return status code 200', function(done) {
    request.get(baseUrl, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', function(done) {
    request.get(baseUrl, function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should respond with a text content type', function(done) {
    request.get(baseUrl, function(error, response, body) {
      expect(response.headers['content-type']).to.include('text/plain');
      done();
    });
  });
});

describe('Cart page', function() {
  const baseUrl = 'http://localhost:7865/cart';

  it('should return status code 200 for numeric id', function(done) {
    request.get(`${baseUrl}/12`, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result for numeric id', function(done) {
    request.get(`${baseUrl}/12`, function(error, response, body) {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 for non-numeric id', function(done) {
    request.get(`${baseUrl}/hello`, function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
