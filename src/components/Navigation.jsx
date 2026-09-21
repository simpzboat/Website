import React from "react";
import { NavLink } from "react-router-dom";
// Resume viewer/download hidden for now.
// import Resume from "./modals/Resume";
import {BrowserView, MobileView} from 'react-device-detect';
import { FaHome, FaKiwiBird, FaAddressCard } from "react-icons/fa";

// import { pdf_library } from "./modals/media";



function Navigation() {
  return (
    <div className="navigation" >
      <BrowserView>
      <nav className="navbar navbar-expand navbar-light"  style={{
      backgroundColor: '#EDEDED',
    }}>
      
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Beau Hobba
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              {/* Skills page hidden for now.
              <li className="nav-item">
                <NavLink className="nav-link" to="/skills">
                  Skills
                </NavLink>
              </li>
              */}

              {/* Blog page hidden for now.
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/animals">
                  Animals
                </NavLink>
              </li>
              {/* Resume viewer and download hidden for now.
              <li className="nav-item">
                <div className="nav-link" >
                <Resume/>
                  </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" >
                <a href={pdf_library.resume} download>Download</a>
                  </div>
              </li>
              */}
            </ul>
          </div>
        </div>
      </nav>
      </BrowserView>
      <MobileView>
  <nav
    className="navbar navbar-expand navbar-light"
    style={{
      backgroundColor: "#EDEDED",
    }}
  >
    <div className="container" style={{ display: "flex", justifyContent: "center" }}>
      <ul
        className="navbar-nav"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%", // Makes sure the items can spread out across the whole container
          padding: 0,
          margin: 0,
          listStyle: "none",
        }}
      >
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <FaHome style={{ width: 30 }} />
            <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            <FaAddressCard style={{ width: 30 }} />
          </NavLink>
        </li>
        {/* Skills page hidden for now.
        <li className="nav-item">
          <NavLink className="nav-link" to="/skills">
            <FaLaptopCode style={{ width: 30 }} />
          </NavLink>
        </li>
        */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/animals">
            <FaKiwiBird style={{ width: 30 }} />
          </NavLink>
        </li>
        {/* Resume viewer hidden for now.
        <li className="nav-item">
          <div className="nav-link">
            <Resume />
          </div>
        </li>
        */}
      </ul>
    </div>
  </nav>
</MobileView>


    </div>
  );
}

export default Navigation;
