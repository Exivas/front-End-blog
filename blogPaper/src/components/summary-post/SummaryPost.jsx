import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './summary.css'


const SummaryPost = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/publish/')
                setPosts(response.data)
            } catch (error) {
                console.error('Error al obtener los posts', error)
            }
        }

        fetchPosts()
    }, [])


  return (
    <div>
        {posts.length > 0 ? (
            posts.map((post) => (
                <div className='summary' key={post.id}>
                    <Link to={`/Post/${post.id}`}>
                    <div className="icon"></div>
                    <h2>{post.title}</h2>
                    </Link>
                    <Link to={`/EditPost/${post.id}`}>
              <button>Edit Post</button>
            </Link>
            <button onClick={() => deletePost(post.id)}>Delete Post</button>
                </div>
            ))
        ) : (
            <p>Cargando...</p>
        )}
        
    </div>
  )
}

const deletePost = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/publish/${id}`)
        alert('Post eliminado')
        return SummaryPost()
    } catch (error) {
        console.error('Error al eliminar el post', error)
    }
}

export default SummaryPost