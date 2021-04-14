import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import NavBarItem from "./NavBarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  const userLoggedIn = () => {
    return user.token !== null;
  };

  const userAdminLoggedIn = () => {
    return user.isAdmin === true;
  };

  return (
    <Navbar bg="light" expand="lg">
      {!userAdminLoggedIn() ? (
        <Navbar.Brand as={NavLink} to="/">
          BusinessBook
        </Navbar.Brand>
      ) : null}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          {userLoggedIn() && !userAdminLoggedIn() ? (
            <NavBarItem
              path="/businesses/register"
              linkText="RegisterBusiness"
            />
          ) : null}
          {userLoggedIn() ? (
            <NavBarItem path="/update-details" linkText="UpdateDetails" />
          ) : null}
          {userLoggedIn() && !userAdminLoggedIn() ? (
            <NavBarItem path="/view-appointments" linkText="ViewAppointments" />
          ) : null}
          {userAdminLoggedIn() ? (
            <NavBarItem path="/manage-users" linkText="Manage Users" />
          ) : null}
          {userAdminLoggedIn() ? (
            <NavBarItem path="/manage-business" linkText="Manage Business" />
          ) : null}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
