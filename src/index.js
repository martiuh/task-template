import React from "react";
import ReactDOM from "react-dom";
import Toggler from "./.instructions/containers/Toggler";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Toggler>
      <App />
    </Toggler>
  </React.StrictMode>,
  rootElement
);
