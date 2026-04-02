import { NavLink } from "react-router-dom";
import "../styles/sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">FinTrack</h2>

      <nav>
        <NavLink to="/" end className="link">
          Dashboard
        </NavLink>

        <NavLink to="/transactions" className="link">
          Transactions
        </NavLink>

        <NavLink to="/insights" className="link">
          Insights
        </NavLink>
      </nav>
    </div>
  );
}