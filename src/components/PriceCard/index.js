import React, { useEffect, useState } from 'react';
import { removeFlight } from 'actions/flightSelectedActions';
import { useDispatch } from 'react-redux';
import style from './index.module.css';
import { ReactComponent as Person } from '../../assets/person.svg';
const PriceCard = ({
  origin,
  destiny,
  day,
  schedule,
  index,
  passengers,
}) => {
  const [arrays, setArrays] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (schedule)
      setArrays([schedule])
  }, [schedule]);

  const handleRemoveFlight = () => {
    const item = {
      day,
      index
    };
    dispatch(removeFlight(item));
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <div className={style.cardHeader}>
          <h2>{day}</h2>
          <p className={style.people} >No. pasajeros: {passengers}</p>
        </div>

        <div className={style.cardHoursContainer}>
          <p>Origen: {origin}</p>
          <p>Destino: {destiny}</p>
        </div>

        {
          arrays.length > 0 &&
          arrays.map((el) => (
            <div key={el.id}>
              <div className={style.cardHours}>
                <p>Abordar: {el.entry}</p>
                <p>Llegada: {el.arrival}</p>
              </div>
              <div className={style.cardHours}>
                <p>precio : ${el.price}</p>
                <p>Total : ${(passengers * el.price)}</p>
              </div>
            </div>
          ))
        }
        <div className={style.btnContainer}>
          <button
            onClick={handleRemoveFlight}
            className={style.btn}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
