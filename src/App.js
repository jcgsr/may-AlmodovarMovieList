import React, { useEffect } from "react";
import Routes from "./routes.js";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer autoclose={2000} />
    </div>
  );
}

export default App;
