import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { loginReducer } from "./auth/reducers/loginReducer";
import Swal from "sweetalert2";
import { UsersPage } from "./pages/UsersPage";
import { Navbar } from "./components/Navbar";

const initialLoigin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false,
  user: undefined,
};

export const UsersApp = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLoigin);
  const handlerLogin = ({ username, password }) => {
    if (username === "admin" && password === "12345") {
      const user = { username: "admin" };
      dispatch({
        type: "login",
        payload: user,
      });
      sessionStorage.setItem("login", JSON.stringify({ isAuth: true, user }));
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

  return (
    <>
      {login.isAuth ? (
        <>
          <Navbar login={login} handlerLogOut={handlerLogOut} />
          <UsersPage />
        </>
      ) : (
        <LoginPage handlerLogin={handlerLogin} />
      )}
    </>
  );
};
