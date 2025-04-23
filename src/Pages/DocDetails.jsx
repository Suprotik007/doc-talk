// import React, { Suspense } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
// import Doctor from './Doctor';
import { addToStoreBook } from '../Utilities/Booking';


import React, { Suspense, lazy } from 'react';



const DocDetails = () => {
    const {id}=useParams()
    const data=useLoaderData()
    const docId=parseInt(id)

    
    
    const singleDoc = data.doctors.find(doc => doc.id === docId);
    const {image,name,education,registrationNumber,speciality,availableDays,fee,workingAt,availability }=singleDoc;
    // console.log(singleDoc);
    

    
const handleBookings = (id) => {
  const isNewBooking = addToStoreBook(id);

  if (isNewBooking) {
    toast.success(`Successfully booked ${name}`, {
      autoClose: 3000,
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } else {
    toast.info("Already took the appointment", {
      autoClose: 3000,
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};
    
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

<div className=" bg-white pt-5 px-10 mb-8 rounded-2xl text-center mx-40 mt-8 ">
  <div className=" text-center">
    <div className="">
      <h1 className="text-4xl font-bold pb-4 border-b-1 border-dashed">Book an Appointment</h1>
      <div className='flex  justify-between border-b-1 pb-5 border-gray-400 pt-5'>
        <p className='font-medium'>Availability</p>
        <p className='badge  border-emerald-700  bg-emerald-200 text-emerald-900'>Doctor {availability} Today</p>
       
      </div> 
      <p className='badge text-xs mt-5  border-amber-500  bg-amber-100 text-amber-600'> ! Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
      <button onClick={()=>{handleBookings(id), handleBookAppointment()}} className="btn btn-primary rounded-3xl w-2xl  mt-8 mb-12">Book Appointment Now</button>
    </div><ToastContainer />
  </div>
  
</div>

</div>
    );
};

export default DocDetails;