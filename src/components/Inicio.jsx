import React from 'react'
import { useParams } from 'react-router-dom'

export default function Inicio(){

    const {nombre, edad} = useParams()

    return (
        <div>
            <h1>Pagina de inicio</h1>
            <h2>{nombre}</h2> 
            <h2>{edad}</h2> 
        </div>
    )
}
