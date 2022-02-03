import React, { Fragment, useEffect, useState } from 'react';
import { fakeData } from 'example';

const Origin = () => {
  const [dataOrigin, setdataOrigin] = useState([]);
  const [originSelected, setOriginSelected] = useState('');

  useEffect(() => {
    setdataOrigin(fakeData);
  }, []);

  const handleSelectOrigin = (event) => setOriginSelected(event.target.value);

  console.log('FAKE DATA ORIGIN', dataOrigin);
  console.log('ORIGIN SELECTED', originSelected);

  return (
    <>
      <label>Origen</label>
      <select
        name='origin'
        id='origin'
        onChange={handleSelectOrigin}
      >
        <option value selected>Selecciona tu origen</option>
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

export default Origin;
