//import * as Time from '../src/index';
import time from '../src/index';


describe('time(n, time)', () => {
  it('should not throw an error', () => {
    expect(() => {
      time(1, time.Year);
    }).not.toThrow();
  });
  it('should ', () => {
    expect(time(100, convert.Year )).toEqual(100);
  });

  it('should ', () => {
    expect(time(100, Symbol(`Year`) )).toEqual(100);
  });
  it('should preserve time', () => {
    expect(time(100, time.MilliSecond)).toEqual(100);
  });
  it('should time from minute to millisecond', () => {
    expect(time(1, time.Minute)).toEqual(60000);
  });

  it('should time from hour to millisecond', () => {
    expect(time(1, time.Hour)).toEqual(3600000);
  });

  it('should time days to millisecond', () => {
    expect(time(2, time.Day)).toEqual(172800000);
  });

  it('should time weeks to millisecond', () => {
    expect(time(3, time.Week)).toEqual(1814400000);
  });

  it('should time seconds to millisecond', () => {
    expect(time(1, time.Second)).toEqual(1000);
  });

  it('should time millisecond to millisecond', () => {
    expect(time(100, time.MilliSecond)).toEqual(100);
  });

  it('should work with decimals', () => {
    expect(time(1.5, time.Hour)).toEqual(5400000);
  });

  it('should work with decimals', () => {
    expect(time(0.5, time.MilliSecond)).toEqual(0.5);
  });

  it('should work with negative integers', () => {
    expect(time(-100, time.MilliSecond)).toEqual(-100);
  });

  it('should work with negative decimals', () => {
    expect(time(-1.5, time.Hour)).toEqual(-5400000);
    expect(time(-10.5, time.Hour)).toEqual(-37800000);
  });

  it('should work with negative decimals', () => {
    expect(time(-0.5, time.Hour)).toEqual(-1800000);
  });
});
