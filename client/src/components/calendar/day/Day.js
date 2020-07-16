import React, { Fragment, useEffect, useContext } from "react";

import CalendarContext from "../../../contexts/calendar/calendarContext";
import DateWeekHelper from "../../../utils/dateHelper";

const Day = () => {
  const calendarContext = useContext(CalendarContext);

  const { date, addDay } = calendarContext;

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {}, [date.year, date.month]);

  const previousDay = (e) => {
    addDay(-1);
  };

  const nextDay = (e) => {
    addDay(1);
  };

  var dDate = new Date(date.year, 0, date.day);

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-1'>
            <button
              type='button'
              className='btn btn-secondary float-left'
              onClick={previousDay}
            >
              <i className='fa fa-arrow-left' />
            </button>
          </div>
          <div className='col-sm-10'>
            <h3>
              {days[dDate.getDay()]}, {date.year}
            </h3>
          </div>
          <div className='col-sm-1'>
            <button
              type='button'
              className='btn btn-secondary float-left'
              onClick={nextDay}
            >
              <i className='fa fa-arrow-right' />
            </button>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className={`border day-day`}>
          <span className='c-header'>
            {dDate.getDate()}/{date.month}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Day;
