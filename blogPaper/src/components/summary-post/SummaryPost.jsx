import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, ButtonGroup, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { green, red } from '@mui/material/colors';
import useAuth from '../../hooks/auth';

const SummaryPost = () => {
  const { token } = useAuth();
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
        await axios.delete(`http://localhost:3000/publish/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        alert('Post eliminado');
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      } catch (err) {
        console.error('Error al eliminar el post:', err);
        alert('No se pudo eliminar el post. Intente nuevamente.');
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <CircularProgress style={{ display: 'block', margin: '20px auto' }} />;
  if (error) return (
    <Typography variant="h6" color="error" align="center" style={{ marginTop: 20 }}>
      {error}
    </Typography>
  );

  return (
    <Grid container spacing={2} direction="column" style={{ padding: '20px' }}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 2,
                width: '100%',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
              component={Link}
              to={`/Post/${post.id}`}
            >
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
                {localStorage.getItem('role') === 'admin' && (
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
                )}
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" align="center" style={{ marginTop: 20 }}>
          No hay posts disponibles.
        </Typography>
      )}
    </Grid>
  );
};

export default SummaryPost;
