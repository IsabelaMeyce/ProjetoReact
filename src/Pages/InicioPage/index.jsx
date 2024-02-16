import React from "react";
import "./styles.css";

const InicioPage = () => {
  return (
    <div className="container">
      <div className="centro">
        <div className="img-container">
          <img src="IsabelaMeyce.img.jpeg" alt="Isabela Meyce" />
        </div>
        <div className="nome">
          <h2>Isabela Meyce</h2>
        </div>
        <p>
          Sou estudante de Análise e Desenvolvimento de Sistemas. 3°/5 (Períodos) <br />
          Estou em transição de carreira para a área de TI. <br />
          Possuo conhecimentos em HTML, CSS, JAVASCRIPT e REACT, os quais desenvolvi habilidades através do bootcamp do PRETALAB. <br />
          Atualmente, também estou estudando Linguagem Python para Análise de Dados e Data Science (Com ChatGPT) pela Data Science Academy. <br />
          Tenho experiências anteriores com Atendimento ao Público e Gestão de Pessoas, o que me fez desenvolver soft skills preciosas. ✊🏼
        </p>
      </div>
    </div>
  );
};

export default InicioPage;