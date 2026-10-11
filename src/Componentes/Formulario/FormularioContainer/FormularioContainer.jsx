import { useState } from "react";
import FormularioProducto from "../FormularioProducto/FormularioProducto";

function FormularioContainer(){

    const [datosForm, setDatosForm] = useState(
    {
        id: "",
        nombre: "",
        precio: "",
        stock: "",
    }
);

const manejarCambio = (e) => {
    const { name, value } = e.target;

    setDatosForm(
        {
            ...datosForm,
            [name]:value
        }
    )
};

const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Enviando los siguientes datos a la API:', datosForm);
    setDatosForm({
        id: "",
        nombre: "",
        precio: "",
        stock: "",
      })
};

    return(
        <FormularioProducto 
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio} />
    );
}

export default FormularioContainer;