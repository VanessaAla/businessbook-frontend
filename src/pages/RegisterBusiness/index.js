import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { doRegisterBusiness } from "../../store/businesses/actions";
//import { selectBusinesses } from "../../store/businesses/selectors";
import { useDispatch } from "react-redux";
//import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function RegisterBusiness() {
  const [businessName, set_businessName] = useState("");
  const [businessCategory, set_businessCategory] = useState("");
  const [businessAddress, set_businessAddress] = useState("");
  const [businessCity, set_businessCity] = useState("");
  const [businessPostalCode, set_businessPostalCode] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();

    dispatch(
      doRegisterBusiness(
        businessName,
        businessCategory,
        businessAddress,
        businessCity,
        businessPostalCode
      )
    );
  }
  //my dispatch action to register the business here?

  return (
    <Container>
      {" "}
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Register Business</h1>
        <Form.Group controlId="formBasicBusinessName">
          <Form.Label>Business Name</Form.Label>
          <Form.Control
            value={businessName}
            onChange={(event) => set_businessName(event.target.value)}
            type="businessName"
            placeholder="Enter Business Name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicBusinessCategory">
          <Form.Label>Business Category</Form.Label>
          <Form.Control
            value={businessCategory}
            onChange={(event) => set_businessCategory(event.target.value)}
            type="businessCategory"
            placeholder="Select Business Category"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicBusinessAddress">
          <Form.Label>Business Address</Form.Label>
          <Form.Control
            value={businessAddress}
            onChange={(event) => set_businessAddress(event.target.value)}
            type="businessAddress"
            placeholder="Enter Business Address"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicBusinessCity">
          <Form.Label>Business City</Form.Label>
          <Form.Control
            value={businessCity}
            onChange={(event) => set_businessCity(event.target.value)}
            type="businessCity"
            placeholder="Enter Business City"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicBusinessPostalCode">
          <Form.Label>Business Postal Code</Form.Label>
          <Form.Control
            value={businessPostalCode}
            onChange={(event) => set_businessPostalCode(event.target.value)}
            type="businessPostalCode"
            placeholder="Enter Business Postal Code"
            required
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Register
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}