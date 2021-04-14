import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { logOut } from "../../store/user/actions";
import { clearBusinesses } from "../../store/businesses/actions";
import { selectUser } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const history = useHistory();

  const handleClick = () => {
    dispatch(logOut());
    dispatch(clearBusinesses());
    history.push("/login");
  };

  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.email}</Nav.Item>
      <Button onClick={handleClick}>Logout</Button>
    </>
  );
}
