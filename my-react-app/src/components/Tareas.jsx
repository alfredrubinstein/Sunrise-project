import React, { useState } from 'react';

const Tareas = ({ setTareas, tareas }) => {
  const [titulo, setTitulo] = useState('');
  const [tiempo, setTiempo] = useState('');

  const agregarTarea = () => {
    if (titulo && tiempo) {
      const nuevaTarea = {
        titulo,
        tiempo: parseInt(tiempo, 10),
        restante: parseInt(tiempo, 10)
      };
      setTareas([...tareas, nuevaTarea]);
      setTitulo('');
      setTiempo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="number"
        placeholder="Tiempo en segundos"
        value={tiempo}
        onChange={(e) => setTiempo(e.target.value)}
        className="border p-2 m-2"
      />
      <button onClick={agregarTarea} className="bg-green-600 text-white p-2 rounded m-2">
        Agregar
      </button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} className="my-2 p-2 border rounded">
            <h3>{tarea.titulo}</h3>
            <p>Tiempo total: {tarea.tiempo} segundos</p>
            <div className="relative w-full h-4 bg-gray-200 rounded">
              <div
                className="absolute top-0 left-0 h-4 bg-green-500 rounded"
                style={{ width: `${(tarea.restante / tarea.tiempo) * 100}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tareas;
