import React, { useReducer } from "react";
import axios from "axios";

import CalendarContext from "./calendarContext";
import CalendarReducer from "./calendarReducer";

import {
  CALENDAR_SET_DAY,
  CALENDAR_SET_MONTH,
  CALENDAR_SET_YEAR,
  CALENDAR_VIEW_DAY,
  CALENDAR_VIEW_WEEK,
  CALENDAR_VIEW_MONTH,
  CALENDAR_VIEW_YEAR,
} from "../types";

const CalendarState = (props) => {
  const initialState = {
    view: "MONTH",
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };

  const [state, dispatch] = useReducer(CalendarReducer, initialState);

  const setDay = (day) => {
    dispatch({
      type: CALENDAR_SET_DAY,
      payload: day,
    });
  };

  const setMonth = (month) => {
    dispatch({
      type: CALENDAR_SET_MONTH,
      payload: month,
    });
  };

  const setYear = (year) => {
    dispatch({
      type: CALENDAR_SET_YEAR,
      payload: year,
    });
  };

  const viewDay = () => {
    dispatch({
      type: CALENDAR_VIEW_DAY,
      payload: "DAY",
    });
  };

  const viewWeek = () => {
    dispatch({
      type: CALENDAR_VIEW_WEEK,
      payload: "WEEK",
    });
  };

  const viewMonth = () => {
    dispatch({
      type: CALENDAR_VIEW_MONTH,
      payload: "MONTH",
    });
  };

  const viewYear = () => {
    dispatch({
      type: CALENDAR_VIEW_YEAR,
      payload: "YEAR",
    });
  };

  return (
    <CalendarContext.Provider
      value={{
        view: state.view,
        day: state.day,
        month: state.month,
        year: state.year,
        setDay,
        setMonth,
        setYear,
        viewDay,
        viewWeek,
        viewMonth,
        viewYear,
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};

export default CalendarState;
