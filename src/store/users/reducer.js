/* eslint-disable import/no-anonymous-default-export */
import { USERS_FETCHED, USERS_BLOCKED, USERS_UNBLOCKED } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      return [...action.payload];

    case USERS_BLOCKED:
      return state.map((user) => {
        if (user.id !== action.payload.id) {
          return user;
        }

        user.isBlocked = true;

        return user;
      });
    case USERS_UNBLOCKED:
      return state.map((user) => {
        if (user.id !== action.payload.id) {
          return user;
        }

        user.isBlocked = false;

        return user;
      });

    default:
      return state;
  }
};
