// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleLogSpy;

    beforeEach(() => {
        // Spy on console.log
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the spy
        consoleLogSpy.restore();
    });

    it('should log the correct message for 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        // Verify that console.log was called with the correct message
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    });

    it('should log the correct message for 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);

        // Verify that console.log was called with the correct message
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
});
