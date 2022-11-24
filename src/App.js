import logo from './logo.svg';
import { useState } from 'react';
import { Encabezado } from './componentes/Encabezado.js'
import { MenuPrincipal} from './componentes/MenuPrincipal.js'
import { MenuAgregar} from './componentes/MenuAgregar.js'
import { MenuBusqueda} from './componentes/MenuBusqueda.js'
import { Menu } from 'antd';
import Style from './styles.module.css'
const App = () =>{

  const [vistaActual, setVistaActual] = useState('menuPrincipal');
  const [mostrarEncabezado, setMostrarEncabezado] = useState(true);

  const volverAlMenuPrincipal = () => setVistaActual('menuPrincipal');
  const descargarCopia = () => {console.log('descargar copia')}
  const vistas = {
    'menuPrincipal':<MenuPrincipal setVista = {setVistaActual} descargarCopia = {descargarCopia} />,
    'menuAgregar': <MenuAgregar />,
    'menuBusqueda': <MenuBusqueda />,
  };
    
  return (
    <div className = {Style.centradoHorizontal}>
      {mostrarEncabezado && <Encabezado />}
      {vistas[vistaActual]}
    </div>
  );
}

export default App;
