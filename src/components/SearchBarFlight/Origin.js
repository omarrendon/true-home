import React, { Fragment, useEffect, useState } from 'react';
import { fakeData } from 'example';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrigin } from 'actions/flightSelectedActions';

import styles from './SearchBar.module.css';
import originPlane from '../../assets/plane2.png';




const Origin = () => {
  const dispatch = useDispatch();
  const { origin } = useSelector(state => state.flightSelect);
  const [dataOrigin, setdataOrigin] = useState([]);

  useEffect(() => {
    setdataOrigin(fakeData);
  }, []);

  const handleSelectOrigin = (event) => dispatch(selectOrigin(event.target.value));

  return (
    <div className={styles.originContainer}>
      <select
        name='origin'
        id='origin'
        onChange={handleSelectOrigin}
        className={styles.selectInput}
      >
        <option value selected>{origin ? origin : 'Selecciona tu origen'}</option>
        {dataOrigin.map((element) => (
          <Fragment key={element.id}>
            <option value={element.city}>
              {element.city}
            </option>
          </Fragment>
        ))}
      </select>
      <div className={styles.imageContainer}>
        <img src={originPlane} />
      </div>
    </div>
  );
};

export default Origin;
