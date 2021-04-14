import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";

export default function ViewAppointments() {
  return (
    <div>
      <Jumbotron>
        <h1>Appointments List</h1>
      </Jumbotron>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Business</th>
            <th>Status</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
}
