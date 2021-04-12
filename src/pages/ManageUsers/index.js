import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users/actions";
import { selectUsers } from "../../store/users/selectors";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function ManageUsers() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const doBlock = (id) => {
    console.log("block user : ", id);
  };

  const doUnBlock = (id) => {
    console.log("unblock user : ", id);
  };

  return (
    <div>
      <Jumbotron>
        <h1>User management</h1>
      </Jumbotron>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>isBlocked</th>
            <th>Block?</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>

              <td>
                {user.isBlocked === null ? "false" : user.isBlocked.toString()}
              </td>
              <td>
                {user.isBlocked ? (
                  <Button onClick={() => doUnBlock(user.id)}>Unblock</Button>
                ) : (
                  <Button onClick={() => doBlock(user.id)}>block</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
