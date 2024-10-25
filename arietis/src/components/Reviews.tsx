import React from "react";
// Iconos
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews: React.FC = () => {
  return (
    <div className="p-8 xl:p-16 bg-gray-50">
      <h1 className="text-3xl md:text-5xl text-center font-extrabold text-gray-800 mb-8">
        Escuchemos lo que dicen
      </h1>
      <div className="flex justify-center items-center gap-4 mb-12">
        <span className="text-4xl md:text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-600 text-lg md:text-xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
          lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum
          turpis amet id posuere.
        </p>
        <span className="text-4xl md:text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {[
            "https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg",
            "https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg",
            "https://img.freepik.com/foto-gratis/hombre-negocios-dueno-empresa-oficina_1303-15851.jpg",
            "https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg",
            "https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              className={`w-10 h-10 md:w-16 md:h-16 object-cover rounded-full transition-transform duration-300 ${
                index === 2
                  ? "ring-4 ring-primary p-1 bg-white scale-110"
                  : "hover:scale-105"
              }`}
            />
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">Ricky Aprilia</h3>
          <h5 className="text-lg md:text-xl text-gray-500">Fundador de Varibo</h5>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
