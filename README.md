![light mode tasktrek](https://github.com/user-attachments/assets/0aa5751d-727f-4713-a6d8-3379d3ee214c)
![dark mode tasktrek](https://github.com/user-attachments/assets/3570de88-a235-4f62-a11d-9f6f938331a6)
# Task Management Application
- Netlify deployed link : https://ishaq-baseel-tasktrek.netlify.app/


A lightweight and modular task management application built using React. The app supports drag-and-drop task organization and leverages JSON Server for data persistence.


## Features

- Modular React components.
- Drag-and-drop functionality for task organization.
- Light and dark mode toggle.
- JSON Server for backend simulation.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install JSON Server globally:
   ```bash
   npm install -g json-server
   ```

---

## Usage

### JSON Server
1. Start the JSON Server:
   ```bash
   json-server --watch public/db.json --port 5000
   ```
2. Start the React app:
   ```bash
   npm start
   ```

---

## Components

### Header.js
- **Purpose:** Provides the header section with a title,Add task and dark mode toggle.
- **Key Features:**
  - Displays the application title.
  - Adding new task
  - Dark mode toggle button.

### Modal.js
- **Purpose:** A reusable modal component used for editing tasks.
- **Key Features:**
  - Accepts props for task details.
  - Calls functions for updating or closing the modal.

### TaskCard.js
- **Purpose:** Represents an individual task card.
- **Key Features:**
  - Displays task title and description.
  - Supports drag-and-drop using React DnD.
  - Includes Edit and Delete buttons.

### TaskColumn.js
- **Purpose:** A column for tasks categorized by status (e.g., "To Do", "In Progress", "Completed").
- **Key Features:**
  - Displays tasks filtered by status.
  - Drop zone for dragging tasks into the column.
  - Uses React DnD for drop handling.

### TaskBoard.js
- **Purpose:** The main container for the task management board.
- **Key Features:**
  - Contains multiple `TaskColumn` components.
  - Provides the ability to add new tasks using a `TaskForm`.

### API.js
- **Purpose:** Centralized file for managing API calls to the JSON Server.
- **Key Features:**
  - Fetch tasks.
  - Add, update, and delete tasks.

### TaskContext.js
- **Purpose:** Provides global state management for tasks and dark mode.
- **Key Features:**
  - Manages tasks array.
  - Provides context for dark mode.
  - Centralized state management for the application.

---

## Database

### db.json
- **Purpose:** Simulates a backend for storing task data.
- **Structure:**
  ```json
  {
    "tasks": [
      {
        "id": 1,
        "title": "Task 1",
        "description": "some description",
        "status": "To Do"
      }
    ]
  }
  ```

---


---

