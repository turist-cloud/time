import {convert, TimeUnit} from '../src/index';


describe('convert(n, TimeUnit)', () => {
  it('should not throw an error', () => {
    expect(() => {
      convert(1, TimeUnit.Year);
    }).not.toThrow();
  });
  it('should ', () => {
    expect(convert(100, TimeUnit.MilliSecond )).toEqual(100);
  });

  it('should preserve convert', () => {
    expect(convert(100, TimeUnit.MilliSecond)).toEqual(100);
  });
  it('should convert from minute to millisecond', () => {
    expect(convert(1, TimeUnit.Minute)).toEqual(60000);
  });

  it('should convert from hour to millisecond', () => {
    expect(convert(1, TimeUnit.Hour)).toEqual(3600000);
  });

  it('should convert days to millisecond', () => {
    expect(convert(2, TimeUnit.Day)).toEqual(172800000);
  });

  it('should convert weeks to millisecond', () => {
    expect(convert(3, TimeUnit.Week)).toEqual(1814400000);
  });

  it('should convert seconds to millisecond', () => {
    expect(convert(1, TimeUnit.Second)).toEqual(1000);
  });

  it('should convert millisecond to millisecond', () => {
    expect(convert(100, TimeUnit.MilliSecond)).toEqual(100);
  });

  it('should work with decimals', () => {
    expect(convert(1.5, TimeUnit.Hour)).toEqual(5400000);
  });

  it('should work with decimals', () => {
    expect(convert(0.5, TimeUnit.MilliSecond)).toEqual(0.5);
  });

  it('should work with negative integers', () => {
    expect(convert(-100, TimeUnit.MilliSecond)).toEqual(-100);
  });

  it('should work with negative decimals', () => {
    expect(convert(-1.5, TimeUnit.Hour)).toEqual(-5400000);
    expect(convert(-10.5, TimeUnit.Hour)).toEqual(-37800000);
  });

  it('should work with negative decimals', () => {
    expect(convert(-0.5, TimeUnit.Hour)).toEqual(-1800000);
  });
});
