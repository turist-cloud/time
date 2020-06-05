const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const y = d * 365.25;

export const TimeUnit = {
  Year: Symbol(`Year`),
  Week: Symbol(`Week`),
  Day: Symbol(`Day`),
  Hour: Symbol(`Hour`),
  Minute: Symbol(`Minute`),
  Second: Symbol(`Second`),
  MilliSecond: Symbol(`MilliSecond`),
};

export function convert(n: number, type: symbol): number | undefined {
  switch (type) {
    case TimeUnit.Year:
      return n * y;
    case TimeUnit.Week:
      return n * w;
    case TimeUnit.Day:
      return n * d;
    case TimeUnit.Hour:
      return n * h;
    case TimeUnit.Minute:
      return n * m;
    case TimeUnit.Second:
      return n * s;
    case TimeUnit.MilliSecond:
      return n;
    default:
      return undefined;
  }
}
