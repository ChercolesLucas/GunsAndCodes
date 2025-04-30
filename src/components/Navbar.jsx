import React from 'react';

import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX, FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#191818] flex items-center justify-between px-8 md:px-24 py-4 shadow-md ">
      
      <nav className="flex-1">
        <ul className="flex gap-4 md:gap-6 text-sm font-semibold  tracking-wide justify-start">
          <li><a href="#inicio" className="hover:text-gray-400 transition-colors duration-300">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-gray-400 transition-colors duration-300">Servicios</a></li>
          <li><a href="#about" className="hover:text-gray-400 transition-colors duration-300">About Us</a></li>
          <li><a href="#entregables" className="hover:text-gray-400 transition-colors duration-300">Entregables</a></li>
        </ul>
      </nav>

      <div className="flex-1 flex justify-center">
        <div className="text-center text-sm md:text-lg font-bold leading-tight tracking-widest animate-fade-in">
          <p>GUNS&</p>
          <p>CODES</p>
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center gap-4 md:gap-6 text-xl">
        <a href="#" className="hover:text-gray-400 transition-colors duration-300"><FaFacebookF /></a>
        <a href="#" className="hover:text-gray-400 transition-colors duration-300"><FaXTwitter /></a>
        <a href="#" className="hover:text-gray-400 transition-colors duration-300"><FaInstagram /></a>
        <a href="https://github.com/ChercolesLucas/GunsAndCodes" className="hover:text-gray-400 transition-colors duration-300"><FaGithub/></a>
        <a href="#" className="hover:text-gray-400 transition-colors duration-300"><FaLinkedin /></a>
      </div>
    </header>
  );
};

export default Navbar;



