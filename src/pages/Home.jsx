

/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import useShopStore from '../store/shopStore'

const Home = () => {
  const getProductsData = useShopStore((state) => state.getProductsData);
  const url=import.meta.env.VITE_BACKEND_URL
    useEffect(() => {
        getProductsData(); 
        console.log(url)
    }, [getProductsData]);
    
  return (
    <div>
      <Hero/>
      <LatestCollections/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
