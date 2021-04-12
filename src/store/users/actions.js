import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";

export const USERS_FETCHED = "USERS_FETCHED";
export const USERS_BLOCKED = "USERS_BLOCKED";

const usersFetched = (users) => ({
  type: USERS_FETCHED,
  payload: users,
});

export const usersBlocked = (users) => ({
  type: USERS_BLOCKED,
  payload: users.userId,
});

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());

    const response = await axios.get(`${apiUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(usersFetched(response.data.allUsers.rows));
  };
};

export const blockUsers = (userId) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());

    try {
      const response = await axios.delete(`${apiUrl}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("user deleted?", response);
      dispatch(usersBlocked(response.data.userId));
    } catch (e) {
      console.error(e);
    }
  };
};
