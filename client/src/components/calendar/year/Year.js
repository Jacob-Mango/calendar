import React, { Fragment, useEffect, useContext } from "react";

import YearMonth from "./YearMonth";
import CalendarContext from "../../../contexts/calendar/calendarContext";
import DateWeekHelper from "../../../utils/dateHelper";

const Year = () => {
  const calendarContext = useContext(CalendarContext);

  const { date, addYear } = calendarContext;

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var years = [];

  useEffect(() => {}, [date.year, date.month]);

  const previousYear = () => {
    addYear(-1);
  };

  const nextYear = () => {
    addYear(1);
  };

  for (var i = 0; i < 12; i++) {
    years.push(<YearMonth key={i} year={date.year} month={i} day={1} />);
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-1'>
            <button
              type='button'
              className='btn btn-secondary float-left'
              onClick={previousYear}
            >
              <i className='fa fa-arrow-left' />
            </button>
          </div>
          <div className='col-sm-10'>
            <h3>{date.year}</h3>
          </div>
          <div className='col-sm-1'>
            <button
              type='button'
              className='btn btn-secondary float-left'
              onClick={nextYear}
            >
              <i className='fa fa-arrow-right' />
            </button>
          </div>
        </div>
      </div>

      <div className='row'>{years}</div>
    </Fragment>
  );
};

export default Year;
