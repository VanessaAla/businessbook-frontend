import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { doRegisterBusiness } from "../../store/businesses/actions";
import { useDispatch } from "react-redux";

import { Col } from "react-bootstrap";
import { setMessage } from "../../store/appState/actions";

export default function RegisterBusiness() {
  const [businessName, set_businessName] = useState("");
  const [businessCategory, set_businessCategory] = useState("");
  const [businessAddress, set_businessAddress] = useState("");
  const [businessCity, set_businessCity] = useState("");
  const [businessPostalCode, set_businessPostalCode] = useState("");
  const [imgURL, set_imgURL] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();

    if (
      businessCity === "" ||
      businessCity === undefined ||
      businessCity === "Please Select a City"
    ) {
      dispatch(setMessage("danger", true, "Please select a city"));
      return;
    }

    dispatch(
      doRegisterBusiness(
        businessName,
        businessCategory,
        businessAddress,
        businessCity,
        businessPostalCode,
        imgURL
      )
    );
  }

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
            required={true}
          />
        </Form.Group>
        <Form.Group controlId="formBasicBusinessCategory">
          <Form.Label>Business Category</Form.Label>
          <Form.Control
            as="select"
            size="sm"
            custom
            onChange={(event) => set_businessCategory(event.target.value)}
            required={true}
          >
            <option>Please Select a Category</option>
            <option>spa</option>
            <option>gardening</option>
            <option>cleaning</option>
            <option>catering</option>
            <option>pet sitters</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicBusinessAddress">
          <Form.Label>Business Address</Form.Label>
          <Form.Control
            value={businessAddress}
            onChange={(event) => set_businessAddress(event.target.value)}
            type="businessAddress"
            placeholder="Enter Business Address"
            required={true}
          />
        </Form.Group>
        <Form.Group controlId="formBasicBusinessCity">
          <Form.Label>Business City</Form.Label>
          <Form.Control
            as="select"
            size="sm"
            custom
            onChange={(event) => set_businessCity(event.target.value)}
            required={true}
          >
            <option>Please Select a City</option>
            <option>Utrecht</option>
            <option>Amsterdam</option>
            <option>Rotterdam</option>
            <option>Eindhoven</option>
            <option>Arnhem</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicBusinessPostalCode">
          <Form.Label>Business Postal Code</Form.Label>
          <Form.Control
            value={businessPostalCode}
            onChange={(event) => set_businessPostalCode(event.target.value)}
            type="businessPostalCode"
            placeholder="Enter Business Postal Code"
            required={true}
          />
        </Form.Group>
        <Form.Group controlId="formBasicImgURL">
          <Form.Label>Img Url</Form.Label>
          <Form.Control
            value={imgURL}
            onChange={(event) => set_imgURL(event.target.value)}
            type="imgURL"
            placeholder="Enter Img URL"
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
