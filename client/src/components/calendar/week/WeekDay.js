import React, { useContext } from "react";
import PropTypes from "prop-types";

import CalendarContext, {
  CALENDAR_TYPE_DAY,
} from "../../../contexts/calendar/calendarContext";

const WeekDay = (props) => {
  const calendarContext = useContext(CalendarContext);

  const { setDate, showView } = calendarContext;

  const { year, month, week, day } = props;

  const viewDay = (e) => {
    setDate(year, month, day + 1);
    showView(CALENDAR_TYPE_DAY);
  };

  return (
    <div className={`border week-day`} onClick={viewDay}>
      <span className='c-header'>
        {day}/{month}
      </span>
    </div>
  );
};

WeekDay.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  week: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
};

export default WeekDay;
