import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/NavBar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
