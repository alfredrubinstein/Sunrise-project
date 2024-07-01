import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="container mx-auto p-5 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">&copy; 2024 Gestor de Tareas. Todos los derechos reservados.</p>
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          <a href="#privacy" className="hover:bg-blue-700 p-2 rounded">Privacidad</a>
          <a href="#terms" className="hover:bg-blue-700 p-2 rounded">Términos</a>
          <a href="#contact" className="hover:bg-blue-700 p-2 rounded">Contacto</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
