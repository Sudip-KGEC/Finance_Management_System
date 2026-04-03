import { NavLink } from "react-router-dom";
import { X, LayoutDashboard, Receipt, BarChart3 } from "lucide-react";

import "../styles/sidebar.scss";

export default function Sidebar({ open, setOpen }) {
  
  return (
    <>
      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        {/* Top (logo + close btn for mobile) */}
        <div className="sidebar__top">
          <h2 className="logo">FinanceQ</h2>

          {/* close button (mobile only) */}
          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Links */}
        <nav>
          <NavLink to="/" end className="link" onClick={() => setOpen(false)}>
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/transactions" className="link" onClick={() => setOpen(false)}>
            <Receipt size={18} />
            <span>Transactions</span>
          </NavLink>

          <NavLink to="/insights" className="link" onClick={() => setOpen(false)}>
            <BarChart3 size={18} />
            <span>Insights</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
}