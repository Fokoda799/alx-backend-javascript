// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return the expected response when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                try {
                    expect(response).to.deep.equal({ data: 'Successful response from the API' });
                    done(); // Signal that the test is complete
                } catch (error) {
                    done(error); // Pass any errors to done
                }
            });
    });

    it('should not return anything when success is false', (done) => {
        getPaymentTokenFromAPI(false)
            .then((response) => {
                try {
                    expect(response).to.be.undefined;
                    done(); // Signal that the test is complete
                } catch (error) {
                    done(error); // Pass any errors to done
                }
            });
    });
});
