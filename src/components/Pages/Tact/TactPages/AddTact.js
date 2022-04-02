import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../../OncePages/OnceHeader";
import Axios from "axios";

const AddTact = () => {
  const [inactive, setInactive] = useState(false);

  const [statusDropDown, setStatusDropDown] = useState([]);
  const [categoryDropDown, setCategoryDropDown] = useState([]);
  const [countrydropdown, setCountryDropdown] = useState([]);
  const [ourcompanyList, setOurCompanyList] = useState([]);

  const getStatus = () => {
    Axios.get("http://localhost:3001/statusDropD").then((response) => {
      setStatusDropDown(response.data);
    });
  };

  const getCategory = () => {
    Axios.get("http://localhost:3001/categoryDropD").then((response) => {
      setCategoryDropDown(response.data);
    });
  };

  const getCountry = () => {
    Axios.get("http://localhost:3001/countryDropD").then((response) => {
      setCountryDropdown(response.data);
    });
  };

  const getOurCompanyList = () => {
    Axios.get("http://localhost:3001/ourCompanyDropD").then((response) => {
      setOurCompanyList(response.data);
    });
  };

  const [enteredBy, setEnteredBy] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [country, setCountry] = useState("");
  const [ourCompany, setOurCompany] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [salutation, setSalutation] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [emailId, setEmailId] = useState("");
  const [secondaryEmail, setSecondaryEmail] = useState("");
  const [mobileNo1, setMobileNo1] = useState("");
  const [mobileNo2, setMobileNo2] = useState("");
  const [skype, setSkype] = useState("");
  const [website, setWebsite] = useState("");
  const [note_wasp, setNote_wasp] = useState("");
  const [cv, setCv] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [source, setSource] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccountNo, setBankAccountNo] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [bankDetails, setBankDetails] = useState("");
  const [bankAddress, setBankAddress] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [paypalId, setPaypalId] = useState("");
  const [moneyBooker, setMoneyBooker] = useState("");
  const [currency, setCurrency] = useState("");
  const [minBillIndia, setMinBillIndia] = useState("");
  const [minBillForeign, setMinBillForeign] = useState("");
  const [gstApplicable, setGstApplicable] = useState("");
  const [allotedLimit, setAllotedLimit] = useState("");
  const [waspTact, setWaspTact] = useState("");
  const [approvDisapprov, setApprovDisapprov] = useState("");

  const addTact = (e) => {
    if (
      emailId.length === 0 ||
      status.length === 0 ||
      category.length === 0 ||
      waspTact === 0
    ) {
      window.alert("Please enter all mandatory fields");
    } else {
      Axios.post("http://localhost:3001/addtact", {
        enteredBy: enteredBy,
        category: category,
        status: status,
        country: country,
        ourCompany: ourCompany,
        companyName: companyName,
        salutation: salutation,
        contactPerson: contactPerson,
        emailId: emailId,
        secondaryEmail: secondaryEmail,
        mobileNo1: mobileNo1,
        mobileNo2: mobileNo2,
        skype: skype,
        website: website,
        note_wasp: note_wasp,
        cv: cv,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        pinCode: pinCode,
        projectManager: projectManager,
        source: source,
        bankName: bankName,
        bankAccountNo: bankAccountNo,
        ifscCode: ifscCode,
        bankDetails: bankDetails,
        bankAddress: bankAddress,
        swiftCode: swiftCode,
        paypalId: paypalId,
        moneyBooker: moneyBooker,
        currency: currency,
        minBillIndia: minBillIndia,
        minBillForeign: minBillForeign,
        gstApplicable: gstApplicable,
        allotedLimit: allotedLimit,
        waspTact: waspTact,
        approvDisapprov: approvDisapprov,
      }).then((e) => {
        console.log("added");
        window.alert("Added");
      });
    }
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Add Tact" />
      <div className="inner-container">
        <div className="search-form">
          <div className="add-heading">
            <h3>Basic Information</h3>
          </div>
          <form>
            <div className="row my-2">
                <div className="col-sm-3">
                    <label className="sLabel">Entered by</label>
                    <input
                      type="text" className="form-control form-control-sm my-1 inField"
                      onChange={(e) => setEnteredBy(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Category</label>
                    <select
                      className="search-select form-select form-select-sm my-1 inField"
                      onClick={getCategory}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>Select Category</option>
                      {categoryDropDown.map((val, key) => {
                        return (
                          <option value={val.category_id}>
                            {val.category_name}
                          </option>
                        );
                      })}
                    </select>
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Status</label>
                    <select
                      className="form-select form-select-sm my-1 inField"
                      onClick={getStatus}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option>Select Status</option>
                      {statusDropDown.map((val, key) => {
                        return (
                          <option value={val.status_id}>{val.status_name}</option>
                        );
                      })}
                    </select>   
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Country</label>
                    <select
                      className="search-select form-select form-select-sm my-1 inField"
                      onClick={getCountry}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option>Select Country</option>
                      {countrydropdown.map((val, key) => {
                        return (
                          <option value={val.country_code}>
                            {val.country_name}
                          </option>
                        );
                      })}
                    </select>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-sm-3">
                    <label className="sLabel">Our Company</label>
                    <select
                      className="search-select form-select form-select-sm my-1 inField"
                      onClick={getOurCompanyList}
                      onChange={(e) => setOurCompany(e.target.value)}
                    >
                      <option>Select Company</option>
                      {ourcompanyList.map((val, key) => {
                        return (
                          <option value={val.companies_id}>
                            {val.companies_name}
                          </option>
                        );
                      })}
                    </select>
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Company Name</label>
                    <input
                      type="text" className="form-control form-control-sm my-1 inField"
                      placeholder="Company Name"
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Salutation</label>
                    <input
                      type="text" className="form-control form-control-sm my-1 inField"
                      placeholder="Salutation"
                      onChange={(e) => setSalutation(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Contact Person</label>
                    <input
                      type="text" className="form-control form-control-sm my-1 inField"
                      placeholder="Contact Preson"
                      onChange={(e) => setContactPerson(e.target.value)}
                    />
                </div>
            </div>

            <div className="row my-2">
                <div className="col-sm-3">
                    <label className="sLabel">Email Id</label>
                    <input
                      type="email" className="form-control form-control-sm my-1 inField"
                      placeholder="Email ID"
                      onChange={(e) => setEmailId(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Secondary Email Id</label>
                    <input
                      type="email" className="form-control form-control-sm my-1 inField"
                      placeholder="Secondary Email Id"
                      onChange={(e) => setSecondaryEmail(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Mobile No.1</label>
                    <input
                      type="tel"
                      placeholder="Mobile Number" className="form-control form-control-sm my-1 inField"
                      onChange={(e) => setMobileNo1(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Mobile No.2</label>
                    <input
                      type="tel" className="form-control form-control-sm my-1 inField"
                      placeholder="Mobile Number"
                      onChange={(e) => setMobileNo2(e.target.value)}
                    />
                </div>
            </div>
            <div className="row my-2">
                <div className="col-sm-3">
                    <label className="sLabel">Skype</label>
                    <input
                      type="text"
                      placeholder="Skype" className="form-control form-control-sm my-1 inField"
                      onChange={(e) => setSkype(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Website</label>
                    <input
                      type="url"
                      placeholder="Website" className="form-control form-control-sm my-1 inField"
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Note</label>
                    <input
                      type="text"
                      placeholder="Note" className="form-control form-control-sm my-1 inField"
                      onChange={(e) => setNote_wasp(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Attach CV</label>
                    <input
                      className="inp-src-choose form-control form-control-sm my-1 inField"
                      type="file" 
                      onChange={(e) => setCv(e.target.value)}
                    />
                </div>
            </div>
            <div className="row my-2">
                <div className="col-sm-3">
                    <label className="sLabel">Address Line 1</label>
                    <input
                      type="text"
                      placeholder="Address Line 1" className="form-control form-control-sm my-1 inField"
                      onChange={(e) => setAddressLine1(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Address Line 2</label>
                    <input
                      type="text"
                      placeholder="Address Line 2" className="form-control form-control-sm my-1 inField"
                      onChange={(e) => setAddressLine2(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">City</label>
                    <input
                      type="text"
                      placeholder="City" className="form-control form-control-sm my-1 inField"
                      onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Pin or Zip Code</label>
                    <input
                      type="text"
                      placeholder="Pin or Zip Code" className="form-control form-control-sm my-1 inField"
                      onChange={(e) => setPinCode(e.target.value)}
                    />
                </div>
            </div>
            <div className="row my-2">
                <div className="col-sm-3">
                    <label className="sLabel">Project Manager</label>
                    <input
                      type="text"
                      placeholder="Project Manager" className="form-control form-control-sm my-1 inField"
                      onChange={(e) => setProjectManager(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Source</label>
                    <input
                      type="text"
                      placeholder="Source" className="form-control form-control-sm my-1 inField"
                      onChange={(e) => setSource(e.target.value)}
                    />
                </div>
            </div>
           
            <div className="search-button">
              <button className="s-btn">Search</button>
            </div>
          </form>

          {/* ===== Pament Details ====== */}

          <div className="add-heading2">
            <h3>Payment Details</h3>
          </div>

          <form>
            <div className="row my-2">
              <div className="col-sm-3">
                <label className="sLabel">Bank Name</label>
                <input
                  type="text"
                  placeholder="Bank Name" className="form-control form-control-sm my-1  inField"
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>

              <div className="col-sm-3">
                <label className="sLabel">Bank Account No.</label>
                <input
                  type="text"
                  placeholder="Banck Account No." className="form-control form-control-sm my-1 inField"
                  onChange={(e) => setBankAccountNo(e.target.value)}
                />
              </div>

              <div className="col-sm-3">
                <label className="sLabel">IFSC Code</label>
                <input
                  type="text"
                  placeholder="IFSC Code" className="form-control form-control-sm my-1 inField"
                  onChange={(e) => setIfscCode(e.target.value)}
                />
              </div>

              <div className="col-sm-3">
                <label className="sLabel">Bank Details</label>
                <input
                  type="text"
                  placeholder="Bank Details" className="form-control form-control-sm my-1 inField"
                  onChange={(e) => setBankDetails(e.target.value)}
                />
              </div>
            </div>

            <div className="row my-2">
              

              <div className="col-sm-3">
                <label className="sLabel">Bank Address</label>
                <input
                  type="text"
                  placeholder="Bank Address" className="form-control form-control-sm my-1 inField"
                  onChange={(e) => setBankAddress(e.target.value)}
                />
              </div>

              <div className="col-sm-3">
                <label className="sLabel">Swift Code</label>
                <input
                  type="text"
                  placeholder="Swift Code"
                  onChange={(e) => setSwiftCode(e.target.value)} className="form-control form-control-sm my-1 inField"
                />
              </div>

              <div className="col-sm-3">
                <label className="sLabel">PayPal</label>
                <input
                  type="text"
                  placeholder="PayPal"
                  onChange={(e) => setPaypalId(e.target.value)} className="form-control form-control-sm my-1 inField"
                />
              </div>

              <div className="col-sm-3">
                <label className="sLabel">Money Booker</label>
                <input
                  type="text"
                  placeholder="Money Booker"
                  onChange={(e) => setMoneyBooker(e.target.value)} className="form-control form-control-sm my-1 inField"
                />
              </div>

              
            </div>

            <div className="row my-2">
                <div className="col-sm-3">
                    <label className="sLabel">Select Currency</label>
                    <select
                      className="search-select form-select form-select-sm my-1 inField"
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option value="australia">Australia</option>
                      <option value="canada">Canada</option>
                      <option value="usa">USA</option>
                    </select>
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Min Bill Indian Language</label>
                    <input
                      type="email" className="form-control form-control-sm my-1 inField"
                      placeholder="Min Bill Indian Language"
                      onChange={(e) => setMinBillIndia(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Min Bill Foreign Language</label>
                    <input
                      type="tel" className="form-control form-control-sm my-1 inField"
                      placeholder="Min Bill Foreign Language"
                      onChange={(e) => setMinBillForeign(e.target.value)}
                    />
                </div>
                <div className="col-sm-3">
                    <label className="sLabel">Limit Alloted</label>
                    <input
                      type="text"
                      placeholder="Limit Alloted" className="form-control form-control-sm my-1 inField"
                      onChange={(e) => setAllotedLimit(e.target.value)}
                    />
                </div>
            </div>
            <div className="row my-2">
                <div className="col-sm-4">
                <label className="sLabel">GST Applicable</label> <br />
                    <div className="my-3 form-check form-check-inline">
                        <input
                        type="radio"
                        id="yes"
                        name="GST_applicable"
                        value="Y"
                        className="search-radio form-check-input"
                        onChange={(e) => setGstApplicable(e.target.value)}
                        />
                        <label className="sLabel" for="yes">Yes</label>
                    </div>
                    <div className="form-check form-check-inline my-3">
                        <input
                        type="radio"
                        id="no"
                        name="GST_applicable"
                        value="N"
                        onChange={(e) => setGstApplicable(e.target.value)}
                        className="search-radio form-check-input"
                        />
                        <label className="sLabel" for="no">No</label>
                    </div>
                </div>
                <div className="col-sm-4">
                    <label className="sLabel">Show in</label> <br />
                    <div className="my-2 form-check form-check-inline">
                        <input
                        type="radio"
                        id="wasp"
                        name="show_in"
                        value="W"
                        onChange={(e) => setWaspTact(e.target.value)}
                        className="search-radio form-check-input"
                        />
                        <label className="sLabel" for="wasp">Wasp</label> 
                    </div>
                    <div className="my-2 form-check form-check-inline">
                        <input
                        type="radio"
                        id="tact"
                        name="show_in"
                        value="T"
                        onChange={(e) => setWaspTact(e.target.value)}
                        className="search-radio form-check-input"
                        />
                        <label className="sLabel" for="tact">Tact</label>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="my-4 form-check form-check-inline">
                    <input
                      type="radio"
                      name="approve"
                      value="A"
                      className="search-radio form-check-input"
                      onChange={(e) => setApprovDisapprov(e.target.value)}
                    />
                    <label className="sLabel" htmlFor="Approved">Approved</label>
                    </div>
                    <div className="my-4 form-check form-check-inline">
                        <input
                        type="radio"
                        name="approve"
                        value="D"
                        onChange={(e) => setApprovDisapprov(e.target.value)}
                        className="search-radio form-check-input"
                        />
                        <label className="sLabel" htmlFor="Disapproved">Disapproved</label>
                    </div>
                </div>
            </div>         

            <div className="search-input approve-inp">
              <div className="search-inp">
                
                
              </div>
            </div>

            <div className="search-button">
              <button className="s-btn" onClick={addTact}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTact;
