import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouseSlider from "./components/CarouselSlider";
import Diskon from "./components/Diskon";

function App() {
  return (
    <>
      <Menu />
      <CarouseSlider />
      <Diskon />
    </>
  );
}

export default App;
