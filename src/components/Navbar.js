import React from "react";

function Navbar({ onLogout }) {
  return (
    <div className="navbar">
      <span>Welcome, User</span>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
