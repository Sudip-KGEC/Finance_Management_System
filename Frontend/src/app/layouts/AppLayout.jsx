import { Outlet } from "react-router-dom";
import Navbar from "../../shared/components/Navbar";
import Sidebar from "../../shared/components/Sidebar";

import "./AppLayout.scss";

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}