import React from 'react';
import {useState} from 'react'
import { Input, Space, Button, DatePicker, Select, InputNumber, AutoComplete } from 'antd';
import Style from './../styles.module.css'

export const MenuAgregar = ({onVolver, onAgregar}) => {

    const TestData = [
        {nombre:"Juan Cruz Alvarez", dni:42828515},
        {nombre:"Martin Perez", dni:46594876},
        {nombre:"Santiago Roldan", dni:32546789},
        {nombre:"Federico Martinez", dni:38467987},
        {nombre:"Pedro Carlos Lima", dni:43567894},
        {nombre:"Pedro f Lima", dni:43567894},
        {nombre:"Pedro g Lima", dni:43567894},
        {nombre:"Pedro h Lima", dni:43567894},
        {nombre:"a j Lima", dni:43567894},
        {nombre:"Pedro g e", dni:43567894},
    ]

    const SelectValues = [
        {
            'value': 'to',
            'label': 'Terapìa Ocupacional',
        },
        {
            'value': 'fonoaudiologia',
            'label': 'Fonoaudiologia',
        },
        {
            'value': 'kinesiologia',
            'label': 'Kinesiologia',
        },
        {
            'value': 'psicologia',
            'label': 'Psicologia',
        },
        {
            'value': 'psicopedagogia',
            'label': 'Psicopedagogia',
        },
        {
            'value': 'nutricion',
            'label': 'Nutricion',
        }
    ];

    const kInputMarginStyle = {
        marginLeft: "0.5em",
    }

    const [DNI, setDNI] = useState('');
    const [nombre, setNombre] = useState('');
    const [DNIOptions, setDNIOptions] = useState(TestData.map((e) =>{return {value: e.dni}} ));
    const [nombreOptions, setNombreOptions] = useState(TestData.map((e) =>{return {value: e.nombre}} ));



    return( 
    <div className = {Style.form + " " + Style.centerHorizontal}>

        <div className = {Style.formItem}>
            Nombre y apellido:
            <AutoComplete 
                className    = {Style.formInput}
                style        = {kInputMarginStyle} 
                options      = {nombreOptions}
                filterOption = {
                    (inputValue, option) => {
                        if(!inputValue) return false;
                        return option.value.toLowerCase().includes(inputValue.toLowerCase());
                    }
                }
            />  
        </div>


        <div className = {Style.formItem}>
            DNI:
            <AutoComplete
                className = {Style.formInput}
                style     = {kInputMarginStyle}
                options   = {DNIOptions}
                
            />  
        </div>

        <div className = {Style.formItem}>
            Fecha de Orden:
            <DatePicker className = {Style.formInput} style = {kInputMarginStyle} />
        </div>
        <div className = {Style.formItem}>
            Fecha de Carga:
            <DatePicker className = {Style.formInput} style = {kInputMarginStyle} />
        </div>
        <div className = {Style.formItem}>
            Tipo de Sesion: 
            <Select className = {Style.formInput} style = {kInputMarginStyle} options= {SelectValues}/>
        </div>
        <div className = {Style.formItem}> 
            Cantidad de sesiones:
            <InputNumber className = {Style.formInput} style = {kInputMarginStyle}min={1} max = {100} step = {5} defaultValue = {5}/>
        </div>
        <div className = {Style.formItem}>
            Medico que solicita:
            <Input className = {Style.formInput} style = {kInputMarginStyle } />  
        </div>
        <div className = {Style.formItem}>
            Diagnostico:
            <Input className = {Style.formInput} style = {kInputMarginStyle } />  
        </div>
        <div className = {Style.formItem}> 
            <Button 
            className = {Style.formInput}
            style = {kInputMarginStyle}
            type='primary'
            onClick = {() => onAgregar()}>
                Agregar
            </Button>

            <Button 
            className = {Style.formInput}
            style = {kInputMarginStyle}
            type='default'
            onClick = {() => onVolver()}>
                Volver
            </Button>
        </div>
    </div>
    );
}