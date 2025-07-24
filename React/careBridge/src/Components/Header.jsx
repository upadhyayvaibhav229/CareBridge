import React from 'react';
import Button from 'react-bootstrap/Button';
import { imgs } from '../assets/image';


export const Header = () => {
    const menu = ['Home', 'What We Do', 'Request Assistance', 'Donate'];

    return (
        <div className=' border-bottom'>
            <div className="container d-flex justify-content-around  align-items-center">
                <div className="logo">
                    <img src={imgs.logo} className='img-fluid w-75' alt="logo" />
                </div>
                <ul className='d-lg-flex d-none mt-3'>
                    {menu.map((item, index) => (
                        <li className='mx-3 list-unstyled' key={index}>
                            <a className='text-decoration-none text-black ' href="#">{item}</a>
                        </li>
                    ))}
                </ul>
          
                <Button variant="primary" className='px-4 py-2 d-none d-lg-block me-0'>Contact Us</Button>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    );
};

