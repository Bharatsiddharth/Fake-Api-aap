import { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
            Products
          </Link>
        </li>
        <li>
          <Link to="#about" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
            About Us
          </Link>
        </li>
        <li>
          <Link to="#contact" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-800 flex-col gap-4 items-center text-white md:hidden`}
      >
        <li><Link to="/" className="py-2">Home</Link></li>
        <li><Link to="/products" className="py-2">Products</Link></li>
        <li><Link to="#about" className="py-2">About Us</Link></li>
        <li><Link to="#contact" className="py-2">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;