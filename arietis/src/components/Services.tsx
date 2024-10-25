import React from "react";
import { RiMailFill } from "react-icons/ri";
import {
  FaRegHandshake,
  FaMobileAlt,
  FaClipboardList,
  FaRegCreditCard,
  FaShieldAlt,
  FaBitcoin,
} from "react-icons/fa"; // Nuevos íconos
import { motion } from "framer-motion";

const Services: React.FC = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-12 p-12 bg-white rounded-xl shadow-lg"
    >
      {/* Sección izquierda - Texto y formulario */}
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
          Soluciones de Pago Innovadoras para tu Negocio
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          En Arietis, ofrecemos servicios avanzados de procesamiento de pagos,
          diseñados para fintechs y comercios. Nuestra tecnología garantiza
          seguridad, facilidad de uso y soluciones integrales para potenciar tu
          negocio.
        </p>
        {/* Formulario de suscripción */}
        <form className="relative w-full">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500 text-xl" />
          <input
            type="email"
            className="w-full bg-gray-100 py-4 pl-12 pr-40 rounded-full outline-none transition duration-300 focus:bg-white shadow focus:shadow-lg"
            placeholder="Ingresa tu correo electrónico"
          />
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-green-500 text-white font-semibold py-2 px-8 rounded-full transition duration-300 hover:bg-green-600"
          >
            Suscribirse
          </button>
        </form>
      </div>

      {/* Sección derecha - Servicios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          {
            title: "Tokenización de Datos",
            description:
              "Protege la información de tus clientes con nuestra solución de tokenización.",
            icon: <FaShieldAlt className="text-3xl text-green-500" />,
          },
          {
            title: "Pagos Recurrentes",
            description:
              "Facilita la gestión de suscripciones y pagos regulares con nuestros servicios.",
            icon: <FaRegCreditCard className="text-3xl text-green-500" />,
          },
          {
            title: "OTP para Seguridad",
            description:
              "Aumenta la seguridad en las primeras compras con autenticación de un solo uso.",
            icon: <FaClipboardList className="text-3xl text-green-500" />,
          },
          {
            title: "Soluciones de Pago Auto-atendidas",
            description:
              "Implementa kioscos y códigos QR para pagos rápidos y eficientes.",
            icon: <FaMobileAlt className="text-3xl text-green-500" />,
          },
          {
            title: "Integraciones API",
            description:
              "Conéctate fácilmente con pasarelas de pago y sistemas antifraude avanzados.",
            icon: <FaRegHandshake className="text-3xl text-green-500" />,
          },
          {
            title: "Gestión de Criptomonedas",
            description:
              "Facilita transacciones seguras con criptomonedas para tus clientes.",
            icon: <FaBitcoin className="text-3xl text-green-500" />,
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start gap-3 p-6 rounded-xl bg-gray-50 shadow-lg transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="p-4 bg-green-100 rounded-full">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
