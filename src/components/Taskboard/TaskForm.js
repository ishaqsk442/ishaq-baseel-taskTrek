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

// const modalStyles = {
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   backgroundColor: "white",
//   padding: "20px",
//   borderRadius: "10px",
//   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//   zIndex: "1000",
//   width: "300px",
//   border:"1px solid grey"
// };

// const inputStyles = {
//   width: "100%",
//   padding: "8px",
//   marginBottom: "10px",
//   borderRadius: "5px",
//   border: "1px solid #ddd",
// };

// const buttonStyles = {
//   backgroundColor: "#4CAF50",
//   color: "#fff",
//   border: "none",
//   padding: "8px 15px",
//   borderRadius: "5px",
//   cursor: "pointer",
//   marginRight: "10px",


export default TaskForm;
