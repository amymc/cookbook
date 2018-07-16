import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import rootReducer from "./reducers";
import data from "./data";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer, data);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
