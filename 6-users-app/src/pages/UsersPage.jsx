import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
export const UsersPage = ({
  users,
  userSelected,
  initialUserForm,
  handlerAddUser,
  handlerRemoveUser,
  handlerUserSelectedForm,
  visibleForm,
  handlerOpenForm,
  handlerCloseForm,
}) => {
  return (
    <>
      {!visibleForm || (
        <UserModalForm
          userSelected={userSelected}
          initialUserForm={initialUserForm}
          handlerAddUser={handlerAddUser}
          handlerCloseForm={handlerCloseForm}
        />
      )}
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
          {!visibleForm || <div className="col"></div>}
          <div className="col">
            {visibleForm || (
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
              <UsersList
                users={users}
                handlerRemoveUser={handlerRemoveUser}
                handlerUserSelectedForm={handlerUserSelectedForm}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
