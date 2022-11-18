import { Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Style from './../styles.module.css'

export const MenuPrincipal = (props) =>{
    return (
        <div className = {Style.main}>
          <Button type='primary' onClick = {props.onClickAgregar} >Agregar</Button>
          <Button type='default' onClick = {props.onClickConsultar}>Consultar</Button>
          <Button type='dashed' onClick = {props.onClickDescargar}>Descargar Copia de Seguridad</Button>

        </div>
      );
}