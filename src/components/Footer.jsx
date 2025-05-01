import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#191818] px-8 md:px-24 py-12 text-white ">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">

      {/* Logo */}
      <div className="text-center">
        <img
        src="/logo.png"
        alt="Guns & Codes logo"
        className="h-10 md:h-15 w-auto mx-auto"
        />
</div>


        {/* Navegación */}
        <ul className="flex flex-wrap gap-6 text-sm uppercase tracking-wide justify-center text-white/70 hover:text-white transition-all">
          <li><a href="#inicio" className="hover:text-white">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
          <li><a href="#about" className="hover:text-white">About Us</a></li>
          <li><a href="#entregables" className="hover:text-white">Entregables</a></li>
        </ul>

        {/* Redes sociales */}
        <div className="flex items-center gap-4 text-white/70">
          <a href="#" className="hover:text-white transition-all"><FaFacebookF /></a>
          <a href="#" className="hover:text-white transition-all"><FaXTwitter /></a>
          <a href="#" className="hover:text-white transition-all"><FaInstagram /></a>
          <a href="https://github.com/ChercolesLucas/GunsAndCodes" className="hover:text-white transition-all"><FaGithub /></a>
          <a href="#" className="hover:text-white transition-all"><FaLinkedin/></a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center text-xs text-white/40 mt-10">
        © {new Date().getFullYear()} GUNS&CODES. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
