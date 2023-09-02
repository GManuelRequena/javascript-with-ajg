import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const intialUsers = [
  {
    id: 1,
    username: "ManuReq",
    password: "12345",
    email: "gmanuelrequena@gmail.com",
  },
  {
    id: 2,
    username: "Testing",
    password: "12345",
    email: "testing@email.com",
  },
];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, intialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const navigate = useNavigate();

  const handlerAddUser = (user) => {
    dispatch({
      type: user.id === 0 ? "addUser" : "updateUser",
      payload: user,
    });

    Swal.fire(
      user.id === 0 ? "Created" : "Updated",
      user.id === 0
        ? "The user has been created successfully"
        : "The user has been modified successfully",
      "success"
    );

    handlerCloseForm();

    navigate("/users");
  };

  const handlerRemoveUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "removeUser",
          payload: id,
        });
        Swal.fire("Deleted!", "The user has been deleted.", "success");
      }
    });
  };

  const handlerUserSelectedForm = (user) => {
    setVisibleForm(true);
    setUserSelected({ ...user });
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
  };

  return {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    visibleForm,
    handlerOpenForm,
    handlerCloseForm,
  };
};
