import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { makeAppointment } from "../../store/appointments/actions";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Business(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const userLoggedIn = () => {
    return user.name !== null;
  };

  const doMakeAppointment = (event) => {
    event.preventDefault();
    dispatch(makeAppointment(props.date, props.id));
  };

  return (
    <Jumbotron>
      {props.name}
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
