import styles from "./ItemListContainer.module.css";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";

export function ItemListContainer({ mensaje }) {

  const [productos, setProductos] = useState([]);

  const [error, setError] = useState(null);

  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los productos");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);
  if (cargando) {
    return <p>Cargando productos, por favor espere...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className={styles.contenedor}>
      <h1 className={styles.titulo}>{mensaje}</h1>
      <p className={styles.subtitulo}>
        Nutrición de alto rendimiento para potenciar tu entrenamiento.
      </p>
      <ItemList productos={productos} />
    </section>
  );
}
