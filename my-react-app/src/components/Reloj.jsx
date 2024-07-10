import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Reloj = ({ tareas, setTareas }) => {
  const [totalSegundos, setTotalSegundos] = useState(0);
  const [segundosRestantes, setSegundosRestantes] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const total = tareas.reduce((acc, tarea) => acc + tarea.restante, 0);
    setTotalSegundos(total);
  }, [tareas]);

  useEffect(() => {
    let timer;
    if (segundosRestantes !== null) {
      if (segundosRestantes > 0) {
        timer = setInterval(() => {
          const nuevasTareas = [...tareas];
          for (let i = 0; i < nuevasTareas.length; i++) {
            if (nuevasTareas[i].restante > 0) {
              nuevasTareas[i].restante -= 1;
              break;
            }
          }
          setTareas(nuevasTareas);
          setSegundosRestantes(prev => prev - 1);
        }, 1000);
      } else {
        navigate('/otra-pagina');
      }
    }
    return () => clearInterval(timer);
  }, [segundosRestantes, navigate, tareas, setTareas]);

  const empezarContador = () => {
    setSegundosRestantes(totalSegundos);
  };

  return (
    <div className="flex-grow p-5 text-center bg-slate-400 mt-5">
      <h2 className="text-xl font-bold mb-4">Reloj</h2>
      <p className="text-lg mb-4">זמן שנותר כדי לסיים  {totalSegundos}</p>
      <p className="text-lg mb-4">סך הזמן שנותר: {segundosRestantes !== null ? segundosRestantes : totalSegundos}</p>
      <button
        onClick={empezarContador}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
התחל      </button>
    </div>
  );
};

export default Reloj;
