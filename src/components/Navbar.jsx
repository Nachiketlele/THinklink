import React from "react";
import "./css/Navbar.css";
import image from "./logo.png";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa"
import { FiChevronDown } from "react-icons/fi"


const Navbar = () => {
  return (
    <div className="main">
      {/* first section */}
      <div id="box">
        <div>
          <img id="image" src={image} alt="" />
        </div>

        <div class="wrapper">
          <div class="icon">
            <BsSearch />
          </div>
          <input
            class="input"
            type="text"
            placeholder="Search wines, customers here..."
          ></input>
        </div>
      </div>
      {/* second section */}
      <div id="box2">
          <div>
            <FaRegBell id="icons"/>
          </div>
          <div id="childbox">
                <h3>Nicholas D.</h3>
                <img id="avatar" src="https://th.bing.com/th?q=Male+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" />
                <div>
                  <FiChevronDown id="down"/>
                </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
