import React from "react";
import { deleteTask } from "../store/actions";
import { connect } from "react-redux";

const Delete = (props) => {
  const { deleteTask, selectedTask, show } = props;
  const handleDelete = () => {
    debugger;
    let isDelete = window.confirm("Are you sure you want to delete this Task?");

    if (isDelete) {
      deleteTask(selectedTask);
      show();
    }
  };
  return (
    <>
      <i
        className="trash alternate outline icon"
        style={{ marginTop: "7px" }}
        onClick={handleDelete}></i>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (props) => {
      dispatch(deleteTask(props));
    }
  };
};
export default connect(null, mapDispatchToProps)(Delete);
