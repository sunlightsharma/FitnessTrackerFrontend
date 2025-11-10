import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />         {/* Root shows login */}
          <Route path="/login" element={<Login />} />    {/* /login also shows login */}
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
