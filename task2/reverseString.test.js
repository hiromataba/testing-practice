const reverseString = require('./reverseString');

describe('reverseString', () => {
  it('reverseString("React") should return string', () => {
    expect(typeof reverseString('React')).toBe('string');
  });
  it('reverseString("Car") should return "raC"', () => {
    expect(reverseString('Car')).toBe('raC');
  });
  it('reverseString("Ruby") should return "ybuR"', () => {
    expect(reverseString('Ruby')).toBe('ybuR');
  });
});

