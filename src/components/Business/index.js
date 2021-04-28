import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Business.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { makeAppointment } from "../../store/appointments/actions";

import { Link } from "react-router-dom";

export default function Business(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [show, set_show] = useState(false);
  const [startDate, set_StartDate] = useState(new Date());

  const handleClose = () => set_show(false);
  const handleShow = () => set_show(true);

  const userLoggedIn = () => {
    return user.token !== null;
  };

  const doMakeAppointment = (event) => {
    event.preventDefault();
    dispatch(makeAppointment(startDate, props.id));
    set_show(false);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img id="image" src={props.image} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.address}</p>
        <div className="search-buttons">
          {userLoggedIn() ? (
            <Button style={{ backgroundColor: "#6930c3" }} onClick={handleShow}>
              Make an appointment
            </Button>
          ) : (
            <Link to="/login" style={{ textAlign: "center" }}>
              <Button style={{ backgroundColor: "#6930c3" }}>
                login to make an appointment
              </Button>
            </Link>
          )}
        </div>
        <div className="search-buttons">
          {userLoggedIn() ? (
            <Button style={{ backgroundColor: "#6930c3" }}>
              {" "}
              Contact Business{" "}
            </Button>
          ) : (
            <Link to="/login" style={{ textAlign: "center" }}>
              <Button style={{ backgroundColor: "#6930c3" }}>
                login to contact business
              </Button>
            </Link>
          )}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please select a date for your appointment:</Modal.Body>
        <DatePicker
          selected={startDate}
          onChange={(date) => set_StartDate(date)}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <div className="save-changes">
            <Button
              style={{ backgroundColor: "#6930c3" }}
              onClick={doMakeAppointment}
            >
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
