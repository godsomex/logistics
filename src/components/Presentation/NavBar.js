import React from "react";
import styled from "@emotion/styled";

function NavBar() {
  //get material Js initialized

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            Saloodo
          </a>

          <ul className="right hide-on-med-and-down">
            <li>
              <a href="badges.html">
                <i className="material-icons right">view_module</i>Link with
                Right Icon
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NavBar;

const NavStyels = styled.nav``;
