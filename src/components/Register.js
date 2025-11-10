import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "", password2: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("auth/register/", form);
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" name="username" onChange={handleChange} required />
        <input placeholder="Email" name="email" type="email" onChange={handleChange} required />
        <input placeholder="Password" name="password" type="password" onChange={handleChange} required />
        <input placeholder="Confirm Password" name="password2" type="password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
