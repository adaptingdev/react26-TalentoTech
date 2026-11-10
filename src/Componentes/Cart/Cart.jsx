import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, clearCart, getCartTotal, removeItem } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className={styles.contenedorVacio}>
        <h2>El carrito está vacío 🛒</h2>
        <p>Agregá productos desde el catálogo para continuar la compra.</p>
        <Link to="/productos" className={styles.btnIrProductos}>
          Ver Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.contenedorCarrito}>
      <h2 className={styles.titulo}>Carrito de compras</h2>

      <div className={styles.listaItems}>
        {cart.map((item) => (
          <div key={item.id} className={styles.itemCard}>
            {item.imagen && (
              <img
                src={item.imagen}
                alt={item.nombre}
                className={styles.imagenItem}
              />
            )}
            <div className={styles.infoItem}>
              <h4>{item.nombre}</h4>
              <p className={styles.detalleItem}>Cantidad: {item.quantity}</p>
              <p className={styles.detalleItem}>
                Precio unitario: ${item.precio}
              </p>
              <p className={styles.subtotal}>
                Subtotal: ${item.precio * item.quantity}
              </p>
            </div>
            <button onClick={() => removeItem(item.id)} className={styles.btnEliminar} >
                🗑️ Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className={styles.resumenCarrito}>
        <h3>Total a pagar: ${getCartTotal()}</h3>
        <div className={styles.acciones}>
          <button onClick={clearCart} className={styles.btnVaciar}>
            Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;