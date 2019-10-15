import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import NavBar from "../Presentation/NavBar";
import Shipments from "./Shipments";

function App() {
  return (
    <>
      <NavBar />
      <Shipments />
    </>
  );
}

export default App;
