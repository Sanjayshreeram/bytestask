import React from 'react'
import out from "@/assets/out.jpg"
import Image from 'next/image'

const Aboutus = () => {
  return (
<div className="flex flex-col md:flex-row justify-center items-center bg-white shadow-lg rounded-lg p-8 gap-8 max-w-lg md:max-w-4xl mx-auto bg-gradient-to-r from-gray-100 to-gray-200">
  <div className="w-full md:w-1/2 h-80 rounded-lg overflow-hidden">
    <Image src={out.src} width={1000} height={800} alt="hotel image" className="object-cover w-full h-full"/>
  </div>
  <div className="bg-gray-200 h-auto w-full md:w-[400px] rounded-lg md:rounded-l-xl flex flex-col items-start justify-center p-5 text-left">
    <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
    <p className="text-lg mb-4">
      The Best Holidays Start Here! Embark on a tranquil journey at our Kingsukh Guest House, 
      enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, 
      Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace 
      of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat 
      beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the 
      hidden gems of Purulia, creating memories that linger long after your stay.
    </p>
    <p className="text-lg font-semibold">Address:</p>
    <p>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
    <p className="mt-2">Contact us: +91 9007062180</p>
  </div>
</div>



  
  )
}

export default Aboutus