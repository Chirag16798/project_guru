import React from "react";
import { useState } from "react";
import Axios from "axios";

const OtherTask = () => {
  const [otherTask, setOtherTask] = useState([]);
  const [referenceNo, setReferenceNo] = useState("");
  const [user, setUser] = useState("");
  const [userList, setUserList] = useState([]);

  const userSelected = user;
  const referenceSelected = referenceNo;

  console.log(userSelected + " and " + referenceSelected);

  const getOtherTask = (userSelected, referenceSelected) => {
    Axios.get(
      `http://localhost:3001/task/other/${userSelected}/${referenceSelected}`
    ).then((response) => {
      setOtherTask(response.data);
    });
    console.log("clicked other task");
  };

  const getUserList = () => {
    Axios.get(`http://localhost:3001/userDropD`).then((response) => {
      setUserList(response.data);
    });
    console.log("clicked user list");
  };

  return (
    <>
      <div className="inner-container">
        <div className="otherTask">
          <h2 className="selfTaskTitle">Search Other Task</h2>
          <div className="otherTask__content">
            <div className="row my-3">
            <div  className="otLabel col-sm-4">
              <div className="otLabel">Search</div>
              </div>
                <div className="col-sm-4">
                <input
                  className="form-control form-control-sm inField"
                  type="text"
                  placeholder="Enter Reference Number"
                  onChange={(e) => setReferenceNo(e.target.value)}
                />
                </div>
            </div>
            <div className="row my-3">
              <div className="otLabel col-sm-4"><div>User</div></div>
              
              <div className="col-sm-4">
                <select
                    className="form-select form-select-sm inField"
                    onChange={(e) => setUser(e.target.value)}
                    onClick={getUserList}
                  >
                  <option>Select User</option>
                  {userList.map((val, key) => {
                    return (
                      <option value={val.user_email}>{val.user_email}</option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="content-width">
              
              <button className="search-btn st-bg-btn my-3 mx-auto d-flex"
                onClick={() => getOtherTask(userSelected, referenceSelected)}
              >
                Search
              </button>
            </div>
          </div>
          <p className="otP">Total Ongoing inquiry : </p><span className="text12p">0</span>
          <table className="other-task-table">
            <thead>
              <tr>
                <th className="st-bg">#</th>
                <th className="st-bg">User</th>
                <th className="st-bg">Star/Square</th>
                <th className="st-bg">Work Status</th>
                <th className="st-bg">Client/User</th>
                <th className="st-bg">3 Month Sale</th>
                <th className="st-bg">Source</th>
                <th className="st-bg">Target</th>
                <th className="st-bg">Translator</th>
                <th className="st-bg">Translator Mobile Number</th>
                <th className="st-bg">Reference.No</th>
                <th className="st-bg">Delivery Date Time</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OtherTask;
