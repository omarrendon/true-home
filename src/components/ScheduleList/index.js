import React, { Fragment, useEffect, useState } from 'react';
import { fakeData } from 'example';
import { useSelector } from 'react-redux';
import ScheduleCard from 'components/ScheduleCard';

const ScheduleList = () => {
  const { destiny } = useSelector(state => state.flightSelect);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const citySchedule = fakeData.filter((element) => element.city === destiny);
    const schedules = citySchedule.map((schedule) => schedule.timeTables);
    setScheduleData(schedules[0]);
  }, [destiny]);

  console.log('schedule', scheduleData);

  return (
    <>
      {
        scheduleData?.length > 0 ? (
          scheduleData.map(({day, schedule}) => (
            <Fragment key={day}>
              <ScheduleCard day={day} schedule={schedule} />
            </Fragment>
          ))
        ) : null
      }
    </>
  );
};

export default ScheduleList;
