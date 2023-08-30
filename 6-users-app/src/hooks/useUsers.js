import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

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

  const handlerAddUser = (user) => {
    let type;

    if (user.id === 0) {
      type = "addUser";
    } else {
      type = "updateUser";
    }
    dispatch({
      type: type,
      payload: user,
    });

    Swal.fire(
      user.id === 0 ? "Created" : "Updated",
      user.id === 0
        ? "The user has been created successfully"
        : "The user has been modified successfully",
      "success"
    );
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
    setUserSelected({ ...user });
  };

  return {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
  };
};
