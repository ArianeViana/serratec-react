import './styles.css'
import { Routes, Route, Link } from "react-router-dom";
import ArmazemSerratec from './pages/ArmazemSerratec';
import Alunos from './pages/Alunos';
import { ListagemMaterias } from './pages/ListagemMaterias';
import { CadastroMaterias } from './pages/CadastroMaterias';
// para importar mais de uma função
// import {Body, BodyTeste} from "./Body"

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ArmazemSerratec />} />      
     
        <Route path="alunos" element={<Alunos />} />    
     
        <Route path="materias">
          <Route path="listagem" element={<ListagemMaterias />} />
          <Route path="cadastro" element={<CadastroMaterias />} />
        </Route>

      </Routes>
      
    </div>
  );
}

export default App;
