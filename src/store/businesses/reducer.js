/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_BUSINESSES_SUCCESS,
  REGISTER_BUSINESS_SUCCESS,
  BUSINESS_DELETE,
  CLEAR_BUSINESSES,
} from "./actions";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESSES_SUCCESS:
      return [...action.payload];
    case REGISTER_BUSINESS_SUCCESS:
      return state;
    case BUSINESS_DELETE:
      return state.filter(
        (business) => business.id !== parseInt(action.payload)
      );
    case CLEAR_BUSINESSES:
      return action.payload;
    default:
      return state;
  }
};
