// PostPage.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostViewer from '../../components/Posts/PostViewer.jsx';

const PostPage = () => {
  const [posts, setPosts] = useState([]); // Usamos un array para almacenar los posts

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/publish/');
        setPosts(response.data); // Guardamos todos los posts en el estado
      } catch (error) {
        console.error('Error al obtener los posts', error);
      }
    };

    fetchPosts();
  }, []); // Solo se ejecuta una vez cuando se carga el componente

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostViewer key={post.id} post={post} /> // Mostramos cada post usando PostViewer
        ))
      ) : (
        <p>Cargando...</p> // Mostramos "Cargando..." mientras se obtienen los posts
      )}
    </div>
  );
};

export default PostPage;
