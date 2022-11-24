
import { Table } from 'antd';
import Style from './../styles.module.css'


const columnas = [
    {
        title: 'Tipo',
        dataIndex: 'tipo',
        key: 'tipo',
    },
    {
        title: 'Cantidad',
        dataIndex: 'cant',
        key: 'cant',
    },
    {
        title: 'Fecha de Orden',
        dataIndex: 'fechaOrden',
        key: 'fechaOrden',
    },
    {
        title: 'Fecha de Carga',
        dataIndex: 'fechaCarga',
        key: 'fechaCarga',
    },
    {
        title: 'Cargado Por',
        dataIndex: 'personalCarga',
        key: 'personalCarga',
    },
    {
        title: 'Medico',
        dataIndex: 'medico',
        key: 'medico',
    },
]; 

export const ResultadoBusqueda = ({res}) => {
    return (
    <div className = {Style.centradoHorizontal}> 

        {res.nombre && <h2 style ={{float:'left'}}>{res.nombre}</h2>}
        <Table
            columns={columnas}
            expandable={{
            expandedRowRender: (record) => (
                <p
                style={{
                    margin: 0,
                }}
                >
                {record.observ}
                </p>
            ),
            rowExpandable: (record) => record.observ,
            }}
            dataSource={res.solicitudes.map((e, i) => {return {'key': i, ...e }} )}
        />

    </div>
    )
}
