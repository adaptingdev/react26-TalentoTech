import styles from './TarjetaEquipo.module.css'

export function TarjetaEquipo({ id, nombre, email, puesto, foto}) {

    return (
    <article className={styles.card}>

      <img src={foto} alt={nombre} className={styles.imagen} />

      <div className={styles.info}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.puesto}>{puesto}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </article>
    );
}