
// import DoctorContainer from '../Components/DoctorContainer';
import { useLoaderData } from 'react-router';
import Service from '../Components/Service';

import React, { Suspense, lazy } from 'react'
const DoctorContainer = lazy(() => import('../Components/DoctorContainer'))

const Home = () => {
    const data=useLoaderData()
    console.log(data);
    
    return (
        <div>
         <div>
<Suspense fallback={<div className='mx-110 pt-20 text-4xl text-blue-700'>Loading component...</div>}>
        <DoctorContainer data={data} />
      </Suspense>
        <Service></Service>
    </div>
         </div>   
            
    


    );
};

export default Home;









