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
    if (isEditing && newDescription.trim()) {
      dispatch({
        type: "EDIT_TASK",
        payload: { id: task.id, description: newDescription },
      });
    }
    setIsEditing(!isEditing);
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
        <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
          {task.description}
        </span>
      )}
      <i
        className={`icon ${
          task.isDone ? "fas fa-check-circle" : "far fa-circle"
        }`}
        onClick={handleToggle}
        title={task.isDone ? "Mark as Not Done" : "Mark as Done"}
      ></i>
      <i
        className={`icon ${isEditing ? "fas fa-save" : "fas fa-edit"}`}
        onClick={handleEdit}
        title={isEditing ? "Save" : "Edit"}
      ></i>
    </div>
  );
};

export default Task;
