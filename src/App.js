import Body from './components/Body';
import Header from './components/Header';
import './styles.css'
// para importar mais de uma função
// import {Body, BodyTeste} from "./Body"

function App() {
  return (
    <div className="container">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
