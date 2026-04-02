import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

import '../styles/login.scss';


export default function Login() {
  const { handleLogin, loading, error } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(form);
  };

  return (
    <div className="login">
      <div className="login__card">
        <h2>Welcome Back 👋</h2>
        <p>Login to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}