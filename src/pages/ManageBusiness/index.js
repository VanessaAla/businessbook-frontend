import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBusinesses,
  deleteBusiness,
} from "../../store/businesses/actions";
import { selectBusinesses } from "../../store/businesses/selectors";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function ManageBusiness() {
  const dispatch = useDispatch();
  const businesses = useSelector(selectBusinesses);

  useEffect(() => {
    dispatch(fetchBusinesses());
  }, [dispatch]);

  const doDeleteBusiness = (id) => {
    console.log("clicked id : ", id);
    dispatch(deleteBusiness(id));
  };

  return (
    <div>
      <Jumbotron>
        <h1>Business management</h1>
      </Jumbotron>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((business, index) => (
            <tr key={index}>
              <td>{business.businessName}</td>
              <td>{business.businessCategory}</td>

              <td>
                <Button onClick={() => doDeleteBusiness(business.id)}>
                  Cancel
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
