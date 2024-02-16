import Header from "./components/Header";
import Rodape from "./components/Rodape";
import InicioPage from "./Pages/InicioPage";
import Contador from "./components/Contador/index.jsx";
import EnderecoPage from "./Pages/EnderecoPage";
import EstudantesPage from "./Pages/EstudantesPage";
import PokemonPage from "./Pages/PokemonPage";
import SobrePage from "./components/SobrePage";
import SobrePretaLab from "./Pages/SobrePage/SobrePretalab";
import SobreMim from "./components/SobrePage/SobreMim";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <> 
      <Header />
      <div style={{marginBottom:"130px"}}>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/endereco" element={<EnderecoPage />} />
          <Route path="/estudantes" element={<EstudantesPage />} />
          <Route path="/pokemons" element={<PokemonPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/mim" element={<SobreMim />} />
          <Route path="/sobre/preta-lab" component={SobrePretaLab} /> 
        </Routes>
        <Rodape />
      </div>
      <Rodape mensagem="Nada é tão nosso quanto os nossos sonhos.💭👩‍💻🤖" />
    </>
  );
}



export default App;