/* eslint-disable import/no-anonymous-default-export */
import { USERS_FETCHED } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      //add a c.log here to check if data is added to state
      return [...action.payload];
    default:
      return state;
  }
};
