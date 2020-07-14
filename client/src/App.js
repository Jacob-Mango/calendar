import React from "react";

import "./App.css";
import Month from "./components/calendar/Month";
import CalendarState from "./contexts/calendar/CalendarState";

const App = () => {
  return (
    <CalendarState>
      <div className='App'>
        <Month />
      </div>
    </CalendarState>
  );
};

export default App;
