import React, { useEffect, useState } from "react";

function Shipments() {
  const [Shipments, setShipments] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    getData();

    //get Materialize js initialized
    M.AutoInit();
  }, []);

  //load shipments
  const getData = async () => {
    setLoading(true);
    const result = await fetch("http://localhost:3010/shipments");
    const data = await result.json();
    setShipments(data);
    setLoading(false);
  };

  if (Loading) {
    return <div>... loading Shipments</div>;
  }
  return (
    <ul>
      {!Loading && Shipments.length === 0 ? (
        <div> no shipments to display</div>
      ) : (
        Shipments.map(shipment => (
          <li key={shipment.id}>{shipment.item_name}</li>
        ))
      )}
    </ul>
  );
}

export default Shipments;
