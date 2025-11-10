import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";

const SubLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-4 py-4">
        <div className="flex gap-6">
          <LeftSidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SubLayout;