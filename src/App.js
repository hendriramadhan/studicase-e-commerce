import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Menu from "./components/Menu";
import Register from "./components/Auth/Register";
import Whistlist from "./components/Pages/Whistlist";

// import routes
import Home from "./Home";
import Chart from "./components/Pages/Chart.js";

function App() {
  return (
    <Router>
      <>
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Whistlist" element={<Whistlist />} />
          <Route path="/Chart" element={<Chart />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
