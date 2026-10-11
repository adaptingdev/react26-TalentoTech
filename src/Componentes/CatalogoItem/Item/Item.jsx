import { useState } from "react";
import styles from './Item.module.css'

export function Item({ nombre, precio, stock, imagen }) {
   
    const [cantidad, setCantidad] = useState(0);

    const [esFavorito , setEsFavorito] = useState(false);

    const agregarAlCarrito = () => {
        alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`)
    }

    const incrementar = () => {
        if (cantidad < stock){
            setCantidad(cantidad + 1);
        }
    };

    const decrementar = () => {
        if(cantidad > 1 || cantidad === 1){
            setCantidad(cantidad - 1)
        }
    }

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito);
    };

    return (
    <article className={styles.card}>
        <span onClick={marcarComoFavorito} className={`${styles.favorito} ${esFavorito ? styles.activo : ''}`}>{esFavorito ? '★' : '☆'}</span>

        <img src={imagen} alt={nombre} className={styles.imagen} />

        <div className={styles.info}>
            <h3 className={styles.nombre}>{nombre}</h3>
            <p className={styles.precio}>${precio}</p>
            <p className={styles.stock}>Stock disponible: {stock}</p>

            <div className={styles.contador}>
                <button onClick={decrementar} className={styles.btnContador}>-</button>
                <span className={styles.cantidad}>{cantidad}</span>
                <button onClick={incrementar} className={styles.btnContador}>+</button>
            </div>
            <button onClick={agregarAlCarrito} className={styles.btnComprar}>Agregar al Carrito</button>
      </div>
    </article>
    );
}
