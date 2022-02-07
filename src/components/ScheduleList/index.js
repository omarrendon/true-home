import React, { Fragment, useEffect, useState } from 'react';
import { fakeData } from 'example';
import { useSelector } from 'react-redux';
import ScheduleCard from 'components/ScheduleCard';
import PriceCard from 'components/PriceCard';

const ScheduleList = ({ reservation }) => {
  const { destiny, flights, origin } = useSelector(state => state.flightSelect);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const citySchedule = fakeData.filter((element) => element.city === destiny);
    const schedules = citySchedule.map((schedule) => schedule.timeTables);
    setScheduleData(schedules[0]);
  }, [destiny]);

  return (
    <>
      {reservation ?
        flights.length > 0 ? (
          flights.map(({ day, schedule, index  , passengers }) => (
            <Fragment key={index}>
              <PriceCard
                origin={origin}
                destiny={destiny}
                day={day}
                index={index}
                schedule={schedule}
                passengers={passengers}
              />
            </Fragment>
          ))
        ) : null
        :
        scheduleData?.length > 0 ? (
          scheduleData.map(({ day, schedule }) => (
            <Fragment key={day}>
              <ScheduleCard
                day={day}
                schedule={schedule}
              />
            </Fragment>
          ))
        ) : null
      }

    </>
  );
};

export default ScheduleList;
