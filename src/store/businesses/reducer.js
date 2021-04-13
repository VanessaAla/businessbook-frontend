/* eslint-disable import/no-anonymous-default-export */
import { FETCH_BUSINESSES_SUCCESS } from "./actions";
import { REGISTER_BUSINESS_SUCCESS } from "./actions";
import { BUSINESS_DELETE } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESSES_SUCCESS:
      return [...action.payload];
    case REGISTER_BUSINESS_SUCCESS:
      return [action.payload];

    case BUSINESS_DELETE: //check your logic with filter here after implementing db also
      return state.map((business) => {
        if (business.id !== action.payload.id) {
          return business;
        }
        return business;
      });
    default:
      return state;
  }
};
