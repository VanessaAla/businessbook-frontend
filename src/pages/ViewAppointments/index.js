import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "../../store/appointments/actions";
import { selectAppointments } from "../../store/appointments/selectors";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";

export default function ViewAppointments() {
  const dispatch = useDispatch();
  const appointments = useSelector(selectAppointments);

  useEffect(() => {
    dispatch(fetchAppointments(new Date().toISOString().slice(0, 10)));
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>Upcoming Appointments</h1>
      </Jumbotron>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Business Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.date}</td>
              <td>{appointment.business.businessName}</td>
              <td>{appointment.status}</td>

              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
