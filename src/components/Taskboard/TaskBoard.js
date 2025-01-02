import TaskColumn from "./TaskColumn";
import './TaskBoard.css'


const TaskBoard = () => {
  
  return (
    <div className="task-board">
        <TaskColumn className="component" title="To Do" status="todo"  />
        <TaskColumn title="In Progress" status="inprogress"  />
        <TaskColumn title="Completed" status="completed"  />
    </div>
  );
};

export default TaskBoard;

