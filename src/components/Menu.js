import { Navbar, Container, Nav, Form, Button, Col } from "react-bootstrap";

export default function Menu() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto align-items-center text-light">
            <Nav.Link href="#home">Home</Nav.Link> |
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
            <Nav className="mx-2 fs-5 text-center">
              <Nav.Link
                href="#Masuk"
                className="navbar-expand-sm navbar-nav nav-link"
              >
                <Button variant="outline-light" className="bi-search">
                  <i class="fa-solid fa-cart-shopping"></i>
                </Button>
              </Nav.Link>
              <Nav.Link
                href="#Daftar"
                className="navbar-expand-sm navbar-nav nav-link"
              >
                <Button variant="outline-light" className="bi-search">
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
