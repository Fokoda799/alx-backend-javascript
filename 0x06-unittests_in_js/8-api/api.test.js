const { expect } = require('chai');
const request = require('request');

const url = 'http://localhost:7865';

describe('Index page', () => { 
  it('correct response payload', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('correct response header', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });
});