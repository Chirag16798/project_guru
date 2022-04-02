import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";
import Axios from "axios";

const Report = () => {
  const [inactive, setInactive] = useState(false);

  const [countrydropdown, setCountryDropdown] = useState([]);
  const getCountryDropDown = () => {
    Axios.get("http://localhost:3001/countryDropD").then((response) => {
      setCountryDropdown(response.data);
    });
  };

  const [companydropdown, setCompanyDropdown] = useState([]);
  const getCompanyDropDown = () => {
    Axios.get("http://localhost:3001/ourCompanyDropD").then((response) => {
      setCompanyDropdown(response.data);
    });
  };

  const [languageList, setLanguageList] = useState([]);
  const getLanguageList = () => {
    Axios.get("http://localhost:3001/languageDropD").then((response) => {
      setLanguageList(response.data);
    });
  };

  const [workList, setWorkList] = useState([]);
  const getWorkList = () => {
    Axios.get("http://localhost:3001/workTypeDropD").then((response) => {
      setWorkList(response.data);
    });
  };

  const [userList, setUserList] = useState([]);
  const getUserList = () => {
    Axios.get("http://localhost:3001/userDropD").then((response) => {
      setUserList(response.data);
    });
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Report" />
      <div className="inner-container">
        <div className="report-form">
          <form>
            <div className="row my-3">
              <label className="col-sm-1 reportLabel">Client</label>
              <div className="col-sm-3">
                <input type="text" className="form-control inField" placeholder="Enter e-mail ids using comma , separator"/>
              </div>
              <label className="col-sm-1 reportLabel">From</label>
              <div className="col-sm-3">
                <input type="date" className="form-control inField" placeholder="From Date"/>
              </div>
              <label className="col-sm-1 reportLabel">To</label>
              <div className="col-sm-3">
                <input type="date" className="form-control inField" placeholder="To Date"/>
              </div>
            </div>
            <div className="row my-3">
              <label className="col-sm-1 reportLabel">Translator</label>
              <div className="col-sm-3">
                <input type="text" className="form-control inField" placeholder="Enter e-mail ids using comma , separator" />
              </div>
              <label className="col-sm-1 reportLabel">Source Language</label>
              <div className="col-sm-3">
                  <select name="Select Category" className="form-select inField" onClick={getLanguageList}>
                    <option>Source Language</option>
                    {languageList.map((val, key) => {
                      return (
                        <>
                          <option value={val.language_name}>
                            {val.language_name}
                          </option>
                        </>
                      );
                    })}
                  </select>
              </div>
              <label className="col-sm-1 reportLabel">Target Language</label>
              <div className="col-sm-3">
                <select name="Select Category" className="form-select inField" onClick={getLanguageList}>
                    <option>Target Language</option>
                    {languageList.map((val, key) => {
                      return (
                        <>
                          <option value={val.language_name}>
                            {val.language_name}
                          </option>
                        </>
                      );
                    })}
                  </select>
              </div>
            </div>
            <div className="row my-3">
              <label className="col-sm-1 reportLabel">User</label>
              <div className="col-sm-3">
                <select name="Select Category" className="form-select inField" onClick={getUserList}>
                    <option>Select User</option>
                    {userList.map((val, key) => {
                      return (
                        <>
                          <option value={val.user_email}>
                            {val.user_email}
                          </option>
                        </>
                      );
                    })}
                  </select>
              </div>
              <label className="col-sm-1 reportLabel">Work Type</label>
              <div className="col-sm-3">
                <select name="Select Category" className="form-select inField" onClick={getWorkList}>
                    <option>Select Work Type</option>
                    {workList.map((val, key) => {
                      return (
                        <option value={val.work_type}>{val.work_type}</option>
                      );
                    })}
                  </select>
              </div>
              <label className="col-sm-1 reportLabel">Country</label>
              <div className="col-sm-3">
                <select name="Select Category" className="form-select inField" onClick={getCountryDropDown}>
                    <option>Select Country</option>
                    {countrydropdown.map((val, key) => {
                      return (
                        <option value={val.country_name}>
                          {val.country_name}
                        </option>
                      );
                    })}
                  </select>
              </div>
            </div>
            <div className="my-3 row">
              <label className="col-sm-1 reportLabel">Report Type</label>
                <div className="col-sm-3">
                  <select name="Select Category" className="form-select inField">
                    <option>Select Report Type</option>
                    <option value="WE">Work Enquiry</option>
                    <option value="WOEF">Work Offer</option>
                    <option value="WA">Work Acceptance</option>
                    <option value="WC">Work Check</option>
                    <option value="WO">Work Order</option>
                    <option value="QC">Quality Check</option>
                    <option value="CAN">Cancellation</option>
                    <option value="COR">Correction</option>
                    <option value="Sub">Submission</option>
                    <option value="ReSubCan">
                      Re-Submission / Cancellation
                    </option>
                    <option value="CHK">Checker</option>
                    <option value="RCHK">Re-Checker</option>
                    <option value="tact_entry_client">Clients</option>
                    <option value="tact_entry_translator">Translator</option>
                    <option value="ACT">Accounts</option>
                  </select>
                </div>
                <label className="col-sm-1 reportLabel">Our Company</label>
                <div className="col-sm-3">
                  <select name="Select Category" className="form-select inField" onClick={getCompanyDropDown}>
                    <option>Select Our Company</option>
                    {companydropdown.map((val, key) => {
                      return (
                        <option value={val.companies_name}>
                          {val.companies_name}
                        </option>
                      );
                    })}
                  </select>
                  
                </div>
                <label className="col-sm-1 reportLabel">Option Type</label>
                <div className="col-sm-3">
                <select name="Select Category" className="form-select inField">
                    <option value="count">Count</option>
                    <option value="amount">Amount</option>
                  </select>
                </div>
            </div>

            <div className="report-btn">
              <div className="show-report-btn">
                <button className="show-r">Show Report</button>
              </div>
              <div className="view-btn">
                <div className="v-btn">
                  <button className="v-list">View List</button>
                  <button className="v-list">Export List</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Report;
