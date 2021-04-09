import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [firstName, set_firstName] = useState("");
  const [lastName, set_lastName] = useState("");
  const [email, set_Email] = useState("");
  const [password, set_Password] = useState("");
  const [address, set_Address] = useState("");
  const [city, set_City] = useState("");
  const [postalCode, set_PostalCode] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(
      signUp(firstName, lastName, email, password, address, city, postalCode)
    );

    set_firstName("");
    set_lastName("");
    set_Email("");
    set_Password("");
    set_Address("");
    set_City("");
    set_PostalCode("");
  }

  return (
    <Container>
      {" "}
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={firstName}
            onChange={(event) => set_firstName(event.target.value)}
            type="firstName"
            placeholder="Enter First Name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={lastName}
            onChange={(event) => set_lastName(event.target.value)}
            type="lastName"
            placeholder="Enter Last Name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => set_Email(event.target.value)}
            type="email"
            placeholder="name@example.com"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => set_Password(event.target.value)}
            type="password"
            placeholder="Enter password"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(event) => set_Address(event.target.value)}
            type="address"
            placeholder="Enter Address"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(event) => set_City(event.target.value)}
            type="city"
            placeholder="Enter City"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPostalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            value={postalCode}
            onChange={(event) => set_PostalCode(event.target.value)}
            type="postalCode"
            placeholder="Enter Postal Code"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to="/" style={{ textAlign: "center" }}>
          Click here to log in
        </Link>
      </Form>
    </Container>
  );
}
