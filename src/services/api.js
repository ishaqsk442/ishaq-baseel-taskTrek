export const getTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    return data;
  };
  
  export const saveTask = async (task) => {
    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
  };
  
 

  export const updateTask = async (id, updatedTask) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
  
    if (!response.ok) {
      throw new Error("Failed to update task");
    }
  
    return await response.json(); 
  };
  
  
  export const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
  };
  