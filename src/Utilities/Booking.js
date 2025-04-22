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


const addToStoreBook=(id)=>{
    const storedBookingData =getStoredBook()
    if(storedBookingData.includes(id)){
        alert("Already took the appointment")

    }
    else{
        storedBookingData.push(id)
        // console.log(storedBookingData);
        const data=JSON.stringify(storedBookingData)
        localStorage.setItem('BookList',data)

        
    }
}

export {addToStoreBook,getStoredBook}