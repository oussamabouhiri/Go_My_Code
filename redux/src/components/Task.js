import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const handleEdit = () => {
    if (newDescription.trim()) {
      dispatch({
        type: "EDIT_TASK",
        payload: { id: task.id, description: newDescription },
      });
      setIsEditing(false);
    }
  };

  return (
    <div className="task">
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span className={task.isDone ? "done" : ""}>{task.description}</span>
      )}
      <button onClick={handleToggle}>{task.isDone ? "Undo" : "Done"}</button>
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default Task;
