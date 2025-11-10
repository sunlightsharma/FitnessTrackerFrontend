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

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((a) => (
          <li key={a.id}>
            {a.title} ({a.activity_type}) - {a.status} - {a.date}
            <button onClick={() => handleDelete(a.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;
