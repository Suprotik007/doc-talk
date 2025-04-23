import React from 'react';
import { useLoaderData} from 'react-router';

const Blogs = () => {
    
    const data=useLoaderData()
    
    

    return (
        <div className='pb-20'>
              <div className='pt-15  text-center mx-40'>
              <h1 className='font-extrabold text-4xl'>Blogs</h1>
              <p className='text-lg pt-6 pb-15 text-gray-500'>Let's explore some basic questions that will enhance your development journey.</p>
              </div>
              <div className="join join-vertical border-1 border-dashed border-gray-500 bg-white mx-82">
        {data.questions.map(({ id, question, answer, posted_date }) => (
          <div key={id} className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name={`accordion-${id}`} />
            <div className="collapse-title font-semibold">{question}</div>
            <div className="collapse-content gap-3 grid grid-cols-1 font-medium text-gray-500 text-sm">
              {answer}
              <span className="text-cyan-800 text-xs p-1 badge bg-cyan-500">
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




