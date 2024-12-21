import axios from 'axios'
import { useEffect, useState } from 'react'

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
                <div key={post.id}>
                    <a href="">
                    <h2>{post.title}</h2>
                    </a>
                    
                </div>
            ))
        ) : (
            <p>Cargando...</p>
        )}
        
    </div>
  )
}

export default SummaryPost