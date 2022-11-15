import React from "react";
import "./Navbar.css";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";
function Navbar() {
  return (
    <div className="employeehader">
      <div className="employeetitle">
        <b>Employee</b>
      </div>
      <div className="iib">
        <div className="icon">
          <BsFillGrid3X3GapFill />
        </div>
        <div className="icon">
          <BsList />
        </div>
        <button className="addemployeebutton">+ Add Employee</button>
      </div>
    </div>
  );
}

export default Navbar;
