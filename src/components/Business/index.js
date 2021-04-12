import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Business(props) {
  const business = props.business;
  return (
    <Jumbotron>
      {business.businessName}
      <Button> Make Appointment </Button> <Button> Contact Business </Button>
    </Jumbotron>
  );
}
