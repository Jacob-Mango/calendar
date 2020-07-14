import React from "react";
import PropTypes from "prop-types";

const MonthDay = (props) => {
  const { mainMonth, month, day } = props;

  return (
    <div className={`border ${mainMonth === month ? 'bg-white' : 'bg-light'}`} style={{ width: "14%", height: "160px" }}>
      <span>
        {day}/{month}
      </span>
    </div>
  );
};

MonthDay.propTypes = {
    mainMonth: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
};

export default MonthDay;
