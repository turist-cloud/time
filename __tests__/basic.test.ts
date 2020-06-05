import time, {TimeUnit} from '../src/index';


describe('time(n, TimeUnit)', () => {
  it('should not throw an error', () => {
    expect(() => {
      time(1, TimeUnit.Year);
    }).not.toThrow();
  });

  it('should preserve time', () => {
    expect(time(100, TimeUnit.MilliSecond)).toEqual(100);
  });

  it('should time from minute to millisecond', () => {
    expect(time(1, TimeUnit.Minute)).toEqual(60000);
  });

  it('should time from hour to millisecond', () => {
    expect(time(1, TimeUnit.Hour)).toEqual(3600000);
  });

  it('should time days to millisecond', () => {
    expect(time(2, TimeUnit.Day)).toEqual(172800000);
  });

  it('should time weeks to millisecond', () => {
    expect(time(3, TimeUnit.Week)).toEqual(1814400000);
  });

  it('should time seconds to millisecond', () => {
    expect(time(1, TimeUnit.Second)).toEqual(1000);
  });

  it('should time millisecond to millisecond', () => {
    expect(time(100, TimeUnit.MilliSecond)).toEqual(100);
  });

  it('should work with decimals', () => {
    expect(time(1.5, TimeUnit.Hour)).toEqual(5400000);
  });

  it('should work with decimals', () => {
    expect(time(0.5, TimeUnit.MilliSecond)).toEqual(0.5);
  });

  it('should work with negative integers', () => {
    expect(time(-100, TimeUnit.MilliSecond)).toEqual(-100);
  });

  it('should work with negative decimals', () => {
    expect(time(-1.5, TimeUnit.Hour)).toEqual(-5400000);
    expect(time(-10.5, TimeUnit.Hour)).toEqual(-37800000);
  });

  it('should work with negative decimals', () => {
    expect(time(-0.5, TimeUnit.Hour)).toEqual(-1800000);
  });
});
