import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../Utilities/Booking';
import Doctor from './Doctor';

const MyBookings = () => {
    const[bookings,setBookings]=useState([])
   const data=useLoaderData()
   console.log(data);
   useEffect(()=>{
    const storedBookingData=getStoredBook()
    // console.log(storedBookingData);
    const convertBookingData=storedBookingData.map(id=>parseInt(id))
    // console.log(convertBookingData);
    const myBookings=data.doctors.filter(appointment=>convertBookingData.includes(appointment.id))
    setBookings(myBookings);
   },[data.doctors])
    return (
        <div>
            
            <div className='py-18 px-40 mb-8 text-center mx-40 mt-8 '>
   <h1 className='font-extrabold text-4xl'>My Today Appointments </h1>
   <p className='text-lg pt-4 text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
        </div>
      
        <div className="text-center">
        
        {bookings.map(appointment => (
          <div key={appointment.id} className="bg-white pt-5 px-10 mb-8 rounded-2xl mx-40">
            <div className="flex justify-between border-b-1 border-dashed pb-5 border-gray-400 pt-5">
              <div className='text-left'>
              <p className='font-bold text-2xl'>{appointment.name}</p>
              <p className=" text-gray-500 font-medium text-sm  pt-2  pb-3 ">{appointment.speciality}, {appointment.education}</p>
              </div>
              <p className='badge p-3 text-cyan-900 bg-blue-300 '>
                Appointment Fee: {appointment.fee} Taka +Vat
              </p>
            </div>
            
            <button className="btn btn-error btn-outline rounded-3xl w-2xl mt-8 mb-12">
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;