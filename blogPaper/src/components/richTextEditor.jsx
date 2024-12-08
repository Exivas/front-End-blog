import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export const RichTextEditor = ({ onSave }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      // Inicializa el editor solo si aún no existe
      const quillInstance = new Quill('#editor', {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, true] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            ['link', 'image', 'video'],
            ['clean'],
          ],
        },
      });
      editorRef.current = quillInstance;
    }
  }, []);

  const handleSave = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContents();
      onSave(content);
    }
  };

  return (
    <>
      <div id="editor" style={{ height: '800px', width:'800px'}}></div>
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export default RichTextEditor;
