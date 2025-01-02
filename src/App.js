import React from "react";
import Header from "./components/Header/Header";
import TaskBoard from "./components/Taskboard/TaskBoard";
import { TaskProvider } from "./contexts/TaskContext";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Header />
        <TaskBoard />
      </div>
    </TaskProvider>
  );
}

export default App;
