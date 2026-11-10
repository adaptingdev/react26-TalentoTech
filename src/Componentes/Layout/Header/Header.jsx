import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../../Context/CartContext';

function Header() {
    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();

    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>IRON<span>NUTRI</span></h1>
            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>Inicio</Link>
                <Link to="/productos" className={styles.link}>Productos</Link>
                <Link to="/nosotros" className={styles.link}>Nosotros</Link>
                <Link to="/nuevo" className={styles.link}>Contacto</Link>
                <Link to="/carrito" className={`${styles.link} ${styles.linkCarrito}`}>
                    🛒 Carrito {totalItems > 0 && <span className={styles.carrito}>{totalItems}</span>}
                </Link>
            </nav>
        </header>
    );
}

export default Header;