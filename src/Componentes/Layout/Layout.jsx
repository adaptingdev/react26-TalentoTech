import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layoutContenedor}>
        <Header />
        <main className={styles.contenidoPrincipal}>
            {children}
        </main>
        <Footer />
    </div>
  );
}

export default Layout;