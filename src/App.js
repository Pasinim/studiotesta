import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Infopage from "./components/Infopage";
import React from "react";

function App() {
  return (
    <div>
        <div className="overflow-visible">
      <Navbar />
        </div>
        <Homepage></Homepage>
          <Infopage></Infopage>
    </div>
  );
}

export default App;
