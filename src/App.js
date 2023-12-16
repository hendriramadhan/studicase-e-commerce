import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Menu from "./components/Menu";
import Register from "./components/Auth/Register";

//import routes
import Home from "./Home";
function App() {
  return (
    <>
      <Menu />

      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
