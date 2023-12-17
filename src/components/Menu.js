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

export default function Menu() {
  const location = useLocation();
  const isWhistlistPage = location.pathname === "/Whistlist";
  const isChart = location.pathname === "/Chart";
  const isProfile = location.pathname === "/Profile";

  const activeLabel = isChart ? "Chart" : isProfile ? "Profile" : "Whistlist";

  return (
    <div>
      <SubMenu />

      {/* Secondary Menu */}
      <Navbar
        expand="md"
        bg={isWhistlistPage || isChart || isProfile ? "light" : "primary"}
        data-bs-theme="dark"
      >
        <Container>
          {/* Main title */}
          <Navbar.Brand
            href="#home"
            className={`${
              isWhistlistPage || isChart || isProfile
                ? "fw-bold fs-2 text-primary"
                : "fw-bold fs-2"
            }`}
          >
            Shop
          </Navbar.Brand>
          <span className=" fs-4 text-primary">
            {isWhistlistPage || isChart || isProfile ? ` | ${activeLabel}` : ""}
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
                  className="bg-light text-dark"
                  aria-label="Search"
                />

                <Button variant="primary" className="position-absolute">
                  <i className="fa-solid fa-magnifying-glass fa-xs"></i>
                </Button>
              </Form>
            </Nav>
            {/* Buttons and Links */}
            {isWhistlistPage || isChart || isProfile ? (
              ""
            ) : (
              <Nav className="d-flex justify-content-between align-items-center">
                <Nav.Link
                  href="/Chart"
                  className="navbar-expand-sm navbar-nav nav-link"
                >
                  <Button variant="outline-light" className="chart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Button>
                </Nav.Link>

                <Link
                  to="/Login"
                  className="navbar-expand-sm navbar-nav nav-link"
                >
                  <Button variant="outline-light" className="chart">
                    Login
                  </Button>
                </Link>

                <Dropdown>
                  <Dropdown.Toggle
                    id="nav-dropdown-dark-example"
                    menuVariant="dark"
                    as="span"
                  >
                    <i className="fa-regular fa-circle-user fa-2xl text-white"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Whistlist</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Pengaturan Akun
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
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
