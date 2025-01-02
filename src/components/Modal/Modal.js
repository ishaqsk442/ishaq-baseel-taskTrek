import React from "react";
import TaskForm from "../Taskboard/TaskForm";
import "./Modal.css";

const Modal = ({ task, updateTask, toggleModal }) => {
  const handleSave = (title, description) => {
    updateTask(task.id, { ...task, title, description });
    toggleModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <TaskForm saveTask={handleSave} toggleModal={toggleModal} />
      </div>
    </div>
  );
};

export default Modal;
