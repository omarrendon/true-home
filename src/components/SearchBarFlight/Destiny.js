import React, { Fragment, useEffect, useState } from 'react';
import { fakeData } from 'example';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestiny } from 'actions/flightSelectedActions';

const Destiny = () => {
  const { origin } = useSelector(state => state.flightSelect);
  const dispatch = useDispatch();
  const [destinyData, setDestinyData] = useState([]);
  
  useEffect(() => {
    const cleanDestiny = fakeData.filter((element) => element.city !== origin);
    setDestinyData(cleanDestiny);
  }, [origin]);

  const handleSelectDestiny = (event) => dispatch(selectDestiny(event.target.value));

  return (
    <>
      <label>Origen</label>
      <select
        name='origin'
        id='origin'
        onChange={handleSelectDestiny}
        value={''}
        disabled={origin ? false : true}
      >
        <option value={''} selected>Selecciona un destino</option>
        {destinyData.map((element) => (
          <Fragment key={element.id}>
            <option value={element.city}>
              {element.city}
            </option>
          </Fragment>
        ))}
      </select>
    </>
  );
};

export default Destiny;
