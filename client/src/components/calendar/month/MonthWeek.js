import React, { Fragment } from "react";
import PropTypes from "prop-types";

import MonthDay from "./MonthDay";

const MonthWeek = (props) => {
  const { year, month, day } = props;

  const days = [];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  };

  var date = new Date(year, month - 1, day);
  var daysInMonth = getDaysInMonth(date);
  
  for (let i = 0; i < 7; i++) {
    if (date.getDate() > daysInMonth) {
      date.setDate(1);
      date.setMonth(date.getMonth() + 1);

      if (date.getMonth() > 12) {
        date.setMonth(1);
        date.setFullYear(date.getFullYear() + 1);
      }
      daysInMonth = getDaysInMonth(date);
    }

    days.push(
      <MonthDay
        key={date.getDate()}
        visibleMonth={month}
        year={date.getFullYear()}
        month={date.getMonth() + 1}
        day={date.getDate()}
      />
    );

    date.setDate(date.getDate() + 1);
  }

  return <div className='row'>{days}</div>;
};

MonthWeek.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
};

export default MonthWeek;
