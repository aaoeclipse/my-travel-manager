import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/flights">Flights</Nav.Link>
                <Nav.Link href="/places">Places</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default CustomNavbar
