import React, { Fragment, useEffect, useState } from 'react';
import { fakeData } from 'example';
import { useDispatch } from 'react-redux';
import { selectOrigin } from 'actions/flightSelectedActions';

const Origin = () => {
  const dispatch = useDispatch();
  const [dataOrigin, setdataOrigin] = useState([]);
  const [originSelected, setOriginSelected] = useState('');

  useEffect(() => {
    setdataOrigin(fakeData);
  }, []);

  const handleSelectOrigin = (event) => dispatch(selectOrigin(event.target.value));

  console.log('FAKE DATA ORIGIN', dataOrigin);

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
