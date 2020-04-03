import React from 'react';
import 'moment-timezone';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'; //linkitetty index.html -sivulle

export default function Kalenteri() {


  const event1 = {
    
    
    StartDate: new Date(2020, 3, 4, 10, 0),
    EndDate: new Date(2020, 3, 4, 12, 30),
   
  }

  const event2 = {
    
    StartTime: new Date(2019, 3, 2, 10, 0),
    EndTime: new Date(2019, 3, 2, 12, 30),
    
  }

  const events = {event1, event2}

 return (
      <ScheduleComponent dataSource={  events } >
        <Inject services={[ Day, Week, WorkWeek, Month, Agenda ]} />
      </ ScheduleComponent>
       );
  
  
 
 

}



