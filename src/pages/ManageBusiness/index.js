import React, { useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./ManageBusiness.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllBusinesses,
  deleteBusiness,
} from "../../store/businesses/actions";
import { selectBusinesses } from "../../store/businesses/selectors";

export default function ManageBusiness() {
  const dispatch = useDispatch();
  const businesses = useSelector(selectBusinesses);

  useEffect(() => {
    dispatch(fetchAllBusinesses());
  }, [dispatch]);

  const doDeleteBusiness = (id) => {
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
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
