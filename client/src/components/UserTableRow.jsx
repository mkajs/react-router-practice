import { Link } from "react-router-dom";

const UserTableRow = (user) => {
  return (
    <tr className="even:bg-slate-700">
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <Link className="btn btn-error" to={`${user.id}`}>
          View
        </Link>
      </td>
    </tr>
  );
};
export default UserTableRow;
