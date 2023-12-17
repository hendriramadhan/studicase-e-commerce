import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function SubMenu() {
  const location = useLocation();
  const isWhistlistPage = location.pathname === "/Whistlist";

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto align-items-center text-light">
            <Nav.Link href="/">Home</Nav.Link> |
            <Nav.Link href="#discount">Discount</Nav.Link> |
            <Nav.Link href="#category">Category</Nav.Link> |
            <Nav.Link href="/Whistlist">Whistlist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
