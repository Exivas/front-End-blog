import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainFoot from '../../components/Foots/MainFoot'
import axios from 'axios'
import { Container, Typography, CircularProgress, Box, Paper} from '@mui/material'
import './PostDetails.css'

const PostDetails = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API}/publish/${id}`)
                setPost(response.data)
            } catch (error) {
                console.error('Error al obtener el post', error)
            }
        }

        fetchPost()
    }, [id])

    if (!post) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        )
    }

    return (

    <>
    <Paper elevation={3} className='header'>
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Header
            </Typography>
        </Container>
    </Paper>
    <Paper elevation={1} className='post' sx={{width: '60%' , margin: 'auto', marginTop: '20px', marginBottom: '20px'}}>
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                {post.title}
            </Typography>
            <div className='post' dangerouslySetInnerHTML={{ __html: post.content }} />
            
        </Container>
    </Paper>
      
        <Paper elevation={3} className='header'>
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Foooter
            </Typography>
        </Container>
    </Paper>
    <MainFoot />
    </>
    )
}

export default PostDetails