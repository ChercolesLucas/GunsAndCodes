import React from 'react';

const Hero = () => {
  return (
    <section
    className='contenedorHero '>

    <div
      id="inicio"
      className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-24 gap-12 md:gap-24 h-screen"
    >

      {/* Texto */}
      <div className='flex-1 '>
      <h1 className="relative z-10 text-[40px] md:text-[64px] leading-[110%] font-bold max-w-[620px]">
        Tu problema es<br />
        nuestro blanco.🎯<br />
        Nuestro código,<br />
        la bala.💥
      </h1>
      </div>

      <div className="flex-1 flex  justify-center animate-fade-in delay-300">
        <img
          src="/vaquero.png"
          alt="Aplicaciones móviles"
          className="max-w-[400px] md:max-w-[400px] drop-shadow-xl scale-x-[-1]"
        />
      </div>
    </div>
    </section>
  );
};

export default Hero;



  