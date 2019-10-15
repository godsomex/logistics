import React from "react";
import styled from "@emotion/styled";

function NavBar() {
  //get material Js initialized

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            Logo
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">
                <i className="material-icons left">search</i>Link with Left Icon
              </a>
            </li>
            <li>
              <a href="badges.html">
                <i className="material-icons right">view_module</i>Link with
                Right Icon
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

const NavStyels = styled.nav``;
