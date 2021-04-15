import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

export default function User() {
    const [usuario, setUsuario] = useState([]);
    const {id} = useParams()


    const obtenerUser = async() => {
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
        const user = await res.data;
        setUsuario(user)
    }

    useEffect(() => {
        obtenerUser()
    }, [])

    return (
        <div>
            <h1>User</h1>
            <p>Nombre: {usuario.name}</p>
            <p>Email: {usuario.email}</p>
            <small>Telefono: {usuario.phone}</small>
        </div>
    )
}
