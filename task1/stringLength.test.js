const stringLength = require('./stringLenght');

test('Should return "1" if the length of text is at least one character', () => {
  expect(stringLength('h')).toBe(1);
});
test('Should return "4" if the length of ', () => {
  expect(stringLength('hiro')).toBe(4);
});
test('Should return "4" if the length of ', () => {
  expect(stringLength(0)).toBe('Conditions are not met');
});
