import React from 'react';
import { useLoaderData } from 'react-router';

const Blogs = () => {
  const data = useLoaderData();

  return (
    <div className="pb-16 sm:pb-20">
      <div className="pt-12 sm:pt-16 text-center mx-4 sm:mx-8 md:mx-20 lg:mx-40">
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl">Blogs</h1>
        <p className="text-sm sm:text-base md:text-lg pt-4 sm:pt-6 pb-10 text-gray-500">
          Let's explore some basic questions that will enhance your development journey.
        </p>
      </div>

      <div className="join join-vertical border border-dashed border-gray-300 bg-white mx-4 sm:mx-8 md:mx-20 lg:mx-[82px] rounded-lg">
        {data.questions.map(({ id, question, answer, posted_date }) => (
          <div
            key={id}
            className="collapse collapse-arrow join-item border border-base-300"
          >
            <input type="radio" name={`accordion-${id}`} />
            <div className="collapse-title font-semibold text-sm sm:text-base">
              {question}
            </div>
            <div className="collapse-content gap-3 grid grid-cols-1 font-medium text-gray-500 text-xs sm:text-sm">
              {answer}
              <span className="text-cyan-800 text-xs p-1 badge bg-cyan-100 border border-cyan-400">
                Posted: {posted_date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

