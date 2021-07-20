const stringLength = require('./stringLenght');

describe('stringLength', () => {
  it('Should return "1" if the length of text is at least one character', () => {
    expect(stringLength('h')).toBe(1);
  });
  it('Should return "4" if the length of ', () => {
    expect(stringLength('hiro')).toBe(4);
  });
  it('Should return "4" if the length of ', () => {
    expect(stringLength(0)).toBe('conditions are not met');
  });
});

