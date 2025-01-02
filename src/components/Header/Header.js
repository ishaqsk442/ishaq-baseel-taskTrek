import React, { useState,useContext } from "react";
import "./Header.css";
import TaskForm from "../Taskboard/TaskForm";
import { TaskContext } from "../../contexts/TaskContext"; 


const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { addTask,darkMode,toggleDarkMode } = useContext(TaskContext); 
  const darkModes = () => {
    toggleDarkMode()
    document.documentElement.setAttribute("data-theme", darkMode ? "light" : "dark");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const saveTask = (title, description) => {
    addTask(title, description); 
  };


  return (
    <header className="header">
      <h1>Task Management</h1>
      <button
        onClick={toggleModal}
        style={{
          display: "block",
          margin: "0 auto",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
      {showModal && <TaskForm saveTask={saveTask} toggleModal={toggleModal} />}
      <button className="modes" onClick={darkModes}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
