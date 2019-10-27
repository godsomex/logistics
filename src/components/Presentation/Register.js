import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";

function Register({ register }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
    passwordTwo: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { firstName, lastName, email, role, password, passwordTwo } = formData;

  const onSubmit = e => {
    e.preventDefault();

    // Create user object
    const newUser = {
      name,
      email,
      password,
      role
    };

    // Attempt to register
    console.log("zzzzz", newUser);

    register(newUser);
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              value={firstName}
              name="firstName"
              onChange={e => updateFormData(e)}
              placeholder="First Name"
              id="first_name"
              type="text"
              className="validate"
              autoComplete="firstName"
            />
            <label htmlFor="first_name">First Name</label>
          </div>

          <div className="input-field col s6">
            <input
              value={lastName}
              name="lastName"
              onChange={e => updateFormData(e)}
              placeholder="Last Name"
              id="last_name"
              type="text"
              className="validate"
              autoComplete="lastName"
            />
            <label htmlFor="last_name">Last Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              value={password}
              name="password"
              id="password"
              type="password"
              className="validate"
              onChange={e => updateFormData(e)}
              autoComplete="password"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              value={passwordTwo}
              name="passwordTwo"
              id="passwordTwo"
              type="password"
              className="validate"
              onChange={e => updateFormData(e)}
              autoComplete="passwordTwo"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              value={email}
              name="email"
              id="email"
              type="email"
              className="validate"
              onChange={e => updateFormData(e)}
              autoComplete="email"
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="input-field col s12">
          <select name="role" onChange={e => updateFormData(e)}>
            <option defaultValue="choose">Select</option>
            <option value="biker">Biker</option>
            <option value="manager">Manager</option>
          </select>
          <label>Role</label>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
}

export default connect(
  null,
  { register }
)(Register);
