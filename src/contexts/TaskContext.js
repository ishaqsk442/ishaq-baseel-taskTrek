// import React, { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { getTasks, saveTask, updateTask, deleteTask } from "../services/api";

// export const TaskContext = createContext();

// export const TaskProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
    
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const tasksData = await getTasks();
//       setTasks(tasksData);
//     };

//     fetchData();
//   }, []);

//   const addTask = (title, description) => {
//     const newTask = {
//       id: uuidv4(),
//       title,
//       description,
//       status: "todo",
//       bgColor: `hsl(${Math.random() * 360}, 70%, 98%)`, // here im using Random light color 
//     };
//     saveTask(newTask);
//     setTasks([...tasks, newTask]);
//   };

//   // const editTask = (id, updatedTask) => {
//   //   updateTask(id, updatedTask);
//   //   setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
//   // };

//   const editTask = async (id, updatedTask) => {
//     try {
//       // Call the API to update the task
//       await updateTask(id, updatedTask);
  
//       // Update the task in the local state
//       setTasks((prevTasks) =>
//         prevTasks.map((task) =>
//           task.id === id ? { ...task, ...updatedTask } : task
//         )
//       );
//     } catch (error) {
//       console.error("Error updating task:", error);
//     }
//   };
  


//   const removeTask = (id) => {
//     deleteTask(id);
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const changeStatus = (id, status) => {
//     const updatedTask = { ...tasks.find((task) => task.id === id), status };
//     updateTask(id, updatedTask);
//     setTasks(
//       tasks.map((task) => (task.id === id ? updatedTask : task))
//     );
//   };

//   return (
//     <TaskContext.Provider value={{ tasks, addTask, editTask, removeTask, changeStatus ,toggleDarkMode,darkMode}}>
//       {children}
//     </TaskContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getTasks, saveTask, updateTask, deleteTask } from "../services/api";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const fetchData = async () => {
      const tasksData = await getTasks();
      setTasks(tasksData);
    };

    fetchData();
  }, []);

  const addTask = (title, description) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status: "todo",
      bgColor: `hsl(${Math.random() * 360}, 70%, 98%)`,
    };
    saveTask(newTask);
    setTasks([...tasks, newTask]);
  };

  
  const editTask = async (id, updatedTask) => {
    try {
      // Make sure we don't modify the status unintentionally
      const taskToUpdate = tasks.find(task => task.id === id);
      const updatedTaskWithStatus = {
        ...taskToUpdate,
        ...updatedTask,
        status: taskToUpdate.status, // Keep the original status
      };
  
      // Call the API to update the task
      await updateTask(id, updatedTaskWithStatus);
  
      // Update the task in the local state
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? updatedTaskWithStatus : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const removeTask = (id) => {
    deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeStatus = (id, status) => {
    const updatedTask = { ...tasks.find((task) => task.id === id), status };
    updateTask(id, updatedTask);
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, removeTask, changeStatus, toggleDarkMode, darkMode }}>
      {children}
    </TaskContext.Provider>
  );
};
