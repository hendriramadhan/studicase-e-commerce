import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";
import { Link, useLocation, NavLink } from "react-router-dom";

export default function SubMenu() {
  const location = useLocation();
  const isWishlistPage = location.pathname === "/Wishlist";

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

          <Dropdown>
            <Dropdown.Toggle
              id="nav-dropdown-dark-example"
              menuVariant="dark"
              as="span"
            >
              <i className="fa-regular fa-circle-user fa-2xl text-white"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/Profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/Wishlist">
                Wishlist
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Pengaturan Akun</Dropdown.Item>
              <Dropdown.Item as={Link} to="Logout">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
}
