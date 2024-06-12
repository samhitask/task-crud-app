import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import CreateTask from "./components/create-task.component";
import Task from "./components/task.component";
import TaskList from "./components/task-list.component";
import Navbar from "./layout/Navbar";
 

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TaskList/>} />
            <Route path="/tasks" element={<TaskList/>} />
            <Route path="/add-tasks" element={<CreateTask/>} />
            <Route path="/task/:id" element={<Task/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;