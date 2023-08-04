import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">
            <img
                src="src/assets/img/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Brand href="#home">Luis Olivares <br />Full Stack</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Sobre MI</Nav.Link>
            <Nav.Link href="#card">Portafolio</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#educacion">Educacion</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Navbar.Brand href="https://github.com/LuisOL2022" target='_blank'>
            <img
                src="src/assets/img/github.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            /></Navbar.Brand>


            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default Header;