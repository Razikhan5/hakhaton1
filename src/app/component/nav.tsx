"use client";
import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md border-b border-gray-200 m-4 ">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between px-4 py-2 w-full max-w-screen-xl mx-auto bg-[rgba(39,35,67,1)] text-white">
        <div>Free Shipping On All Orders Over $50</div>
        <div className="flex space-x-6">
          <div>Eng</div>
          <li className='flex space-x-6'>
            <Link href="/faqs">FAQS</Link>
          </li>
          <div className="flex items-center space-x-1">
            <img src='/Vector.png' alt='icon'/>
            <span>Need Help?</span>
          </div>
        </div>
      </div>

      {/* Logo and Cart */}
      <div className="flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/Logo Icon.png" alt="Logo" width={30} height={40} />
          <span className="text-xl font-bold text-gray-700">Comforty</span>
        </div>

        {/* Cart (Desktop) */}
        <div className="relative hidden md:flex items-center justify-between gap-2">
          <FaShoppingCart size={20} className="text-gray-700" />
          <span className='gap-2'>Cart</span>
          <span className="bg-teal-600 text-white text-xs rounded-full px-1">
            2
          </span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          {menuOpen ? (
            <FaTimes
              size={20}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-gray-700"
              aria-label="Close Menu"
            />
          ) : (
            <FaBars
              size={20}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer text-gray-700"
              aria-label="Open Menu"
            />
          )}
        </div>
      </div>

      {/* Links and Contact (Desktop) */}
      <div className="hidden md:flex justify-between items-center px-4 py-3 bg-white">
      <div className="flex space-x-6 text-gray-700 list-none">
  <li className="hover:text-teal-600">
    <Link href="/">Home</Link>
  </li>
  <li className="hover:text-teal-600">
    <Link href="/shope">Shope</Link>
  </li>
  <li className="hover:text-teal-600">
    <Link href="/product">Product</Link>
  </li>
  <li className="hover:text-teal-600">
    <Link href="/contant">Contact Us</Link>
  </li>
  <li className="hover:text-teal-600">
    <Link href="/about">About</Link>
  </li>
</div>


        <div className="text-gray-700">Contact: (808) 555-0111</div>
      </div>

      {/* Mobile Menu (Mobile Devices) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-3 space-y-2 text-gray-700">
          <li className="hover:text-teal-600">
           <Link href="/">Home</Link>
          </li>
          <li className="hover:text-teal-600">
           <Link href="/shope">Shope</Link>
          </li>
          <li className="hover:text-teal-600">
           <Link href="/product">product</Link>
          </li>
          <li className="hover:text-teal-600">
           <Link href="/contant">Contact Us</Link>
          </li>
          <li className="hover:text-teal-600">
           <Link href="/about">About</Link>
          </li>
        
        </div>
      )}
    </nav>
  );
}

export default Nav;
