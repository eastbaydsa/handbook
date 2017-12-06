import React from "react";
import { render } from "react-snapshot";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToSectionWithRouter from "./components/routing/ScrollToSection";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

require("smoothscroll-polyfill").polyfill();

render(
  <Router>
    <ScrollToSectionWithRouter>
      <App />
    </ScrollToSectionWithRouter>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
