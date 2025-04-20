import React from 'react';

const Banner = () => {
    return (
        <div className=" bg-white rounded-2xl drop-shadow-white min-h-screen border-2 border-white  shadow-2xl mt-4 mr-[50px] ml-[50px]">
        <div className="hero-content mx-auto">
          <div className="pt-20">
            <h1 className="text-5xl w-[915px] mx-auto text-center font-extrabold">Dependable Care, Backed by Trusted Professionals.</h1>
            <p className="py-6 font-medium text-gray-500 text-xl text-center mt-4">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br />routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            <div className="join items-center gap-5">
  <div className='ml-24 mt-6 '>
    <label className="input validator rounded-2xl h-[52px] w-[800px] join-item">
      
      <input type="text" placeholder="Search any doctor"  />
    </label>
    
  </div>
  <button className="btn btn-primary py-6 px-8 mt-4 rounded-3xl join-item font-bold text-xl">Search Now</button>
</div>
{/* img */}
<div className='flex gap-6 pt-6 mx-auto pb-40'>
<img src="/src/assets/banner-img-1.png" alt="" />
<img src="/src/assets/banner-img-1.png" alt="" />

</div>
          </div>
        </div> 
      </div>
    );
};

export default Banner;