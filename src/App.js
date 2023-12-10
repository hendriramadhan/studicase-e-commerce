import logo from "./logo.svg";
import { Container, PageItem } from "react-bootstrap";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouseSlider from "./components/CarouselSlider";
import Diskon from "./components/Diskon";
import Product from "./components/Product";
import PaginationSetup from "./components/PaginationSetup";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Menu />
      <Container>
        <CarouseSlider />
        <Diskon />
        <Product />
        <PaginationSetup />
      </Container>
      <Footer />
    </>
  );
}

export default App;
