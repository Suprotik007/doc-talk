import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { NavLink } from 'react-router';
// import Navbar from './Navbar';
const Footer = () => {
    const links=
    < >
 

      
      <NavLink  to='/'><span className=' hover:text-blue-500'>Home</span></NavLink>
      <NavLink to='/myBookings'><span className=' hover:text-blue-500'>My-bookings</span></NavLink>
      <NavLink to='/blogs'><span className='hover:text-blue-500'>Blogs</span></NavLink>
      <NavLink to='/contact'><span className=' hover:text-blue-500'>Contact Us</span></NavLink>
      
      </>
    
    
    return (
        <footer className="footer footer-horizontal footer-center bg-white   p-10">
  <aside>
    
    <p className="flex items-center gap-3  font-extrabold  text-2xl btn-ghost "><img className='w-[35px] h-[35px]' src="/src/assets/logo.png" alt="" /> Phudu</p>
  </aside>
  <nav>
  <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal  mb-9 gap-10 px-1 font-medium text-gray-500">
            {links}
          </ul>
        </div>
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.facebook.com/'>
      <FaFacebook />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
      
        </svg>
      </a>
      <a href='https://www.youtube.com/?reload=9'>
      <IoLogoYoutube />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          
        </svg>
      </a>
      <a  href='https://www.linkedin.com/'>
      <span ><FaLinkedin /></span>
       
      </a>
      <a href='https://www.instagram.com/?hl=en'>
      <BsInstagram />
        <svg
          xmlns=""
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
         
        </svg>
      </a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;