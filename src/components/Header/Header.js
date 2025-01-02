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
      <h1>Task-Trek</h1>
      <button
        onClick={toggleModal}
       className="add-task"
      >
        Add Task
      </button>
      {showModal && <TaskForm saveTask={saveTask} toggleModal={toggleModal} />}
      <button className={darkMode ? "white-mode" : "dark-mode"} onClick={darkModes}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
