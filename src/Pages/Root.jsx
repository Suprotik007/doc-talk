
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation, useNavigation } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
  const location = useLocation();
  const navigation = useNavigation();
  const hideNavFooter = location.pathname === '/contact';

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout;

    if (navigation.state === 'loading') {
      setShowLoader(true)
      
    } else {
      timeout = setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [navigation.state]);

  return (
    <>
      {showLoader && (
        <div className="loader mx-130 pt-30">
          <span className="loading loading-bars loading-xl"></span>
          Loading...
        </div>
      )}

      {!hideNavFooter && <Navbar />}

      <Outlet />

      {!hideNavFooter && <Footer />}
    </>
  );
};

export default Root;



