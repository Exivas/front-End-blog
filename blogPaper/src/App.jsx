
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import EditorPage from './pages/Editor-page/EditorPage';
import PostPage from './pages/Posts-Viewer/Post-viewer';
import { MainNav } from './components/Navs/MainNav/MainNav';


function TextEditors() {
  return <EditorPage/>;
}


function App() {
  return (
  <>
   <BrowserRouter>
      <div>
        
        <MainNav/>

        <Routes>
          <Route path="/Editor" element={<TextEditors />} />
          <Route path="*" element={<div><h1>404: Página no encontrada</h1><p>La ruta a la que intentas acceder no existe.</p></div>} /> {/* Ruta 404 */}
          <Route path="/Home" element={<><PostPage/></>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </>
   
  );
}

export default App;