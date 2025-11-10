import React from "react";
import ActivityForm from "./ActivityForm";
import ActivityList from "./ActivityList";

function Dashboard() {
  const [refresh, setRefresh] = React.useState(false);

  return (
    <div>
      <h1>Dashboard</h1>
      <ActivityForm onSuccess={() => setRefresh(!refresh)} />
      <ActivityList key={refresh} />
    </div>
  );
}

export default Dashboard;
