import { useEffect } from "react";
import useAuth from "../../features/auth/hooks/useAuth";
import useTheme from "../hooks/useTheme";
import "../styles/navbar.scss";

import { Sun, Moon, LogOut, Menu } from "lucide-react";

export default function Navbar({ setOpen }) {
  const { user, handleGetMe, handleLogout } = useAuth();
  const { toggleTheme } = useTheme();

  useEffect(() => {
    handleGetMe();
  }, []);

  return (
    <div className="navbar">
      {/* mobile menu button */}
      <button className="menu-btn" onClick={() => setOpen(true)}>
        <Menu size={22} />
      </button>

      <div className="navbar__left">
        <h3 className="desktop-title">Finance Dashboard</h3>
        <h2 className="mobile-logo">FinanceQ</h2>
      </div>

      <div className="navbar__right">
        <div className="user">
          <span>{user?.name || "User"}</span>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          <Sun className="sun" size={18} />
          <Moon className="moon" size={18} />
        </button>

        <button className="logout" onClick={handleLogout}>
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
}