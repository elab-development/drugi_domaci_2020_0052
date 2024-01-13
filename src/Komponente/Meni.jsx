import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Meni = () => {

    const ulogovanUser = window.sessionStorage.getItem('token') !== null;

    let admin = false;

    if (ulogovanUser) {
        const user = JSON.parse(window.sessionStorage.getItem('user'));
        admin = user.role === 'admin';
    }

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
                            {
                                ulogovanUser ?
                                    <Nav.Link href="/zakazi">Zakazi uslugu</Nav.Link>
                                    :
                                    null
                            }

                            {
                                ulogovanUser ?
                                    <Nav.Link href="/prijavi">Prijavi problem</Nav.Link>
                                    :
                                    null
                            }
                            <Nav.Link href="/saradnici">Saradnici</Nav.Link>
                            <Nav.Link href="/faq">FAQ</Nav.Link>
                            <Nav.Link href="/kontakt">Kontakt</Nav.Link>

                            {
                                admin ?
                                    <Nav.Link href="/admin"><span style={
                                        {
                                            color: 'red'
                                        }
                                    }>Admin</span></Nav.Link>
                                    :
                                    null
                            }

                            {
                                ulogovanUser ?
                                    <Nav.Link href="#" onClick={() => {
                                        window.sessionStorage.removeItem('token');
                                        window.sessionStorage.removeItem('user');
                                        window.location.href = '/';
                                    }}>Logout</Nav.Link>
                                    :
                                    <Nav.Link href="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Meni;