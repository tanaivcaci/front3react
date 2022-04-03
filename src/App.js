import Historia from './components/Historia';
import './index.css'


function App() {
  return (
    <>
    
      {/* En elementos JSX puedo usar classname */}
      {/* <h1 className="Titulo">Elige tu propia aventura</h1> */}
      
      {/* En componentes React no puedo usar las className */}
      <Historia />

    </>

  );
}

export default App;
