import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Tokenización de Datos",
    description: "Protección avanzada de datos sensibles durante el procesamiento de pagos.",
    imgSrc: "tokenizacion.jpg",
  },
  {
    title: "Pagos Recurrentes",
    description: "Pagos recurrentes para suscripciones, brindando estabilidad a los negocios.",
    imgSrc: "service2.jpg",
  },
  {
    title: "OTP (One Time Password)",
    description: "Mayor seguridad con sistemas OTP para las transacciones de primera compra.",
    imgSrc: "otp.jpg",
  },
  {
    title: "Pagos Auto-atendidos",
    description: "Soluciones para pagos auto-atendidos con kioscos y códigos QR.",
    imgSrc: "service1.jpg",
  },

  {
    title: "Sistemas Antifraude Avanzados",
    description: "Protección avanzada para comerciantes y consumidores con nuestros sistemas antifraude.",
    imgSrc: "secure.jpg",
  },
  {
    title: "Gestión de Criptomonedas",
    description: "Soluciones para la gestión segura de criptomonedas.",
    imgSrc: "bitcoin.jpg",
  },
];

const Works: React.FC = () => {
  return (
    <div id="aboutUs" className="p-8 xl:p-20 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Soluciones Innovadoras para tu Negocio
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Ofrecemos tecnología avanzada en procesamiento de pagos, brindando seguridad y soluciones integrales para fintechs y comercios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={service.imgSrc}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800">{service.title}</h2>
              <p className="mt-3 text-gray-500">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Works;
