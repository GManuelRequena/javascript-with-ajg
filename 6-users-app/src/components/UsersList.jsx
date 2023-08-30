import PropTypes from "prop-types";
import { UserRow } from "./UserRow";

export const UsersList = ({
  users,
  handlerRemoveUser,
  handlerUserSelectedForm,
}) => {
  return (
    <table className="table table-hover table-stripped">
      <thead>
        <tr>
          <th>ID</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, username, email }) => (
          <UserRow
            key={id}
            id={id}
            username={username}
            email={email}
            handlerRemoveUser={handlerRemoveUser}
            handlerUserSelectedForm={handlerUserSelectedForm}
          />
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
