import useCounter from "hooks/useCounter";
import { useEffect } from "react";

export const ButtonsActions = ({ setCount, handleSelectSchedule }) => {
  const { counter, increaseBy } = useCounter();

  const setCounter = (number) => increaseBy(number);

  useEffect(() => {
    setCount(counter);
  }, [counter]);

  return (
    <>
      <button onClick={() => setCounter(-1)} >-</button>
      <div>{counter}</div>
      <button onClick={() => setCounter(+1)}> + </button>
      <button
        disabled={counter <= 0 ? true : false}
        onClick={() => handleSelectSchedule()}
      >
        Agregar
      </button>
    </>
  )
}