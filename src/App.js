import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouseSlider from "./components/CarouselSlider";

function App() {
  return (
    <>
      <Menu />
      <CarouseSlider />
    </>
  );
}

export default App;
