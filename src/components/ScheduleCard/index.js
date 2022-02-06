import { selectFlight } from 'actions/flightSelectedActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonsActions } from './ButtonsActions';
import { useNavigate } from "react-router-dom";


const ScheduleCard = ({ day, schedule }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [count, setCount] = useState(0);

  const handleSelectSchedule = ({ element, day, index, count }) => {
    let body = {
      schedule: element,
      day,
      passengers: count,
      index
    };
    dispatch(selectFlight(body));
    // history('reservaciones')
  };

  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid red',
        margin: '10px'
      }}>
      <p>dia:  {day}</p>
      {
        schedule?.length > 0 ? (
          schedule.map((element, index) => (
            <div
              key={index}
              style={{
                border: '1px solid green',
                padding: '20px',
                margin: '10px'
              }}
            >
              <p>Arribo : {element.entry}</p>
              <p>Llegada : {element.arrival}</p>
              <p>precio : {element.price}</p>
              <ButtonsActions
                setCount={setCount}
                handleSelectSchedule={() => handleSelectSchedule({ element, day, index, count })}
              />
            </div>
          ))
        ) : 'No hay nada'
      }
    </div >
  );
};

export default ScheduleCard;
