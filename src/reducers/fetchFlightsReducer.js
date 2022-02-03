import {
  CLOSE_MODALS_FETCH_FLIGHTS,
  FETCH_FLIGHTS_ERROR,
  FETCH_FLIGHTS_SUCCESS,
  LOADING_FETCH_FLIGHTS,
} from "actions/fetchFlightsActions";

const initialState = {
  isLoading: false,
  flights: [],
  modalSuccess: {
    show: false,
    message: ''
  },
  modalError: {
    show: false,
    message: ''
  },
}

const fetchFlightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS_SUCCESS:
    case LOADING_FETCH_FLIGHTS:
      return {
        ...state,
        isLoading: true,
      };
    case CLOSE_MODALS_FETCH_FLIGHTS:
      return {
        ...state,
        isLoading: false,
        modalSuccess: {
          show: false,
          message: ''
        },
        modalError: {
          show: false,
          message: ''
        },
      };
    default:
      return state;
  }
};

export default fetchFlightsReducer;