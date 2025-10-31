import React from "react";
import { useState } from "react";
import deliverables from "./deliverablesData";

const Deliverables = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);

  // Función para manejar la descarga de archivos
  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", ""); // Fuerza la descarga del archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="entregables"
      className="px-8 md:px-24 py-24 bg-[#1f1e1e] text-white " 
    >
      {/* Título + descripción */}
      <div className="mb-16 max-w-3xl">
        <h2 className="text-[32px] md:text-[48px] font-bold mb-4 animate-fade-in">
          Entregables
        </h2>
        <p className="text-white/70 text-lg leading-relaxed animate-fade-in delay-150">
          En esta sección se van a poder observar los entregables a medida del año.
        </p>
      </div>

      {/* Grilla de entregables */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in delay-300">
        {deliverables.map((item) => (
          <div
            key={item.id}
            className="border border-[#FF4F1F]/20 p-6 rounded-xl"
          >
            <span className="text-4xl font-bold text-[#d1d1d1]">{item.id}</span>
            <h3 className="text-xl font-semibold my-2">{item.title}</h3>
            {item.type === "download" ? ( // Si el tipo es "download"
              <button
                onClick={() => handleDownload(item.url)} // Llama a la función de descarga
                className="mt-6 text-sm font-semibold uppercase border px-4 py-2 rounded-full transition-all border-[#FF4F1F] text-[#FF4F1F] hover:bg-[#FF4F1F] hover:text-black"
              >
                DESCARGAR
              </button>
            ) : ( // Si no, es un PDF (o tipo por defecto)
              <button
                onClick={() => setSelectedPDF(item.url)}
                className="mt-6 text-sm font-semibold uppercase border px-4 py-2 rounded-full transition-all border-[#FF4F1F] text-[#FF4F1F] hover:bg-[#FF4F1F] hover:text-black"
              >
                VER
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Iframe con PDF */}
      {selectedPDF && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl h-[80vh] animate-fade-in">
            <button
              onClick={() => setSelectedPDF(null)}
              className="absolute top-3 right-3 text-white/60 hover:text-white text-sm bg-black/50 backdrop-blur-md px-3 py-1 rounded"
            >
              Cerrar
            </button>
            <iframe
              src={selectedPDF}
              title="PDF Viewer"
              className="w-full h-full rounded-lg border border-white/20 shadow-2xl"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Deliverables;

