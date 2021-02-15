import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import React from "react";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
      day: "Aug 15",
      reminder: true,
    },
    {
      id: 2,
      text: "OR Exam",
      day: "feb 22",
      reminder: false,
    },
    {
      id: 3,
      text: "Dstributed project",
      day: "feb 19",
      reminder: true,
    },
  ]);

  const delTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      ),
    );
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="App">
      <Header
        onAdd={() => {
          setShowAddTask(!showAddTask);
        }}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={delTask} onToggle={toggleReminder} />
      ) : (
        "There is no tasks"
      )}
    </div>
  );
};

export default App;
