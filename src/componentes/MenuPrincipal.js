import { Button } from 'antd';
import React from 'react';
import Style from './../styles.module.css'

export const MenuPrincipal = ({setVista, descargarCopia}) =>{
    return (
        <div className = {Style.main}>
          <Button type='primary' onClick = {() => setVista('menuAgregar')} >Agregar</Button>
          <Button type='default' onClick = {() => setVista('menuBusqueda')}>Consultar</Button>
          <Button type='dashed' onClick = {descargarCopia}>Descargar Copia de Seguridad</Button>

        </div>
      );
}