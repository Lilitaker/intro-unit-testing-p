const { sum, multiply, divide } = require('./02-math');

describe('Math tests', () => {
  describe('sum tests', () => {
    test('adds 1 + 3 to equal 4', () => {
      expect(sum(1, 3)).toBe(4);
    });
  });
  describe('multiply tests', () => {
    test('multiplies 2 * 3 to equal 6', () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
  describe('divide tests', () => {
    test('should have the right division result', () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(10, 0)).toBeNull();
    });
  });
});
