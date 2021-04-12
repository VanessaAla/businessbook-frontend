import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";
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
  payload: business,
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

export const doRegisterBusiness = (
  businessName,
  businessCategory,
  businessAddress,
  businessCity,
  businessPostalCode,
  imgURL
) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    dispatch(appLoading());

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const data = {
      businessName,
      businessCategory,
      businessAddress,
      businessCity,
      businessPostalCode,
      imgURL,
    };

    try {
      const response = await axios.post(`${apiUrl}/businesses/register`, data, {
        headers: headers,
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
