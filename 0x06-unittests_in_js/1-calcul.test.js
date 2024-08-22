// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should return 6 when inputs are 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 5 when inputs are 1.4 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 3.7), 5);
        });

        it('should return 0 when inputs are -1.4 and 1.4', () => {
            assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return -4 when inputs are 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return -3 when inputs are 1.4 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.7), -3);
        });

        it('should return -1 when inputs are -1.4 and 0.4', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 0.4), -1);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return 0.2 when inputs are 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return 0.25 when inputs are 1.4 and 3.7 (rounded to 1/3)', () => {
            assert.strictEqual(Number(calculateNumber('DIVIDE', 1.4, 3.7).toFixed(2)), 0.25);
        });

        it('should return Error when dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });
});
