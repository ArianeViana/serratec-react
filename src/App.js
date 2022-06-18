import './styles.css'
import { Routes, Route, Link } from "react-router-dom";
import ArmazemSerratec from './pages/ArmazemSerratec';
import Alunos from './pages/Alunos';
// para importar mais de uma função
// import {Body, BodyTeste} from "./Body"

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ArmazemSerratec />} />
      </Routes>
      <Routes>
        <Route path="/alunos" element={<Alunos />} />
      </Routes>
      
    </div>
  );
}

export default App;
