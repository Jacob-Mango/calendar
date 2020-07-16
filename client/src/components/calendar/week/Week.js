import React, { Fragment, useEffect, useContext } from "react";

import WeekDay from "./WeekDay";
import WeekDayHeader from "./WeekDayHeader";
import CalendarContext from "../../../contexts/calendar/calendarContext";
import DateWeekHelper from "../../../utils/dateHelper";

const Week = () => {
  const calendarContext = useContext(CalendarContext);

  const { date, addWeek } = calendarContext;

  var daysHeader = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var days = [];

  useEffect(() => {}, [date.year, date.month, date.week]);

  const previousWeek = () => {
    addWeek(-1);
  };

  const nextWeek = () => {
    addWeek(1);
  };

  var dDate = new Date(date.year, 0, (date.week - 1) * 7);
  dDate.setDate(dDate.getDate() - dDate.getDay());

  for (var i = 0; i < 7; i++) {
    days.push(
      <WeekDay
        key={i}
        year={dDate.getFullYear()}
        month={dDate.getMonth()}
        week={date.week}
        day={dDate.getDate()}
      />
    );

    dDate.setDate(dDate.getDate() + 1);
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-1'>
            <button
              type='button'
              className='btn btn-secondary float-left'
              onClick={previousWeek}
            >
              <i className='fa fa-arrow-left' />
            </button>
          </div>
          <div className='col-sm-10'>
            <h3>
              Week {date.week}, {date.year}
            </h3>
          </div>
          <div className='col-sm-1'>
            <button
              type='button'
              className='btn btn-secondary float-left'
              onClick={nextWeek}
            >
              <i className='fa fa-arrow-right' />
            </button>
          </div>
        </div>
      </div>

      <div className='row'>
        {daysHeader.map((dayName) => (
          <WeekDayHeader key={dayName} day={dayName} />
        ))}
      </div>

      <div className='row'>{days}</div>
    </Fragment>
  );
};

export default Week;
