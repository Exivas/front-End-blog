import RichTextEditor from './components/richTextEditor'
import './App.css'

function App() {
  const handleSave = (content) => {
    console.log('Contenido guardado:', content);
  };

  return (
    <>
      <h1>Text</h1>
      <RichTextEditor onSave={handleSave} />
    </>
  )
}

export default App
