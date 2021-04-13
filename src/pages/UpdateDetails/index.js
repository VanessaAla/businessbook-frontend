import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { selectUser } from "../../store/user/selectors";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateDetails() {
  const [firstName, set_firstName] = useState("");
  const [lastName, set_lastName] = useState("");
  const [email, set_Email] = useState("");
  const [address, set_Address] = useState("");
  const [city, set_City] = useState("");
  const [postalCode, set_PostalCode] = useState("");

  const user = useSelector(selectUser);

  function submitForm(event) {
    event.preventDefault();
  }

  return (
    <Container>
      {" "}
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Update your details</h1>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={firstName}
            onChange={(event) => set_firstName(event.target.value)}
            type="firstName"
            placeholder={user.firstName}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={lastName}
            onChange={(event) => set_lastName(event.target.value)}
            type="lastName"
            placeholder={user.lastName}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => set_Email(event.target.value)}
            type="email"
            placeholder={user.email}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(event) => set_Address(event.target.value)}
            type="address"
            placeholder={user.address}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(event) => set_City(event.target.value)}
            type="city"
            placeholder={user.city}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicPostalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            value={postalCode}
            onChange={(event) => set_PostalCode(event.target.value)}
            type="postalCode"
            placeholder={user.postalCode}
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit your changes
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
