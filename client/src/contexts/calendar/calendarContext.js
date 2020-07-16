import { createContext } from 'react';

import {
    CALENDAR_VIEW_TYPE_DAY,
    CALENDAR_VIEW_TYPE_WEEK,
    CALENDAR_VIEW_TYPE_MONTH,
    CALENDAR_VIEW_TYPE_YEAR,
  } from "../types";

const calendarContext = createContext();

export default calendarContext;

export const CALENDAR_TYPE_YEAR = CALENDAR_VIEW_TYPE_YEAR;
export const CALENDAR_TYPE_MONTH = CALENDAR_VIEW_TYPE_MONTH;
export const CALENDAR_TYPE_WEEK = CALENDAR_VIEW_TYPE_WEEK;
export const CALENDAR_TYPE_DAY = CALENDAR_VIEW_TYPE_DAY;
