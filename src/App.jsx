import { ItemListContainer } from './Componentes/CatalogoItem/ItemListContainer/ItemListContainer';
import './App.css'
import Layout from './Componentes/Layout/Layout';
import FormularioContainer from './Componentes/Formulario/FormularioContainer/FormularioContainer';
import { Routes, Route } from 'react-router-dom';
import { EquipoListContainer } from './Componentes/Equipo/EquipoListContainer/EquipoListContainer';
import { ItemDetalle } from './Componentes/CatalogoItem/ItemDetalle/ItemDetalle';
import Inicio from './Componentes/Layout/Inicio/Inicio';
import Cart from './Componentes/Cart/Cart';

function App() {

  return(
    <>
    <Routes>
      <Route element={<Layout />}>

        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<ItemListContainer mensaje={"Nuestro catálogo de productos"} />} />
        <Route path='/nosotros' element={<EquipoListContainer mensaje={"Nuestro Equipo"} />} />
        <Route path='/nuevo' element ={<FormularioContainer />} />
        <Route path='/productos/:id' element={<ItemDetalle />} />
        <Route path='*' element={<h1>Página no encontrada</h1>} />
        <Route path='/carrito' element={<Cart />} />

      </Route>
    </Routes>
    </>
  );
}

export default App;

