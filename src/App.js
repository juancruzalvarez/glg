import { Button } from 'antd';
import { useEffect, useState } from 'react'
import React from 'react';
import 'antd/dist/antd.css';
import Style from './styles.module.css'
import { MenuPrincipal } from './Components/MenuPrincipal.js'
import { MenuBusqueda } from './Components/MenuBusqueda.js'
import { MenuAgregar } from './Components/MenuAgregar.js'

import testData from './testData.txt'

function App() {

  
  const [currentView, setCurrentView] = useState('main');
  const [data, setData] = useState();

  const returnToMainMenu = () => setCurrentView('main');

  const loadData = () => {
    let arr = [];
    fetch(testData)
    .then(r => r.text())
    .then(text => {
      arr = JSON.parse(text);
      setData(arr);
    });
  }

  useEffect(loadData, []);

  const handleSearch = (dni) => {
    let sesiones = data.filter((s) => s.dni == dni);
    
    console.log('Searching for dni:' + dni);
    console.log(sesiones);
  };

  const handleAgregar = (dni, fecha, tipo, cant) => {
    console.log("Agregar sesion:");
    console.log("DNI: " + dni);
    console.log("Fecha: " + fecha);
    console.log("Tipo: " + tipo);
    console.log("Cantidad: " + cant);
  };

  const handleDescargarCopia = () => {

  }

  let ret;
  switch (currentView) {
    case 'main':
      ret =
        <MenuPrincipal
          onClickAgregar={() => { setCurrentView('add') }}
          onClickConsultar={() => { setCurrentView('lookup')}}
          onClickDescargar= {() => { handleDescargarCopia()}}
        />
      break;

    case 'add': ret = <MenuAgregar onVolver={returnToMainMenu} onAgregar={handleAgregar} />;
      break;

    case 'lookup': ret = <MenuBusqueda onVolver={returnToMainMenu} onSearch={handleSearch} />;
      break;
    default: ret = <h1>ERROR</h1>
  }

  return (
    <>
      <div className={Style.title}>
        <h1>IOSFA</h1>
        <h5>Carga y consulta de sesiones medicas</h5>
      </div>
      {ret}
    </>
  );
}



export default App;