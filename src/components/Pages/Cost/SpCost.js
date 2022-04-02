import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import Select from "react-select";
import fileDownload from "js-file-download";
import Axios from "axios";
import WindowedSelect from "react-windowed-select";

const SpCost = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log("click");
  };

  if (modal) {
    document.body.classList.add("active-modal-cost");
  } else {
    document.body.classList.remove("active-modal-cost");
  }

  const [updateModal, setUpdateModal] = useState(false);

  const toggleUpdateModal = () => {
    setUpdateModal(!updateModal);
    console.log("click");
  };

  if (updateModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const data = [
    { value: 100, label: "option 1" },
    { value: 200, label: "option 2" },
    { value: 300, label: "option 3" },
    { value: 400, label: "option 4" },
    { value: 500, label: "option 5" },
    { value: 600, label: "option 6" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (e) => {
    setSelectedOption(e);
  };

  const [inactive, setInactive] = useState(false);

  const [workDropD, setWorkDropD] = useState([]);
  const getWorkDropD = () => {
    Axios.get("http://localhost:3001/workTypeDropD").then((response) => {
      setWorkDropD(response.data);
    });
  };

  const [languageDropD, setLanguageDropD] = useState([]);
  const getLanguageDropD = () => {
    Axios.get("http://localhost:3001/languageDropD").then((response) => {
      setLanguageDropD(response.data);
    });
  };

  const [spCostList, setSpCostList] = useState([]);
  const getSpCost = () => {
    Axios.get("http://localhost:3001/cost").then((response) => {
      setSpCostList(response.data);
    });
  };

  const [workType, setWorkType] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [searchData, setSearchData] = useState([]);
  const search = (e) => {
    Axios.post("http://localhost:3001/search", {
      workType: workType,
      sourceLanguage: sourceLanguage,
      targetLanguage: targetLanguage,
    }).then((e) => {
      setSearchData(e.data);
    });
  };

  const [sp_inr, setSpInr] = useState("");
  const [sp_usd, setSpUsd] = useState("");
  const [strength, setStrength] = useState("");
  const [fixed, setFixed] = useState("");
  const addSpCost = (e) => {
    Axios.post("http://localhost:3001/addspcost", {
      workType: workType,
      sourceLanguage: sourceLanguage,
      targetLanguage: targetLanguage,
      sp_inr: sp_inr,
      sp_usd: sp_usd,
      strength: strength,
      fixed: fixed,
    }).then((e) => {
      console.log("success");
      window.alert("Successfully Added");
    });
  };

  const downloadSampleFile = () => {
    Axios({
      url: "http://localhost:3001/SampleFile/cost",
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      fileDownload(response.data, "SP_Excel.xlsx");
    });
  };

  const [excel_file, setFile] = useState();
  const [excel_file_name, setFileName] = useState("");
  const onChange = (e) => {
    setFile(e.target.value);
    setFileName(e.target.files[0].name);
  };

  console.log(excel_file + " " + excel_file_name);

  const uploadFile = (e) => {
    e.preventDefault();
    const checkFile = excel_file_name;
    const fileType = checkFile.substring(checkFile.indexOf(".") + 1);
    if (fileType !== "xlsx") {
      window.alert("Please Upload xlsx file");
      setFile();
      setFileName("");
      window.location.reload();
    } else {
      Axios.post("http://localhost:3001/test/upload", {
        excel_file: excel_file,
        //excel_file_name: excel_file_name,
      }).then((response) => {
        console.log("success");
      });
    }
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getSpCost}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <div className="line"></div>
      <div className="inner-container">
        <div className="sp-buttons">
          <div className="create-btn">
            <button className="sp-create" onClick={toggleModal}>
              <span className="sp-icon">
                <i className="bi bi-plus"></i>
              </span>
                Create Selling           
            </button>
            {modal && (
              <div className="cost-mod">
                <div className="cost-mod__heading">
                  <div className="text">
                    <p className="modHeading">Create Selling</p>
                  </div>
                  <div className="cost-mod__close-btn">
                    <button className="modal-close" onClick={toggleModal}>
                      <i className="bi bi-x"></i>
                    </button>
                  </div>
                </div>
                <div className="cost-mod__form">
                  <form>
                    <p className="modSecHead">(For adding multiple rows via file upload)</p>
                    <div className="row my-3">
                      <label className="col-sm-4 exportFormFont">Work Type</label>
                      <div className="col-sm-6">
                      <select
                          className="form-select form-select-sm inField"
                          onClick={getWorkDropD}
                        >
                          {workDropD.map((val, key) => {
                            return (
                              <option value={val.work_type_id}>
                                {val.work_type}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="row my-3">
                      <label className="col-sm-4  exportFormFont">Select File</label>
                      <div className="col-sm-6">
                      <input
                          type="file"
                          className="spModFileIn "
                          onChange={onChange}
                        /> <div onClick={downloadSampleFile} className="spCostDownload">(Download Sample File)</div>
                      </div>
                    </div>
                     
                      <div className="cost-mod__input">
                      <div className="cost-mod__inp">
                        <button className="cost-mod__btn" onClick={uploadFile}>
                          Upload
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Adding Single row */}
                <div className="cost-mod__form">
                  <form>
                    <p className="modSecHead">(For adding single row)</p>
                    <div className="row my-3">
                      <label className="col-sm-4  exportFormFont">Work Type</label>
                      <div className="col-sm-6">
                      <select
                          className="form-select form-select-sm inField"
                          onClick={getWorkDropD}
                          onChange={(e) => setWorkType(e.target.value)}
                        >
                          {workDropD.map((val, key) => {
                            return (
                              <option value={val.work_type_id}>
                                {val.work_type}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="row my-3">
                      <label className="col-sm-4  exportFormFont">Select Language</label>
                      <div className="col-sm-6">
                        <select
                            className="form-select form-select-sm inField"
                            onClick={getLanguageDropD}
                            onChange={(e) => setSourceLanguage(e.target.value)}
                          >
                          {languageDropD.map((val, key) => {
                            return (
                              <option value={val.language_id}>
                                {val.language_name +
                                  " (" +
                                  val.language_alias +
                                  ")"}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="row my-3">
                      <label className="col-sm-4  exportFormFont">Target Language</label>
                      <div className="col-sm-6">
                        <select
                          className="form-select form-select-sm inField"
                          onClick={getLanguageDropD}
                          onChange={(e) => setTargetLanguage(e.target.value)}
                        >
                          {languageDropD.map((val, key) => {
                            return (
                              <option value={val.language_id}>
                                {val.language_name +
                                  " (" +
                                  val.language_alias +
                                  ")"}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="row my-3">
                      <label className="col-sm-4  exportFormFont">SP INR</label>
                      <div className="col-sm-6">
                        <input
                            type="text"
                            placeholder="SP INR"
                            className="form-control form-control-sm inField"
                            onChange={(e) => setSpInr(e.target.value)}
                          />
                      </div>
                    </div>
                    
                      <div className="row my-3">
                        <label className="col-sm-4  exportFormFont">SP USD</label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            placeholder="SP USD"
                            className="form-control form-control-sm inField"
                            onChange={(e) => setSpUsd(e.target.value)}
                          />
                        </div>
                        
                      </div>

                      <div className="row my-3">
                        <label className="col-sm-4  exportFormFont">Strength</label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            placeholder="Strength"
                            className="form-control form-control-sm inField"
                            onChange={(e) => setStrength(e.target.value)}
                          />
                        </div>
                        
                      </div>

                      <div className="row my-3">
                        <label className="col-sm-4  exportFormFont">Fixed</label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            placeholder="Fixed"
                            className="form-control form-control-sm inField"
                            onChange={(e) => setFixed(e.target.value)}
                          />
                        </div>
                        
                      </div>
                    <div className="cost-mod__input">
                      <div className="cost-mod__inp">
                        <button className="cost-mod__btn" onClick={addSpCost}>
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div className="delete-export">
            <button className="sp-clear">
              <span className="sp-icon">
                <i className="bi bi-trash"></i>
              </span>{" "}
              Clear Complete list
            </button>
            <button className="sp-export">Export</button>
          </div>
        </div>
        <form class="form-inline">
          <label className="imLabel">Source</label>
          <select
            className="select sp-select inField me-5"
            onClick={getLanguageDropD}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            <option>Select Source</option>
            {languageDropD.map((val, key) => {
              return (
                <option value={val.language_id}>
                  {val.language_name + " (" + val.language_alias + ")"}
                </option>
              );
            })}
          </select>
          <label className="imLabel ms-5">Target</label>
          <select
            className="select sp-select inField me-5"
            onCLick={getLanguageDropD}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option>Select Target</option>
            {languageDropD.map((val, key) => {
              return (
                <option value={val.language_id}>
                  {val.language_name + " (" + val.language_alias + ")"}
                </option>
              );
            })}
          </select>
          <label className="imLabel ms-5">Work Type</label>
          <select
            className="select sp-select inField me-5"
            onClick={getWorkDropD}
            onChange={(e) => setWorkType(e.target.value)}
          >
            <option>Select Work Type</option>
            {workDropD.map((val, key) => {
              return <option value={val.work_type_id}>{val.work_type}</option>;
            })}
          </select>
          <button className="sp-btn ms-5" onClick={search}>
            <span className="sp-search-icon">
              <i className="bi bi-search"></i>
            </span>{" "}
            Search
          </button>
        </form>

        <div className="selfTask-table sp-table">
          <div className="overflow-table">
            <table className="selfTask-table-data">
              <thead>
                <tr>
                  <th className="st-bg">S. No.</th>
                  <th className="st-bg">Source</th>
                  <th className="st-bg">Target</th>
                  <th className="st-bg">Cost</th>
                  <th className="st-bg">SP INR</th>
                  <th className="st-bg">SP USD</th>
                  <th className="st-bg">Strength</th>
                  <th className="st-bg">Fixed</th>
                  <th className="st-bg">Action</th>
                </tr>
              </thead>

              <tbody>
                {searchData.map((val, key) => {
                  return (
                    <tr>
                      <td></td>
                      <td>{val.language_name}</td>
                      <td>{val.language_name}</td>
                      <td>{val.cost}</td>
                      <td>{val.sp_inr}</td>
                      <td>{val.sp_usd}</td>
                      <td>{val.strengh}</td>
                      <td>{val.fixed}</td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon" onClick={toggleUpdateModal}>
                            <i className="bi bi-pencil-square"></i>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
                {spCostList.map((val, key) => {
                  return (
                    <tr>
                      <td></td>
                      <td>{val.language_name}</td>
                      <td>{val.language_name}</td>
                      <td>{val.cost}</td>
                      <td>{val.sp_inr}</td>
                      <td>{val.sp_usd}</td>
                      <td>{val.strengh}</td>
                      <td>{val.fixed}</td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon" onClick={toggleUpdateModal}>
                            <i className="bi bi-pencil-square"></i>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
                {/* <tr><td onClick={toggleUpdateModal} ><i className="bi bi-pencil-square"></i></td></tr> */}
              </tbody>
            </table>
            {updateModal && (
              <div className="update-mod">
                <div className="update-mod__heading">
                  <div className="text">
                    <p>Update Selling</p>
                  </div>
                  <div className="update-mod__close-btn">
                    <button className="modal-close" onClick={toggleUpdateModal}>
                      <i className="bi bi-x"></i>
                    </button>
                  </div>
                </div>
                {/* Adding Single row */}
                <div className="update-mod__form">
                  <form>
                    <div className="update-mod__input">
                      <div className="update-mod__inp">
                        <label>Source Language</label>
                        <select
                          className="search-select"
                          onClick={getLanguageDropD}
                        >
                          {languageDropD.map((val, key) => {
                            return (
                              <option value={val.language_id}>
                                {val.language_name +
                                  " (" +
                                  val.language_alias +
                                  ")"}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="update-mod__inp">
                        <label>Target Language</label>
                        <select
                          className="search-select"
                          onClick={getLanguageDropD}
                        >
                          {languageDropD.map((val, key) => {
                            return (
                              <option value={val.language_id}>
                                {val.language_name +
                                  " (" +
                                  val.language_alias +
                                  ")"}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="update-mod__inp">
                        <label>Cost</label>
                        <input type="text" placeholder="SP INR" />
                      </div>

                      <div className="update-mod__inp">
                        <label>SP INR</label>
                        <input type="text" placeholder="SP INR" />
                      </div>
                      <div className="update-mod__inp">
                        <label>SP USD</label>
                        <input type="text" placeholder="SP USD" />
                      </div>

                      <div className="update-mod__inp">
                        <label>Strength</label>
                        <input type="text" placeholder="Strength" />
                      </div>

                      <div className="update-mod__inp">
                        <label>Fixed</label>
                        <input type="text" placeholder="Fixed" />
                      </div>

                      <div className="update-mod__inp">
                        <button className="update-mod__btn">Save</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpCost;
