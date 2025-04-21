import React from 'react';

const Doctor = ({singleDoctor}) => {
    console.log(singleDoctor);
    const {image,name,education,experience,registrationNumber,availability }=singleDoctor || {};
    return (
        <div className=''>
            <div className="card w-[320px] h-[400px] bg-base-100 rounded- shadow-sm">
        <figure className="px-5 pt-20">
          <img 
            src={image}
            alt="Shoes"
            className="rounded-2xl " />
        </figure>
        <div className=' pt-5 pl-5 text-left flex gap-3 '>
        <div className="badge  border-emerald-700  bg-emerald-200 text-emerald-900">{availability}</div>
        <div className="badge  text-cyan-900 bg-cyan-200 border-cyan-900">{experience}</div>
        </div>
        <div className="card-bod text-left p-5 pt-2">
          <h2 className=" pb-1 font-extrabold text-2xl">{name}</h2>
          <p className='border-b-1 border-dashed font-medium text-gray-500 pb-3'>{education}</p>
          <p className='text-gray-500  pt-1 '>Reg.No :{registrationNumber}</p>
          <div className="card-actions">
          <button className="btn btn-outline btn-primary rounded-2xl  btn-wide mt-5">View Details</button>
          </div>
          
        </div>
      </div>
      
        </div>
    );
};

export default Doctor;