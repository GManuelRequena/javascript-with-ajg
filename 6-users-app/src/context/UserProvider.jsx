import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
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
    getUsers,
    errors,
  } = useUsers();
  return (
    <UserContext.Provider
      value={{
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
