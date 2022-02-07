import axios from "axios";

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
      const URL = 'https://server-test-schedule.herokuapp.com/schedules';
      dispacth(loading());
      const getData = await axios.get(URL);
      console.log('DATA', getData);
      const { data } = getData.data;
      console.log('data 2', data);
      dispacth(fetchFlightsSuccess(data));
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