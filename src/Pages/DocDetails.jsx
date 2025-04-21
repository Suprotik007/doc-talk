import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Doctor from './Doctor';
const DocDetails = () => {
    const {id}=useParams()
    const data=useLoaderData()
    const docId=parseInt(id)
    
    const singleDoc = data.doctors.find(doc => doc.id === docId);
    const {image,name,education,registrationNumber,speciality,availableDays,fee,workingAt }=singleDoc;
    // console.log(singleDoc);
    
    
    
    
    
    return (
        <div>
        <div className='py-18 px-40 mb-8 bg-white rounded-2xl text-center mx-40 mt-8'>
   <h1 className='font-extrabold text-4xl'>Doctor’s Profile Details</h1>
   <p className='text-lg pt-4 text-gray-500'>"Our doctors are dedicated professionals committed to providing the highest standard of medical care. With years of specialized training and hands-on experience, they ensure each patient receives personalized attention and expert treatment."</p>
        </div>
    {/* //  detail */}

    <div className="  mx-40   pr-10 mb-8 bg-white ">
  <div className="hero-content    flex-col md:flex-row lg:flex-row">
    <img className=' p-12 h-[430px] w-[430px]' src={image}
      
    />
    <div>
      <h1 className="text-3xl font-extrabold">{name}</h1>
      <p className="pt-3 text-gray-500 font-medium text-lg">{education}</p>
      <p className="pt-2 text-gray-500 font-medium text-lg">{speciality}</p>
      <p className="pt-3 pb-3 text-gray-500 font-medium text-lg ">Working at: <br /><span className='font-semibold text-black text-xl '>{workingAt}</span></p>
      <p className=" text-gray-500 font-medium text-lg border-t-1 border-dashed pt-3 border-b-1 pb-3 ">Reg No: {registrationNumber}</p>
      <p className=' font-semibold pt-4 flex gap-2'>Availability:
      {
        availableDays.map(days=><button className=" font-semibold bg-amber-100 p-2 badge text-amber-500 border-amber-400 rounded-2xl" >{days}</button>)
    }
      </p>
      <p className="pt-5 pb-3 text-black font-medium text-lg ">Consultation Fee: <span className='font-semibold text-blue-600 text-xl '> Taka: {fee} </span> <span className='text-gray-500'>(incl. Vat)</span> <span className='text-blue-600'>Per Consultation</span></p>
     
    </div>
  </div>
</div>
{/* appointment */}

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
</div>
    );
};

export default DocDetails;