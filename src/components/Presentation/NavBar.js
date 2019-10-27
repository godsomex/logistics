import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from "reactstrap";
import { login, logOut } from "../../actions/authActions";

function NavBar({ auth, login, logOut }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { email, password } = formData;

  const onSubmit = e => {
    e.preventDefault();

    // Create user object
    const user = {
      email,
      password
    };

    login(user);
  };

  console.log("vvvv", auth.user);

  const link = (
    <form className="form-inline mr-sm-2" onSubmit={onSubmit}>
      <Input
        value={email}
        id="email"
        className="mr-sm-2"
        type="email"
        name="email"
        placeholder="email"
        onChange={e => updateFormData(e)}
        autoComplete="email"
      />
      <Input
        id="password"
        value={password}
        className="mr-sm-2"
        type="password"
        name="password"
        placeholder="password"
        onChange={e => updateFormData(e)}
        autoComplete="password"
      />
      <button className="btn btn-default" type="submit">
        login
      </button>
    </form>
  );

  const userLinks = (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {auth.user ? auth.user.name : "Profile"}
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>Edit Profile</DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          onClick={() => {
            logOut();
          }}
        >
          logout
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );

  return (
    <div>
      <Navbar expand="md" className="navbar navbar-dark bg-dark fixed-top mb4">
        <NavbarBrand href="/">Saloodo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {auth.token ? userLinks : link}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login, logOut }
)(NavBar);
