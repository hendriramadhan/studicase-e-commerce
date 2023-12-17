import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Menu from "./components/Menu";
import Register from "./components/Auth/Register";
import Wishlist from "./components/Pages/Wishlist";


// import routes
import Home from "./Home";
import Chart from "./components/Pages/Chart.js";
import Profile from "./components/Auth/Profile.js";
import Diskon from "./components/Diskon.js";

function App() {
  return (
    <Router>
      <>
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Chart" element={<Chart />} />
          <Route path="/Discount" element={<Diskon />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
