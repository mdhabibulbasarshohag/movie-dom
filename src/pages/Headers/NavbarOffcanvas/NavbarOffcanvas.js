import React, { useState } from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';
import './NavbarOffcanvas.css';

const NavbarOffcanvas = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button className='btn-offcanvas' onClick={handleShow}>
                Newsfeed
            </button>

            <Offcanvas className=' bg-gray' show={show} onHide={handleClose}>
                <Offcanvas.Header className=' bg-info' closeButton>
                    <Offcanvas.Title className=' fw-bold fs-3'>News Feed</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className>
                        <Nav className="flex-column px-3">
                            <Nav.Link href="#" className=' fs-5 bg-white my-1 px-3 py-2 text-dark fw-bold '>News Feed</Nav.Link>
                            <Nav.Link href="#" className=' fs-5 bg-white my-1 px-3 py-2 text-dark fw-bold '>People Nearby</Nav.Link>
                            <Nav.Link href="#" className=' fs-5 bg-white my-1 px-3 py-2 text-dark fw-bold '>Friend</Nav.Link>
                            <Nav.Link href="#" className=' fs-5 bg-white my-1 px-3 py-2 text-dark fw-bold '>Images</Nav.Link>
                            <Nav.Link href="#" className=' fs-5 bg-white my-1 px-3 py-2 text-dark fw-bold '>Videos</Nav.Link>
                            <Nav.Link href="about" className=' fs-5 bg-white my-1 px-3 py-2 text-dark fw-bold '>About</Nav.Link>
                        </Nav>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );

};




export default NavbarOffcanvas;