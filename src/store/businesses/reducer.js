/* eslint-disable import/no-anonymous-default-export */
import { FETCH_BUSINESSES_SUCCESS } from "./actions";
import { REGISTER_BUSINESS_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESSES_SUCCESS:
      return [...action.payload];
    case REGISTER_BUSINESS_SUCCESS:
      return [action.payload]; //check this part here with the action, to get one business

    default:
      return state;
  }
};
