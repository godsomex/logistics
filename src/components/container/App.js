import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import store from "../../store";

import NavBar from "../Presentation/NavBar";
import Register from "../Presentation/Register";
import Shipments from "./Shipments";
import Addbtn from "./Addbtn";
import AddShipModal from "./addShipModal";

function App() {
  return (
    <Provider store={store}>
      <>
        <NavBar />
        <Shipments />
        <Addbtn />
        <AddShipModal />
        <Register />
      </>
    </Provider>
  );
}

export default App;
