import React, { Fragment, useEffect, useContext } from "react";

import MonthWeek from "./MonthWeek";
import MonthDayHeader from "./MonthDayHeader";
import CalendarContext from "../../../contexts/calendar/calendarContext";
import DateWeekHelper from "../../../utils/dateHelper";

const Month = () => {
  const calendarContext = useContext(CalendarContext);

  const { date, addMonth } = calendarContext;

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var weeks = [];

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

  useEffect(() => {}, [date.year, date.month]);

  const previousMonth = (e) => {
    addMonth(-1);
  };

  const nextMonth = (e) => {
    addMonth(1);
  };

  var dateWeekHelper = new DateWeekHelper(date.year, date.month);

  for (var i = 0; i < 6; i++) {
    weeks.push(
      <MonthWeek
        key={i}
        year={date.year}
        month={dateWeekHelper.getMonth()}
        day={dateWeekHelper.getStartOfWeek()}
      />
    );

    dateWeekHelper.incWeek();
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-1'>
            <button
              type='button'
              className='btn btn-secondary float-left'
              onClick={previousMonth}
            >
              <i className='fa fa-arrow-left' />
            </button>
          </div>
          <div className='col-sm-10'>
            <h3>
              {months[date.month - 1]}, {date.year}
            </h3>
          </div>
          <div className='col-sm-1'>
            <button
              type='button'
              className='btn btn-secondary float-left'
              onClick={nextMonth}
            >
              <i className='fa fa-arrow-right' />
            </button>
          </div>
        </div>
      </div>

      <div className='row'>
        {days.map((dayName) => (
          <MonthDayHeader key={dayName} day={dayName} />
        ))}
      </div>

      {weeks}
    </Fragment>
  );
};

export default Month;
