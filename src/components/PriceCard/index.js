import React, { useEffect, useState } from 'react';

const PriceCard = ({
  origin,
  destiny,
  day,
  schedule,
  passengers,
}) => {
  const [arrays, setArrays] = useState([]);

  useEffect(() => {
    if (schedule)
      setArrays([schedule])
  }, [schedule]);

  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
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
          </div>
        ))
      }

    </div>
  );
};

export default PriceCard;
