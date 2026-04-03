import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../shared/components/Navbar";
import Sidebar from "../../shared/components/Sidebar";

import "./AppLayout.scss";

export default function AppLayout() {
  const [open, setOpen] = useState(false); 

  return (
    <div className="app-layout">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="main">
        <Navbar setOpen={setOpen} /> {/* pass to navbar */}
        
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}