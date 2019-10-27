import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getBikers } from "../../actions/authActions";
import { assignShipment } from "../../actions/shipmentActions";
import store from "../../store";

function Assign({ auth: { bikers }, assignShipment, idx: { idx } }) {
  const [formData, setFormData] = useState({
    pickupDate: Date.now(),
    deliveryDate: Date.now(),
    orderStatus: "",
    assign: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { pickupDate, deliveryDate, orderStatus, assign } = formData;

  const onSubmit = e => {
    e.preventDefault();

    const assignUser = {
      pickupDate,
      deliveryDate,
      orderStatus,
      assign,
      idx
    };
    console.log("mmmmm", assignUser);
    assignShipment(assignUser);
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              value="pickupDate"
              name="pickupDate"
              onChange={e => updateFormData(e)}
              type="text"
              className="datepicker"
              autoComplete="pickup Date"
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              value="deliveryDate"
              name="deliveryDate"
              type="text"
              className="datepicker"
              onChange={e => updateFormData(e)}
              autoComplete="delivery Date"
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <select name="assign" className="browser-default" onChange={e => updateFormData(e)}>
              <option value="selectBiker"> Assign a Biker</option>;
              {bikers.map((item, i) => {
                return (
                  <option key={i} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <select
              name="orderStatus"
              className="browser-default"
              onChange={e => updateFormData(e)}
            >
              <option defaultValue="choose">Select</option>
              <option value="waiting">Waiting</option>
              <option value="assigned">Assigned</option>
              <option value="picked">Picked up</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <select name="orderStatus" onChange={e => updateFormData(e)}>
              <option defaultValue="choose">Select</option>
              <option value="waiting">Waiting</option>
              <option value="assigned">Assigned</option>
              <option value="picked">Picked up</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>

        <div className="row">
          <button className="btn waves-effect waves-light" type="submit" name="action">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getBikers, assignShipment }
)(Assign);
