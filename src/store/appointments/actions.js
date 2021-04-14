import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage,
  showMessageWithTimeout,
} from "../appState/actions";

export const APPOINTMENT_SUCCESS = "APPOINTMENT_SUCCESS";
export const APPOINTMENTS_FETCHED = "APPOINTMENTS_FETCHED";

const appointmentsFetched = (appointments) => ({
  type: APPOINTMENTS_FETCHED,
  payload: appointments,
});

export const appointmentSuccess = (appointment) => ({
  type: APPOINTMENT_SUCCESS,
  payload: appointment,
});

export const fetchAppointments = (date) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());

    const response = await axios.get(`${apiUrl}/appointments?date=${date}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    dispatch(appointmentsFetched(response.data.reservations.rows));
  };
};

export const makeAppointment = (date, businessId) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    dispatch(appLoading());

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `${apiUrl}/appointments/${businessId}/appointment`,
        {
          date,
        },
        {
          headers: headers,
        }
      );
      dispatch(appointmentSuccess(response.data.appointment));
      dispatch(showMessageWithTimeout("success", true, "appointment made"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
