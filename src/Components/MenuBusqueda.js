import React from 'react';
import { useState} from 'react'
import 'antd/dist/antd.css';
import { Input, Space, Button } from 'antd';
import Style from './../styles.module.css'
const { Search } = Input;

//Mostrar resultado dentro de aca
//Buscador sube, baja el volver y en el medio el resultado.


export const MenuBusqueda = (props) => {
    const [value, setValue] = useState('');

    return (
    <div className = {Style.centerHorizontal}>
        <Search 
            placeholder= "Ingrese DNI del afiliado" 
            onSearch={() => {props.onSearch(value)}}
            onChange={(e) => {setValue(e.target.value)}} 
            enterButton 
        />
        <Button className = {Style.centerHorizontal}type='default' size ='large' onClick={props.onVolver}>Volver</Button>
     </div>
    );
}