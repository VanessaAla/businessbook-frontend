/* eslint-disable import/no-anonymous-default-export */
import { APPOINTMENT_SUCCESS, APPOINTMENTS_FETCHED } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case APPOINTMENT_SUCCESS:
      return state.map((appointment) => {
        if (appointment.id !== action.payload.id) {
          return appointment;
        }
        return action.payload;
      });
    case APPOINTMENTS_FETCHED:
      return [...action.payload];
    default:
      return state;
  }
};
