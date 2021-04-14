import { apiUrl } from "../../config/constants";
import { selectToken, selectUser } from "../user/selectors";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage,
  showMessageWithTimeout,
} from "../appState/actions";

export const APPOINTMENT_SUCCESS = "APPOINTMENT_SUCCESS";

export const appointmentSuccess = (appointment) => ({
  type: APPOINTMENT_SUCCESS,
  payload: appointment,
});

export const makeAppointment = (date, businessId) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    const response = await axios.post(
      `${apiUrl}/appointments/${businessId}/appointment`, //check here your path with the backend
      {
        date, //check here for today's date
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(
      showMessageWithTimeout("success", false, response.data.message, 3000)
    );
    dispatch(appointmentSuccess(response.data));
    dispatch(showMessageWithTimeout("success", true, "appointment made"));
    dispatch(appDoneLoading()); //try catch error logic here later
  };
};
