import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../auth/context/AuthContext";

export const UserRow = ({ id, username, email }) => {
  const { login } = useContext(AuthContext);
  const { handlerRemoveUser, handlerUserSelectedForm } =
    useContext(UserContext);
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
  handlerRemoveUser: PropTypes.func,
  handlerUserSelectedForm: PropTypes.func,
};
