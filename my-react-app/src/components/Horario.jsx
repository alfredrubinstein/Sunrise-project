import React from "react";
import { useState, useEffect } from "react";

export default function Horario() {
  const [amanecer, setAmanecer] = useState("06:00");
  const [puesta, setPuesta] = useState("18:00");
  const [mediodia, setMediodia] = useState("12:00");
  const [anochecer, setAnochecer] = useState("00:00");
  const [fecha, setFecha] = useState("");
  const [diaSemana, setDiaSemana] = useState("");

  useEffect(() => {
    const obtenerHorarios = async () => {
      const url =
        "https://api.sunrise-sunset.org/json?lat=19.4326&lng=-99.1332";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setAmanecer(resultado.results.sunrise);
      setPuesta(resultado.results.sunset);
      setMediodia(resultado.results.solar_noon);
      setAnochecer(resultado.results.sunset);
      setFecha(new Date().toLocaleDateString());
      setDiaSemana(new Date().getDay());
    };
    obtenerHorarios();
  }, []);

  return (
    <div className="bg-white text-black mt-5 font-bold text-center flex">
      <div className="text-center mr-auto ml-auto">
        <h1>זמנים הלכתיים:</h1>
        <tr>
          <td>היום :</td>
          <td>{fecha}</td>
        </tr>
        <tr>
          <td>el dia de la semana es:</td>
          <td>{diaSemana}</td>
        </tr>
        <tr>
          <td>נץ החמה:</td>
          <td>{amanecer}</td>
        </tr>
        <tr>
          <td>זריחה:</td>
          <td>{amanecer}</td>
        </tr>
        <tr>
          <td>חצות:</td>
          <td>{puesta}</td>
        </tr>
        <tr>
          <td>שקיעה:</td>
          <td>{mediodia}</td>
        </tr>
        <tr>
          <td> צאת הכוכבים:</td>
          <td>{anochecer}</td>
        </tr>
      </div>
    </div>
  );
}
