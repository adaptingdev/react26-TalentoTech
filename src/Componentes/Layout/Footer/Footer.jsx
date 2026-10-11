import styles from './Footer.module.css';
import { EquipoListContainer } from '../../Equipo/EquipoListContainer/EquipoListContainer';

function Footer() {
  return (
    <footer className={styles.footer}>
      <EquipoListContainer mensaje={"Nuestro Equipo"} />
        <div className={styles.contenedor}>
      
        <div className={styles.columna}>
          <h3 className={styles.tituloMarca}>
                IRON<span>NUTRI</span>
          </h3>
          <p className={styles.texto}>
            Somos una Pyme apasionada por la nutrición y suplementación deportiva de alto rendimiento.
          </p>
        </div>

        <div className={styles.columna}>
          <h4 className={styles.subtitulo}>Navegación</h4>
          <ul className={styles.lista}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className={styles.columna}>
          <h4 className={styles.subtitulo}>Información</h4>
          <p className={styles.texto}>📍 Buenos Aires, Argentina</p>
          <p className={styles.texto}>💳 Envíos a todo el país</p>
        </div>
        </div>
      
        <div className={styles.mediosPago}>
            <h4 className={styles.subtitulo}>Medios de pago</h4>
            <p className={styles.textoMedios}>MercadoPago - Transferencia - Efectivo - Cripto</p>
        </div>

        <div className={styles.copyright}>
            <p>&copy; 2026 IronNutri. Proyecto Talento Tech.</p>
        </div>
    </footer>
  );
}

export default Footer;