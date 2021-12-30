import React from 'react';
import { Container, Nav, Navbar, NavDropdown  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand href="#home"> <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPibgCtqzQVhEcPyBcjKj9fd7JRhy-h5v4ZIbBCTkAfSL4d1WG-1yCSTwQslJ61ddtUF0&usqp=CAU" alt="" /> Fade Into Coffee</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">

                        </Nav>
                        <Nav className="nav-link">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                        
                        <NavDropdown title="Dropdown" className="dropdown">

                            <NavDropdown.Item href="#action/3.1">Service1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Service2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Service3</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#action/3.4">Service4</NavDropdown.Item>

                        </NavDropdown>
            
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;