import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className=" text-white relative flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-24 gap-12 md:gap-24 "
    >
    <div className="flex-1 flex justify-center animate-fade-in delay-300">
        <img
          src="/slash.png"
          alt="Aplicaciones móviles"
          className="max-w-[400px] md:max-w-[400px] drop-shadow-amber-50 "
        />
    </div>

    <div className="flex-1 flex flex-col items-start justify-center animate-fade-in delay-300">  
      <h2 className="text-[32px] md:text-[48px] font-bold mb-8 leading-tight animate-fade-in">
        ¿QUIENES SOMOS?
      </h2>

      <p className="max-w-4xl text-white/80 text-lg md:text-xl leading-relaxed animate-fade-in delay-150">
        En G&C, hemos hecho de la excelencia en análisis de sistemas nuestra pasión y compromiso durante los últimos 5 años. Desde nuestro hogar en la vibrante ciudad de Luján, hemos forjado alianzas estratégicas con algunas de las empresas más influyentes de la provincia.
      </p>

      <h3 className="pt-[30px] text-[24px] md:text-[24px] font-bold mb-8 leading-tight animate-fade-in">
        Nuestra Mision
      </h3>

      <p className="max-w-4xl text-white/80 text-lg md:text-xl leading-relaxed animate-fade-in delay-150">
        Proporcionamos soluciones informáticas acordes a la necesidad de cada cliente, aportándoles calidad y valor.
    	  Aspiramos a extender nuestro ámbito de trabajo a toda Latinoamérica para finales de 2025.
      </p>

      <h3 className="pt-[30px] text-[24px] md:text-[24px] font-bold mb-8 leading-tight animate-fade-in">
        Nuestra Vision
      </h3>

      <p className="max-w-4xl text-white/80 text-lg md:text-xl leading-relaxed animate-fade-in delay-150">
        En el corazón de nuestro enfoque está la creencia de que la tecnología bien gestionada puede ser un catalizador del éxito empresarial. Trabajamos en estrecha colaboración con empresas líderes para brindar soluciones tecnológicas que impulsen la innovación y el crecimiento.      
      </p>

      
      <h3 className="pt-[30px] text-[24px] md:text-[24px] font-bold mb-8 leading-tight animate-fade-in">
        ¿Que nos distingue?
      </h3>
      <p className="max-w-4xl text-white/80 text-lg md:text-xl leading-relaxed animate-fade-in delay-150">
        Compromiso Local: Somos una empresa profundamente arraigada en la comunidad de Luján, lo que nos permite entender y abordar las necesidades únicas de nuestra región.
      </p>
      <p className="max-w-4xl text-white/80 text-lg md:text-xl leading-relaxed animate-fade-in delay-150">
        Compromiso con la innovación: En G&C, abrazamos la innovación y siempre buscamos maneras de mejorar y evolucionar nuestros servicios para mantenernos a la vanguardia de la industria.
      </p>
      <p className="max-w-4xl text-white/80 text-lg md:text-xl leading-relaxed animate-fade-in delay-150">
        Expertise Comprobado: Nuestro equipo de profesionales altamente capacitados es conocido por su experiencia y habilidades probadas en el análisis de sistemas y la gestión de tecnología.
      </p>
      <p className="max-w-4xl text-white/80 text-lg md:text-xl leading-relaxed animate-fade-in delay-150">
        Socios Estratégicos: Trabajar en estrecha colaboración con empresas de renombre nos ha permitido desarrollar una visión integral de las mejores prácticas en el campo de la tecnología y sistemas.
      </p>
      <p className="max-w-4xl text-white/80 text-lg md:text-xl leading-relaxed animate-fade-in delay-150">
        Resultados Tangibles: En G&C, no solo ofrecemos promesas vacías. Entregamos resultados medibles que generan un impacto real en la eficacia operativa y el rendimiento de nuestros clientes.
      </p>
      <p className="max-w-4xl text-white/80 text-lg md:text-xl leading-relaxed animate-fade-in delay-150">
        En Guns&Codes estamos decididos a simplificar la tecnología para su empresa, permitiendo centrarse en lo que mejor hace. Nuestra misión es su éxito, y estamos comprometidos a ser su socio tecnológico de confianza en esta emocionante jornada hacia el futuro.
      </p>
      
    </div>

   </section>
  );
};

export default AboutUs;

  