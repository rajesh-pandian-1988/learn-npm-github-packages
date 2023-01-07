const calculator = require('./index');

test('add two numbers and check the result', () => {
    expect(calculator.add(1,2)).toBe(3);
})