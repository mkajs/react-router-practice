import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Skeleton from "./components/Skeleton";

const AppLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="max-w-[680px] mx-auto">
      <Navbar />
      {state === "loading" ? <Skeleton /> : <Outlet />}
    </div>
  );
};
export default AppLayout;
