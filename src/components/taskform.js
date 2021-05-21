import React, { useState, forwardRef, useEffect } from "react";
import { Input } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { addTask, editTask } from "../store/actions";
import Delete from "./delete";
const Form = (props) => {
  const { addNewTask, updateTask, show, selectedTask } = props;
  console.log(selectedTask);

  const [taskDetails, setTaskDetails] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();
  const [user, setUser] = useState("");

  const handleSubmit = () => {
    if (selectedTask != null) {
      updateTask(selectedTask.id, { taskDetails, date, time, user });
    } else {
      addNewTask({ taskDetails, date, time, user });
    }
    show();
  };
  const handleCancel = () => {
    show();
  };
  const TimeCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div class="ui left icon input" onClick={onClick} ref={ref} style={{ width: "100%" }}>
      <input type="text" placeholder="Time" value={value} />
      <i class="clock outline icon"></i>
    </div>
  ));
  const DateCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div class="ui left icon input" onClick={onClick} ref={ref} style={{ width: "100%" }}>
      <input type="text" value={value} />
      <i class="calendar alternate outline icon"></i>
    </div>
  ));
  console.log(taskDetails);
  useEffect(() => {
    if (selectedTask != null) {
      setTaskDetails(() => selectedTask.taskDetails);
      setDate(() => selectedTask.date);
      setTime(() => selectedTask.time);
      setUser(() => selectedTask.user);
    }
  }, [selectedTask]);

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
              value={taskDetails}
            />
          </div>
          <div className="fields">
            <div className="eight wide field">
              <label>Date</label>

              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                customInput={<DateCustomInput />}
              />
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
                customInput={<TimeCustomInput />}
              />
            </div>
          </div>
          <div className="field">
            <label>Assign User</label>
            <Input
              type="dropdown"
              placeholder="Prem Kumar"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </div>

          <div className="fields">
            <div className="eight wide field">
              {selectedTask ? <Delete selectedTask={selectedTask} show={show} /> : <></>}
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
    },
    updateTask: (id, payload) => {
      dispatch(editTask(id, payload));
    }
  };
};

export default connect(null, mapDispatchToProps)(Form);
