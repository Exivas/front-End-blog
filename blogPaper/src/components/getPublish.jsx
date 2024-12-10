import axios from 'axios';
import { useEffect, useState } from 'react';

const PublishList = () => {
  const [publishes, setPublishes] = useState([]);

  useEffect(() => {
    const fetchPublishes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/publish'); // Cambia esta URL si es necesario
        setPublishes(response.data);
      } catch (error) {
        console.error('Error fetching publishes:', error);
      }
    };

    fetchPublishes(); // Llamada para obtener todas las publicaciones
  }, []);

  return (
    <div>
      <h1>All Publications</h1>
      {publishes.length === 0 ? (
        <p>No publications found.</p>
      ) : (
        publishes.map((publish) => (
          <div key={publish.id} style={{ marginBottom: '20px' }}>
            <h2>{publish.title}</h2> {/* Título de la publicación */}
            <div
              dangerouslySetInnerHTML={{
                __html: publish.content, // El contenido ya está en HTML
              }}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: '#000',
                whiteSpace: 'pre-wrap', // Mantener los saltos de línea
              }}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default PublishList;
