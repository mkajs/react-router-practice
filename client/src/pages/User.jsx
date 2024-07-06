import { useLoaderData } from "react-router-dom";

const User = () => {
  const { user } = useLoaderData();
  console.log(user);
  return (
    <div className="flex flex-col items-center gap-3 mt-32">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <h3 className="font-bold text-slate-200 text-2xl">{user.name}</h3>
      <div className="flex gap-3 items-center">
        <span className="  badge badge-md badge-warning">Company</span>
        <p>{user.company.name}</p>
      </div>
      <div className="flex gap-3 items-center">
        <span className="badge  badge-md badge-success">Email</span>
        <p>{user.email}</p>
      </div>
      <div className="flex gap-3 items-center">
        <span className="badge  badge-md badge-secondary">Website</span>
        <p>{user.website}</p>
      </div>
      <div className="flex gap-3 items-center">
        <span className="badge  badge-md badge-info">Address</span>
        <p>
          {user.address.city} {user.address.street} {user.address.suite}
        </p>
      </div>
    </div>
  );
};
export default User;
