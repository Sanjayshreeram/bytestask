import React from 'react';
import Image from 'next/image';
import {AlertDialogDemo} from "@/components/BookNow";
import small from "@/assets/small.jpg";
import large from "@/assets/large.jpg";


export const HotelCard = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 p-8 gap-8 rounded-lg shadow-lg mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-full h-64">
            <Image src={small} width={1000} height={800} alt="Hotel Image 1" className="object-cover w-full h-full"/>
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold mb-2">Spacious Serenity Suite
            </h2>
            <p className="text-gray-700 mb-4">
              Enjoy a luxurious stay at our hotel with top-notch amenities and breathtaking views.
            </p>
            <AlertDialogDemo />
          </div>
        </div>

       
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-full h-64">
            <Image src={large} width={1000} height={800} alt="Hotel Image 2" className="object-cover w-full h-full"/>
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold mb-2">Cozy Haven Room
            </h2>
            <p className="text-gray-700 mb-4">
              Experience unparalleled comfort and hospitality at our charming hotel.
            </p>
            <AlertDialogDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
