import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { NavLink } from 'react-router-dom';

export default function SubMenu() {
  const location = useLocation();
  const isWishlistPage = location.pathname === "/Wishlist";

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto align-items-center text-light">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link> |
            <Nav.Link as={NavLink} to="/Discount">Discount</Nav.Link> |
            <Nav.Link as={NavLink} to="/Category">Category</Nav.Link> |
            <Nav.Link as={NavLink} to="/Wishlist">Wishlist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
