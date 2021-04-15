import React from "react";
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
    return user.token !== null;
  };

  const doMakeAppointment = (event) => {
    event.preventDefault();
    dispatch(makeAppointment(new Date(), props.id));
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img id="image" src={props.image} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.address}</p>
        <div className="search-buttons">
          {userLoggedIn() ? (
            <Button onClick={doMakeAppointment}>Make an appointment</Button>
          ) : (
            <Link to="/login" style={{ textAlign: "center" }}>
              <Button>login to make an appointment</Button>
            </Link>
          )}
        </div>
        <div className="search-buttons">
          {userLoggedIn() ? (
            <Button> Contact Business </Button>
          ) : (
            <Link to="/login" style={{ textAlign: "center" }}>
              <Button>login to contact business</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
