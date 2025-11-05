
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/sinnombre/1920/1080')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white text-shadow tracking-tight">
          "Sin Nombre": Migración, Otredad e Identidad
        </h1>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto font-light text-shadow">
          Un análisis profundo sobre la obra cinematográfica de Cary Joji Fukunaga
        </p>
      </div>
    </div>
  );
};

export default Hero;
