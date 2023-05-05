import {
  GET_JWELLERY_ERROR,
  GET_JWELLERY_REQUEST,
  GET_JWELLERY_SUCCESS,
} from "./actionType";

const IntialState = {
  jwellery: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = IntialState, { type, payload }) => {
  switch (type) {
    case GET_JWELLERY_REQUEST:
      return { ...state, isLoading: true };
    case GET_JWELLERY_SUCCESS:
      return { ...state, isLoading: false, jwellery: payload };
    case GET_JWELLERY_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
