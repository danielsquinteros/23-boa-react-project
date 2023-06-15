import { useEffect, useState } from "react";
import Menu from "./Menu";
import { useParams } from "react-router-dom";

const Post = () => {
    // Paso 1 -> definir el estado y un estado inicial
    const [post, setPost] = useState({ userId: 0, id: 0,  title: "Hola", body: "Mundo" })
    // Pase 3 -> Obtener el id
    const { id } = useParams()

    //Paso 4
    //Voy crear la promesa pero no la voy a ejecutar
    const getPostById = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);   
        //.json() -> puedo transformaro a un formato legible para trabajarlo
        const post = await response.json()
        setPost(post)
    }

    // Paso 5 -> cuando se monte el componente
    useEffect(() => {
        getPostById(id)
    }, [])

    // Paso 2 -> renderizar
  return (
    <>
        <Menu />
        <div className="container">
            <h2>Post</h2>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                        <p className="card-text">user id: {post.userId}</p>
                        <p className="card-text">post id: {post.id}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Post