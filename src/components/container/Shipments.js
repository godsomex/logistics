import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ShipmenItem from "./ShipmenItem";
import { getShipments } from "../../actions/shipmentActions";

function Shipments({ shipment: { loading, shipments, error }, getShipments }) {
  useEffect(() => {
    getShipments();

    //get Materialize js initialized
    M.AutoInit();
  }, []);

  if (loading) {
    return (
      <div>
        ... loading Shipments
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    );
  }
  return (
    <ul>
      {!loading && shipments.length === 0 ? (
        <div> no shipments to display</div>
      ) : (
        shipments.map(shipment => (
          <ShipmenItem key={shipment.id} ship={shipment} />
        ))
      )}
    </ul>
  );
}

const mapStateToProps = state => ({
  shipment: state.shipment
});

export default connect(
  mapStateToProps,
  { getShipments }
)(Shipments);
