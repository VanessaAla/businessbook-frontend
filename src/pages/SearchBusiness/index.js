import React, { useState } from "react";
import Business from "../../components/Business";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SearchBusiness.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses } from "../../store/businesses/actions";
import { selectBusinesses } from "../../store/businesses/selectors";

export default function SearchBusiness() {
  const dispatch = useDispatch();
  const businesses = useSelector(selectBusinesses);
  const [category, set_Category] = useState("");
  const [city, set_City] = useState("");

  const fetchBusinessForSelectedCriteria = (category, city) => {
    dispatch(fetchBusinesses(category, city));
  };

  return (
    <div>
      <div className="search-fields">
        <Form>
          <h1 className="search-title">BusinessBook</h1>
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Business Category</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              custom
              onChange={(e) => set_Category(e.target.value)}
            >
              <option>Please Select a Category</option>
              <option>spa</option>
              <option>gardening</option>
              <option>cleaning</option>
              <option>catering</option>
              <option>pet sitters</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Business City</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              custom
              onChange={(e) => set_City(e.target.value)}
            >
              <option>Please Select a City</option>
              <option>Utrecht</option>
              <option>Amsterdam</option>
              <option>Rotterdam</option>
              <option>Eindhoven</option>
              <option>Arnhem</option>
            </Form.Control>
          </Form.Group>

          <Button
            style={{ backgroundColor: "#6930c3" }}
            onClick={() => fetchBusinessForSelectedCriteria(category, city)}
          >
            Search
          </Button>
        </Form>
      </div>
      <div className="business-container">
        {businesses.map((business, index) => (
          <div key={index} className="business-card-container">
            <Business
              key={index}
              id={business.id}
              name={business.businessName}
              email={business.businessEmail}
              image={business.imgURL}
              address={business.businessAddress}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
