import React, { useState } from "react";
import API from "../api";

function ActivityForm({ onSuccess }) {
  const [form, setForm] = useState({
    activity_type: "workout",
    title: "",
    description: "",
    date: "",
    status: "planned",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("activities/", form);
      alert("Activity added!");
      setForm({ activity_type: "workout", title: "", description: "", date: "", status: "planned" });
      onSuccess();
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="activity_type" value={form.activity_type} onChange={handleChange}>
        <option value="workout">Workout</option>
        <option value="meal">Meal</option>
        <option value="steps">Steps</option>
      </select>
      <input placeholder="Title" name="title" value={form.title} onChange={handleChange} required />
      <input placeholder="Description" name="description" value={form.description} onChange={handleChange} />
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="planned">Planned</option>
        <option value="in_progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add Activity</button>
    </form>
  );
}

export default ActivityForm;
