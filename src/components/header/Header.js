import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"


const Header = () => {
    return (
        
            <div className="header">
            <Navbar bg="primary" expand="lg">
        <Container>
            <Navbar.Brand href="/">TO DO List</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="My Lists">
                <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                <NavDropdown.Item >Work</NavDropdown.Item>
                </NavDropdown>
            </Nav>

            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />

                
            <NavDropdown title="Cage">
                <NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
                <NavDropdown.Item >Logout</NavDropdown.Item>
                </NavDropdown>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
        
    )
}

export default Header
