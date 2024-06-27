const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center max-w-[680px] mx-auto">
      <div className="">Logo</div>
      <div className="flex flex-row justify-between items-center gap-6">
        <a>Posts</a>
        <a>Users</a>
        <a>Todos</a>
      </div>
    </div>
  );
};
export default Navbar;
