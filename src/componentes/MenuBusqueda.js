import React from 'react';
import { useState} from 'react'
import { Input, AutoComplete, Button, Alert, Table } from 'antd';
import Style from './../styles.module.css'
const { Search } = Input;

export const MenuBusqueda = (props) => {
    const [value, setValue] = useState('');
    //resultado es null, si no hay resultados o no se realizo la busqueda todavia
    //sino contiene el resultado del dni buscado 
    const [resultado, setResultado] = useState(null);
    const [busquedaRealizada, setBusquedaRealizada] = useState(false);
    const [advertencias, setAdvertencias] = useState([]);
    return (
    <div className = {Style.centerHorizontal}>
        <Search 
            placeholder = "Ingrese DNI del afiliado" 
            onSearch = {
                () => {
                    let res = props.onSearch(value);
                    setResultado(res);
                    setAdvertencias(res?props.getAdvertencias(res.solicitudes):[]);
                    setBusquedaRealizada(true);
                }
            }
            onChange={(e) => {setValue(e.target.value)}} 
            enterButton 
        />
        <>
        {
        busquedaRealizada&&(resultado? <Resultado res = {resultado}/> :  <Alert message="No hay solicitudes de sesiones asociadas al dni ingresado." type="error" showIcon />        )
        }
        </>
        <>
        {
          busquedaRealizada&&advertencias.length?<>{advertencias.map((a, i) => <Alert key = {i} message = {a} type = 'warning' showIcon/>)}</>:<></>
        }
        </>
        <Button className = {Style.centerHorizontal} type='default' size ='large' onClick={props.onVolver}>Volver</Button>
        
    </div>
    );
}