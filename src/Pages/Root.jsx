// import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';


const Root = () => {
  // const navigation = useNavigation();
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

export default Root