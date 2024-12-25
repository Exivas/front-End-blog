import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditorPage from './pages/Editor-page/EditorPage';
//import PostPage from './pages/Posts-Viewer/Post-viewer';
import { MainNav } from './components/Navs/MainNav/MainNav';
import SummaryPage from './pages/summary-page/summaryPage'; 
import PostDetails from './pages/Post-Details/PostDetails';
import UpdatePage from './pages/Editor-page/UpdatePage'; 
import Home from './pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <div>
        <MainNav />
        <Routes>
          <Route path="/Editor" element={<EditorPage />} />

          <Route path="/Summary" element={<SummaryPage />} />
          
          <Route path="/EditPost/:id" element={<UpdatePage />} />

          <Route path="/Post/:id" element={<PostDetails />} />

          <Route path="/Home" element={<Home />} />
``

          <Route path="*" element={<div><h1>404: Página no encontrada</h1><p>La ruta a la que intentas acceder no existe.</p></div>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;