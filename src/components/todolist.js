import React, { useState } from "react";
import { connect } from "react-redux";
import { editTask } from "../store/actions";

const TodoList = (props) => {
  const { todos, setSelectedTask, toggleShowForm } = props;
  console.log(todos);

  const handleEdit = (todo) => {
    setSelectedTask(todo);
    toggleShowForm((prevState) => !prevState);
  };
  if (todos && todos.length) {
    return (
      <>
        <div className="ui segment">
          {todos.map((todo) => (
            <span>
              <h3>
                {todo.taskDetails}
                <span onClick={() => handleEdit(todo)}>
                  {" "}
                  <i className="edit icon " style={{ float: "right" }}></i>
                </span>
              </h3>
            </span>
          ))}
        </div>
      </>
    );
  }
  return <></>;
};
const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
