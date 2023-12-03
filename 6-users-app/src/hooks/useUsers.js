import { useContext, useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { deleteUser, getAllUsers, save, update } from "../services/userService";
import { AuthContext } from "../auth/context/AuthContext";

const intialUsers = [];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
  admin: false,
};

const initialErrors = {
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, intialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();

  const { login, handlerLogout } = useContext(AuthContext);

  const getUsers = async () => {
    try {
      const result = await getAllUsers();
      dispatch({
        type: "loadingUsers",
        payload: result.data,
      });
    } catch (error) {
      if (error.response?.status == 401) {
        handlerLogout();
      }
    }
  };
  const handlerAddUser = async (user) => {
    if (!login.isAdmin) return;
    let response;
    try {
      if (user.id === 0) {
        response = await save(user);
      } else {
        response = await update(user);
      }
      dispatch({
        type: user.id === 0 ? "addUser" : "updateUser",
        payload: response.data,
      });

      Swal.fire(
        user.id === 0 ? "Created" : "Updated",
        user.id === 0
          ? "The user has been created successfully"
          : "The user has been modified successfully",
        "success"
      );

      handlerCloseForm();
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status == 400) {
        setErrors(error.response.data);
      } else if (
        error.response &&
        error.response.status == 500 &&
        error.response.data?.message?.includes("constraint")
      ) {
        if (error.response.data?.message?.includes("UK_username")) {
          setErrors({ username: "That username is already in use" });
        }
        if (error.response.data?.message?.includes("UK_email")) {
          setErrors({ email: "That email is already in use" });
        }
      } else if (error.response?.status == 401) {
        handlerLogout();
      } else {
        throw error;
      }
    }
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteUser(id);
          dispatch({
            type: "removeUser",
            payload: id,
          });
          Swal.fire("Deleted!", "The user has been deleted.", "success");
        } catch (error) {
          console.log(error.response.status);
          if (error.response?.status == 401) {
            handlerLogout();
          }
        }
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
    setErrors({});
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
    getUsers,
    errors,
  };
};
