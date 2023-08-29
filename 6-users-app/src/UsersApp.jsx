import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

export const UsersApp = () => {
  const intialUsers = [
    {
      id: 1,
      userName: "ManuReq",
      password: "12345",
      email: "gmanuelrequena@gmail.com",
    },
    {
      id: 2,
      userName: "Testing",
      password: "12345",
      email: "testing@email.com",
    },
  ];
  return (
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm />
        </div>
        <div className="col">
          <UsersList users={intialUsers} />
        </div>
      </div>
    </div>
  );
};
