import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold text-center mr-auto ml-auto">עוקב חזן</h1>
        {/* <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:bg-blue-700 p-2 rounded">Inicio</a>
          <a href="#tasks" className="hover:bg-blue-700 p-2 rounded">Tareas</a>
          <a href="#about" className="hover:bg-blue-700 p-2 rounded">Acerca de</a>
        </nav> */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
