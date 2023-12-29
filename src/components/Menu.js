import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import SubMenu from "./SubMenu";
import Cookies from "cookies-js";

export default function Menu() {
  const location = useLocation();
  const isWishlistPage = location.pathname === "/Wishlist";
  const isChart = location.pathname === "/Chart";
  const isProfile = location.pathname === "/Profile";

  const activeLabel = isChart ? "Chart" : isProfile ? "Profile" : "Wishlist";

  const token = Cookies.get("refreshToken");

  if (!token) {
    return (
      <div>
        <SubMenu />

        {/* Secondary Menu */}
        <Navbar
          expand="md"
          bg={isWishlistPage || isChart || isProfile ? "light" : "primary"}
          data-bs-theme="dark"
        >
          <Container>
            {/* Main title */}
            <Navbar.Brand
              as={Link}
              to="/"
              className={`${
                isWishlistPage || isChart || isProfile
                  ? "fw-bold fs-2 text-primary"
                  : "fw-bold fs-2"
              }`}
            >
              Shop
            </Navbar.Brand>
            <span className="fs-4 text-primary">
              {isWishlistPage || isChart || isProfile ? ` ${activeLabel}` : ""}
            </span>
            {/* Search bar */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="text-primary"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto fs-5 text-center">
                <Form className="position-relative">
                  <Form.Control
                    type="search"
                    placeholder="Search Product...."
                    className="bg-light text-dark border-white"
                    aria-label="Search"
                  />

                  <Button variant="primary" className="position-absolute">
                    <i className="fa-solid fa-magnifying-glass fa-xs"></i>
                  </Button>
                </Form>
              </Nav>
              {/* Buttons and Links */}
              {isWishlistPage || isChart || isProfile ? (
                ""
              ) : (
                <Nav className="d-flex justify-content-between align-items-center">
                  <Nav.Link
                    as={Link}
                    to="/Chart"
                    className="navbar-expand-sm navbar-nav nav-link"
                  >
                    <Button variant="outline-light" className="charts">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </Button>
                  </Nav.Link>

                  <Link
                    as={Link}
                    to="/Login"
                    className="navbar-expand-sm navbar-nav nav-link"
                  >
                    <Button variant="outline-light" className="charts">
                      Login
                    </Button>
                  </Link>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
        <SubMenu />

        {/* Secondary Menu */}
        <Navbar
          expand="md"
          bg={isWishlistPage || isChart || isProfile ? "light" : "primary"}
          data-bs-theme="dark"
        >
          <Container>
            {/* Main title */}
            <Navbar.Brand
              as={Link}
              to="/"
              className={`${
                isWishlistPage || isChart || isProfile
                  ? "fw-bold fs-2 text-primary"
                  : "fw-bold fs-2"
              }`}
            >
              Shop
            </Navbar.Brand>
            <span className=" fs-4 text-primary">
              {isWishlistPage || isChart || isProfile
                ? ` | ${activeLabel}`
                : ""}
            </span>
            {/* Search bar */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="text-primary"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto fs-5 text-center">
                <Form className="position-relative">
                  <Form.Control
                    type="search"
                    placeholder="Search Product...."
                    className="bg-light text-dark border-white"
                    aria-label="Search"
                  />

                  <Button variant="primary" className="position-absolute">
                    <i className="fa-solid fa-magnifying-glass fa-xs"></i>
                  </Button>
                </Form>
              </Nav>
              {/* Buttons and Links */}
              {isWishlistPage || isChart || isProfile ? (
                ""
              ) : (
                <Nav className="d-flex justify-content-between align-items-center">
                  <Nav.Link
                    as={Link}
                    to="/Chart"
                    className="navbar-expand-sm navbar-nav nav-link"
                  >
                    <Button variant="outline-light" className="charts">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </Button>
                  </Nav.Link>

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
                      <Dropdown.Item href="#/action-3">
                        Pengaturan Akun
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="Logout">
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
