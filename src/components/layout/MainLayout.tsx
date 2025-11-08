import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <LeftSidebar />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
};

export default MainLayout;