import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

import "./Business.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { makeAppointment } from "../../store/appointments/actions";

import { Link } from "react-router-dom";

export default function Business(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const userLoggedIn = () => {
    return user.firstName !== null;
  };

  const doMakeAppointment = (event) => {
    event.preventDefault();
    dispatch(makeAppointment(new Date(), props.id));
  };

  return (
    <Jumbotron>
      {props.name}
      <img src={props.image} alt="..." className="img-thumbnail" />
      <div>
        {userLoggedIn() ? (
          <Button onClick={doMakeAppointment}>Make an appointment</Button>
        ) : (
          <Link to="/login" style={{ textAlign: "center" }}>
            <Button>login to make an appointment</Button>
          </Link>
        )}
      </div>{" "}
      <Button> Contact Business </Button>
    </Jumbotron>
  );
}
