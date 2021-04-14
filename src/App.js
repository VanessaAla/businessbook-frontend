import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SearchBusiness from "./pages/SearchBusiness";
import RegisterBusiness from "./pages/RegisterBusiness";
import ManageUsers from "./pages/ManageUsers";
import ManageBusiness from "./pages/ManageBusiness";
import UpdateDetails from "./pages/UpdateDetails";
import ViewAppointments from "./pages/ViewAppointments";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={SearchBusiness} />

        <Route path="/businesses/register" component={RegisterBusiness} />
        <Route path="/manage-users" component={ManageUsers} />
        <Route path="/manage-business" component={ManageBusiness} />
        <Route path="/update-details" component={UpdateDetails} />
        <Route path="/view-appointments" component={ViewAppointments} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
