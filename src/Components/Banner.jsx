import React from 'react';

const Banner = () => {
  return (
    <div className="bg-white rounded-2xl border-2 shadow-2xl mt-4 mx-4 md:mx-12 lg:mx-20 xl:mx-[50px] px-4 md:px-20 lg:px-40 min-h-screen banner-border">
      <div className="pt-16 md:pt-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-4xl mx-auto">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className="py-6 mt-2 font-medium text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="text"
            placeholder="Search any doctors"
            className="input input-primary h-12 w-full sm:w-80 rounded-2xl"
          />
          <button className="btn btn-primary px-6 py-3 rounded-3xl font-bold text-lg sm:text-xl">
            Search Now
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-10 pb-20">
          <img
            className="w-72 sm:w-80 md:w-96"
            src="/assets/banner-img-1.png"
            alt="Doctor 1"
          />
          <img
            className="w-72 sm:w-80 md:w-96"
            src="/assets/banner-img-1.png"
            alt="Doctor 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
