import React from "react";
import "./Grid.css";
import i1 from "../img/9.jpeg";
import i2 from "../img/3.jpeg";
import i3 from "../img/7.jpeg";
import i4 from "../img/8.jpeg";
import i5 from "../img/5.jpeg";
import i6 from "../img/11.jpeg";
import i7 from "../img/2.jpeg";
import i8 from "../img/12.jpeg";
import i9 from "../img/6.jpeg";
import i10 from "../img/10.jpeg";
import i11 from "../img/1.jpeg";
import i12 from "../img/4.jpeg";
function EmployeeGridView() {
  return (
    <section className="gridview">
      <div className="grid">
        <div className="box1">
          <div className="img1">
            <img className="gimg" src={i1} alt=""></img>
          </div>
          <div>
            <p className="name1">John Doe</p>
            <p className="type1">Web Designer</p>
          </div>
        </div>
        <div className="box1">
          <div className="img1">
            <img className="gimg" src={i2} alt=""></img>
          </div>
          <div>
            <p className="name1">Richard Miles</p>
            <p className="type1">Web Devloper</p>
          </div>
        </div>
        <div className="box1">
          <div className="img1">
            <img className="gimg" src={i3} alt=""></img>
          </div>
          <div>
            <p className="name1">John Smith</p>
            <p className="type1">Android Developer</p>
          </div>
        </div>
        <div className="box1">
          <div className="img1">
            <img className="gimg" src={i4} alt=""></img>
          </div>
          <div>
            <p className="name1">Mike Litours</p>
            <p className="type1">Ios Developer</p>
          </div>
        </div>
        <div className="box1">
          <div className="img1">
            <img className="gimg" src={i5} alt=""></img>
          </div>
          <div>
            <p className="name1">Wilmar Delunm</p>
            <p className="type1">Team Leader</p>
          </div>
        </div>
        <div className="box1">
          <div className="img1">
            <img className="gimg" src={i6} alt=""></img>
          </div>
          <div>
            <p className="name1">Jeffery Warden</p>
            <p className="type1">Web Developer</p>
          </div>
        </div>
        <div className="box1">
          <div className="img1">
            <img className="gimg" src={i7} alt=""></img>
          </div>
          <div>
            <p className="name1">Bernardo Galaviz</p>
            <p className="type1">Web Deceloper</p>
          </div>
        </div>
        <div className="box1">
          <div className="img1">
            <img className="gimg" src={i8} alt=""></img>
          </div>
          <div>
            <p className="name1">Lesley Grauer</p>
            <p className="type1">Team Leader</p>
          </div>
        </div>
        <div className="box1">
          <div className="img1">
            <img className="gimg" src={i9} alt=""></img>
          </div>
          <div>
            <p className="name1">Jeffery Lalor</p>
            <p className="type1">Team Leader</p>
          </div>
        </div>
        <div className="box1">
          <div className="img1">
            <img className="gimg" src={i10} alt=""></img>
          </div>
          <div>
            <p className="name1">Loren Gatlin</p>
            <p className="type1">Android Developer</p>
          </div>
        </div>
        <div className="box1">
          <div className="img1">
            <img className="gimg" src={i11} alt=""></img>
          </div>
          <div>
            <p className="name1">Tarah Shrophire</p>
            <p className="type1">Android Developer</p>
          </div>
        </div>
        <div className="box1">
          <div className="img1">
            <img className="gimg" src={i12} alt=""></img>
          </div>
          <div>
            <p className="name1">Catherine Manseau</p>
            <p className="type1">Android Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmployeeGridView;
