import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Meni = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">E-uprava</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Pocetna</Nav.Link>
                            <Nav.Link href="/onama">O nama</Nav.Link>
                            <Nav.Link href="/usluge">Usluge</Nav.Link>
                            <Nav.Link href="/faq">FAQ</Nav.Link>
                            <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Meni;