import React from "react";
import { useState, useEffect } from "react";
import SideMenu from "../SideMenu/SideMenu";
import Axios from "axios";

const Checker = () => {
  const [inactive, setInactive] = useState(false);
  // const [checkerList,setCheckerList] = useState([]);

  // const [checkerlist, setCheckerList] = useState([]);

  // const getChecker = () => {
  //     Axios.get("http://localhost:3001/domain").then((response) => {
  //        setCheckerList(response.data);
  //     });
  //   };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />

      <div className="line"> </div>
      <div className="inner-container">
        <div className="self__task">
          <h2 className="rcHead">Checker</h2>
          <div className="search">
            <form>
              <div className="row my-4">
                <div className="title col-sm-4">
                  <p>Search</p>
                </div>
                <div className=" col-sm-4 ">
                  <input type="text" placeholder="Enter Reference Number" className="form-control inField" />
                  
                </div>
                <div className="col-sm-auto">
                <button className="search-btn st-bg-btn">Search</button>
                </div>
              </div>
              
            </form>
          </div>
        </div>

        <div className="selfTask-table">
          <div className="overflow-table">
            <table className="selfTask-table-data">
              <thead>
                <tr>
                  <th className="st-bg">#</th>
                  <th className="st-bg">Star/Square</th>
                  <th className="st-bg">Refrence No.</th>
                  <th className="st-bg">Submission Date & Time</th>
                  <th className="st-bg">Contact</th>
                  <th className="st-bg">Company</th>
                  <th className="st-bg">Our Company</th>
                  <th className="st-bg">Work Type</th>
                  <th className="st-bg">Source</th>
                  <th className="st-bg">Target</th>
                  <th className="st-bg">Translator</th>
                  <th className="st-bg">Action</th>
                </tr>
              </thead>
              <tbody>{}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checker;
