import styles from "./FormularioProducto.module.css";

function FormularioProducto({ datosForm, manejarCambio, manejarEnvio }) {
  return (
    <form className={styles.contenedorForm} onSubmit={manejarEnvio}>
      <h3 className={styles.titulo}>Agregar nuevo producto</h3>

      <div className={styles.grupoInput}>
        <label className={styles.label} htmlFor="nombre">Nombre del producto</label>
        <input
          className={styles.input}
          type="text"
          name="nombre"
          placeholder="Ej: Barritas proteina x80gr"
          value={datosForm?.nombre || ""}
          onChange={manejarCambio}
        />
      </div>

      <div className={styles.grupoInput}>
        <label className={styles.label}>Precio:</label>
        <input 
          className={styles.input}
          type="number" 
          placeholder="Ej: 1500"
          name="precio"
          value={datosForm?.precio || ""}
          onChange={manejarCambio}
        />
      </div>

      <div className={styles.grupoInput}>
        <label className={styles.label}>ID:</label>
        <input 
          className={styles.input}
          type="text" 
          placeholder="Ej: 57812"
          name="id"
          value={datosForm?.id || ""}
          onChange={manejarCambio}
        />
      </div>

      <div className={styles.grupoInput}>
        <label className={styles.label}>Stock:</label>
        <input 
          className={styles.input}
          type="number" 
          placeholder="Ej: 5"
          name="stock"
          value={datosForm?.stock || ""}
          onChange={manejarCambio} 
        />
      </div>

      <div className={styles.grupoInput}>
        <label className={styles.label}>Imagen:</label>
        <input 
          className={styles.input}
          type="file" 
        />
      </div>

      <button className={styles.botonSubmit} type="submit">
        Guardar Producto
      </button>
    </form>
  );
}

export default FormularioProducto;