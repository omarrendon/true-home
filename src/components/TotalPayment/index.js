import React, { useEffect, useState } from 'react';

function Totalpayment({ flights, changeStateModal }) {
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    if(flights.length > 0) {
      let total = flights.map((flight) => {
        let passegers = flight.passengers;
        let price = flight.schedule.price;
        let totalPerFlight = (passegers * price);
        return totalPerFlight;
      });

      let totalPayment = total.reduce((a, b) => a + b);
      setTotalData(totalPayment);
    }
  }, [flights]);

  return (
    <div>

    <div>PAGO TOTAL : ${totalData.toFixed(2)}</div>
    <button
        onClick={() =>  changeStateModal()}
    >Pagar</button>
    </div>
  );
}

export default Totalpayment;
