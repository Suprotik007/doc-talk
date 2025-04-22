import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links=< >
    
    <Link  to='/'><span className=' hover:text-blue-500'>Home</span></Link>
    <Link to='/myBookings'><span className=' hover:text-blue-500'>My-bookings</span></Link>
    <Link to='/'><span className=' hover:text-blue -500'>Blogs</span></Link>
    <span className=' hover:text-blue-500'>Contact Us</span>
    
    </>
    return (
        <div className="navbar mt-5 md:px-10 lg:px-40  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 ">
              {links}
            </ul>
          </div>
          <p className="flex items-center gap-3 font-extrabold  text-3xl btn-ghost "><img className='w-[48px] h-[48px]' src="/src/assets/logo.png" alt="" /> Phudu</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1 font-medium text-gray-500 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary rounded-2xl">Emergency</a>
        </div>
      </div>
    );
};

export default Navbar;