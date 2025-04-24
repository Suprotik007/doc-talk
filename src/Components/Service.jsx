import React from 'react';
import CountUp from 'react-countup';

const Service = () => {
  return (
    <div className="pt-16 sm:pt-20 text-center mx-4 sm:mx-8 md:mx-20 lg:mx-40">
      <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl">
        We Provide Best Medical Services
      </h1>
      <p className="text-sm sm:text-base md:text-lg pt-4 text-gray-500 max-w-2xl mx-auto">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mt-12 mb-16">
        {/* Card 1 */}
        <div className="text-left bg-white p-6 sm:p-8 lg:p-12 shadow-md rounded-lg">
          <img className="pb-4 w-16" src="/assets/success-doctor.png" alt="Doctors" />
          <CountUp prefix="+" start={0} end={199} delay={1}>
            {({ countUpRef }) => (
              <span className="font-bold text-3xl sm:text-4xl lg:text-5xl" ref={countUpRef}></span>
            )}
          </CountUp>
          <p className="text-base sm:text-lg pt-4 text-gray-500">Total Doctors</p>
        </div>

        {/* Card- 2 */}
        <div className="text-left bg-white p-6 sm:p-8 lg:p-12 shadow-md rounded-lg">
          <img className="pb-4 w-16" src="/assets/success-review.png" alt="Reviews" />
          <CountUp prefix="+" start={0} end={467} delay={1}>
            {({ countUpRef }) => (
              <span className="font-bold text-3xl sm:text-4xl lg:text-5xl" ref={countUpRef}></span>
            )}
          </CountUp>
          <p className="text-base sm:text-lg pt-4 text-gray-500">Total Reviews</p>
        </div>

        {/* Card -3 */}
        <div className="text-left bg-white p-6 sm:p-8 lg:p-12 shadow-md rounded-lg">
          <img className="pb-4 w-16" src="/assets/success-patients.png" alt="Patients" />
          <CountUp prefix="+" start={0} end={1900} delay={1}>
            {({ countUpRef }) => (
              <span className="font-bold text-3xl sm:text-4xl lg:text-5xl" ref={countUpRef}></span>
            )}
          </CountUp>
          <p className="text-base sm:text-lg pt-4 text-gray-500">Patients</p>
        </div>

        {/* Card-- 4 */}
        <div className="text-left bg-white p-6 sm:p-8 lg:p-12 shadow-md rounded-lg">
          <img className="pb-4 w-16" src="/assets/success-staffs.png" alt="Staffs" />
          <CountUp prefix="+" start={0} end={300} delay={1}>
            {({ countUpRef }) => (
              <span className="font-bold text-3xl sm:text-4xl lg:text-5xl" ref={countUpRef}></span>
            )}
          </CountUp>
          <p className="text-base sm:text-lg pt-4 text-gray-500">Total Staffs</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
