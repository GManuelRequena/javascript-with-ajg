import { Routes, Route, Navigate } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";

export const UserRoutes = ({ login, handlerLogOut }) => {
  const {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    visibleForm,
    handlerOpenForm,
    handlerCloseForm,
  } = useUsers();
  return (
    <>
      <Navbar login={login} handlerLogOut={handlerLogOut} />
      <Routes>
        <Route
          path="users"
          element={
            <UsersPage
              users={users}
              userSelected={userSelected}
              initialUserForm={initialUserForm}
              handlerAddUser={handlerAddUser}
              handlerRemoveUser={handlerRemoveUser}
              handlerUserSelectedForm={handlerUserSelectedForm}
              visibleForm={visibleForm}
              handlerOpenForm={handlerOpenForm}
              handlerCloseForm={handlerCloseForm}
            />
          }
        />
        <Route
          path="users/register"
          element={
            <RegisterPage
              handlerAddUser={handlerAddUser}
              initialUserForm={initialUserForm}
            />
          }
        />
        <Route
          path="users/edit/:id"
          element={
            <RegisterPage
              users={users}
              handlerAddUser={handlerAddUser}
              initialUserForm={initialUserForm}
            />
          }
        />
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
};
