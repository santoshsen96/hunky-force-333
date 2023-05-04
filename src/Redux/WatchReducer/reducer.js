import {
  GET_WACTH_ERROR,
  GET_WACTH_REQUEST,
  GET_WACTH_SUCCESS,
} from "./actionType";

const IntialState = {
  watches: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = IntialState, { type, payload }) => {
  switch (type) {
    case GET_WACTH_REQUEST:
      return { ...state, isLoading: true };
    case GET_WACTH_SUCCESS:
      return { ...state, isLoading: false, watches: payload };
    case GET_WACTH_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
