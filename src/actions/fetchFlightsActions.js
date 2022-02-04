export const LOADING_FETCH_FLIGHTS = 'LOADING_FETCH_FLIGHTS';
export const CLOSE_MODALS_FETCH_FLIGHTS = 'CLOSE_MODALS_FETCH_FLIGHTS';
export const FETCH_FLIGHTS_SUCCESS = 'FETCH_FLIGHTS_SUCCESS';
export const FETCH_FLIGHTS_ERROR = 'FETCH_FLIGHTS_ERROR';

const loading = () => ({
  type: LOADING_FETCH_FLIGHTS,
});

const closeModals = () => ({
  type: CLOSE_MODALS_FETCH_FLIGHTS,
});

export const fetchFlights = (data) => {
  return async (dispacth) => {
    try {
      dispacth(loading());
    } catch (error) {
      console.log('ERROR IN FETCH FLIGHTS => ', error);
      dispacth(fetchFlightsError(error));
    }
  };
}

const fetchFlightsSuccess = (data) => ({
  type: FETCH_FLIGHTS_SUCCESS,
  payload: data
});

const fetchFlightsError = (error) => ({
  type: FETCH_FLIGHTS_ERROR,
  payload: error
});