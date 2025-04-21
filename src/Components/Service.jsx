import React from 'react';
import CountUp from 'react-countup';
const Service = () => {
    return (
        <div className='pt-20 text-center mx-40'>
            <h1 className='font-extrabold text-4xl'>We Provide Best Medical Services</h1>
            <p className='text-lg pt-4 text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
{/* cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 mb-20 mt-12 '>
                {/* card-1 */}
                <div className='text-left bg-white  p-12'>
                    <img className='pb-4' src="/src/assets/success-doctor.png" alt="" />
                    <CountUp start={0} end={199} delay={3}>
  {({ countUpRef }) => (
    
      <span className='font-bold text-5xl' ref={countUpRef} ></span>
    
  )}
</CountUp>
<p className='text-xl  pt-4 text-gray-500'>Total Doctors</p>
                </div>
                {/* card-2 */}
                <div className='text-left bg-white p-12'>
                    <img className='pb-4' src="/src/assets/success-review.png" alt="" />
                    <CountUp start={0} end={467} delay={3}>
  {({ countUpRef }) => (
    
      <span className='font-bold text-5xl' ref={countUpRef} ></span>
    
  )}
</CountUp>
<p className='text-xl pt-4 text-gray-500'>Total Reviews</p>
                </div>
                {/* c-3 */}
                <div className='text-left bg-white p-12'>
                    <img className='pb-4' src="/src/assets/success-doctor.png" alt="" />
                    <CountUp start={0} end={1900} delay={3}>
  {({ countUpRef }) => (
    
      <span className='font-bold text-5xl' ref={countUpRef} ></span>
    
  )}
</CountUp>
<p className='text-xl pt-4 text-gray-500'>Patients</p>
                </div>
                {/* c-4 */}
                <div className='text-left bg-white p-12'>
                    <img className='pb-4' src="/src/assets/success-doctor.png" alt="" />
                    <CountUp start={0} end={300} delay={3}>
  {({ countUpRef }) => (
    
      <span className='font-bold text-5xl' ref={countUpRef} ></span>
    
  )}
</CountUp>
<p className='text-xl pt-4 text-gray-500'>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default Service;