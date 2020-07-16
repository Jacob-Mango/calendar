import React, { useContext } from "react";
import PropTypes from "prop-types";

import CalendarContext, {
  CALENDAR_TYPE_DAY,
} from "../../../contexts/calendar/calendarContext";

const MonthDay = (props) => {
  const calendarContext = useContext(CalendarContext);

  const { setDate, showView } = calendarContext;

  const { visibleMonth, year, month, day } = props;

  const viewDay = (e) => {
    setDate(year, month, day + 1);
    showView(CALENDAR_TYPE_DAY);
  };

  return (
    <div
      className={`border month-day ${visibleMonth !== month && "other-month"}`}
      onClick={viewDay}
    >
      <span className='c-header'>
        {day}/{month}
      </span>
    </div>
  );
};

MonthDay.propTypes = {
  visibleMonth: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
};

export default MonthDay;
