import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';

const Root = () => {
    const location = useLocation();
  const hideNavFooter = location.pathname === '/contact';

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <Outlet />
      {!hideNavFooter && <Footer />}
    </>
  );
};

export default Root;