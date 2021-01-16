import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./redux/StateProvider";
import reducer, { initialState } from "./redux/reducer";
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
