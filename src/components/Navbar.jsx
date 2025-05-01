import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 bg-[#191818] shadow-md text-white ">
      
      <div className="flex items-center justify-between px-6 md:px-24 py-4">
        {/* Logo como imagen */}
        <div className="text-center">
          <img
            src="/logo.png"
            alt="Guns & Codes logo"
            className="h-10 md:h-15 w-auto"
          />
        </div>


        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className="hidden md:flex gap-6 font-semibold text-sm uppercase tracking-wide">
          <a href="#inicio" className="hover:text-gray-400 transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-gray-400 transition-colors">Servicios</a>
          <a href="#about" className="hover:text-gray-400 transition-colors">About Us</a>
          <a href="#entregables" className="hover:text-gray-400 transition-colors">Entregables</a>
        </nav>

        <div className="hidden md:flex items-center gap-4 text-xl">
          <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-400"><FaXTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
          <a href="https://github.com/ChercolesLucas/GunsAndCodes" className="hover:text-gray-400"><FaGithub /></a>
          <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center bg-[#1f1e1e] py-6 gap-4 text-sm font-semibold uppercase animate-fade-in">
          <a onClick={toggleMenu} href="#inicio">Inicio</a>
          <a onClick={toggleMenu} href="#servicios">Servicios</a>
          <a onClick={toggleMenu} href="#about">About Us</a>
          <a onClick={toggleMenu} href="#entregables">Entregables</a>
          <div className="flex gap-4 pt-4 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="https://github.com/ChercolesLucas/GunsAndCodes"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;




