import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image'; // Import the Image component
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="h-auto md:h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-gray-200 rounded-2xl shadow-lg mt-7 m-6">
      <div className="max-w-lg text-center md:text-left md:mr-12">
        <p className="text-gray-600 text-lg mb-4">Welcome to Chairy</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-1 leading-tight">Best Furniture</h1>
        <h1 className="text-3xl md:text-4xl font-bold mb-1 leading-tight">Collection For Your</h1>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Interior.</h1>
        <Link href="/product"> {/* Add this Link component */}
          <button className="flex items-center mt-4 px-6 py-3 bg-[#007860] text-white rounded-lg hover:bg-[#272343]">
            Shop Now 
            <FaArrowRightLong className="ml-2 text-lg" />
          </button>
        </Link>
      </div>
      <div className="mt-8 md:mt-3 flex justify-center">
        <Image 
          src="/Product.png" 
          alt="chair" 
          width={400} // Set the width of the image
          height={540} // Set the height of the image
          className="rounded-lg w-[350px] md:w-[400px] h-[300px] md:h-[540px] object-cover" 
        />
      </div>
    </section>
  );
}