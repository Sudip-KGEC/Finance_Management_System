import { useEffect } from "react";
import useAuth from "../../features/auth/hooks/useAuth";
import useTheme from "../hooks/useTheme";
import "../styles/navbar.scss";


export default function Navbar() {
  const { user, handleGetMe, handleLogout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    handleGetMe();
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__left">
        <h3>Finance Dashboard</h3>
      </div>

      <div className="navbar__right">
        <div className="user">
          <span>{user?.name || "User"}</span>
        </div>

        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}