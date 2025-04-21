import React, { Suspense, useEffect, useState } from 'react';
import Doctor from '../Pages/Doctor';

const DoctorContainer = ({data}) => {
    const [showDoctors,setShowDoctors]=useState([])
    const [displayAll,setDisplayAll]=useState(false)
    useEffect(()=>{
        if(displayAll){
            setShowDoctors(data.doctors)}
            else{
                setShowDoctors(data.doctors.slice(0,6))
            }
        
        
    },[data,displayAll])
    
    return (
        <div className='pt-20 text-center mx-40' >
            <h1 className='font-extrabold text-4xl'>Our Best Doctors</h1>
            <p className='text-lg pt-4 text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

            <Suspense fallback={<span>Loading....</span>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-6 '>
            {
                showDoctors.map((singleDoctor)=><Doctor key={singleDoctor.id} singleDoctor={singleDoctor}>

                </Doctor>)
            }
            <div className=' text-center'>
            <button onClick={()=>setDisplayAll(prv=>!prv)}  className="btn btn-primary py-6 px-8 mt-4   rounded-3xl  font-bold text-lg"> {displayAll ? 'Show Less' : 'View All Doctors'}</button>
            </div>
            </div>
            </Suspense>
        </div>
    );
};

export default DoctorContainer;