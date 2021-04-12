import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";

export const USERS_FETCHED = "USERS_FETCHED";

const usersFetched = (users) => ({
  type: USERS_FETCHED,
  payload: users,
});

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());

    const response = await axios.get(`${apiUrl}/users/`, {
      //add user router in db and check your path here
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(usersFetched(response));
  };
};
