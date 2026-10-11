import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>IRON<span>NUTRI</span></h1>
            <nav className={styles.nav}>
                <a href="#inicio" className={styles.link}>Inicio</a>
                <a href="#productos" className={styles.link}>Productos</a>
                <a href="#contacto" className={styles.link}>Contacto</a>
                <a href="#carrito" className={styles.link}>Carrito</a>
            </nav>
        </header>
    );
}
export default Header;