import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

export const UserForm = ({
  handlerAddUser,
  initialUserForm,
  userSelected,
  handlerCloseForm,
}) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm({
      ...userSelected,
      password: "",
    });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || (!password && id === 0) || !email) {
      Swal.fire("Validation Error", "Complete all inputs", "error");
      return;
    }
    if (!email.includes("@")) {
      Swal.fire("Validation Error", "Email is not correct", "error");
      return;
    }
    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserForm);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {id > 0 || (
        <input
          className="form-control my-3 w-75"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      )}
      <input
        className="form-control my-3 w-75"
        placeholder="E-Mail"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-primary" type="submit">
        {id > 0 ? "Edit" : "Create"}
      </button>
      {!handlerCloseForm || (
        <button
          className="btn btn-primary mx-2"
          type="button"
          onClick={() => onCloseForm()}
        >
          Close
        </button>
      )}
    </form>
  );
};

UserForm.propTypes = {
  initialUserForm: PropTypes.object,
  handlerAddUser: PropTypes.func,
  userSelected: PropTypes.object,
  handlerCloseForm: PropTypes.func,
};
