import React, { useEffect, useContext } from "react";

import MonthWeek from "./MonthWeek";
import MonthDayHeader from "./MonthDayHeader";
import CalendarContext from "../../contexts/calendar/calendarContext";

const Month = () => {
  const calendarContext = useContext(CalendarContext);

  const { year, month, setMonth, setYear } = calendarContext;

  useEffect(() => {}, [year, month]);

  const previousMonth = () => {
    if (month - 1 <= 0) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month + 1 > 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var weeks = [];
  for (var i = 0; i < 5; i++) {
    weeks.push(<MonthWeek year={year} month={month} day={i * 7 + 1} />);
  }

  return (
    <div className='container'>
      <div className='btn-group' role='group'>
        <button
          type='button'
          className='btn btn-secondary'
          onClick={previousMonth}
        >
          <i className='fa fa-arrow-left' />
        </button>
        <button type='button' className='btn btn-secondary' onClick={nextMonth}>
          <i className='fa fa-arrow-right' />
        </button>
      </div>
      <h2>{months[month - 1]}</h2>
      <div className='row'>
        {days.map((dayName) => (
          <MonthDayHeader key={dayName} day={dayName} />
        ))}
      </div>
      {weeks}
    </div>
  );
};

export default Month;
