import React, { useEffect } from "react";
import Routes from "./routes.js";

import "../node_modules/animate.css";

import AOS from "aos";
import "../node_modules/aos/dist/aos.css";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
