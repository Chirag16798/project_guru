import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";
import OnceHeader from "../OncePages/OnceHeader";
import Axios from "axios";

const AddUser = () => {
  //-------------------Add user states-------------------
  const [inactive, setInactive] = useState(false);
  const [hide, setHide] = useState(false);
  const [salutation, setSalutation] = useState("");
  const [nickName, setNickName] = useState("");
  const [surName, setSurName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [skypeId, setSkypeId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [work, setWork] = useState("");
  const [ourCompany, setOurCompany] = useState("");
  const [starSquare, setStarSquare] = useState("");
  const [colour, setColour] = useState("");
  const [doj, setDoj] = useState("");
  const [salaryToday, setSalaryToday] = useState("");
  const [currentEmailPass, setCurrentEmailPass] = useState("");
  const [currentSkypePass, setCurrentSkypePass] = useState("");
  const [calenderCode, setCalenderCode] = useState("");
  const [personalMobileNo, setPersonalMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [personalEmailId, setPersonalEmailId] = useState("");
  const [city, setCity] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [photo, setPhoto] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [paypalId, setPaypalId] = useState("");
  const [password, setPassword] = useState("");
  const [allowedHoliday, setAllowedHoliday] = useState("");
  const [tempHoliday, setTempHoliday] = useState("");
  const [lunchAllowed, setLunchAllowed] = useState("");
  const [idlingAllowed, setIdlingAllowed] = useState("");
  const [loginPermit, setLoginPermit] = useState("");
  const [logoutPermit, setLogoutPermit] = useState("");
  const [loginCompulsory, setLoginCompulsory] = useState("");
  const [logoutCompulsory, setLogoutCompulsory] = useState("");
  const [warning, setWarning] = useState("");
  const [serious, setSerious] = useState("");
  const [weeklyOff, setWeeklyOff] = useState("");
  const [hoursOfWork, setHoursOfWork] = useState("");

  const addUser = (e) => {
    Axios.post("http://localhost:3001/adduser", {
      salutation: salutation,
      nickName: nickName,
      surName: surName,
      firstName: firstName,
      emailId: emailId,
      skypeId: skypeId,
      mobileNo: mobileNo,
      position: position,
      department: department,
      work: work,
      ourCompany: ourCompany,
      starSquare: starSquare,
      colour: colour,
      doj: doj,
      salaryToday: salaryToday,
      currentEmailPass: currentEmailPass,
      currentSkypePass: currentSkypePass,
      calenderCode: calenderCode,
      personalMobileNo: personalMobileNo,
      address: address,
      personalEmailId: personalEmailId,
      city: city,
      birthDate: birthDate,
      pincode: pincode,
      country: country,
      photo: photo,
      beneficiaryName: beneficiaryName,
      bankName: bankName,
      bankAccount: bankAccount,
      ifscCode: ifscCode,
      paypalId: paypalId,
      password: password,
      allowedHoliday: allowedHoliday,
      tempHoliday: tempHoliday,
      lunchAllowed: lunchAllowed,
      idlingAllowed: idlingAllowed,
      loginPermit: loginPermit,
      logoutPermit: logoutPermit,
      loginCompulsory: loginCompulsory,
      logoutCompulsory: logoutCompulsory,
      warning: warning,
      serious: serious,
      weeklyOff: weeklyOff,
      hoursOfWork: hoursOfWork,
    }).then((e) => {
      console.log("success");
    });
  };

  const addLoginDetails = (e) => {
    Axios.post("http://localhost:3001/loginDetails", {
      emailId: emailId,
      password: password,
    }).then((e) => {
      console.log("success");
    });
  };

  // const [permissionDetailsId, setPermissionDetailsId] = useState("");
  const permissionDetails = () => {
    Axios.get("http://localhost:3001/permissions/details", {
      emailId: emailId,
      password: password,
    }).then((e) => {
      // setPermissionDetailsId(e.data);
      console.log(e.data);
    });
  };

  const addUserDetails = (e) => {
    addUser();
    addLoginDetails();
    permissionDetails();
    window.alert("User Added Successfully");
  };

  //-----------------------------------Drop Down-----------------------------------
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

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Add User" />
      <div className="inner-container">
        <div className="search-form">
          <div className="edit-company-head add-heading">
            <h3 className="modHeading">User</h3>
            <Link to="/UserDirectory">
              {" "}
              <button className="edit-back-btn">
                {" "}
                <span>
                  <i className="bi bi-arrow-left"></i>
                </span>{" "}
                Back
              </button>
            </Link>
          </div>
          <form>
            <div className="row my-3">
              <div className="col-sm-2">
                <label className="countryLabel">Salutation</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Salutation"
                  onLoad={(e) => setSalutation(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Nick Name</label>
                  <input
                    type="text"
                    className="form-control inField"
                    placeholder="Nick Name"
                    onChange={(e) => setNickName(e.target.value)}
                  />
              </div>
              <div className="col-sm-1">
                  <label className="countryLabel">Sur Name</label>
                  <input
                    className="form-control inField"
                    type="text"
                    placeholder="Sur Name"
                    onChange={(e) => setSurName(e.target.value)}
                  />
              </div>
              <div className="col-sm-1">
                <label className="countryLabel">First Name</label>
                <input
                  className="form-control inField"
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Email Id</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Email Id"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Skype Id</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Skype Id"
                  onChange={(e) => setSkypeId(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Mobile No.</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Mobile No."
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-sm-2">
                <label className="countryLabel">Position</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Position"
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Department</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Department"
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Work</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Work"
                  onChange={(e) => setWork(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Our Company</label>
                <select
                  className="form-select inField"
                  onClick={getCompanyDropDown}
                  onChange={(e) => setOurCompany(e.target.value)}
                >
                  <option>Select Our Company</option>
                  {companydropdown.map((val, key) => {
                    return (
                      <option value={val.companies_id}>
                        {val.companies_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Star / Square</label>
                <select
                  className="form-select inField"
                  onChange={(e) => setStarSquare(e.target.value)}
                >
                  <option>Select Symbol</option>
                  <option value="Star">Star</option>
                  <option value="Square">Square</option>
                </select>
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Colour</label>
                <select
                  className="form-select inField"
                  onChange={(e) => setColour(e.target.value)}
                >
                  <option>Select Colour</option>
                  <option value="red">Red</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="indigo">Indigo</option>
                  <option value="violet">Violet</option>
                </select>
              </div>
            </div>
            <div className="row my-3">
                <div className="col-sm-2">
                  <label className="countryLabel">DOJ</label>
                  <input
                    type="date"
                    className="form-control inField"
                    placeholder="DOJ"
                    onChange={(e) => setDoj(e.target.value)}
                  />
                </div>
                <div className="col-sm-2">
                  <label className="countryLabel">Salary Today</label>
                  <input
                    type="text"
                    className="form-control inField"
                    placeholder="Salary Today"
                    onChange={(e) => setSalaryToday(e.target.value)}
                  />
                </div>
                <div className="col-sm-2">
                  <label className="countryLabel">Current Email Password</label>
                  <input
                    type="email"
                    className="form-control inField"
                    placeholder="Current Email Password"
                    onChange={(e) => setCurrentEmailPass(e.target.value)}
                  />
                </div>
                <div className="col-sm-2">
                    <label className="countryLabel">Current Skype Password</label>
                    <input
                      type="text"
                      className="form-control inField"
                      placeholder="Current Skype Password"
                      onChange={(e) => currentSkypePass(e.target.value)}
                    />
                </div>
                <div className="col-sm-2">
                  <label className="countryLabel">Google Calander Embed Code</label>
                  <input
                    type="text"
                    className="form-control inField"
                    placeholder="Google Calander Embed Code"
                    onChange={(e) => setCalenderCode(e.target.value)}
                  />
                </div>
            </div>

            <div className="add-heading">
              <h3 className="modHeading">Personal Details</h3>
            </div>
            <div className="row my-3">
              <div className="col-sm-2">
                <label className="countryLabel">Personal Mobile No.</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Personal Mobile No."
                  onChange={(e) => setPersonalMobileNo(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Communication Address</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Communication Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Personal Email Id</label>
                <input
                  type="email"
                  className="form-control inField"
                  placeholder="Personal Email Id"
                  onChange={(e) => setPersonalEmailId(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">City</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">DOB</label>
                <input
                  type="date"
                  className="form-control inField"
                  placeholder="DOB"
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Pincode</label>
                <input
                  type="number"
                  className="form-control inField"
                  placeholder="Pincode"
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-sm-2">
                <label className="countryLabel">Country</label>
                <select
                  className="form-select inField"
                  onChange={(e) => setCountry(e.target.value)}
                  onClick={getCountryDropDown}
                >
                  <option>Select Country</option>
                  {countrydropdown.map((val, key) => {
                    return (
                      <option value={val.country_id}>{val.country_name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Photo</label>
                <input type="file" className="addUserImg" onChange={(e) => setPhoto(e.target.value)} />
              </div>
            </div>

            <div className="add-heading">
              <h3 className="modHeading">Bank Details</h3>
            </div>
            <div className="row my-3">
                <div className="col-sm-2">
                  <label className="countryLabel">Benificiary Name</label>
                  <input
                    type="text"
                    className="form-control inField"
                    placeholder="Benificiary Name"
                    onChange={(e) => setBeneficiaryName(e.target.value)}
                  />
                </div>
                <div className="col-sm-2">
                  <label className="countryLabel">Bank Name</label>
                  <input
                    type="text"
                    className="form-control inField"
                    placeholder="Bank Name"
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
                <div className="col-sm-2">
                  <label className="countryLabel">Bank Account No.</label>
                  <input
                    type="text"
                    className="form-control inField"
                    placeholder="Bank Account No"
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
                <div className="col-sm-2">
                  <label className="countryLabel">Bank IFSC Code</label>
                  <input
                    type="text"
                    className="form-control inField"
                    placeholder="Bank IFSC Code"
                    onChange={(e) => setIfscCode(e.target.value)}
                  />
                </div>
                  <div className="col-sm-2">
                    <label className="countryLabel">PayPal Id</label>
                    <input
                      type="text"
                      className="form-control inField"
                      placeholder="PayPal Id"
                      onChange={(e) => setPaypalId(e.target.value)}
                    />
                  </div>

            </div>                    


            <div className="add-heading">
              <h3 className="modHeading">Password</h3>
            </div>
            <div className="row my-3">
              <div className="col-sm-2">
              <label className="countryLabel">Password</label>
                <input
                  type="password"
                  className="form-control inField"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>


            <div className="add-heading">
              <h3 className="modHeading">Attendance</h3>
            </div>
            <div className="row my-3">
              <div className="col-sm-2">
                <label className="countryLabel">Holiday Allowed</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Holiday Allowed"
                  onChange={(e) => setAllowedHoliday(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Temporary Holiday</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Temporary Holiday"
                  onChange={(e) => setTempHoliday(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">{`Lunch Allowed (minutes)`}</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Bank Account No"
                  onChange={(e) => setLunchAllowed(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Idling Allowed</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Idling Allowed"
                  onChange={(e) => setIdlingAllowed(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Login Permitted</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Login Permitted"
                  onChange={(e) => setLoginPermit(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Logout Permitted</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Logout Permitted"
                  onChange={(e) => setLogoutPermit(e.target.value)}
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-sm-2">
                <label className="countryLabel">Login Compulsory</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Login Compulsory"
                  onChange={(e) => setLoginCompulsory(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Logout Compulsory</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Logout Compulsory"
                  onChange={(e) => setLogoutCompulsory(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Warning</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Warning"
                  onChange={(e) => setWarning(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Serious</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Serious"
                  onChange={(e) => setSerious(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Weekly Off</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Weekly Off"
                  onChange={(e) => setWeeklyOff(e.target.value)}
                />
              </div>
              <div className="col-sm-2">
                <label className="countryLabel">Hours of Work</label>
                <input
                  type="text"
                  className="form-control inField"
                  placeholder="Hours of Work"
                  onChange={(e) => setHoursOfWork(e.target.value)}
                />
              </div>
            </div>
            
            <div className="search-button">
              <button className="s-btn" onClick={addUserDetails}>
                Save
              </button>
            </div>
          </form>

          {/* ===== Pament Details ====== */}
        </div>
      </div>
    </div>
  );
};

export default AddUser;
