import React, { useEffect, useState } from 'react';
import { removeFlight } from 'actions/flightSelectedActions';
import { useDispatch } from 'react-redux';

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
    <div style={{ border: '1px solid red', margin: '12px' }}>
      <p>day:{day}</p>
      <p>pasajeros:{passengers}</p>
      <p>orign: {origin}</p>
      <p>destino: {destiny}</p>
      {
        arrays.length > 0 &&
        arrays.map((el) => (
          <div key={el.id}>
            <p>hora de abordar {el.entry}</p>
            <p>hora de llegada {el.arrival}</p>
            <p>precio : ${el.price}</p>
            <p>Total : </p>  {(passengers * el.price)}
          </div>
        ))
      }
      <button onClick={handleRemoveFlight}>
        Eliminar
      </button>
    </div>
  );
};

export default PriceCard;
