export const LOADING_FLIGHT_SELECT = 'LOADING_FLIGHT_SELECT';
export const CLOSE_MODALS__FLIGHT_SELECT = 'CLOSE_MODALS__FLIGHT_SELECT';
export const SELECT_ORIGIN_FLIGHT_SELECT_SUCCESS = 'SELECT_ORIGIN_FLIGHT_SELECT_SUCCESS';
export const SELECT_DESTINY_FLIGHT_SELECT_SUCCESS = 'SELECT_DESTINY_FLIGHT_SELECT_SUCCESS';
export const SELECT_FLIGHT = 'SELECT_FLIGHT';
export const SELECT_FLIGHT_REMOVE = 'SELECT_FLIGHT_REMOVE';
export const SELECT_FLIGHT_RESERVATION = 'SELECT_FLIGHT_RESERVATION';
export const SELECT_FLIGHT_REMOVE_ALL = 'SELECT_FLIGHT_REMOVE_ALL';

const loading = () => ({
  type: LOADING_FLIGHT_SELECT,
});

const closeModals = () => ({
  type: CLOSE_MODALS__FLIGHT_SELECT,
});

export const selectOrigin = (origin) => ({
  type: SELECT_ORIGIN_FLIGHT_SELECT_SUCCESS,
  payload: origin
});

export const selectDestiny = (destiny) => ({
  type: SELECT_DESTINY_FLIGHT_SELECT_SUCCESS,
  payload: destiny
});

export const selectFlight = (flight) => ({
  type: SELECT_FLIGHT,
  payload: flight
});

export const removeFlight = (item) => ({
  type: SELECT_FLIGHT_REMOVE,
  payload: item
});

export const flightReservation = (data) => ({
  type: SELECT_FLIGHT_RESERVATION,
  payload: data
});

export const removeAllReservation = () => ({
  type: SELECT_FLIGHT_REMOVE_ALL
});