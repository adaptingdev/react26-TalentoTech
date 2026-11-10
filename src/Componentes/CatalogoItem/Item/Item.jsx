import { useState } from "react";
import styles from './Item.module.css';
import { Link } from 'react-router-dom';
import { useCart } from "../../../Context/CartContext";

export function Item({ id, nombre, precio, stock, imagen }) {
    
    const [esFavorito, setEsFavorito] = useState(false);
    const { addToCart, getCantidadActual } = useCart();

    const producto = { id, nombre, precio, stock, imagen };
    const cantidadActual = getCantidadActual(producto.id);

    const stockDisponibleReal = stock - cantidadActual;

    const [cantidad, setCantidad] = useState(stockDisponibleReal > 0 ? 1 : 0);

    const handleAddToCart = () => {
        if (cantidad > 0 && cantidad <= stockDisponibleReal) {
            addToCart(producto, cantidad);
            const nuevoDisponible = stockDisponibleReal - cantidad;
            setCantidad(nuevoDisponible > 0 ? 1 : 0);
        }
    };

    const incrementar = () => {
        if (cantidad < stockDisponibleReal) {
            setCantidad(cantidad + 1);
        }
    };

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito);
    };

    return (
        <article className={styles.card}>
            <span 
                onClick={marcarComoFavorito} 
                className={`${styles.favorito} ${esFavorito ? styles.activo : ''}`}
            >
                {esFavorito ? '★' : '☆'}
            </span>

            <img src={imagen} alt={nombre} className={styles.imagen} />

            <div className={styles.info}>
                <h3 className={styles.nombre}>{nombre}</h3>
                <p className={styles.precio}>${precio}</p>
                <p className={styles.stock}>Stock disponible: {stock}</p>

                <div className={styles.contador}>
                    <button onClick={decrementar} className={styles.btnContador} disabled={cantidad <= 1}>-</button>
                    <span className={styles.cantidad}>{cantidad}</span>
                    <button onClick={incrementar} className={styles.btnContador} disabled={cantidad >= stockDisponibleReal}>+</button>
                </div>

                <Link to={`/productos/${id}`} className={styles.linkDetalles}>
                    Detalles
                </Link>

                <button 
                    onClick={handleAddToCart} 
                    className={styles.btnComprar}
                    disabled={stockDisponibleReal <= 0}
                >
                    {stockDisponibleReal <= 0 ? "Sin stock disponible" : "Agregar al Carrito"}
                </button>

                {cantidadActual > 0 && (
                    <p className={styles.leyendaCarrito}>
                        Tenés {cantidadActual} {cantidadActual === 1 ? 'unidad' : 'unidades'} de este producto en el carrito
                    </p>
                )}
            </div>
        </article>
    );
}

export default Item;