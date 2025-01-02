
import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import { TaskContext } from "../../contexts/TaskContext";
import TaskCard from "./TaskCard";
import "./TaskColumn.css";

const TaskColumn = ({ title, status }) => {
  const { tasks, changeStatus, editTask, removeTask, darkMode } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => task.status === status);

  const [{ isOver }, drop] = useDrop({
    accept: "task",
    drop: (item) => {
      if (item.currentStatus !== status) {
        changeStatus(item.id, status); 
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        background: isOver ? "#e0e0e0" : "inherit",
      }}
      className="column"
    >
      <h2>
        {title} ({filteredTasks.length} tasks)
      </h2>
      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          mode={darkMode}
          updateTask={(updatedTask) => editTask(task.id, updatedTask)}
          deleteTask={() => removeTask(task.id)} 
        />
      ))}
    </div>
  );
};

export default TaskColumn;
