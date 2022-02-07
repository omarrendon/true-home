import React, { Fragment, useEffect, useState } from 'react';
import { fakeData } from 'example';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestiny } from 'actions/flightSelectedActions';
import styles from './SearchBar.module.css';
import originArrive from '../../assets/plaeenArrive.png';


const Destiny = () => {
  const { origin, destiny } = useSelector(state => state.flightSelect);
  const dispatch = useDispatch();
  const [destinyData, setDestinyData] = useState([]);
  
  useEffect(() => {
    const cleanDestiny = fakeData.filter((element) => element.city !== origin);
    setDestinyData(cleanDestiny);
  }, [origin]);

  const handleSelectDestiny = (event) => dispatch(selectDestiny(event.target.value));

  return (
    <div className={styles.originContainer}>
      <div>
        <h4>Destino</h4>
      </div>
      <select
        name='origin'
        id='origin'
        className={styles.selectInput}
        onChange={handleSelectDestiny}
        disabled={origin ? false : true}
      >
        <option value={''} selected>{destiny ? destiny : 'Selecciona un destino'}</option>
        {destinyData.map((element) => (
          <Fragment key={element.id}>
            <option value={element.city}>
              {element.city}
            </option>
          </Fragment>
        ))}
      </select>
      <div className={styles.imageContainer}>
        <img src={originArrive} />
      </div>
    </div>
  );
};

export default Destiny;
