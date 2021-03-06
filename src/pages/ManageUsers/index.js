import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./ManageUsers.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  blockUsers,
  unBlockUsers,
} from "../../store/users/actions";
import { selectUsers } from "../../store/users/selectors";

export default function ManageUsers() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const doBlock = (id) => {
    dispatch(blockUsers(id));
  };

  const doUnBlock = (id) => {
    dispatch(unBlockUsers(id));
  };

  return (
    <div>
      <div className="heading-container">
        <h1 className="mt-5">User management</h1>
      </div>
      <div className="users-container">
        <div className="users-table">
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
                    {user.isBlocked === null
                      ? "false"
                      : user.isBlocked.toString()}
                  </td>
                  <td>
                    {user.isBlocked ? (
                      <Button
                        style={{ backgroundColor: "#ffc43d" }}
                        onClick={() => doUnBlock(user.id)}
                      >
                        Unblock
                      </Button>
                    ) : (
                      <Button
                        style={{ backgroundColor: "#6930c3" }}
                        onClick={() => doBlock(user.id)}
                      >
                        block
                      </Button>
                    )}
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
