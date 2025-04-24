import { ToastContainer, toast } from 'react-toastify';

const getStoredBook=()=>{
    const  storedBook=localStorage.getItem("BookList")

    if(storedBook){
        const storedBookingData=JSON.parse(storedBook)
        return(storedBookingData)
    }
    else{
        return[]
    }
}




const addToStoreBook = (id) => {
  const storedBookingData = getStoredBook();

  if (storedBookingData.includes(id)) {
    
    return false;
  } else {
    storedBookingData.push(id);
    localStorage.setItem('BookList', JSON.stringify(storedBookingData));
    return true;
  }
};

export { addToStoreBook, getStoredBook };


export const removeAppointments = (id) => {
    const appointments = getStoredBook(); 
    const idStr = id.toString();
  
    const remainingAppointments = appointments.filter(appointmentId => appointmentId !== idStr);
  
    localStorage.setItem('BookList', JSON.stringify(remainingAppointments));
  };
  
  