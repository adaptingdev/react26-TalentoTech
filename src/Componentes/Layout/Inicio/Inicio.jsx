import { useEffect, useState } from "react";
import { Item } from "../../CatalogoItem/Item/Item";
import styles from "./Inicio.module.css";
import {getDocs, collection} from 'firebase/firestore';
import { db } from "../../../Firestore/config";

export function Inicio() {
  const [destacados, setDestacados] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const productosRef = collection(db, "productos");

    getDocs(productosRef)
      .then((resp) => {
       if (resp.empty) {
         throw new Error("No se encontraron productos en la base de datos");
       }

      const datos = resp.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      const productosFiltrados = datos.filter(
        (producto) => producto.destacado === true
      );

      if (productosFiltrados.length === 0) {
        console.warn("No hay productos marcados con 'destacado: true'");
      }

      setDestacados(productosFiltrados);
    })
      .catch((err) => console.error("Error al cargar destacados:", err))
      .finally(() => setCargando(false));
  }, []);

  return (
    <div className={styles.contenedorInicio}>
      <section className={styles.hero}>
        <h2>Bienvenido a IRON NUTRI 🏋️‍♂️</h2>
        <p>Tu tienda de nutrición y suplementación deportiva al máximo nivel.</p>
      </section>

      <section className={styles.seccionDestacados}>
        <h3 className={styles.tituloSeccion}>Productos Destacados</h3>

        {cargando ? (
          <p className={styles.cargando}>Cargando destacados...</p>
        ) : (
          <div className={styles.grillaDestacados}>
            {destacados.map((producto) => (
              <Item key={producto.id} {...producto} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Inicio;