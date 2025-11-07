import React from 'react';

const services = [
  "Asesoramiento técnico para empresas",
  "Aplicaciones web",
  "Aplicaciones móviles (iOS / Android)",
  "Sistemas internos y ERP",
  "Diseño UX/UI",
];

const Services = () => {
  return (
    <section
      id="servicios"
      className="relative bg-[#1f1e1e] flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-24 gap-12 md:gap-24 min-h-screen md:py-32"
    >
      {/* Columna izquierda - Texto */}
      <div className="flex-1">
        <h2 className="text-[32px] md:text-[48px] font-bold mb-10 leading-tight animate-fade-in">
          Nuestros Servicios
        </h2>
        <div className="space-y-5 text-lg md:text-xl animate-fade-in delay-150">
          {services.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Columna derecha - Imagen */}
      <div className="flex-1 flex justify-center animate-fade-in delay-300">
        <img
          src="/Celular.png"
          alt="Aplicaciones móviles"
          className="max-w-[600px] md:max-w-[600px] drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default Services;
