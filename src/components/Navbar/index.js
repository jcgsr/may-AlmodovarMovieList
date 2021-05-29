import React, { useState } from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "./navbar.css";

export default function Header() {
  return (
    <Navbar bg="danger" variant="dark" expand="lg" className="nav">
      <Container>
        <Link to="/">
          <Navbar.Brand>Almodóvar Cult Movie List</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fav">
            <Nav.Link>
              <Link to="/favoritos">Favoritos</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Filme"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="info">Procurar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
