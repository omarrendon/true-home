import React, { Fragment, useEffect, useState } from 'react';
import { fakeData } from 'example';

const Destiny = () => {
  const [dataOrigin, setdataOrigin] = useState([]);
  const [destinySelected, setDestinySelected] = useState('');

  useEffect(() => {
    setdataOrigin(fakeData);
  }, []);

  const handleSelectDestiny = (event) => setDestinySelected(event.target.value);

  console.log('FAKE DATA ORIGIN', dataOrigin);
  console.log('Destiny SELECTED', destinySelected);

  return (
    <>
      <label>Origen</label>
      <select
        name='origin'
        id='origin'
        onChange={handleSelectDestiny}
        value={''}
        disabled
      >
        <option value={''} selected>Selecciona un destino</option>
        {dataOrigin.map((element) => (
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
