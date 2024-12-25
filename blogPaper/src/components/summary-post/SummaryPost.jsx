import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, ButtonGroup } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { green, red } from '@mui/material/colors';

const SummaryPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/publish/');
      setPosts(response.data);
      setError(null);
    } catch (err) {
      console.error('Error al obtener los posts:', err);
      setError('No se pudieron cargar los posts. Intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este post?')) {
      try {
        await axios.delete(`http://localhost:3000/publish/${id}`);
        alert('Post eliminado');
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      } catch (err) {
        console.error('Error al eliminar el post:', err);
        alert('Hubo un problema al intentar eliminar el post.');
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Typography variant="h6">Cargando...</Typography>
      </Grid>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center" style={{ marginTop: 20 }}>
        {error}
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} direction="column" style={{ width: '100%' }} >
      {posts.length > 0 ? (
        posts.map((post) => (
          
          <Grid item xs={12} key={post.id}> 
            <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, width: '100%' }} component={Link} to={`/Post/${post.id}`}>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 16px',
                }}
              >
                <div>
                  <Typography variant="h6" component="div" sx={{ marginBottom: 0.5 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </Typography>
                </div>
                
                
                <ButtonGroup>
                  <Button
                    size="small"
                    component={Link}
                    to={`/EditPost/${post.id}`}
                    sx={{ color: green['A400'], marginLeft: 1 }}
                  >
                    Editar
                  </Button>
                  <Button
                    size="small"
                    sx={{ color: red['A700'] }}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      deletePost(post.id);
                    }}
                  >
                    Eliminar
                  </Button>
                </ButtonGroup>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" component="p" align="center" sx={{ marginTop: 3 }}>
          No hay publicaciones disponibles.
        </Typography>
      )}
    </Grid>
  );
};

export default SummaryPost;