export const LOADING_FLIGHT_SELECT = 'LOADING_FLIGHT_SELECT';
export const CLOSE_MODALS__FLIGHT_SELECT = 'CLOSE_MODALS__FLIGHT_SELECT';
export const SELECT_ORIGIN_FLIGHT_SELECT_SUCCESS = 'SELECT_ORIGIN_FLIGHT_SELECT_SUCCESS';
export const SELECT_DESTINY_FLIGHT_SELECT_SUCCESS = 'SELECT_DESTINY_FLIGHT_SELECT_SUCCESS';


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
