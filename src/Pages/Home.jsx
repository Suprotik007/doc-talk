
import DoctorContainer from '../Components/DoctorContainer';
import { useLoaderData } from 'react-router';
import Service from '../Components/Service';



const Home = () => {
    const data=useLoaderData()
    console.log(data);
    
    return (
        
            
            
        <div>
        
            <DoctorContainer data={data}></DoctorContainer>
            <Service></Service>
        
        </div>
    );
};

export default Home;