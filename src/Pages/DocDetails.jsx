

import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
// import Doctor from './Doctor';
import { addToStoreBook } from '../Utilities/Booking';


// import React, { Suspense, lazy } from 'react';

const DocDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const docId = parseInt(id);

  const singleDoc = data.doctors.find(doc => doc.id === docId);
  const {
    image,
    name,
    education,
    registrationNumber,
    speciality,
    availableDays,
    fee,
    workingAt,
    availability,
  } = singleDoc;
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
      <div className="py-10 sm:py-14 px-4 sm:px-8 md:px-16 lg:px-40 mb-8 bg-white rounded-2xl text-center mx-4 sm:mx-8 md:mx-16 lg:mx-40 mt-8">
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl">Doctor’s Profile Details</h1>
        <p className="text-sm sm:text-base md:text-lg pt-4 text-gray-500">
          "Our doctors are dedicated professionals committed to providing the highest standard of medical care. With years of specialized training and hands-on experience, they ensure each patient receives personalized attention and expert treatment."
        </p>
      </div>
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-40 pr-4 md:pr-10 mb-8 bg-white">
        <div className="hero-content flex-col md:flex-row lg:flex-row items-center md:items-start">
          <img className="p-4 sm:p-6 md:p-10 h-72 sm:h-80 md:h-[430px] w-72 sm:w-80 md:w-[430px]" src={image} />
          <div className="pt-4 md:pt-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold">{name}</h1>
            <p className="pt-2 sm:pt-3 text-gray-500 font-medium text-sm sm:text-base md:text-lg">{education}</p>
            <p className="pt-2 text-gray-500 font-medium text-sm sm:text-base md:text-lg">{speciality}</p>
            <p className="pt-3 pb-3 text-gray-500 font-medium text-sm sm:text-base md:text-lg">
              Working at: <br />
              <span className="font-semibold text-black text-lg sm:text-xl">{workingAt}</span>
            </p>
            <p className="text-gray-500 font-medium text-sm sm:text-base md:text-lg border-t-1 border-dashed pt-3 border-b-1 pb-3">
              Reg No: {registrationNumber}
            </p>
            <p className="font-semibold pt-4 flex flex-wrap gap-2">
              Availability:
              {availableDays.map((days, index) => (
                <button
                  key={index}
                  className="font-semibold bg-amber-100 px-2 py-1 text-sm sm:text-base badge text-amber-500 border-amber-400 rounded-2xl"
                >
                  {days}
                </button>
              ))}
            </p>
            <p className="pt-5 pb-3 text-black font-medium text-sm sm:text-base md:text-lg">
              Consultation Fee:{" "}
              <span className="font-semibold text-blue-600 text-lg sm:text-xl"> Taka: {fee} </span>{" "}
              <span className="text-gray-500">(incl. Vat)</span>{" "}
              <span className="text-blue-600">Per Consultation</span>
            </p>
          </div>
        </div>
      </div>

      {/* appointment */}
      <div className="bg-white pt-6 sm:pt-8 px-4 sm:px-8 md:px-10 mb-8 rounded-2xl text-center mx-4 sm:mx-8 md:mx-16 lg:mx-40 mt-8">
        <div className="text-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-4 border-b-1 border-dashed">
              Book an Appointment
            </h1>
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start border-b-1 pb-5 border-gray-400 pt-5">
              <p className="font-medium text-sm sm:text-base">Availability</p>
              <p className="badge border-emerald-700 bg-emerald-200 text-emerald-900 mt-2 sm:mt-0">
                Doctor {availability} Today
              </p>
            </div>
            <p className="badge text-xs mt-5 border-amber-500 bg-amber-100 text-amber-600">
              ! Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
            </p>
            <button
              onClick={() => {
                handleBookings(id);
                handleBookAppointment(); 
              }}
              className="btn btn-primary rounded-3xl w-full sm:w-auto mt-8 mb-12"
            >
              Book Appointment Now
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default DocDetails;
