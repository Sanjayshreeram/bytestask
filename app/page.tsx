import { Navbar } from "@/components/Navbar";
import ayodhaya from "@/assets/ayodhya.jpg";
import { AlertDialogDemo } from "@/components/BookNow";
import Aboutus from "@/components/Aboutus";
import HotelCard from "@/components/Hotelcard";
import Footer from "@/components/Footer";
import ServicesCard from "@/components/Services";

export default function Home() {
  return (
    <div>
      <div
        className="flex flex-col h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${ayodhaya.src})`,
        }}
      >
        <Navbar />
        <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight flex justify-center mt-10 items-center bg-gradient-to-r from-emerald-700 to-gray-400 bg-clip-text text-transparent">
          SIMPLE-UNIQUE-FRIENDLY
        </h3>
        <h1 className="text-4xl font font-extrabold lg:text-5xl text-green-400 flex justify-center mt-10 items-center">
          Make Yourself at Home in Our Guest House
        </h1>
      </div>

      <div className="bg-green-300 w-1/2 h-24 rounded-md mt-10 flex items-center justify-center gap-5">
        <div className="font-bold text-black">BOOK YOUR LUXURY</div>
        <AlertDialogDemo />
      </div>

      <div id="About">
        <Aboutus />
      </div>

      <div id="Rooms">
        <HotelCard />
      </div>
      <ServicesCard/>
   
      <Footer/>
     
    </div>
  );
}
