// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center   ">
      <div className="">Logo</div>
      <div className="flex flex-row justify-between items-center gap-6">
        {/* <Link to={"/posts"}>Posts</Link> */}
        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/todos">Todos</Link>
      </div>
    </div>
  );
};
export default Navbar;
