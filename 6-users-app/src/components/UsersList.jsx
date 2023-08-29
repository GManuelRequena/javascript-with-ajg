import { UserRow } from "./UserRow";

export const UsersList = ({ users = [] }) => {
  return (
    <table className="table table-hover table-stripped">
      <thead>
        <tr>
          <th>ID</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, userName, email }) => (
          <UserRow key={id} id={id} userName={userName} email={email} />
        ))}
      </tbody>
    </table>
  );
};
