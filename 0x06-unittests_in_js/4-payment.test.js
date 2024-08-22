// 4-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(() => {
        // Stub Utils.calculateNumber to always return 10
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the stub and spy
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });

    it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
        sendPaymentRequestToApi(100, 20);

        // Verify that the stub was called with the correct arguments
        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    });

    it('should log the correct message', () => {
        sendPaymentRequestToApi(100, 20);

        // Verify that console.log was called with the correct message
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
