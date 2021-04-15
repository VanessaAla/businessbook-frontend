import React, { useEffect } from "react";
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
      <div className="heading-container">
        <h1 className="mt-5">Business management</h1>
      </div>
      <div className="business-container">
        <div className="business-table">
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
                    <Button
                      style={{ backgroundColor: "#6930c3" }}
                      onClick={() => doDeleteBusiness(business.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
