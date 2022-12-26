import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagesProyecto from "./pages/PagesProyecto";
import PagesHome from "./pages/PagesHome";
import PagesCursos from "./pages/PagesCursos";
import PagesSkill from "./pages/PagesSkill";
import PagesContact from "./pages/PagesContacto";
import NoPage from "./pages/PagesNoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PagesHome />}/> 
          <Route path="/skill" exact element={<PagesSkill />} />
          <Route path="/cursos" exact element={<PagesCursos />} />
          <Route path="/proyecto" exact element={<PagesProyecto />} />
          <Route path="/contacto" exact element={<PagesContact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);