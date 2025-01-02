import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ task, toUpdateTask, toggleModal }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });

  
  useEffect(() => {
    if (task) {
      setFormData({ title: task.title, description: task.description });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave = () => {
    if (formData.title.trim() && formData.description.trim()) {
      
      toUpdateTask({ 
        ...task, 
        title: formData.title, 
        description: formData.description 
      });
      toggleModal(); // Close the modal after saving
    }
  };
  

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Task</h3>
        <form>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Task Title"
            required
            className="input"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Task Description"
            required
            className="description"
          />
          <div className="modal-actions">
            <button type="button" className="btn" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="btn" onClick={toggleModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
