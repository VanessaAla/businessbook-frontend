/* eslint-disable import/no-anonymous-default-export */
import { USERS_FETCHED } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      console.log("adding data to state: ", action);
      return [...action.payload];
    default:
      return state;
  }
};
