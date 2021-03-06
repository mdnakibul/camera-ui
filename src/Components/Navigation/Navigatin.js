import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
const Navigatin = () => {
    return (
        
<div>
<div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full">
            <img
                  className="h-8 w-1/6"
                  src={logo}
                  alt="Logo"
                />
              <div className="hidden md:block ml-auto">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link to="/services" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Services </Link>
                  <Link to="/about-us" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                  <Link to="/testimonial" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Testimonial</Link>
                  <Link to="/portfolio" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
                  <Link to="/contact" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>

                  
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/home"
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </a>

            <a
              href="/home"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>

            <a
              href="/home"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>

            <a
              href="/home"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Calendar
            </a>

            <a
              href="/home"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Reports
            </a>
          </div>
        </div>
      </nav>
    </div>
    


</div>
    );
};

export default Navigatin;