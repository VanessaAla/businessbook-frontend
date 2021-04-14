import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import businesses from "./businesses/reducer";
import users from "./users/reducer";
import appointments from "./appointments/reducer";

export default combineReducers({
  appState,
  user,
  businesses,
  users,
  appointments,
});
