import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { flightReservation, removeAllReservation } from 'actions/flightSelectedActions';
import { useNavigate } from "react-router-dom";
import Modal from 'components/Modal';
import ScheduleList from 'components/ScheduleList';
import Totalpayment from 'components/TotalPayment';
import style from './index.module.css';

const Reservation = () => {
  const { flights, reservationData } = useSelector(state => state.flightSelect);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showModalReservation, setshowModalReservation] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [errorForm, setErrorForm] = useState({
    name: false,
    lastName: false,
    address: false,
    email: false,
  });

  useEffect(() => {
    if (reservationData?.name) {
      setShowModal(false);
      setshowModalReservation(true);
    }
  }, [reservationData]);

  const handleSubmit = () => {
    if (!name) setErrorForm({ name: true });
    if (!lastName) setErrorForm({ lastName: true });
    if (!address) setErrorForm({ address: true });
    if (!email) setErrorForm({ email: true });
    if (!name || !lastName || !address || !email) return;
    const body = {
      name,
      lastName,
      address,
      email
    };
    dispatch(flightReservation(body));
  };

  const handleFinishReservation = () => {
    dispatch(removeAllReservation());
    history('/');
    setshowModalReservation(false);
  };

  const modalReservationrender = () => {
    return (
      <Modal
        showModal={showModalReservation}
        setShowModal={() => setshowModalReservation(false)}
        title='Datos de reservación!'
        content={
          <div>
            <p>nombre {reservationData.name} {reservationData.lastName}</p>
            <p>dirección {reservationData.address}</p>
            <p>email {reservationData.email}</p>
            <button onClick={handleFinishReservation}>Aceptar</button>
          </div>
        }
      />
    );
  };

  const modalConfirmation = () => {
    return (
      <Modal
        showModal={showModal}
        setShowModal={() => setShowModal(false)}
        title='Reservación de vuelos'
        content={
          <div>
            <div>
              <label>Nombres</label>
              <input
                type='text'
                name='name'
                onChange={(e) => setName(e.target.value)}
              />
              {errorForm.name && (<p style={{ color: 'red' }}>Campo obligatorio</p>)}
            </div>
            <div>
              <label>Apellidos</label>
              <input
                type='text'
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div>
              <label>Dirección</label>
              <input
                type='text'
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label>Correo electrónico</label>
              <input
                type='text'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button onClick={handleSubmit}>Reservar</button>
            </div>
          </div>
        }
      />
    )
  }

  return (
    <div className={style.homeContainer}>
      <div className={style.reservationTitleContainer}>
        <h2 className={style.titleHome}>Mis reservaciones</h2>
        <button
          disabled={flights.length > 0 ? false : true}
          className={flights.length > 0 ? style.btn : style.btnDisable}
          onClick={() => dispatch(removeAllReservation())}
        >
          Eliminar todos
        </button>
      </div>
      {flights.length <= 0 && (
        <div className={style.notFoundContainer}>
          <h4>Aun no tienes reservaciones</h4>
          <button
            onClick={() => history('/')}
            className={style.btnGoHome}
          >
            Hacer una reservación
          </button>
        </div>
      )}
      <ScheduleList reservation />
      {flights.length > 0 && (
        <Totalpayment flights={flights} changeStateModal={() => setShowModal(true)} />
      )}
      {modalConfirmation()}
      {modalReservationrender()}
    </div>
  );
};

export default Reservation;
