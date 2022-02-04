import {
  CLOSE_MODALS__FLIGHT_SELECT,
  LOADING_FLIGHT_SELECT,
  SELECT_DESTINY_FLIGHT_SELECT_SUCCESS,
  SELECT_ORIGIN_FLIGHT_SELECT_SUCCESS,
} from "actions/flightSelectedActions";

const initialState = {
  isLoading: false,
  origin: '',
  destiny: '',
  passengers: 0,
  price: '',
  schedule: '',
  modalSuccess: {
    show: false,
    message: ''
  },
  modalError: {
    show: false,
    message: ''
  },
};

const flightSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DESTINY_FLIGHT_SELECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        destiny: action.payload

      };
    case SELECT_ORIGIN_FLIGHT_SELECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        origin: action.payload
      };
    case LOADING_FLIGHT_SELECT:
      return {
        ...state,
        isLoading: true,
      };
    case CLOSE_MODALS__FLIGHT_SELECT:
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

export default flightSelectedReducer;