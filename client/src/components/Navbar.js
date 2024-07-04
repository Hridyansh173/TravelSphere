// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around items-center space-x-4">
        <li><Link className="text-white hover:text-yellow-500" to="/">Home</Link></li>
        <li><Link className="text-white hover:text-yellow-500" to="/trips">Trips</Link></li>
        <li><Link className="text-white hover:text-yellow-500" to="/booking">Booking</Link></li>
        <li><Link className="text-white hover:text-yellow-500" to="/about">About</Link></li>
        <li><Link className="text-white hover:text-yellow-500" to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
