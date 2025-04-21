import React from 'react';

const Banner = () => {
    return (
        <div className=" bg-white rounded-2xl  banner-border  min-h-screen border-2 pl-40 pr-40 mx-[50px]  shadow-2xl mt-4 ">
        <div className="  ">
          <div className="pt-20 ">
            <h1 className="text-5xl  mx-auto text-center font-extrabold">Dependable Care, Backed by Trusted Professionals.</h1>
            <p className="py-6 font-medium text-gray-500 text-sm text-center  mt-4">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            <div className="join items-center gap-5">
  <div className=' mt-6  '>
  <input  type="text" placeholder="Search any doctors" className="input input-primary  h-12 rounded-2xl w-2xl " />
  </div>
  <button className="btn btn-primary py-6 px-8 mt-4 rounded-3xl join-item font-bold text-xl">Search Now</button>
</div>
{/* img */}
<div className='flex w-105 gap-6 pt-6  pb-40'>
<img className='' src="/src/assets/banner-img-1.png" alt="" />
<img src="/src/assets/banner-img-1.png" alt="" />

</div>
          </div>
        </div> 
      </div>
    );
};

export default Banner;