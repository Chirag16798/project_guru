import React from "react";
import { useState } from "react";
import Calculator from "./Calculator/Calculator";
import NotesApp from "./Notes/NotesAPP";

const SideContent = () => {
  const [inactive, setInactive] = useState(false);
  const [active, setActive] = useState("Calculator");

  return (
    <div className={`right  ${inactive ? "open" : ""}`}>
      <div className="sideContent">
        <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
          {inactive ? (
            <i className="bi bi-chevron-right"></i>
          ) : (
            <i className="bi bi-chevron-left"></i>
          )}
        </div>
        {/* <div className="content">
          <div className="content__menu">
            <button
              className="content-btn"
              onClick={() => setActive("Calculator")}
            >
              Calculator
            </button>
            <button className="content-btn" onClick={() => setActive("Notes")}>
              Notepad
            </button>
          </div>
        </div> */}

        <div className="content">
          <div >
            <ul className="nav nav-tabs mx-2">
              <li className="nav-item">
                <button className={`nav-link ${active === "Calculator" ? "active" : ""}`} onClick={() => setActive("Calculator")}>
                  Calculator
                </button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${active === "Notes" ? "active" : ""}`}  onClick={() => setActive("Notes")}>
                  Notes
                </button>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="main-content">
          {active === "Calculator" && <Calculator />}
          {active === "Notes" && <NotesApp />}
        </div>
      </div>
    </div>
  );
};

export default SideContent;
