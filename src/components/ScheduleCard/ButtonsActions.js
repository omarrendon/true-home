import { useEffect } from "react";
import useCounter from "hooks/useCounter";
import style from './ScheduleCard.module.css';

export const ButtonsActions = ({ setCount, handleSelectSchedule }) => {
  const { counter, increaseBy } = useCounter();
  const setCounter = (number) => increaseBy(number);

  useEffect(() => {
    setCount(counter);
  }, [counter]);

  return (
    <div className={style.counterContainer}>
      <div>Pasajeros: {counter}</div>
      <div className={style.counterButtons}>
        <button className={style.counterButton} onClick={() => setCounter(-1)} >-</button>
        <button className={style.counterButton} onClick={() => setCounter(+1)}> + </button>
      </div>
      <div>
        <button
          className={counter ? style.counterButtonAdd : style.counterButtonAddDisable}
          disabled={counter <= 0 ? true : false}
          onClick={() => handleSelectSchedule()}
        >
          Agregar
        </button>
      </div>
    </div>
  )
}