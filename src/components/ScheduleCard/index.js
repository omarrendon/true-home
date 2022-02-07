import { selectFlight } from 'actions/flightSelectedActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonsActions } from './ButtonsActions';
import { useNavigate } from "react-router-dom";
import style from './ScheduleCard.module.css';

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
      className={style.cardContainer}
    >
      {
        schedule?.length > 0 ? (
          schedule.map((element, index) => (
            <div
              key={index}
              className={style.card}
            >
              <div className={style.cardHeader}>
                <h2>{day}</h2>
                <h4>${element.price}</h4>
              </div>
              <div className={style.cardHours}>
                <h4>Partida : {element.entry}</h4>
                <h4>Llegada : {element.arrival}</h4>
              </div>

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
