import React, { useState } from "react";
import Navbar from "./Navbar";
import ActivityForm from "./ActivityForm";
import ActivityList from "./ActivityList";

function Dashboard() {
  const [refresh, setRefresh] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <h1>Dashboard</h1>
      <ActivityForm onSuccess={() => setRefresh(!refresh)} />
      <ActivityList key={refresh} />
    </div>
  );
}

export default Dashboard;
