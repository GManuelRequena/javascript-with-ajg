import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { LoginPage } from "./auth/pages/LoginPage";
import { useSelector } from "react-redux";

export const AppRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth);
  return (
    <Routes>
      {isAuth ? (
        <Route path="/*" element={<UserRoutes />}></Route>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};
