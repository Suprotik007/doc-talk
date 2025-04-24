
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <div className='mx-4 sm:mx-8 md:mx-20 lg:mx-80 my-10 sm:my-16 md:my-20 text-center'>
        <img className="w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto" src="/assets/404image.jpg" alt="" />
        <Link to='/'>
          <button className="btn mt-8 sm:mt-10 btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
