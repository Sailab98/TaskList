import React, { useState, forwardRef } from "react";
import { Input } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { addTask } from "../store/actions";
const Form = (props) => {
  const { addNewTask, show, selectedTask } = props;
  console.log(selectedTask);
  const [taskDetails, setTaskDetails] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();
  const [user, setUser] = useState("");

  const handleSubmit = () => {
    addNewTask({ taskDetails, date, time, user });
    show();
  };
  const handleCancel = () => {
    show();
  };
  return (
    <>
      <div className="ui segment margin-no " style={{ background: "#E6FFFE" }}>
        <div className="ui form">
          <div className="field">
            <label>Task Description</label>
            <Input
              icon="tasks"
              iconPosition="right"
              placeholder="Follow Up"
              onChange={(e) => setTaskDetails(e.target.value)}
            />
          </div>
          <div className="fields">
            <div className="eight wide field">
              <label>Date</label>

              <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>

            <div className="eight wide field">
              <label>Time</label>
              <DatePicker
                selected={time}
                onChange={(date) => setTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                dateFormat="h:mm aa"
                placeholderText="Time"
              />
            </div>
          </div>
          <div className="field">
            <label>Assign User</label>
            <Input
              type="dropdown"
              placeholder="Prem Kumar"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div className="fields">
            <div className="eight wide field">
              {selectedTask ? (
                <i className="trash alternate outline icon" style={{ marginTop: "7px" }}></i>
              ) : (
                <></>
              )}
            </div>

            <div className="eight wide field">
              <div className="fields">
                <div className="four wide field ">
                  <div className="ui button " style={{ background: "none" }} onClick={handleCancel}>
                    Cancel
                  </div>
                </div>
                <div className="four wide field" style={{ marginLeft: "5.3vh" }}>
                  <div className="ui positive button " onClick={handleSubmit}>
                    Save
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTask: (props) => {
      dispatch(addTask(props));
    }
  };
};

export default connect(null, mapDispatchToProps)(Form);
