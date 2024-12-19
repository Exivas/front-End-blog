import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import TextAlign from '@tiptap/extension-text-align'
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
    addAttributes(){
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

const TextEditor = () => {
  const editor = useEditor({
    extensions,
    content: '',
  });

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

  return (
    <div className="editor">
      {editor && <MenuBar editor={editor} />}
      <button className='btn-save' onClick={handleSavePost}>Save Post</button>
      <EditorContent editor={editor} className='tiptaptext' />
     
    </div>
  );
};

export default TextEditor;
