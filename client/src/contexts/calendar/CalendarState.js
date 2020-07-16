import React, { useReducer } from "react";
import axios from "axios";

import CalendarContext from "./calendarContext";
import CalendarReducer from "./calendarReducer";

import {
  CALENDAR_SET_DAY,
  CALENDAR_ADD_DAY,
  CALENDAR_ADD_WEEK,
  CALENDAR_ADD_MONTH,
  CALENDAR_ADD_YEAR,
  CALENDAR_VIEW,
  CALENDAR_VIEW_TYPE_DAY,
  CALENDAR_VIEW_TYPE_WEEK,
  CALENDAR_VIEW_TYPE_MONTH,
  CALENDAR_VIEW_TYPE_YEAR,
  CALENDAR_LOAD_EVENTS,
} from "../types";

const CalendarState = (props) => {
  const initialState = {
    view: CALENDAR_VIEW_TYPE_WEEK,
    date: {
      day: new Date().getDayYear(),
      week: new Date().getWeek(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    },
    events: null,
  };

  const [state, dispatch] = useReducer(CalendarReducer, initialState);

  const setDate = (year, month, day) => {
    dispatch({
      type: CALENDAR_SET_DAY,
      payload: {
        year,
        month,
        day
      },
    });
  };

  const addDay = (days) => {
    dispatch({
      type: CALENDAR_ADD_DAY,
      payload: days,
    });
  };

  const addWeek = (weeks) => {
    dispatch({
      type: CALENDAR_ADD_WEEK,
      payload: weeks,
    });
  };

  const addMonth = (months) => {
    dispatch({
      type: CALENDAR_ADD_MONTH,
      payload: months,
    });
  };

  const addYear = (years) => {
    dispatch({
      type: CALENDAR_ADD_YEAR,
      payload: years,
    });
  };

  const showView = (type) => {
    dispatch({
      type: CALENDAR_VIEW,
      payload: type,
    });
  };

  const loadEvents = (type, date) => {
    dispatch({
      type: CALENDAR_LOAD_EVENTS,
      payload: type,
    });
  };

  return (
    <CalendarContext.Provider
      value={{
        view: state.view,
        date: state.date,
        events: state.events,
        setDate,
        addDay,
        addWeek,
        addMonth,
        addYear,
        showView,
        loadEvents,
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};

export default CalendarState;

export const CALENDAR_TYPE_YEAR = CALENDAR_VIEW_TYPE_YEAR;
export const CALENDAR_TYPE_MONTH = CALENDAR_VIEW_TYPE_MONTH;
export const CALENDAR_TYPE_WEEK = CALENDAR_VIEW_TYPE_WEEK;
export const CALENDAR_TYPE_DAY = CALENDAR_VIEW_TYPE_DAY;
