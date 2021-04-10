import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_BUSINESSES_SUCCESS = "FETCH_BUSINESSES_SUCCESS";

export const fetchBusinessesSuccess = (businesses) => ({
  type: FETCH_BUSINESSES_SUCCESS,
  payload: businesses,
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
