import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { logOut } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => dispatch(logOut());

  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.email}</Nav.Item>
      <Button onClick={handleClick}>Logout</Button>
    </>
  );
}
