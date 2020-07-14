import React from "react";
import PropTypes from "prop-types";

const MonthDayHeader = (props) => {
  const { day } = props;

  return (
    <div className='border bg-dark' style={{ width: "14%", height: "30px" }}>
      <span className='text-light'>{day}</span>
    </div>
  );
};

MonthDayHeader.propTypes = {
  day: PropTypes.string.isRequired,
};

export default MonthDayHeader;
