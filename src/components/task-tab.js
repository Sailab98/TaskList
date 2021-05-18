import React, { useState } from "react";
import Form from "./taskform";
import TodoList from "./todolist";

const Task = (props) => {
  // const { todos } = props;
  const [showForm, toggleShowForm] = useState(false);
  // var //count = todos.length;
  var count = 5;
  const show = () => {
    toggleShowForm((prevState) => !prevState);
  };

  return (
    <>
      <div className="ui grid padding-no " style={{ height: "102vh" }}>
        <div className="two wide column margin-no" style={{ background: "#2b3c55" }}></div>

        <div className="fourteen wide column ">
          <div className="ui segment " style={{ marginTop: "1vh" }}></div>
          <div className="ui grid">
            <div className="four wide column">
              <div className="ui segments" style={{ marginTop: "10vh" }}>
                <div className="ui segment">
                  <div>
                    <span>TASKS</span>
                    <span style={{ marginLeft: "1vh" }}>{count}</span>

                    <span style={{ float: "right" }} onClick={show}>
                      <i className="plus icon "></i>
                    </span>
                  </div>
                </div>
                {showForm ? <Form show={show} /> : <TodoList />}
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
export default Task;
