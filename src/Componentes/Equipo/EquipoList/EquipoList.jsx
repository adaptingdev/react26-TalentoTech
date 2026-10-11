import styles from './EquipoList.module.css';
import { TarjetaEquipo } from '../TarjetaEquipo/TarjetaEquipo';

export function EquipoList({ equipo }) {
    return (
    <div className={styles.grilla}>
        {equipo.map((integrante) => (
            <TarjetaEquipo key={integrante.id} {...integrante} />
        ))}
    </div>
    );
}