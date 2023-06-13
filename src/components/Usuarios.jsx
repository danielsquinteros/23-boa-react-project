import { useEffect, useState } from "react"
import Menu from "./Menu"
import '../usuarios.css'

const Usuarios = () => {
    // Los usuarios estan listo para cargarse dejo el arreglo vacio
    const [users, setUsers] = useState([])


    // Preparamos todo para hervir agua
    const getUsers = async () => {
        // Llama a la función
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Tranforma lo que me llegue a un formato que pueda leer -> JSON -> FORMATO LEGIBLE POR JS
        const usersApi = await response.json();

        // Lo que me responda la api lo voy a setear
        setUsers(usersApi);
    }

    useEffect(() => {
        // Ejecutando la función
        // Estamos prendiendo el botón del
        getUsers()
    }, [])

    
    const renderUsers = () => {
        if(users.length > 0){
            const allUser = users.map(user => {
                return(
                    <div className="card wrapper-card mt-1 mb-1" key={user.id}>
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{user.username}</h6>
                            <p className="card-text">{user.email}</p>
                            <a href="#" className="card-link">{user.phone}</a>
                        </div>
                    </div>
                )
            })
            return allUser;
        } else {
            return <h1>No existen Usuarios</h1>
        }
    }

    //Render
    return (
        <>
            <Menu />
            <div className="container wrapper-container">
                {renderUsers()}
            </div>
        </>
    )
}

export default Usuarios