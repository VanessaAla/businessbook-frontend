import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Business(props) {
  return (
    <Jumbotron>
      {props.name}
      <Button> Make Appointment </Button> <Button> Contact Business </Button>
    </Jumbotron>
  );
}
