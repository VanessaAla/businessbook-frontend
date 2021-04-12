import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "react-bootstrap";

export default function RegisterBusiness() {
  const [businessName, set_businessName] = useState("");
  const [businessCategory, set_businessCategory] = useState("");
  const [businessAddress, set_businessAddress] = useState("");
  const [businessCity, set_businessCity] = useState("");
  const [businessPostalCode, set_businessPostalCode] = useState("");

  function submitForm(event) {
    event.preventDefault();
  }
  //my dispatch action to register the business here?

  return <div>Register Business</div>;
}
