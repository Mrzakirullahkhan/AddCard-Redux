import React from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "@mui/material/Badge";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Badge badgeContent={8} color="primary">
            <FaShoppingCart className="shoppingIcon" />
          </Badge>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
