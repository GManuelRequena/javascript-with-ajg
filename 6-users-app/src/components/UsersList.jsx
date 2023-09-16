import PropTypes from "prop-types";
import { UserRow } from "./UserRow";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const UsersList = () => {
  const { users } = useContext(UserContext);
  return (
    <table className="table table-hover table-stripped">
      <thead>
        <tr>
          <th>ID</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Update</th>
          <th>Update route</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, userName, email }) => (
          <UserRow key={id} id={id} userName={userName} email={email} />
        ))}
      </tbody>
    </table>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      userName: PropTypes.string,
      password: PropTypes.string,
      email: PropTypes.string,
    })
  ),
  handlerRemoveUser: PropTypes.func,
  handlerUserSelectedForm: PropTypes.func,
};
