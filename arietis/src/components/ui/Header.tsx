import React, { useState } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";


const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] bg-white shadow-md z-50">
      <div className="flex items-center xl:w-1/6">
        
        <a href="#" className="text-3xl font-bold text-gray-800 relative">
        <img src="logo2.png" alt="Arietis Logo" className="h-10 mr-2" /> 
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[50%] lg:w-[40%] xl:w-auto h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-transform duration-300 ease-in-out shadow-md xl:shadow-none`}
      >
        <a href="#home" className="text-lg text-gray-700 hover:text-primary transition-colors duration-300">
          Home
        </a>
        <a href="#aboutUs" className="text-lg text-gray-700 hover:text-primary transition-colors duration-300">
          ¿Quienes somos?
        </a>
        <a href="#services" className="text-lg text-gray-700 hover:text-primary transition-colors duration-300">
          Servicios
        </a>
        <a href="#products" className="text-lg text-gray-700 hover:text-primary transition-colors duration-300">
          Productos
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-3xl text-gray-700 p-2 transition-transform duration-300 hover:text-primary"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
