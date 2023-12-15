import CarouseSlider from "./components/CarouselSlider";
import Diskon from "./components/Diskon";
import Product from "./components/Product";
import PaginationSetup from "./components/PaginationSetup";
import Footer from "./components/Footer";
import { Container, PageItem } from "react-bootstrap";

export default function Home () {

    return (
        <>
            <Container>
            <CarouseSlider />
            <Diskon />
            <Product />
            <PaginationSetup />
            </Container>
            <Footer />
        </>
    )
}