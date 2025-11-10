import React, { useEffect, useState } from "react";
import API from "../api";

function ActivityList() {
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    try {
      const res = await API.get("activities/");
      setActivities(res.data);
    } catch (err) {
      alert("Failed to load activities");
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`activities/${id}/`);
      fetchActivities();
    } catch (err) {
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "planned": return "#fcd34d"; // yellow
      case "in_progress": return "#3b82f6"; // blue
      case "completed": return "#16a34a"; // green
      default: return "#e5e7eb"; // gray
    }
  };

  return (
    <div>
      <h2>Activities</h2>
      <div className="activities-grid">
        {activities.map((a) => (
          <div key={a.id} className="activity-card" style={{ borderLeft: `5px solid ${getStatusColor(a.status)}` }}>
            <h3>{a.title}</h3>
            <p>Type: {a.activity_type}</p>
            <p>Status: {a.status}</p>
            <p>Date: {a.date}</p>
            <p>{a.description}</p>
            <button onClick={() => handleDelete(a.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityList;
