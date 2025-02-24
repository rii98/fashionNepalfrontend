import axios from 'axios'
import React from 'react'
import useShopStore from '../store/shopStore'

const Esewa = () => {
    const {token } = useShopStore();
    const url=import.meta.env.VITE_BACKEND_URL
    const handleSubmit = async ()=>{
        const response = await axios.post(  `${url}/api/order/place-esewa`,{
            price: 2000
        },{headers:{token}});
        console.log(response.data);
    }
  return (
    <div>
       
        <button className=' border-2 p-4 bg-amber-200 cursor-pointer hover:opacity-80' onClick={handleSubmit}>Pay By Esewa</button>
    </div>
  )
}

export default Esewa
