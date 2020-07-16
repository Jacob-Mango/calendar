class DateWeekHelper {
  constructor(year, month) {
    this.year = year;
    this.month = month;

    this.date = new Date(this.year, this.month - 1, 1);
    this.dayOfMonth = this.date.getDate() - this.date.getDay();
    this.date.setDate(this.dayOfMonth);
  }

  getYear() {
    return this.date.getFullYear();
  }

  getMonth() {
    return this.month;
  }

  getActualMonth() {
    return this.date.getMonth() + 1;
  }

  incWeek() {
    this.dayOfMonth += 7;
    this.date.setDate(this.dayOfMonth);
  }

  decWeek() {
    this.dayOfMonth -= 7;
    this.date.setDate(this.dayOfMonth);
  }

  getStartOfWeek() {
    return this.dayOfMonth;
  }
}

export default DateWeekHelper;

/*eslint no-extend-native: ["error", { "exceptions": ["Date"] }]*/
Date.prototype.getWeek = function () {
  const weekMilliseconds = 7 * 86400000;

  var current = new Date(this.valueOf());
  current.setDate(current.getDate() - this.getDay() + 4);
  var dayDiff = current - new Date(current.getFullYear(), 0, 4);

  dayDiff = Math.ceil(dayDiff / weekMilliseconds);

  if (new Date(current.getFullYear(), 0, 1).getDay() < 5) {
    dayDiff += 1;
  }

  return dayDiff;
};

Date.prototype.getDayYear = function () {
  const dayMilliseconds = 86400000;

  var current = new Date(this.valueOf());
  var yearStart = new Date(current.getFullYear(), 0, 1)
  var dayDiff = current - yearStart;
  dayDiff += (current.getTimezoneOffset() - yearStart.getTimezoneOffset()) * 60000;

  return Math.floor(dayDiff / dayMilliseconds);
};