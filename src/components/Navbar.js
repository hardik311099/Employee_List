import React, { useState } from "react";
// import  ReactDOM  from "react";
import "./Navbar.css";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import From from "./FromView/From";
function Navbar() {
  const [isShow, setisShow] = useState(false);
  let handalClickShow = () => {
    setisShow(true);
  };
  let handalClickClose = () => {
    setisShow(false);
  };
  return (
    <div
      style={
        {
          // height: "100%",
          // display: "grid",
          // justifyContent: "center",
          // alignItems: "center",
          // textAlign: "center",
        }
      }
    >
      <div
        className="employeehader"
        style={
          {
            // maxWidth: 400,
            // height: "1000px",
            // position: "relative",
            // backgroundColor: "rgba(0,0,0,0.3)",
            // margin: "0 auto",
            // fontSize: "15px",
          }
        }
      >
        <div className="employeetitle">
          <Link style={{ textDecoration: "none" }} to="/">
            <b>Employee</b>
          </Link>
        </div>
        <div className="iib">
          <Link className="icon" to="/">
            <BsFillGrid3X3GapFill />
          </Link>
          <Link className="icon" to="/list">
            <BsList />
          </Link>

          <button className="addemployeebutton" onClick={handalClickShow}>
            + Add Employee
          </button>
          {isShow ? <From onClose={handalClickClose} /> : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
