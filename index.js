import React from "react";
import ReactDOM from "react-dom";
import App from "./components/container/App";

const DomNode = document.getElementById("challenge");
DomNode ? ReactDOM.render(<App />, DomNode) : false;
