import React from 'react';
import { RiSofaFill } from "react-icons/ri";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaCcPaypal, FaCcVisa } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="flex gap-3 text-xl font-bold mb-4"><RiSofaFill /> Comforty</h2>
          <p className="text-gray-600 mb-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Category Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Category</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-blue-500">Sofa</a></li>
            <li><a href="#" className="hover:text-blue-500">Armchair</a></li>
            <li><a href="#" className="hover:text-blue-500">Wing Chair</a></li>
            <li><a href="#" className="hover:text-blue-500">Desk Chair</a></li>
            <li><a href="#" className="hover:text-blue-500">Wooden Chair</a></li>
            <li><a href="#" className="hover:text-blue-500">Park Bench</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-blue-500">Help & Support</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Help</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat enim.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-300 mt-8 py-4 text-center">
        <p className="text-gray-600">
          &copy; 2021 - Comforty - Designed & Developed by <span className="text-blue-500">Zainab</span>
        </p>
        <div className="flex justify-center space-x-4 mt-4 sm:mt-0">
          <FaCcPaypal className="text-3xl" />
          <FaCcVisa className="text-3xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
