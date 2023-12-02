import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm = ({ userSelected, handlerCloseForm }) => {
  const { initialUserForm, handlerAddUser, errors } = useContext(UserContext);

  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  const [showPassword, setShowPassword] = useState(false);

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
    // if (!username || (!password && id === 0) || !email) {
    //   Swal.fire("Validation Error", "Complete all inputs", "error");
    //   return;
    // }
    // if (!email.includes("@")) {
    //   Swal.fire("Validation Error", "Email is not correct", "error");
    //   return;
    // }
    handlerAddUser(userForm);
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
      <p className="text-danger">{errors?.username}</p>
      {id > 0 || (
        <div className="input-group my-2 w-75">
          <input
            className="form-control"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={onInputChange}
          />
          <p className="text-danger">{errors?.password}</p>
          <div className="input-group-append mx-1">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      )}
      <input
        className="form-control my-3 w-75"
        placeholder="E-Mail"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <p className="text-danger">{errors?.email}</p>
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
