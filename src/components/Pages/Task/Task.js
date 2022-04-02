import React from "react";
import { useState } from "react";
import TaskContent from "./TaskContent";
import SideMenu from "../SideMenu/SideMenu";
import SelfTask from "./TaskContent/SelfTask";
import OtherTask from "./TaskContent/OtherTask";
import Remainder from "./TaskContent/Remainder";
import ApprovalDisapproval from "./TaskContent/ApprovalDisapproval";


const Task  = () =>{

    const [active , setActive] = useState("SelfTask");
    const [inactive,setInactive] = useState(false)

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
        <div className="task">
              <div className="task__bar">
                   {/* <div >
                        <button className="task__btn" onClick={() => setActive("SelfTask")} >Self Task</button>
                        <button className="task__btn" onClick={() => setActive("OtherTask")}  >Other Task</button>
                        <button className="task__btn" onClick={() => setActive("Remainder")} >Reminder</button>
                        <button className="task__btn" onClick={() => setActive("ApprovalDisapproval")} >Approval/Disapproval</button>
                   </div> */}
                  <ul className="nav nav-tabs mx-2">
                    <li className="nav-item">
                      <a className={`nav-link ${active === "SelfTask" ? "active" : ""}`} onClick={() => setActive("SelfTask")}>
                      Self Task
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${active === "OtherTask" ? "active" : ""}`}  onClick={() => setActive("OtherTask")}>
                      Other Task
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${active === "Remainder" ? "active" : ""}`}  onClick={() => setActive("Remainder")}>
                      Reminder
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${active === "ApprovalDisapproval" ? "active" : ""}`}  onClick={() => setActive("ApprovalDisapproval")}>
                      Approval/Disapproval
                      </a>
                    </li>
                  </ul>
              </div>
              <div className="task__main-content">
                       {active === "SelfTask" && <SelfTask />}
                       {active === "OtherTask" && <OtherTask />}
                       {active === "Remainder" && <Remainder />}
                       {active === "ApprovalDisapproval" && <ApprovalDisapproval />}
              </div>
        </div>
    </div>
    )
}

export default Task;