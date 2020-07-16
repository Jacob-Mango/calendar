import {
  CALENDAR_SET_DAY,
  CALENDAR_ADD_DAY,
  CALENDAR_ADD_WEEK,
  CALENDAR_ADD_MONTH,
  CALENDAR_ADD_YEAR,
  CALENDAR_VIEW,
  CALENDAR_LOAD_EVENTS,
} from "../types";

const setDate = (days) => {
  var newDate = new Date(days.year, days.month, days.day);

  return {
    day: newDate.getDayYear(),
    week: newDate.getWeek(),
    month: newDate.getMonth(),
    year: newDate.getFullYear(),
  };
};

const addDay = (currDate, days) => {
  var newDate = new Date(currDate.year, 0, currDate.day + days);

  return {
    day: newDate.getDayYear(),
    week: newDate.getWeek(),
    month: newDate.getMonth(),
    year: newDate.getFullYear(),
  };
};

const addWeek = (currDate, weeks) => {
  var newDay = currDate.day + weeks * 7;
  var newWeek = currDate.week + weeks;
  var newYear = currDate.year;
  if (newWeek >= 52) {
    newWeek -= 52;
    newYear++;
    if (
      (currDate.year % 4 === 0 && currDate.year % 100 !== 0) ||
      currDate.year % 400 === 0
    )
      newDay -= 366;
    else newDay -= 365;
  }
  if (newWeek < 0) {
    newWeek += 52;
    newYear--;
    if (
      (currDate.year % 4 === 0 && currDate.year % 100 !== 0) ||
      currDate.year % 400 === 0
    )
      newDay += 366;
    else newDay += 365;
  }

  var newMonth = new Date(newYear, 0, newDay + 1).getMonth();

  return {
    day: newDay,
    week: newWeek,
    month: newMonth,
    year: newYear,
  };
};

const addMonth = (currDate, months) => {
  var newDate = new Date(currDate.year, currDate.month + months, 1);

  return {
    day: newDate.getDayYear(),
    week: newDate.getWeek(),
    month: newDate.getMonth(),
    year: newDate.getFullYear(),
  };
};

const addYear = (currDate, years) => {
  var newDate = new Date(currDate.year + years, 0, currDate.day);

  return {
    day: newDate.getDayYear(),
    week: newDate.getWeek(),
    month: newDate.getMonth(),
    year: newDate.getFullYear(),
  };
};

export default (state, action) => {
  switch (action.type) {
    case CALENDAR_SET_DAY:
      return {
        ...state,
        date: setDate(action.payload),
      };
    case CALENDAR_ADD_DAY:
      return {
        ...state,
        date: addDay(state.date, action.payload),
      };
    case CALENDAR_ADD_WEEK:
      return {
        ...state,
        date: addWeek(state.date, action.payload),
      };
    case CALENDAR_ADD_MONTH:
      return {
        ...state,
        date: addMonth(state.date, action.payload),
      };
    case CALENDAR_ADD_YEAR:
      return {
        ...state,
        date: addYear(state.date, action.payload),
      };
    case CALENDAR_VIEW:
      return {
        ...state,
        view: action.payload,
      };
    case CALENDAR_LOAD_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};
