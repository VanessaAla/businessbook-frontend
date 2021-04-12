import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUser, selectToken } from "../user/selectors";

export const USERS_FETCHED = "USERS_FETCHED";
export const USERS_BLOCKED = "USERS_BLOCKED";
export const USERS_UNBLOCKED = "USERS_UNBLOCKED";

const usersFetched = (users) => ({
  type: USERS_FETCHED,
  payload: users,
});

export const usersBlocked = (user) => ({
  type: USERS_BLOCKED,
  payload: user,
});

export const usersUnBlocked = (user) => ({
  type: USERS_UNBLOCKED,
  payload: user,
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
    const { token } = selectToken(getState());

    try {
      const response = await axios.put(
        `${apiUrl}/users`,
        {
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("user blocked?", response);
      dispatch(usersBlocked(response.data.user));
    } catch (e) {
      console.error(e);
    }
  };
};
export const unBlockUsers = (userId) => {
  return async (dispatch, getState) => {
    const { token } = selectToken(getState());

    try {
      const response = await axios.put(
        `${apiUrl}/users/unblock`,
        {
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("user unblocked?", response);
      dispatch(usersUnBlocked(response.data.user));
    } catch (e) {
      console.error(e);
    }
  };
};
