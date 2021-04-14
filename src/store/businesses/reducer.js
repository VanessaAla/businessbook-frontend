/* eslint-disable import/no-anonymous-default-export */
import { FETCH_BUSINESSES_SUCCESS } from "./actions";
import { REGISTER_BUSINESS_SUCCESS } from "./actions";
import { BUSINESS_DELETE } from "./actions";
import { CLEAR_BUSINESSES } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESSES_SUCCESS:
      return [...action.payload];
    case REGISTER_BUSINESS_SUCCESS:
      return [action.payload];

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
