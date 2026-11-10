import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={styles.layoutContenedor}>
        <Header />
        <main className={styles.contenidoPrincipal}>
            <Outlet />
        </main>
        <Footer />
    </div>
  );
}

export default Layout;