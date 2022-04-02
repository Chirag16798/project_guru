import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const EmailMaster = () => {
  const [inactive, setInactive] = useState(false);
  const [emailMasterlist, setEmailMasterlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //const [edit_emailMaster_name, editEmailMasterName] = useState("");

  const getEmailMaster = () => {
    Axios.get("http://localhost:3001/emailmaster").then((response) => {
      setEmailMasterlist(response.data);
    });
  };

  const deleteEmail = (outgoing_email_id) => {
    if (window.confirm("Are you sure you want to delete this email")) {
      Axios.delete(
        `http://localhost:3001/delete/emailmaster/${outgoing_email_id}`
      );
      setTimeout(() => getEmailMaster(), 200);
    }
  };

  // const editEmailMaster = (e) => {
  //   Axios.post("http://localhost:3001/edit/emailmaster", {
  //     edit_emailMaster_name: edit_emailMaster_name,
  //     email : email,
  //   }).then((e) => {
  //     console.log("success");
  //     window.location.reload();
  //   });
  // };

  const [show, setShow] = useState(true);
  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getEmailMaster}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Outgoing Email Master" />
      <div className="once-content currency">
        <div className="once-head">
          {show ? <h2 className="modHeading">Search Master Email</h2> : null}
          {show ? (
            <button className="show-all-btn" onClick={() => setShow(false)}>
              {" "}
              <span>
                <i className="bi bi-calendar3"></i>
              </span>{" "}
              Show All
            </button>
          ) : (
            <button className="show-all-btn" onClick={() => setShow(true)}>
              Back
            </button>
          )}
        </div>
        {show ? (
          <div className="once-search">
            <form>
              <div className="onceSearch-input">
                <label className="countryLabel">Search</label>
                <input
                  type="text"
                  className="inField"
                  placeholder="Master Email"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <button className="sr-btn">Search</button>
              </div>
            </form>
          </div>
        ) : null}
        <div className="once-table">
          <table>
            <thead>
              <tr>
                <th className="st-bg actionSl">S.No</th>
                <th className="st-bg">Master Email ID</th>
                <th className="st-bg">SMTP</th>
                <th className="st-bg">Port No.</th>
                <th className="st-bg">Default</th>
                <th className="st-bg action">Action</th>
              </tr>
            </thead>

            <tbody>
              {emailMasterlist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.outgoing_master_email_id
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val, key) => {
                  return (
                    <tr>
                      <td>{val.serial_number}</td>
                      <td>{val.outgoing_master_email_id}</td>
                      <td>{val.outgoing_smtp}</td>
                      <td>{val.outgoing_port_no}</td>
                      <td></td>
                      <td className="action">
                        <ul>
                          <li
                            className="edit-icon"
                            // onClick={() => {
                            //   editEmailMasterName(val.outgoing_master_email_id);
                            // }}
                          >
                            <i className="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteEmail(val.outgoing_email_id)}
                            ></i>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="once-search">
          <p className="modHeading">Add Outgoing Email Master</p>
          <form>
            <div className="row">
              <div className="col-sm-3">
                <label className="countryLabel">Master Email id</label>
                <input
                type="text"
                className="form-control inField"
                placeholder="Email id"
                />
              </div>
              <div className="col-sm-3">
                <label className="countryLabel">Port no.</label>
                <input
                type="text"
                className="form-control inField"
                placeholder="Port No."
              />
              </div>
              <div className="col-sm-3">
                <label className="countryLabel">SMTP</label>
                <input
                type="text"
                className="form-control inField"
                placeholder="SMTP"
              />
              </div>
              <div className="col-sm-3">
                <label className="countryLabel">Password</label>
                <input
                type="password"
                className="form-control inField"
                placeholder="Password"
              />
              </div>
            </div>
            <div className="email-master_heading_2">
        
            </div>
            <div className="input_text">
              
              
             
              
            </div>
            <div className="mt-4">
              <button className="save-btn"> Save</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailMaster;
