import React from "react";
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* About Section */}
            <div className="mb-6 lg:mb-0 lg:w-1/3">
              <h2 className="text-2xl font-bold">Kingsukh Guest House</h2>
              <p className="mt-4">
                Discover a world of comfort, luxury, and adventure as you explore
                our curated selection of hotels, making every moment of your
                getaway truly extraordinary.
              </p>
            </div>
  
            
            <div className="mb-6 lg:mb-0 lg:w-1/3">
              <h2 className="text-xl font-bold">Quick Links</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Browse Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Special Offers & Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Room Types & Amenities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Customer Reviews & Ratings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Travel Tips & Guides
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Services Section */}
            <div className="mb-6 lg:mb-0 lg:w-1/3">
              <h2 className="text-xl font-bold">Our Services</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Concierge Assistance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Flexible Booking Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Airport Transfers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Wellness & Recreation
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Contact Section */}
          <div className="mt-10 text-center">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="mt-2">
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
              723156
            </p>
            <p className="mt-2">Email: <a href="mailto:kkghosh0099@gmail.com" className="hover:text-green-400">kkghosh0099@gmail.com</a></p>
            <p className="mt-2">Phone: <a href="tel:+919007062180" className="hover:text-green-400">+91 9007062180</a></p>
          </div>
        </div>
      </footer>
    );
  }
  