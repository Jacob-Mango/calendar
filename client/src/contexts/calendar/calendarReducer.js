import {
  CALENDAR_SET_DAY,
  CALENDAR_SET_MONTH,
  CALENDAR_SET_YEAR,
  CALENDAR_VIEW_DAY,
  CALENDAR_VIEW_WEEK,
  CALENDAR_VIEW_MONTH,
  CALENDAR_VIEW_YEAR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case CALENDAR_SET_DAY:
      return {
        ...state,
        day: action.payload,
      };
    case CALENDAR_SET_MONTH:
      return {
        ...state,
        month: action.payload,
      };
    case CALENDAR_SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case CALENDAR_VIEW_DAY:
    case CALENDAR_VIEW_WEEK:
    case CALENDAR_VIEW_MONTH:
    case CALENDAR_VIEW_YEAR:
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
};
