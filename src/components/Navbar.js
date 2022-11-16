import React from "react";
import "./Navbar.css";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="employeehader">
      <div className="employeetitle">
        <b>Employee</b>
      </div>
      <div className="iib">
        <Link className="icon" to="/">
          <BsFillGrid3X3GapFill />
        </Link>
        <Link className="icon" to="/list">
          <BsList />
        </Link>
        <Link to="/from">
          <button className="addemployeebutton">+ Add Employee</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
