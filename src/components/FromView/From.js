import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./From.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function From() {
  onclick = () => {};
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="box">
      <div className="row">
        <h1>Add Employee</h1>
        <div className="icons">
          <AiFillCloseCircle />
        </div>
      </div>
      <div className="row">
        <div className="p1" style={{ width: "45%" }}>
          <label className="mt">First Name</label>
          <input
            required
            style={{ width: "90%", padding: "6px", marginTop: "10px" }}
          ></input>
          <br></br>
          <br></br>
          <label className="mt">UserName</label>
          <input
            required
            style={{ width: "90%", padding: "6px", marginTop: "10px" }}
          ></input>
          <br></br>
          <br></br>
          <label className="mt">Employe Id</label>
          <input
            required
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            style={{ width: "90%", padding: "6px", margin: " 11px 0" }}
          ></input>
          <br></br>
          <br></br>
          <label className="mt">Phone </label>
          <input
            type={"tel"}
            style={{ width: "90%", padding: "6px", marginTop: "16px" }}
          ></input>
          <br></br>
          <br></br>
          <label className="mt">Deparment</label>
          <select style={{ width: "95%", padding: "6px", marginTop: "10px" }}>
            <option defaultChecked></option>
            <option value="Web Development">Web Development</option>
            <option value="IT Management">IT Management</option>
            <option value="Marketing">Marketing</option>
          </select>
          <br></br>
          <br></br>
        </div>
        <div className="p2" style={{ width: "45%" }}>
          <label className="mt">Last Name</label>
          <input
            style={{ width: "90%", padding: "6px", marginTop: "10px" }}
          ></input>
          <br></br>
          <br></br>
          <label className="mt">Email</label>
          <input
            type="Email"
            style={{ width: "90%", padding: "6px", marginTop: "10px" }}
          ></input>
          <br></br>
          <br></br>
          <label className="mt">Joining Date</label>
          <div style={{ width: "90%" }}>
            <DatePicker
              className="datepiker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat=" yyyy/MM/dd"
            />
          </div>
          {/* <input
            required
            type="date"
            // pattern="\d{4}-\d{2}-\d{2}"
            style={{ width: "90%", padding: "6px", marginTop: "10px" }}
          ></input> */}
          <br></br>
          <br></br>
          <label className="mt">Company</label>
          <select
            name="cars"
            style={{ width: "95%", padding: "6px", marginTop: "9px" }}
            id="cars"
          >
            <option defaultChecked></option>
            <option value="Global Technologies">Global Technologies</option>
            <option value="Delta Infotech">Delta Infotech</option>
            <option value="International Software Inc">
              International Software Inc
            </option>
          </select>

          <br></br>
          <br></br>
          <label className="mt">Designation</label>
          <select style={{ width: "95%", padding: "6px", marginTop: "10px" }}>
            <option defaultChecked></option>
            <option value="Web Designer">Web Designer</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Android Developer">Android Developer</option>
          </select>
          <br></br>
          <br></br>
        </div>
      </div>
      <div className="row marginTop">
        <button type="submit" className="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default From;
