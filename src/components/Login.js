import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("auth/login/", form);
      localStorage.setItem("access_token", res.data.access);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/register")}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            backgroundColor: "#1e3a8a",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default Login;
