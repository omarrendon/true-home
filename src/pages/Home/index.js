import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { SearchBar } from 'components/SearchBarFlight';
import ScheduleList from 'components/ScheduleList';


const Home = () => {
  const { origin, destiny } = useSelector(state => state.flightSelect);
  // console.log('ORIGIN HOME', origin);
  // console.log('destiny HOME', destiny);
  return (
    <div>
      Pagina de inicio
      <SearchBar>
        <SearchBar.Origin />
        <SearchBar.Destiny />
      </SearchBar>
      <ScheduleList />
    </div>
  );
};

export default Home;
