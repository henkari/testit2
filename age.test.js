const {age} = require('./age.js');
test.skip('Skip all tests', () => {
test("throws an error when the input is not a number", () => {
  expect(() => {
    age('t');
  }).toThrowError("Input is not a number");
});
test('age cannot be less than zero', ()=>{
  expect(age(-1)).toBe('Age cannot be negative')
})
})