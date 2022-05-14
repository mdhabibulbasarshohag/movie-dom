import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';


const HomeLeft = () => {
    return (
        <div>
            <Nav className="flex-column">
                <Nav.Link href="/" className=' mt-1 mb-1'>
                    <div className=' d-flex justify-content-center align-content-center justify-content-lg-start px-lg-3'>
                        <div>
                            <FaBeer className='fs-2 pe-2 pt-1'></FaBeer>
                        </div>
                        <div>
                            <div className=' d-lg-block d-none fs-4 ps-3'>My Newsfeed</div>
                        </div>
                    </div>
                </Nav.Link>
                <Nav.Link href="#" className=' mt-1 mb-1'>
                    <div className=' d-flex align-content-center justify-content-center'>
                        <FaBeer></FaBeer> <span className=' d-lg-block d-none'>home</span>
                    </div>
                </Nav.Link>
                <Nav.Link href="#" className=' mt-1 mb-1'>
                    <div className=' d-flex align-content-center justify-content-center'>
                        <FaBeer></FaBeer> <span className=' d-lg-block d-none'>home</span>
                    </div>
                </Nav.Link>
                <Nav.Link href="#" className=' mt-1 mb-1'>
                    <div className=' d-flex align-content-center justify-content-center'>
                        <FaBeer></FaBeer> <span className=' d-lg-block d-none'>home</span>
                    </div>
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default HomeLeft;