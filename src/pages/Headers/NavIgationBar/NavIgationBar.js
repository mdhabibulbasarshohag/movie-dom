import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import NavbarOffcanvas from '../NavbarOffcanvas/NavbarOffcanvas';
import './NavIgationBar.css';

const NavIgationBar = () => {
    return (
        <div>
            <Navbar fixed="top" className=' bg-gray px-2' expand="lg">
                <Container fluid className='py-2'>
                    <Navbar.Brand href="/" className='me-lg-5 fw-bolder fs-3 text-white'>Friend World</Navbar.Brand>
                    <Navbar.Toggle className=' bg-light btn-info' aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className=''>
                        <div className=' w-100 px-lg-5 pt-3 py-lg-1'>
                            <Form className="d-flex justify-content-center align-content-center">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 w-100"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success" className='PaleTurquoise text-dark'>Search</Button>

                            </Form>
                        </div>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '150px' }}
                            navbarScroll
                        >
                            <Nav.Link href="home" className=' ms-lg-3 text-white'>Home</Nav.Link>
                            <Nav.Link href="messages" className=' ms-lg-3 text-white'>Messages</Nav.Link>
                            <Nav.Link href="profile" className=' ms-lg-3 text-white'>profile</Nav.Link>
                            <Nav.Link className=' ms-lg-3 text-white'>
                                <NavbarOffcanvas></NavbarOffcanvas>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavIgationBar;