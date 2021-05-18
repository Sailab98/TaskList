import React from "react";
import { connect } from "react-redux";

const TodoList = (props) => {
  const { todos } = props;
  console.log(todos);
  if (todos && todos.length) {
    return (
      <>
        <div className="ui segment">
          {todos.map((todo) => (
            <span>
              <h3>
                {todo.taskDetails}
                <i class="edit icon " style={{ float: "right" }}></i>
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
export default connect(mapStateToProps, null)(TodoList);
