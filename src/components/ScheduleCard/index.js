import React from 'react';

const ScheduleCard = ({ day, schedule }) => {

  console.log('day props', day);
  console.log('schedule props', schedule);

  return (
    <div>
      <p>dia:  {day}</p>
      {
        schedule?.length > 0 ? (
          schedule.map((element, index) => (
            <div key={element.index}>
              <p>Arribo : {element.entry}</p>
              <p>Llegada : {element.arrival}</p>
              <p>precio : {element.price}</p>

            </div>
          ))
        ) : 'No hay nada'
      }
    </div>
  );
};

export default ScheduleCard;
