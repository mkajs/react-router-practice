import { useLoaderData } from "react-router-dom";
import User from "../components/UserTableRow";

const Users = () => {
  const { users } = useLoaderData();
  return (
    <table className="table">
      <thead>
        <tr>
          <th>name</th>
          <th>user name</th>
          <th>email</th>
          <th>phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </tbody>
    </table>
  );
};
export default Users;
