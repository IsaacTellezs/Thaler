import React from 'react';
import Tilt from 'react-parallax-tilt'; // Importar desde react-parallax-tilt
import { motion } from 'framer-motion'; // Para animaciones
import { FaShieldAlt, FaRocket, FaGlobe } from 'react-icons/fa'; // Íconos de react-icons

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard: React.FC<BenefitProps> = ({ title, description, icon }) => {
  return (
    <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.05} className="w-full">
      <motion.div
        className="p-8 bg-white rounded-lg shadow-lg text-center max-w-xs mx-auto"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="text-green-500 text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </Tilt>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    { title: 'Seguridad Avanzada', description: 'Protección de tus datos con las tecnologías más avanzadas.', icon: <FaShieldAlt /> },
    { title: 'Rendimiento Excepcional', description: 'Realiza transacciones rápidas y eficientes.', icon: <FaRocket /> },
    { title: 'Cobertura Global', description: 'Acceso a transacciones internacionales sin fronteras.', icon: <FaGlobe /> },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
