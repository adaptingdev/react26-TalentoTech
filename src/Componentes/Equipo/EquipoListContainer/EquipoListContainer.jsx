import styles from "./EquipoListContainer.module.css";
import { useEffect, useState } from "react";
import { EquipoList } from "../EquipoList/EquipoList";

export function EquipoListContainer({ mensaje }) {

  const [equipo, setEquipo] = useState([]);

  const [error, setError] = useState(null);

  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("/data/equipo.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los integrantes.");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setEquipo(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);
  if (cargando) {
    return <p>Cargando integrantes, por favor espere...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className={styles.contenedor}>
      <h1 className={styles.titulo}>{mensaje}</h1>
      <EquipoList equipo={equipo} />
    </section>
  );
}