import React, { Component } from "react";
import TaskDataService from "../task.service";
import { Link } from "react-router-dom";

export default class TasksList extends Component {
  constructor(props) {
    super(props);
    this.retrieveTasks = this.retrieveTasks.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTask = this.setActiveTask.bind(this);
    this.state = {
        tasks: [],
        currentTask: null,
        currentIndex: -1,
      };
  }

  componentDidMount() {
    this.retrieveTasks();
  }


  retrieveTasks() {
    TaskDataService.getAll()
      .then(response => {
        this.setState({
          tasks: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTasks();
    this.setState({
      currentTask: null,
      currentIndex: -1
    });
  }

  setActiveTask(task, index) {
    this.setState({
      currentTask: task,
      currentIndex: index
    });
  }

  render() {
    const { tasks, currentTask, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
    
          </div>
        </div>
        <div className="col-md-6">
          <h4>Task Center</h4>

          <ul className="list-group">
            {tasks &&
              tasks.map((task, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTask(task, index)}
                  key={index}
                >
                  {task.title}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentTask ? (
            <div>
              <h4>{currentTask.title}</h4>
              <div>
                {currentTask.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentTask.status}
              </div>
              <div>
                <label>
                  <strong>Due Date:</strong>
                </label>{" "}
                {currentTask.dueDate}
              </div>
              <div>
                <label>
                  <strong>Priority</strong>
                </label>{" "}
                {currentTask.priority}
              </div>
              <button type="button">
                <Link
                  to={"/task/" + currentTask.id}
                  className="badge badge-warning"
                >
                  Edit
                </Link>
                </button>
                
            </div>
          ) : (
            <div>
              <br />
            </div>
          )}
        </div>
      </div>
    );
  }
}