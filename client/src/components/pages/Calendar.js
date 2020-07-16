import React, { Fragment, useContext, useEffect } from "react";

import {
  CALENDAR_TYPE_YEAR,
  CALENDAR_TYPE_MONTH,
  CALENDAR_TYPE_WEEK,
  CALENDAR_TYPE_DAY,
} from "../../contexts/calendar/CalendarState";
import CalendarContext from "../../contexts/calendar/calendarContext";

import Year from "../calendar/year/Year";
import Month from "../calendar/month/Month";
import Week from "../calendar/week/Week";
import Day from "../calendar/day/Day";

const Calendar = () => {
  const calendarContext = useContext(CalendarContext);

  const { view, showView } = calendarContext;

  useEffect(() => {}, [calendarContext.view]);

  const renderCalendar = (view) => {
    switch (view) {
      case CALENDAR_TYPE_DAY:
        return <Day />;
      case CALENDAR_TYPE_WEEK:
        return <Week />;
      case CALENDAR_TYPE_MONTH:
        return <Month />;
      case CALENDAR_TYPE_YEAR:
        return <Year />;
      default:
        return <Fragment />;
    }
  };

  const showDayView = (e) => {
    showView(CALENDAR_TYPE_DAY);
  };

  const showWeekView = (e) => {
    showView(CALENDAR_TYPE_WEEK);
  };

  const showMonthView = (e) => {
    showView(CALENDAR_TYPE_MONTH);
  };

  const showYearView = (e) => {
    showView(CALENDAR_TYPE_YEAR);
  };

  return (
    <div className='container'>
      <div className='btn-group' role='group'>
        <button type='button' className='btn btn-secondary' onClick={showDayView}>
          Day
        </button>
        <button type='button' className='btn btn-secondary' onClick={showWeekView}>
          Week
        </button>
        <button type='button' className='btn btn-secondary' onClick={showMonthView}>
          Month
        </button>
        <button type='button' className='btn btn-secondary' onClick={showYearView}>
          Year
        </button>
      </div>
      {renderCalendar(view)}
    </div>
  );
};

export default Calendar;
