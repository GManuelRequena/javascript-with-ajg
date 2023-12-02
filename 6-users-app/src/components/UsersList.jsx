import PropTypes from "prop-types";
import { UserRow } from "./UserRow";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../auth/context/AuthContext";

export const UsersList = () => {
  const { users } = useContext(UserContext);
  const { login } = useContext(AuthContext);
  return (
    <table className="table table-hover table-stripped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          {!login.isAdmin || (
            <>
              <th>Update</th>
              <th>Update route</th>
              <th>Delete</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, username, email }) => (
          <UserRow key={id} id={id} username={username} email={email} />
        ))}
      </tbody>
    </table>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      password: PropTypes.string,
      email: PropTypes.string,
    })
  ),
  handlerRemoveUser: PropTypes.func,
  handlerUserSelectedForm: PropTypes.func,
};
