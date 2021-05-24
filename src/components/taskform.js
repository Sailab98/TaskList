import React, { useState, forwardRef, useEffect } from "react";
import { Input } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import Dropdown from "./Dropdown";
import { connect } from "react-redux";
import { addTask, editTask } from "../store/actions";
import axios from "axios";
import Delete from "./delete";
import DropdownList from "./Dropdown";
const Form = (props) => {
  const { addNewTask, updateTask, show, selectedTask } = props;

  const [taskDetails, setTaskDetails] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const data = { email: "smithcheryl@yahoo.com", password: "12345678" };

    fetch("https://stage.api.sloovi.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        const { token } = results;
        fetch("https://stage.api.sloovi.com/team", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            const { results } = data;

            setUserList(results);
          });
        console.log("Users:", userList);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
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

  const handleDateChange = (date) => {
    debugger;
    setDate(date.toISOString());
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
                selected={new Date(date)}
                onChange={handleDateChange}
                customInput={<DateCustomInput />}
              />
            </div>

            <div className="eight wide field">
              <label>Time</label>
              <DatePicker
                selected={new Date(time)}
                onChange={(date) => setTime(date.toISOString())}
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

            <DropdownList user={user} userList={userList} user={user} setUser={setUser} />
          </div>

          <div className="fields">
            <div className="four wide field">
              {selectedTask ? <Delete selectedTask={selectedTask} show={show} /> : <></>}
            </div>

            <div className="twelve wide field">
              <div className="fields">
                <div className="four wide field ">
                  <div
                    className="ui button "
                    style={{ background: "none", marginLeft: "9.3vh", padding: "1vh" }}
                    onClick={handleCancel}>
                    Cancel
                  </div>
                </div>
                <div className="four wide field" style={{ marginLeft: "13.3vh", padding: "0vh" }}>
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
