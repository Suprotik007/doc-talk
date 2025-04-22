import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = () => {
    return (
        <div>
            <NavLink  to='/'><span className=' hover:text-blue-500'>Home</span></NavLink>
    <NavLink to='/myBookings'><span className=' hover:text-blue-500'>My-bookings</span></NavLink>
    <NavLink to='/'><span className=' hover:text-blue-500'>Blogs</span></NavLink>
    <NavLink to='/contact'><span className=' hover:text-blue-500'>Contact Us</span></NavLink>
        </div>
    );
};

export default NavLinks;