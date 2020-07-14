import React, { Fragment } from "react";
import PropTypes from "prop-types";

import MonthDay from "./MonthDay";

const MonthWeek = (props) => {
  const { year, month, day } = props;

  var date = new Date(year, month, day);
  date = new Date(date.setDate(date.getDate() - date.getDay() + 1));

  var daysInMonth = new Date(year, month, 0).getDate();
  const days = [];
  for (let i = 1; i <= 7; i++) {
    date.setDate(date.getDate() + 1);

    if (date.getDate() >= daysInMonth) {
      date.setDate(1);
      date.setMonth(date.getMonth() + 1);
      if (date.getMonth() > 12) {
        date.setMonth(1);
        date.setFullYear(date.getFullYear() + 1);
      }
    }

    days.push(
      <MonthDay
        key={date.getDate()}
        mainMonth={month}
        month={date.getMonth()}
        day={date.getDate()}
      />
    );
  }

  return <div className='row'>{days}</div>;
};

MonthWeek.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
};

export default MonthWeek;
