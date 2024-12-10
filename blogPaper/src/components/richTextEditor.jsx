/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import QuillResizeImage from 'quill-resize-image'; 
import axios from 'axios';

// Registrar el módulo de redimensionar imágenes
Quill.register('modules/resize', QuillResizeImage);
// eslint-disable-next-line react/prop-types
export const RichTextEditor = ({ onSave }) => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState(''); 

  useEffect(() => {
    if (!editorRef.current) {
      const quillInstance = new Quill('#editor', {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            ['link', 'image', 'video'],
            ['clean'],
          ],
          resize: {},
        },
      });
      editorRef.current = quillInstance;
    }
  }, []);

  const handleSave = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContents(); // Obtener el contenido en formato JSON de Quill

      try {
        const response = await axios.post('http://localhost:3000/publish', {
          title, // Título ingresado en el input
          content, // Contenido de Quill
        });

        if (response.status === 201) {
          console.log('Publish created successfully', response.data);
        }
      } catch (error) {
        console.error('Error creating publish:', error.response?.data?.message || error.message);
      }
    }
  };
  
  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: '800px',
          padding: '10px',
          marginBottom: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      <div id="editor" style={{ height: '800px', width: '100%', marginBottom: '10px' }}></div>
      <button
        onClick={handleSave}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Save
      </button>
    </div>
  );
};

export default RichTextEditor;
