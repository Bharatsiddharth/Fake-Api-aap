import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-[999] w-full px-6 sm:px-12 md:px-20 fixed flex justify-between items-center py-4 bg-gray-800">
      <div className="text-lg text-white font-bold">MyStore</div>
      
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden text-white focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li>
          <a href="/" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
            Home
          </a>
        </li>
        <li>
          <a href="/products" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
            Products
          </a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
            About Us
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-800 flex-col gap-4 items-center text-white md:hidden`}
      >
        <li><a href="/" className="py-2">Home</a></li>
        <li><a href="products" className="py-2">Products</a></li>
        <li><a href="#about" className="py-2">About Us</a></li>
        <li><a href="#contact" className="py-2">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
