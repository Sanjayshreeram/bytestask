import React from "react";
import { GlobeLock,HandPlatter,Soup,Binoculars } from 'lucide-react';
export default function ServicesCard() {
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
            Our Services
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-green-700 p-4 rounded-full mb-4">
               <GlobeLock/>
              </div>
              <h3 className="text-xl font-semibold mb-2">High Class Security</h3>
              <p className="text-gray-600">
                We provide top-notch security services ensuring your safety 24/7.
              </p>
            </div>
  
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-green-700 p-4 rounded-full mb-4">
               <HandPlatter/>
              </div>
              <h3 className="text-xl font-semibold mb-2">24 Hours Room Service</h3>
              <p className="text-gray-600">
                Enjoy our around-the-clock room service at any hour of the day.
              </p>
            </div>
  
           
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-green-700 p-4 rounded-full mb-4">
               <Soup/>
              </div>
              <h3 className="text-xl font-semibold mb-2">Restaurant</h3>
              <p className="text-gray-600">
                Indulge in a variety of gourmet dishes at our in-house restaurant.
              </p>
            </div>
  
          
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-green-700 p-4 rounded-full mb-4">
               <Binoculars/>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tourist Guide Support</h3>
              <p className="text-gray-600">
                Get expert assistance from our dedicated tourist guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  