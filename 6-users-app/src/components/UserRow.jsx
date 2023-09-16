import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const UserRow = ({ id, userName, email }) => {
  const { handlerRemoveUser, handlerUserSelectedForm } =
    useContext(UserContext);
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{userName}</td>
        <td>{email}</td>
        <td>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() =>
              handlerUserSelectedForm({
                id,
                userName: userName,
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
      </tr>
    </>
  );
};

UserRow.propTypes = {
  id: PropTypes.number,
  userName: PropTypes.string,
  email: PropTypes.string,
  handlerRemoveUser: PropTypes.func,
  handlerUserSelectedForm: PropTypes.func,
};
