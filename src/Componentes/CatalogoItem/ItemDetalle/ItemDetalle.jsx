import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from './ItemDetalle.module.css';
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../../../Firestore/config";

export function ItemDetalle() {

    const { id } = useParams();

    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const productDetailDB = collection(db, "productos");

        getDocs(productDetailDB)
            .then((resp) => {
                setProductos(
                resp.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
                })
            );
        })
        .catch((error) => {
            setError(error.message);
        })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return <p>Cargando producto...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const productoId = productos.find((producto) => String(producto.id) === String(id));

    if (!productoId) {
        return <p>Producto no encontrado.</p>;
    }

    return (
        <article className={styles.card}>
            <img src={productoId.imagen} className={styles.imagen} alt={productoId.nombre} />

            <div className={styles.cardTitle}>
                <h2>{productoId.nombre}</h2>
            </div>
            <h3>{productoId.detalle}</h3>
            <p>Precio:${productoId.precio}</p>
            <Link to='/productos'>Volver a productos</Link>
        </article>
    );
}