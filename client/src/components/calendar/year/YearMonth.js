import React, { useContext } from "react";
import PropTypes from "prop-types";

import CalendarContext, {
  CALENDAR_TYPE_MONTH,
} from "../../../contexts/calendar/calendarContext";

const YearMonth = (props) => {
  const calendarContext = useContext(CalendarContext);

  const { setDate, showView } = calendarContext;

  const { visibleMonth, year, month, day } = props;

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

  const viewDay = (e) => {
    setDate(year, month + 1, 1);
    showView(CALENDAR_TYPE_MONTH);
  };

  return (
    <div className={`border year-month`} onClick={viewDay}>
      <span className='c-header'>{months[month]}</span>
    </div>
  );
};

YearMonth.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
};

export default YearMonth;
