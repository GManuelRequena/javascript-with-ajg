import { useContext, useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../auth/context/AuthContext";
export const UsersPage = () => {
  const { users, visibleForm, handlerOpenForm, getUsers } =
    useContext(UserContext);
  useEffect(() => {
    getUsers();
  }, []);

  const { login } = useContext(AuthContext);
  return (
    <>
      {!visibleForm || <UserModalForm />}
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
          {!visibleForm || <div className="col"></div>}
          <div className="col">
            {visibleForm || !login.isAdmin || (
              <button
                className="btn btn-primary my-2"
                onClick={handlerOpenForm}
              >
                New User
              </button>
            )}
            {users.length === 0 ? (
              <div className="alert alert-warning">No users</div>
            ) : (
              <UsersList />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
