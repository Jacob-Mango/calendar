import React from "react";

import "./App.css";

import CalendarState from "./contexts/calendar/CalendarState";
import Calendar from "./components/pages/Calendar";

const App = () => {
  return (
    <CalendarState>
      <div className='App'>
        <Calendar />
      </div>
    </CalendarState>
  );
};

export default App;
