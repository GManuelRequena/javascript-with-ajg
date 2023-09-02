import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const UserRow = ({
  id,
  username,
  email,
  handlerRemoveUser,
  handlerUserSelectedForm,
}) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() =>
              handlerUserSelectedForm({
                id,
                username,
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
  username: PropTypes.string,
  email: PropTypes.string,
  handlerRemoveUser: PropTypes.func,
  handlerUserSelectedForm: PropTypes.func,
};
