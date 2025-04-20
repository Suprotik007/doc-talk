import React from 'react';

const Navbar = () => {
    const links=< >
    <li>Home</li>
    <li>My-Bookings</li>
    <li>Blogs</li>
    <li>Contact Us</li>
    </>
    return (
        <div className="navbar bg-white  px-40 mx-auto">
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
          <a className="flex items-center gap-3 font-extrabold  text-3xl btn-ghost "><img className='w-[48px] h-[48px]' src="/src/assets/logo.png" alt="" /> Phudu</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-12 px-1 font-medium text-gray-500">
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