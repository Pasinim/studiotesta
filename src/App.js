import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="overflow-y-scroll">
        <Homepage></Homepage>
        </div>
    </div>
  );
}

export default App;
