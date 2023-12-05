import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

export const UserRow = ({ id, username, email, admin }) => {
  const { login } = useAuth();
  const { handlerRemoveUser, handlerUserSelectedForm } = useUsers();
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        {!login.isAdmin || (
          <>
            <td>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() =>
                  handlerUserSelectedForm({
                    id,
                    username: username,
                    email,
                    admin,
                  })
                }
              >
                Update
              </button>
            </td>
            <td>
              <NavLink
                className={"btn btn-secondary btn-sm"}
                to={"/users/edit/" + id}
              >
                {" "}
                Update Route{" "}
              </NavLink>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => handlerRemoveUser(id)}
              >
                Delete
              </button>
            </td>
          </>
        )}
      </tr>
    </>
  );
};

UserRow.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string,
  email: PropTypes.string,
  admin: PropTypes.bool,
  handlerRemoveUser: PropTypes.func,
  handlerUserSelectedForm: PropTypes.func,
};
