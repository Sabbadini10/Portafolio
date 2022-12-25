import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagesProyecto from "./pages/PagesProyecto";
import PagesHome from "./pages/PagesHome";
import PagesAbout from "./pages/PagesAbout";
import PagesSkill from "./pages/PagesSkill";
import PagesContact from "./pages/PagesContacto";
import NoPage from "./pages/PagesNoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PagesHome />}/> 
          <Route path="/skill" exact element={<PagesSkill />} />
          <Route path="/about" exact element={<PagesAbout />} />
          <Route path="/proyecto" exact element={<PagesProyecto />} />
          <Route path="/contacto" exact element={<PagesContact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);