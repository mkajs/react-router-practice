import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const AppLayout = () => {
  return (
    <div className="max-w-[680px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default AppLayout;
