import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./ViewAppointments.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "../../store/appointments/actions";
import { selectAppointments } from "../../store/appointments/selectors";

export default function ViewAppointments() {
  const dispatch = useDispatch();
  const appointments = useSelector(selectAppointments);

  useEffect(() => {
    dispatch(fetchAppointments(new Date().toISOString().slice(0, 10)));
  }, [dispatch]);

  return (
    <div>
      <div className="heading-container">
        <h1 className="mt-5">Upcoming Appointments</h1>
      </div>
      <div className="appointments-container">
        <div className="appointments-table">
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
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
