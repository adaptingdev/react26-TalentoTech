import styles from "./ItemListContainer.module.css";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firestore/config";

export function ItemListContainer({ mensaje }) {

  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const productosDB = collection(db, "productos");
    
    getDocs(productosDB)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((error) => {
        console.error("Error en Firestore:", error);
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className={styles.cargando || ''}>Cargando productos, por favor espere...</p>;
  }

  if (error) {
    return <p className={styles.error || ''}>Error: {error}</p>;
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
