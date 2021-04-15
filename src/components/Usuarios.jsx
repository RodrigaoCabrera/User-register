import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';



export default function Usuarios(){
    const [usuarios, setUsuarios] = useState([]);

    const obtenerUser = async() => {
        const res = await axios.get('http://jsonplaceholder.typicode.com/users');
        const users = await res.data;
        setUsuarios(users)
    }

    useEffect(() => {
        obtenerUser()
        console.log(usuarios)
    }, [])


    return (
        <div>
            <h1>Lista de usuarios</h1>
             {
                 usuarios.map((value) => (
                     <div>
                        <Link to={`usuario/${value.id}`}>{value.name}</Link>
                     </div>
                 ))
             }
        </div>
    )
}
