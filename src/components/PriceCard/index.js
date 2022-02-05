import React from 'react';

const PriceCard = ({
  origin,
  destiny,
  day,
  index,
  schedule,
  passengers,
}) => {
  return (
    <div style={{border: '1px solid red', margin:'10px'}}>
      <p>day{day}</p>
      <p>{passengers}</p>
      <p>{origin}</p>
      <p>{destiny}</p>
    </div>
  );
};

export default PriceCard;
