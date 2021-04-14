/* eslint-disable import/no-anonymous-default-export */
import { APPOINTMENT_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case APPOINTMENT_SUCCESS: {
      console.log("payload", action.payload);
      return action.payload; //here use map to get appointments?
    }
    default:
      return state;
  }
};
