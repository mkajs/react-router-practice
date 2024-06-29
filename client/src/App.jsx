import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="max-w-[680px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App;
