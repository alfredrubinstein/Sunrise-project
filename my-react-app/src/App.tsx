import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Tareas from './components/Tareas';
import Reloj from './components/Reloj';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto p-5 flex-1 flex">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Bienvenido al Gestor de Tareas</h2>
            <Tareas setTareas={setTareas} tareas={tareas} />
            <Reloj tareas={tareas} setTareas={setTareas} />
          </div>
          <aside className="w-1/4 p-5 bg-gray-200 rounded ml-5">
            <h3 className="text-lg font-bold mb-4">Publicidad</h3>
            <div className="mb-4">
              <img src="https://via.placeholder.com/300x250" alt="Anuncio 1" />
              <p className="mt-2">Anuncio 1</p>
            </div>
            <div className="mb-4">
              <img src="https://via.placeholder.com/300x250" alt="Anuncio 2" />
              <p className="mt-2">Anuncio 2</p>
            </div>
          </aside>
        </main>
        <Footer />
      </div>
      <Routes>
        <Route path="/otra-pagina" element={<h1 className="text-center mt-10">¡Has completado todas las tareas!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
