import React, {useState, useEffect, Component,  } from 'react';
import Moment from 'moment';
import 'moment-timezone';
import { Calendar, momentLocalizer, Views, BigCalendar } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from './events';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'; //linkitetty index.html -sivulle

class App extends React.Component {
  render() {
    return <ScheduleComponent> 
      <Inject services={[ Day, Week, WorkWeek, Month, Agenda ]} />
    </ScheduleComponent>
  }
}

export default App;


