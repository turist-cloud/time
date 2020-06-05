import * as TimeUnit from './timeunit';

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const y = d * 365.25;

type TimeUnit =
  | typeof TimeUnit.Year
  | typeof TimeUnit.Week
  | typeof TimeUnit.Day
  | typeof TimeUnit.Hour
  | typeof TimeUnit.Minute
  | typeof TimeUnit.Second
  | typeof TimeUnit.MilliSecond;

export default function (n: number, type: TimeUnit): number | undefined {
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

export * as TimeUnit from './timeunit';
