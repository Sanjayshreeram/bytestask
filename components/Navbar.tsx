"use client";
import React, { useState } from "react";
import { navabaritems } from "@/utils/staticassets";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AlertDialogDemo } from "./BookNow";

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Navbar = () => {
  const [chevron, setChevron] = useState(false);

  return (
    <>
      <div className="bg-white h-10 w-full justify-evenly items-center hidden sm:flex">
        <div>
          <h1 className="font-extrabold lg:text-2xl text-green-950">
            Kingsukh Guest House
          </h1>
        </div>
        <div>
          {navabaritems.map((page) => (
            <Button
              variant={"link"}
              id={page}
              key={page}
              className="hover:text-green-400 text-black"
              onClick={() => handleScroll(page)}
            >
             {page}
            </Button>
          ))}
        </div>
        <AlertDialogDemo />
      </div>

      <div className="sm:hidden h-24 w-full flex justify-between bg-white p-2">
        <h1 className="font-extrabold text-gray-500">Kingsukh Guest House</h1>

        {/* Chevron Dropdown at the End */}
        <div className="relative">
          <button onClick={() => setChevron((prev) => !prev)} className="flex items-center">
            {chevron ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>

          {chevron && (
            <div className="absolute right-0 mt-2 w-32 rounded-md bg-white shadow-lg">
              {navabaritems.map((page) => (
                <Button
                  variant={"link"}
                  id={page}
                  key={page}
                  className="w-full text-black text-sm"
                  onClick={() => handleScroll(page)}
                >
                  {page}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
