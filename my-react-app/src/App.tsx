import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Tareas from './components/Tareas';
import Reloj from './components/Reloj';
import Publicidad from './components/Publi';
import Horario from './components/Horario';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen bg-slate-700">
        <Header />
        <main className="container mx-auto p-5 flex-1 flex">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Bienvenido al Gestor de Tareas</h2>
            <Tareas setTareas={setTareas} tareas={tareas} />
            <Reloj tareas={tareas} setTareas={setTareas} />
            <Horario/>
            <Publicidad/>

          </div>
         
        </main>
        <Footer />
      </div>
      {/* <Routes>
        <Route path="/otra-pagina" element={<h1 className="text-center mt-10">¡Has completado todas las tareas!</h1>} />
      </Routes> */}
    </Router>
  );
}

export default App;
