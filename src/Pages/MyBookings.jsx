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

  if (bookings.length < 1) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 mb-20 mx-4 sm:mx-8 md:mx-20 lg:mx-40 mt-10 sm:mt-16 md:mt-20 text-center shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">No Appointments Found</h2>
        <p className="text-gray-600 text-sm sm:text-base">You currently have no booked appointments.</p>
        <Link to='/'><button className="btn btn-primary mt-6">Book an Appointment</button> </Link>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div>
      <div className='overflow-x-scroll mx-4 sm:mx-8 md:mx-20 lg:mx-40 mt-10 sm:mt-16 md:mt-20 bg-white px-4 sm:px-10 md:px-20 rounded-2xl'>
        <BarChart
          width={1200}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis className='XAxis' tickMargin={50} angle={-40} dataKey="name" />
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

      <div className='py-10 sm:py-14 px-4 sm:px-8 md:px-16 lg:px-40 mb-8 text-center mx-4 sm:mx-8 md:mx-16 lg:mx-40 mt-8'>
        <h1 className='font-extrabold text-2xl sm:text-3xl md:text-4xl'>My Today Appointments</h1>
        <p className='text-sm sm:text-base md:text-lg pt-4 text-gray-500'>
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        </p>
      </div>

      <div className="text-center">
        {bookings.map(appointment => (
          <div key={appointment.id} className="bg-white pt-5 px-4 sm:px-8 md:px-10 mb-8 rounded-2xl mx-4 sm:mx-8 md:mx-20 lg:mx-40">
            <div className="flex flex-col sm:flex-row justify-between gap-4 border-b-1 border-dashed pb-5 border-gray-400 pt-5 text-left sm:text-left">
              <div>
                <p className='font-bold text-xl sm:text-2xl'>{appointment.name}</p>
                <p className="text-gray-500 font-medium text-sm pt-2 pb-3">
                  {appointment.speciality}, {appointment.education}
                </p>
              </div>
              <p className='badge p-3 text-cyan-900 bg-blue-300 self-start sm:self-center'>
                Appointment Fee: {appointment.fee} Taka +Vat
              </p>
            </div>

            <button
              onClick={() => handleRemove(appointment.id)}
              className="btn btn-error btn-outline rounded-3xl w-full sm:w-auto mt-8 mb-12"
            >
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
