import React from "react";
import "./styles.css";

const Rodape = ({ mensagem }) => {
  return (
    <footer>
      <p>{mensagem}</p>
      <div className="links-rodape">
        <span role="img" aria-label="E-mail">📧</span> <a href="mailto:isabelameyceadm1@gmail.com">E-mail</a>
        <span role="img" aria-label="GitHub">🐙</span> <a href="https://github.com/IsabelaMeyce">GitHub</a>
        <span role="img" aria-label="LinkedIn">🔗</span> <a href="https://www.linkedin.com/in/isabelameyce1004/">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Rodape;