import React, { useState } from "react";
import "./TaskForm.css"

const TaskForm = ({ saveTask, toggleModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (title && description) {
      saveTask(title, description); 
      toggleModal(); 
    }
  };

  return (
    <div className="modal" >
      <h3>Add New Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input"
      />
      <button onClick={handleSave} className="button">Save</button>
      <button onClick={toggleModal} className="button">Cancel</button>
    </div>
  );
};


export default TaskForm;
