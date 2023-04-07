import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Infopage from "./components/Infopage";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="overflow-y-scroll">
        <Homepage></Homepage>
          <Infopage></Infopage>
        </div>
    </div>
  );
}

export default App;
