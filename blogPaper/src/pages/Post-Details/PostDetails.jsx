import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './PostDetails.css'
const PostDetails = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/publish/${id}`)
                setPost(response.data)
            } catch (error) {
                console.error('Error al obtener el post', error)
            }
        }

        fetchPost()
    }, [id])
    if (!post) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <center><h2>{post.title}</h2></center>
            < div className='post' dangerouslySetInnerHTML={{ __html: post.content }}/>
        </div>
    )
}

export default PostDetails