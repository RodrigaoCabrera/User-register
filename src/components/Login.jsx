import React, {useState} from 'react'
import {auth} from '../firebaseconfig';
import {useHistory} from 'react-router-dom'

export default function Login (){
    const historial = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgError, setMsgError] = useState(null);
    

    const registrarUsuario = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then( r => {
                historial.push('/')
            } )            
            .catch(e => {
                if(e.code === 'auth/invalid-email'){
                    setMsgError('Formato de email incorrecto')
                }
                if(e.code === 'auth/weak-password'){
                    setMsgError('La contraseña debe tener 6 carácteres o más')
                }
            })
    }

    const login = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(r => {
                    historial.push('/')
                })
            .catch(e => {
                /*"auth/wrong-password" 
                "auth/user-not-found"*/
                if(e.code === 'auth/wrong-password'){
                    setMsgError('Contraseña incorrecta')
                }
                if(e.code === 'auth/user-not-found'){
                    setMsgError('Usuario o email incorrecto')
                }
            }) 
    }

    return (
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>
                <form onSubmit={registrarUsuario} className='form-group'>
                    <input 
                    onChange={(e) => {setEmail(e.target.value)}}
                        className='form-control' 
                        type="text" 
                        placeholder='Introduce tu email'
                    />
                    <input 
                    onChange={(e) => {setPassword(e.target.value)}}
                        className='form-control mt-4' 
                        type="password" 
                        placeholder='Introduce tu password'
                    />
                    <input 
                    className='btn btn-dark btn-block mt-4'
                    type="submit" 
                    value="Registrar usuario"/>
                </form>
                <button
                onClick={login}
                    className='btn btn-success btn-block'
                >Iniciar sesión</button>
                {
                    msgError !== null ? <div >{msgError}</div> : <span></span>
                }
                
            </div>
            <div className='col'></div>
        </div>
    )
}
