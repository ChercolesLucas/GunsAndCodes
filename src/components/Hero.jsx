import React from 'react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex flex-col justify-center items-start px-6 md:px-20 pt-32 md:pt-48 pb-24 bg-[#1f1e1e] overflow-hidden"
    >

      {/* Texto */}
      <h1 className="relative z-10 text-[40px] md:text-[64px] leading-[110%] font-bold max-w-[620px]">
        Tu problema es<br />
        nuestro blanco.<br />
        Nuestro código,<br />
        la bala.
      </h1>
    </section>
  );
};

export default Hero;



  