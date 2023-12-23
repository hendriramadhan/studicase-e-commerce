import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";
import { Link, useLocation, NavLink } from "react-router-dom";
import Cookies from "cookies-js";

export default function SubMenu() {
  const location = useLocation();
  const isWishlistPage = location.pathname === "/Wishlist";

  const token = Cookies.get("refreshToken");
  if (!token) {
    return (
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto align-items-center text-light">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>{" "}
              |
              <Nav.Link as={NavLink} to="/Discount">
                Discount
              </Nav.Link>{" "}
              |
              <Nav.Link as={NavLink} to="/Category">
                Category
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto align-items-center text-light">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>{" "}
              |
              <Nav.Link as={NavLink} to="/Discount">
                Discount
              </Nav.Link>{" "}
              |
              <Nav.Link as={NavLink} to="/Category">
                Category
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
