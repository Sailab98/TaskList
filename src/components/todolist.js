import React from "react";
import { connect } from "react-redux";

const TodoList = (props) => {
  const { todos } = props;
  <div>{todos}</div>;
  return <></>;
};
const mapStateToProps = (state) => ({
  todos: state.todos
});
export default connect(mapStateToProps, null)(TodoList);
