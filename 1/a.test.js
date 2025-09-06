const sumall = require('../a');

describe('sumall', () => {
    test('should return the sum of all numbers in an array', () => {
        expect(sumall([1, 2, 3])).toBe(6);
    })
})