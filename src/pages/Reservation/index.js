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

  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [emailError, setEmailError] = useState(false);


  useEffect(() => {
    if (reservationData?.name) {
      setShowModal(false);
      setshowModalReservation(true);
    }
  }, [reservationData]);


  const handleSubmit = () => {
    if (!name) {
      setNameError(true);
    } else setNameError(false);
    if (!lastName) {
      setLastNameError(true);
    } else setLastNameError(false);
    if (!address) {
      setAddressError(true);
    } else setAddressError(false);
    if (!email) {
      setEmailError(true);
    } else setEmailError(false);
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
        title='Datos de reservación'
        content={
          <div>
            <p className={style.textNameTitle}>Nombre</p>
            <p className={style.textName}>{reservationData.name} {reservationData.lastName}</p>
            <p className={style.textNameTitle}>dirección</p>
            <p className={style.textName}>{reservationData.address}</p>
            <p className={style.textNameTitle}>email</p>
            <p className={style.textName}>{reservationData.email}</p>
            <button
              onClick={handleFinishReservation}
              className={style.btnConfirm}
            >
              Aceptar
            </button>
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
          <>
            <div className={style.inputContainer}>
              <label className={style.inputLabel}>Nombres</label>
              <input
                type='text'
                className={style.input}
                name='name'
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && (<p style={{ color: 'red' }}>Campo obligatorio</p>)}
            </div>
            <div className={style.inputContainer}>
              <label className={style.inputLabel}>Apellidos</label>
              <input
                type='text'
                className={style.input}
                onChange={(e) => setlastName(e.target.value)}
              />
              {lastNameError && (<p style={{ color: 'red' }}>Campo obligatorio</p>)}
            </div>
            <div className={style.inputContainer}>
              <label className={style.inputLabel}>Dirección</label>
              <input
                type='text'
                className={style.input}
                onChange={(e) => setAddress(e.target.value)}
              />
              {addressError && (<p style={{ color: 'red' }}>Campo obligatorio</p>)}
            </div>
            <div className={style.inputContainer}>
              <label className={style.inputLabel}>Correo electrónico</label>
              <input
                type='text'
                className={style.input}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (<p style={{ color: 'red' }}>Campo obligatorio</p>)}
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className={style.btnConfirm}
              >
                Reservar
              </button>
            </div>
          </>
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
