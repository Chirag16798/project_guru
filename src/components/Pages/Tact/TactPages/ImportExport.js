import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../../OncePages/OnceHeader";
import Import from "./Import";
import Export from "./Export";

const ImportExport = () => {
  const [active, setActive] = useState("Import");
  const [inactive, setInactive] = useState(false);

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Import & Export Tact" />
      <div className="tact">
        <div className="tact__bar">
          <div>
            {/* <button className="tact__btn" onClick={() => setActive("Import")}>
              Import
            </button>
            <button className="tact__btn" onClick={() => setActive("Export")}>
              Export
            </button> */}
            <ul className="nav nav-tabs mx-2">
              <li className="nav-item">
                <button className={`nav-link ${active === "Import" ? "active" : ""}`} onClick={() => setActive("Import")}>
                Import
                </button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${active === "Export" ? "active" : ""}`}  onClick={() => setActive("Export")}>
                Export
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tact__main-content">
          {active === "Import" && <Import />}
          {active === "Export" && <Export />}
        </div>
      </div>
    </div>
  );
};

export default ImportExport;
