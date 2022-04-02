import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import fileDownload from "js-file-download";
import Axios from "axios";

const Import = () => {
  const [category, setCategory] = useState([]);
  const [status, setStatus] = useState([]);
  //   const [excelFile, getExcelFile] = useState("");

  const getCategory = () => {
    Axios.get("http://localhost:3001/category").then((response) => {
      setCategory(response.data);
    });
  };
  const getStatus = () => {
    Axios.get("http://localhost:3001/status").then((response) => {
      setStatus(response.data);
    });
  };

  const downloadSampleFile = () => {
    Axios({
      url: "http://localhost:3001/downloadSampleFile",
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      fileDownload(response.data, "TACT_Excel.xlsx");
    });
  };

  //   const addImportData = (e) => {
  //     e.preventDefault();
  //     Axios.post("http://localhost:3001/addimportdata", {
  //       excelFile: excelFile,
  //     }).then((e) => {
  //       console.log("success");
  //       console.log(excelFile);
  //     });
  //   };

  return (
    <div className="once-content currency">
      <div className="once-head">
        <h2>Import</h2>
        <Link to="/ImportedRecords" className="show-all-btn">
          {" "}
          <span>
            {" "}
            <i className="bi bi-arrow-left"></i>{" "}
          </span>{" "}
          Back to listing
        </Link>
      </div>
     
        <form>
          <div class="row my-3">
            <div class="col-sm-4 imLabel">
              <label className="exportFormFont" >Category</label>
            </div>
            <div class="col-sm-4">
              <select id="country" name="country" className="form-select form-select-sm inField" onClick={getCategory}>
                <option>Select Category</option>
                {category.map((val, key) => {
                  return (
                    <option value={val.category_name}>
                      {val.category_name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div class="row my-3">
            <div class="col-sm-4 imLabel">
              <label className="exportFormFont">Status</label>
            </div>
            <div class="col-sm-4">
              <select id="country" name="country" className="form-select form-select-sm inField" onClick={getStatus}>
                <option>Select Status</option>
                {status.map((val, key) => {
                  return (
                    <option value={val.status_name}>{val.status_name}</option>
                  );
                })}
              </select>
            </div>
          </div>

          <div class="row my-3">
            <div class="col-sm-4 imLabel">
              <label className="exportFormFont">Source</label>
            </div>
            <div class="col-sm-4">
              <input type="text" className="form-control form-control-sm inField" placeholder="Source" />
            </div>
          </div>

          <div class="row my-2">
            <div class="col-sm-4 imLabel">
              <label className="exportFormFont">File</label>
            </div>
            <div class="col-sm-4">
              <input 
                type="file"
                className="imFileIn"
                //   name="xlsxFile"
                //   onChange={(e) => getExcelFile(e.target.files[0])}
              />
              <div className="inlineText">(Import in xlsx format)</div>
              <br />
              <div>
                (Download Sample File)
              </div>
            </div>
          </div>
          <div className="import-form">
          <div className="import-btn-upload">
            <div className="upload">
              <button className="upload-btn u-btn">Upload</button>
              <button className="refresh-btn u-btn">
                <span>
                  <i className="bi bi-arrow-clockwise"></i>
                </span>{" "}
                Refresh
              </button>
            </div>
          </div>
          </div>
          
        </form>
      
    </div>
  );
};

export default Import;
