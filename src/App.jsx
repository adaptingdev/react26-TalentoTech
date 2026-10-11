import { ItemListContainer } from './Componentes/CatalogoItem/ItemListContainer/ItemListContainer';
import './App.css'
import Layout from './Componentes/Layout/Layout';
import FormularioContainer from './Componentes/Formulario/FormularioContainer/FormularioContainer';
function App() {

  return(
    <>
    <Layout>
      <ItemListContainer mensaje={"Nuestro catálogo de productos"} />
      <FormularioContainer />
    </Layout>
    </>
  );
}

export default App;
