/* eslint-disable import/no-anonymous-default-export */
import { USERS_FETCHED, USERS_BLOCKED } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      console.log("adding data to state: ", action);
      return [...action.payload];

    case USERS_BLOCKED:
      return state.filter((users) => users.id !== parseInt(action.payload));

    default:
      return state;
  }
};
