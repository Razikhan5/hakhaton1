// app/components/Nav.tsx
"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../component/contextApi"; // Adjust the import path as needed
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"; // Add Clerk components
import Product from "../product/page";


function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const { cartItems } = useCart(); // Get cart items from the context

  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    // Redirect to the search results page
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-gray-100 shadow-md border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between px-4 py-2 w-full max-w-screen-xl mx-auto bg-[rgba(39,35,67,1)] text-white">
        {/* Free Shipping Text */}
        <div className="text-sm text-center md:text-left mb-2 md:mb-0">
          Free Shipping On All Orders Over $50
        </div>

        {/* Right Side: Eng, FAQS, Need Help */}
        <div className="flex justify-center md:justify-end space-x-4">
          <div>Eng</div>
          <li className="flex space-x-4">
            <Link href="/faqs">FAQS</Link>
          </li>
          <div className="flex items-center space-x-1">
            <Image src="/Vector.png" alt="icon" width={20} height={20} />
            <span>Need Help?</span>
          </div>
        </div>
      </div>

      {/* Logo, Search Bar, Cart, and Mobile Menu Icon */}
      <div className="flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/Logo Icon.png"
            alt="Logo"
            width={30}
            height={40}
            priority // Optimize loading for above-the-fold images
          />
          <span className="text-xl font-bold text-gray-700">Comforty</span>
        </div>

        {/* Search Bar (Centered) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center justify-center flex-grow mx-4 max-w-2xl"
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 outline-none border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-teal-600"
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 transition-colors"
            aria-label="Search"
          >
            <FiSearch />
          </button>
        </form>

        {/* Display Search Results for Desktop */}
        {searchResults.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg mt-2 rounded-md z-50">
            <ul className="py-2">
              {searchResults.map((product) => (
                <li
                  key={product._id}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  <Link
                    href={`/products/${product._id}`}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{product.title}</p>
                      <p className="text-sm text-gray-600">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Cart (Visible on both desktop and mobile) */}
        <Link href="/cart" className="relative flex items-center justify-between gap-2">
          <FaShoppingCart size={20} className="text-gray-700" />
          <span className="gap-2">Cart</span>
          {totalItems > 0 && (
            <span className="bg-teal-600 text-white text-xs rounded-full px-1">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Mobile Menu Icon (Visible only on mobile) */}
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

      {/* Links and Contact (Visible only on desktop) */}
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

        {/* Clerk Authentication (Visible only on desktop) */}
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center space-x-2">
              <UserButton afterSignOutUrl="/" />
              <span className="text-gray-700">Profile</span>
            </div>
          </SignedIn>
        </div>
      </div>

      {/* Mobile Menu (Visible only on mobile) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-3 space-y-2 text-gray-700">
          {/* Search Bar (Visible only on mobile) */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-lg overflow-hidden w-full px-4"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 hover:bg-teal-700 transition-colors ml-2 rounded-lg"
              aria-label="Search"
            >
              <FiSearch />
            </button>
          </form>

          {/* Display Search Results for Mobile */}
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg mt-2 rounded-md z-50">
              <ul className="py-2">
                {searchResults.map((product) => (
                  <li
                    key={product._id}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    <Link
                      href={`/products/${product._id}`}
                      className="flex items-center gap-4"
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{product.title}</p>
                        <p className="text-sm text-gray-600">
                          ${product.price}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <li className="hover:text-teal-600">
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className="hover:text-teal-600">
            <Link href="/shope" onClick={closeMenu}>Shope</Link>
          </li>
          <li className="hover:text-teal-600">
            <Link href="/product" onClick={closeMenu}>Product</Link>
          </li>
          <li className="hover:text-teal-600">
            <Link href="/contant" onClick={closeMenu}>Contact Us</Link>
          </li>
          <li className="hover:text-teal-600">
            <Link href="/about" onClick={closeMenu}>About</Link>
          </li>

          {/* Clerk Authentication (Visible only on mobile) */}
          <div className="flex flex-col items-center space-y-2">
            <SignedOut>
              <SignInButton>
                <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center space-x-2">
                <UserButton afterSignOutUrl="/" />
                <span className="text-gray-700">Profile</span>
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;