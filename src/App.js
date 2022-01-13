import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function App() {
  // initialize the state in the function component
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);

  // Create event handler for changes to the new task input field




  // Create event handler for when the submit button is clicked



  
  // Create event handler for when a task is deleted from the tasks list



  // return the NewTask component and TasksList component
  return(
    <main>
      <h1>Tasks</h1>
      <NewTask 

      />
      <TasksList 

      />

    </main>
  );
}




