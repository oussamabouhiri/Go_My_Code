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
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
