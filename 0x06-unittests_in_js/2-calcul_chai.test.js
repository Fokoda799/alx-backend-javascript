// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should return 6 when inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return 5 when inputs are 1.4 and 3.7', () => {
            expect(calculateNumber('SUM', 1.4, 3.7)).to.equal(5);
        });

        it('should return 0 when inputs are -1.4 and 1.4', () => {
            expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return -4 when inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return -3 when inputs are 1.4 and 3.7', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 3.7)).to.equal(-3);
        });

        it('should return -2 when inputs are -1.4 and 0.4', () => {
            expect(calculateNumber('SUBTRACT', -1.4, 0.4)).to.equal(-1);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return 0.2 when inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return 0.33 when inputs are 1.4 and 3.7 (rounded to 1/3)', () => {
            expect(Number(calculateNumber('DIVIDE', 1.4, 3.7).toFixed(2))).to.equal(0.25);
        });

        it('should return Error when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
});
