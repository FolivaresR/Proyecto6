// Header.js
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'; // Importa el archivo de estilos CSS

function Header() {
    return (
        <Navbar expand="lg" className="bg-dark text-white">
            <Container className="d-flex justify-content-between align-items-center">
                <div>
                    <Navbar.Brand href="#home">
                        <img
                            src="logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home" className="ml-2">
                        Fernando Olivares
                        Full Stack Developer<br />
                    </Navbar.Brand>
                </div>
                <Nav>
                    <Nav.Link href="#home">Sobre MI</Nav.Link>
                    <Nav.Link href="#card">Portafolio</Nav.Link>
                    <Nav.Link href="#skill">Skills</Nav.Link>
                    <Nav.Link href="#educacion">Educacion</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                    <Nav.Link href="https://github.com/FolivaresR" target='_blank'>
                        <img
                            src="github.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
