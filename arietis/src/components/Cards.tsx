import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt"; // Importamos Tilt para el efecto de inclinación

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
    <div className="flex justify-center items-center py-40 bg-gray-50"> {/* Aumentamos el padding vertical */}
      {/* Sección izquierda */}
      <div className="w-1/2 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Gestión de Pagos Simplificada
        </h2>
        <p className="text-lg text-gray-600">
          Con nuestras soluciones, gestionar tus pagos nunca fue tan fácil y seguro.
        </p>
      </div>

      {/* Sección derecha - Tarjetas animadas */}
      <div className="w-1/2 flex justify-center relative">
        <div className="flex flex-col items-center space-y-8"> {/* Aumentamos el espacio entre las tarjetas */}
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-transparent rounded-lg"
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
                  className="bg-white rounded-lg shadow-lg mb-[-60px] w-[300px] h-[180px] flex justify-center items-center"
                  animate={{
                    translateY: [0, -15, 0], // Movimiento hacia arriba y abajo
                    scale: [1, 1.05, 1], // Leve escalado
                  }}
                  transition={{
                    duration: 2, // Duración de la animación más suave
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
