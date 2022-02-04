import React from 'react';
import { useSelector } from 'react-redux';

function SearchBarFlight({ children }) {
  const { origin, destiny } = useSelector(state => state.flightSelect);
  return (
    <div>
      {children}
      <button
        disabled={ origin && destiny ? false : true}
      >
        Buscar...
      </button>
    </div>
  );
}

export default SearchBarFlight;
