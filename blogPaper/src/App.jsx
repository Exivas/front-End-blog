import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditorPage from './pages/Editor-page/EditorPage';
import PostPage from './pages/Posts-Viewer/Post-viewer';
import { MainNav } from './components/Navs/MainNav/MainNav';
import SummaryPage from './pages/summary-page/summaryPage'; // Renamed to follow convention

function TextEditors() {
  return <EditorPage />;
}

function SummaryPages() { // Renamed to follow convention
  return <SummaryPage />;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <MainNav />
        <Routes>
          <Route path="/Editor" element={<TextEditors />} />
          <Route path="/Summary" element={<SummaryPages />} />
          <Route path="*" element={<div><h1>404: Página no encontrada</h1><p>La ruta a la que intentas acceder no existe.</p></div>} />
          <Route path="/Home" element={<PostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;