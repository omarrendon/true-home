import React, { useState } from 'react';

function useCounter() {
  const [counter, setCounter] = useState(0)

  const increaseBy = (number) => setCounter(prev => Math.max(prev + number, 0));

  return {
    counter,
    increaseBy
  }
}

export default useCounter;
