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
        <div className='mx-80 my-20 '>
            <img src="/src/assets/404image.jpg" alt="" />
            <Link to='/'><button className="btn mx-50 mt-10 btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Go Home</button></Link>
        </div>
    
        </div> 
        );
};

export default ErrorPage;