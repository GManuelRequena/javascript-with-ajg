import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false,
  user: undefined,
};

export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);
  const navigate = useNavigate();
  const handlerLogin = ({ userName, password }) => {
    const isLogin = loginUser({ userName, password });
    if (isLogin) {
      const user = { userName: "admin" };
      dispatch({
        type: "login",
        payload: user,
      });
      sessionStorage.setItem("login", JSON.stringify({ isAuth: true, user }));

      navigate("/users");
    } else {
      Swal.fire("Validation Error", "Username or Password are wrong", "error");
    }
  };

  const handlerLogOut = () => {
    dispatch({
      type: "logout",
    });
    sessionStorage.removeItem("login");
  };

  return {
    login,
    handlerLogin,
    handlerLogOut,
  };
};
