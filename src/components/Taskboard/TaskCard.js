import React, { useState } from "react";
import { useDrag } from "react-dnd";
import Modal from "../Modal/Modal";
import "./TaskCard.css";

const TaskCard = ({ task, updateTask, deleteTask, mode }) => {
  const [showModal, setShowModal] = useState(false);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id, currentStatus: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const toggleModal = () => setShowModal(!showModal);

  const handleSave = (updatedTask) => {
    console.log(updatedTask)
    updateTask(updatedTask); 
    toggleModal();
  };

  return (
    <>
      <div
        ref={drag}
        style={{
          background: mode ? "#141313" : task.bgColor,
          opacity: isDragging ? 0.5 : 1,
        }}
        className="card"
      >
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <button className={mode ? "dark-btn": "btn"} onClick={toggleModal}>
          Edit
        </button>
        <button className={mode ? "dark-btn": "btn"} onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>

      {showModal && (
        <Modal
          task={task}
          toUpdateTask={handleSave}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default TaskCard;
