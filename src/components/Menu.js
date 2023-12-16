import { Navbar, Container, Nav, Form, Button, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Auth/Login";
import Home from "../Home";

export default function Menu() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto align-items-center text-light">
            <Nav.Link href="/">Home</Nav.Link> |
            <Nav.Link href="#discount">Discount</Nav.Link> |
            <Nav.Link href="#category">Category</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar expand="md" bg="primary" data-bs-theme="dark">
        <Container>
          {/* Main title */}
          <Navbar.Brand href="#home" className="fw-bold fs-2">
            Shop
          </Navbar.Brand>
          {/* Search bar */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto fs-5 text-center">
              <Form className="position-relative">
                <Form.Control
                  type="search"
                  placeholder="Search Product...."
                  className=" bg-light text-dark"
                  aria-label="Search"
                />

                <Button variant="primary" className="position-absolute">
                  <i className="fa-solid fa-magnifying-glass fa-xs"></i>
                </Button>
              </Form>
            </Nav>
            {/* button */}
            <Nav className=" d-flex justify-content-between align-items-center">
              <Nav.Link
                href="#Masuk"
                className="navbar-expand-sm navbar-nav nav-link"
              >
                <Button variant="outline-light" className="chart">
                  <i class="fa-solid fa-cart-shopping"></i>
                </Button>
              </Nav.Link>

              <Nav.Link
                href="/Login"
                className="navbar-expand-sm navbar-nav nav-link"
              >
                <Button variant="outline-light" className="chart">
                  Login
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
