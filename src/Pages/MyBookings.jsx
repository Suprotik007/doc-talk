


import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getStoredBook, removeAppointments } from '../Utilities/Booking';
import { ToastContainer, toast } from 'react-toastify';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'react-toastify/dist/ReactToastify.css';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedBookingData = getStoredBook();
    const convertBookingData = storedBookingData.map(id => parseInt(id));
    const myBookings = data.doctors.filter(appointment => convertBookingData.includes(appointment.id));
    setBookings(myBookings);
  }, [data.doctors]);
// MyBookings.jsx



  const handleRemove = (id) => {
    removeAppointments(id);
    setBookings(prev => prev.filter(booking => booking.id !== id));
    toast.error('Cancelled appointment', {
      autoClose: 3000,
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const chartData = bookings.map((doctor) => ({
    name: doctor.name,
    fee: doctor.fee,
  }));

  // Conditional rendering based on bookings length
  if (bookings.length < 1) {
    return (
      <div className="bg-white rounded-2xl p-10 mb-20 mx-40 mt-20 text-center shadow-md">
        <h2 className="text-3xl font-bold mb-4">No Appointments Found</h2>
        <p className="text-gray-600">You currently have no booked appointments.</p>
        {/* Optional: Add a button to navigate to booking page */}
         <Link to='/'><button className="btn btn-primary mt-6">Book an Appointment</button> </Link>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div>
      <div className='flex mx-40 mt-20 bg-white px-40 rounded-2xl '>
        <BarChart
          width={1500}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis className='XAxis ' tickMargin={50} angle={-40} dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="fee" label={{ position: 'top' }}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </div>

      <div className='py-18 px-40 mb-8 text-center mx-40 mt-8 '>
        <h1 className='font-extrabold text-4xl'>My Today Appointments</h1>
        <p className='text-lg pt-4 text-gray-500'>
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        </p>
      </div>

      <div className="text-center">
        {bookings.map(appointment => (
          <div key={appointment.id} className="bg-white pt-5 px-10 mb-8 rounded-2xl mx-40">
            <div className="flex justify-between border-b-1 border-dashed pb-5 border-gray-400 pt-5">
              <div className='text-left'>
                <p className='font-bold text-2xl'>{appointment.name}</p>
                <p className="text-gray-500 font-medium text-sm pt-2 pb-3">{appointment.speciality}, {appointment.education}</p>
              </div>
              <p className='badge p-3 text-cyan-900 bg-blue-300'>
                Appointment Fee: {appointment.fee} Taka +Vat
              </p>
            </div>

            <button onClick={() => handleRemove(appointment.id)}
              className="btn btn-error btn-outline rounded-3xl w-2xl mt-8 mb-12">
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default MyBookings;
