import React, { useState, useEffect } from "react";
import Form from "./taskform";
import TodoList from "./todolist";
import { connect } from "react-redux";

const Task = (props) => {
  const { todos } = props;
  const [showForm, toggleShowForm] = useState(false);
  const [todoCount, setTodoCount] = useState(0);
  const [selectedTask, setSelectedTask] = useState(null);

  const show = () => {
    toggleShowForm((prevState) => !prevState);
  };

  useEffect(() => {
    if (todos) {
      setTodoCount(todos.length);
    }
  }, [todos]);

  useEffect(() => {
    if (!showForm) {
      setSelectedTask(null);
    }
  }, [showForm]);

  return (
    <>
      <div className="ui grid  " style={{ height: "102vh" }}>
        <div className="two wide column margin-no" style={{ background: "#2b3c55" }}></div>

        <div className="fourteen wide column ">
          <div className="ui segment " style={{ marginTop: "1vh" }}></div>
          <div className="ui grid">
            <div className="four wide column">
              <div className="ui segments" style={{ marginTop: "10vh" }}>
                <div className="ui segment">
                  <div>
                    <span>TASKS</span>
                    <span style={{ marginLeft: "1vh" }}>{todoCount}</span>

                    <span style={{ float: "right" }} onClick={show}>
                      <i className="plus icon "></i>
                    </span>
                  </div>
                </div>
                {showForm ? (
                  <Form show={show} selectedTask={selectedTask} />
                ) : (
                  <TodoList setSelectedTask={setSelectedTask} toggleShowForm={toggleShowForm} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos
});
export default connect(mapStateToProps, null)(Task);
