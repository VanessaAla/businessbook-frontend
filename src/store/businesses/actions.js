import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage,
  showMessageWithTimeout,
} from "../appState/actions";

export const FETCH_BUSINESSES_SUCCESS = "FETCH_BUSINESSES_SUCCESS";
export const REGISTER_BUSINESS_SUCCESS = "REGISTER_BUSINESS_SUCCESS";

export const fetchBusinessesSuccess = (businesses) => ({
  type: FETCH_BUSINESSES_SUCCESS,
  payload: businesses,
});

export const registerBusinessSuccess = (business) => ({
  type: REGISTER_BUSINESS_SUCCESS,
  payload: business, //maybe id here
});

export const fetchBusinesses = (category, city) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `${apiUrl}/businesses?category=${category}&city=${city}`
    );

    console.log("response: ", response.data);
    dispatch(fetchBusinessesSuccess(response.data.businesses));
  };
};

export const registerBusiness = (
  businessName,
  businessCategory,
  businessAddress,
  businessCity,
  businessPostalCode
) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/register`, {
        //check the path here with the backend
        businessName,
        businessCategory,
        businessAddress,
        businessCity,
        businessPostalCode,
      });

      dispatch(registerBusinessSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "business registered"));
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
