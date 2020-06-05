const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const y = d * 365.25;

const Year = Symbol(`Year`);
const Week = Symbol(`Week`);
const Day = Symbol(`Day`);
const Hour = Symbol(`Hour`);
const Minute = Symbol(`Minute`);
const Second = Symbol(`Second`);
const MilliSecond = Symbol(`MilliSecond`);

//export { Year, Week, Day, Hour, Minute, Second, MilliSecond };

type TimeUnit =
  | typeof Year
  | typeof Week
  | typeof Day
  | typeof Hour
  | typeof Minute
  | typeof Second
  | typeof MilliSecond;

function time(n: number, type: TimeUnit): number | undefined {
  switch (type) {
    case Year:
      return n * y;
    case Week:
      return n * w;
    case Day:
      return n * d;
    case Hour:
      return n * h;
    case Minute:
      return n * m;
    case Second:
      return n * s;
    case MilliSecond:
      return n;
    default:
      return undefined;
  }
}

export default time

time.Year = Year
time.Week = Week
time.Day = Day
time.Hour = Hour
time.Minute = Minute
time.Second = Second
time.MilliSecond = MilliSecond

