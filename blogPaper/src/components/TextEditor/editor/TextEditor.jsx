/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import TextAlign from '@tiptap/extension-text-align';
import Youtube from '@tiptap/extension-youtube';
import Image from '@tiptap/extension-image';
import axios from 'axios';
import MenuBar from '../menu/TextMenu';
import './editor.css';

const extensions = [
  Image.configure({
    inline: false,
    allowBase64: true,
    HTMLAttributes: {
      class: 'custom-image',
    },
  }).extend({
    addAttributes() {
      return {
        src: {},
        alt: { default: null },
        with: { default: 'auto' },
        height: { default: 'auto' },
      };
    }
  }),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  TextAlign.configure({ types: ['heading', 'paragraph'] }),
  Youtube.configure({ controls: true, nocookie: true }),
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false },
  }),
];

const TextEditor = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const editor = useEditor({
    extensions,
    content: '',
  });

  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/publish/${postId}`);
          setPost(response.data);
          editor?.commands.setContent(response.data.content);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching post:', error);
          setError('Post not found');
          setLoading(false);
        }
      };

      fetchPost();
    } else {
      setLoading(false);
    }
  }, [postId, editor]);

  const handleSavePost = async () => {
    if (!editor) return;

    const title = prompt('Enter post title');
    const content = editor.getHTML();

    const postData = {
      title,
      content,
    };

    try {
      await axios.post('http://localhost:3000/publish', postData);
      alert('Post saved successfully');
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post');
    }
  };

  const handleUpdatePost = async () => {
    if (!editor || !postId || !post) {
      alert('Post not loaded yet');
      return;
    }

    const title = prompt('Enter new post title', post.title);
    const content = editor.getHTML();

    const updatedPost = {
      title,
      content,
    };

    try {
      await axios.put(`http://localhost:3000/publish/${postId}`, updatedPost);
      alert('Post updated successfully');
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Error updating post');
    }
  };

  const handleSubmit = () => {
    if (postId) {
      handleUpdatePost();
    } else {
      handleSavePost();
    }
  };

  return (
    <div className="editor">
      {editor && <MenuBar editor={editor} />}
      {error && <div className="error">{error}</div>}
      <button className='btn-save' onClick={handleSubmit} disabled={loading}>
        {postId ? 'Update Post' : 'Save Post'}
      </button>
      <EditorContent editor={editor} className='tiptaptext' />
    </div>
  );
};

export default TextEditor;