import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Cards: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    { id: 1, image: "card1.png" },
    { id: 2, image: "card2.png" },
    { id: 3, image: "card3.png" },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 py-16 bg-gray-50 px-4 sm:px-8 md:px-16">
      {/* Sección izquierda */}
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center mb-8 lg:mb-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Gestión de Pagos Simplificada
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Con nuestras soluciones, gestionar tus pagos nunca fue tan fácil y seguro.
        </p>
      </div>

      {/* Sección derecha - Tarjetas animadas */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="flex flex-col items-center space-y-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-transparent rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1,
                delay: index * 0.5,
                ease: "easeInOut",
              }}
            >
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
                <motion.div
                  className="bg-white rounded-lg shadow-lg w-full h-40 sm:h-48 md:h-56 flex justify-center items-center"
                  animate={{
                    translateY: [0, -15, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={card.image}
                    alt={`Card ${card.id}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
