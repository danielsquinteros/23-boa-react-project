import { useEffect, useState } from "react"
import Menu from "./Menu"
import { NavLink } from "react-router-dom"

const Posts = () => {
    const [posts, setPosts] = useState([])

    //Voy crear la promesa pero no la voy a ejecutar
    const getPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');   
        //.json() -> puedo transformaro a un formato legible para trabajarlo
        const posts = await response.json()
        setPosts(posts)
    }

    const renderPosts = () => {
        const htmlPosts = [];
        // El componentDidMount ya tiene información
        if(posts.length > 0){
            posts.forEach(post => {
                const html = 
                // Cada card que genere tiene que tener una llave unica
                <div className="card mt-4 mb-4" key={post.id}>
                    <div className="card-header">
                        Post id: {post.id}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                        <NavLink to={`/post/${post.id}`} className="btn btn-primary">Ver más información</NavLink>
                    </div>
                </div>
                htmlPosts.push(html)
            })
            return htmlPosts;
        } else {
            return <h1>No existen posts</h1>
        }
    }

    
    
    // ComponenteDidMount
    useEffect(() => {
        getPosts()
    }, [])

    //Render de mi componente
    return (
        <>
            <Menu />
            <div className="container">
                {renderPosts()}
            </div>
        </>
    )
}

export default Posts