import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description.trim()) {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), description, isDone: false },
      });
      setDescription("");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="✍️ Add a new task"
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleAddTask} style={{ padding: "10px 20px" }}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
