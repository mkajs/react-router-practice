// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center   ">
      <div className="">Logo</div>
      <div className="flex flex-row justify-between items-center gap-6">
        {/* <Link to={"/posts"}>Posts</Link> */}
        <a>Users</a>
        <a>Todos</a>
      </div>
    </div>
  );
};
export default Navbar;
