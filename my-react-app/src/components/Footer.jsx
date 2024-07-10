import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="container mx-auto p-5 flex flex-col md:flex-row justify-between items-center">
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
         
          <a href="#terms" className="hover:bg-blue-700 p-2 rounded">תנאי שימוש</a>
          <a href="#contact" className="hover:bg-blue-700 p-2 rounded">צור קשר</a>
        <p className="text-center">
          &copy; 2024 עוקב חזן</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
