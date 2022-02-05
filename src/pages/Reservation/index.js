import ScheduleList from 'components/ScheduleList';
import React from 'react';
import { useSelector } from 'react-redux';

const Reservation = () => {
  const { flights } = useSelector(state => state.flightSelect);
  console.log('state', flights);
  return (
    <div>
      Reservation page
      <ScheduleList reservation />  
    </div>
  );
};

export default Reservation;
