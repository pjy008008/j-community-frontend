import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const NavbarLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default NavbarLayout;
