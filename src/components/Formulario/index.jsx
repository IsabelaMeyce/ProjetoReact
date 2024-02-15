import React, { useState } from "react";
import Botao from "../Botao";
import CaixaDeTexto from "../CaixaDeTexto";
import "./styles.css";

const Formulario = ({ setLista, lista }) => {
  const [nome, setNome] = useState("");
  const [fotoUrl, setFotoUrl] = useState("");
  const [comidaQueNaoGosta, setComidaQueNaoGosta] = useState("");
  const [experienciaPositiva, setExperienciaPositiva] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Criar um novo objeto com os dados do formulário
    const novoEstudante = {
      nome,
      fotoUrl,
      comidaQueNaoGosta,
      experienciaPositiva,
    };

    // Atualizar a lista com o novo estudante
    setLista([...lista, novoEstudante]);

    // Limpar os campos do formulário
    setNome("");
    setFotoUrl("");
    setComidaQueNaoGosta("");
    setExperienciaPositiva("");
  };

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <b>Preencha com os dados da mulher referência para criar um card</b>
        <CaixaDeTexto
          label="Nome"
          placeholder="Digite o seu nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <CaixaDeTexto
          label="Foto"
          placeholder="Digite a URL da sua imagem..."
          value={fotoUrl}
          onChange={(e) => setFotoUrl(e.target.value)}
        />
        <CaixaDeTexto
          label="Comida que não gosta"
          placeholder="Digite uma comida que você não gosta..."
          value={comidaQueNaoGosta}
          onChange={(e) => setComidaQueNaoGosta(e.target.value)}
        />
        <CaixaDeTexto
          label="Experiência positiva"
          placeholder="Digite uma experiência positiva..."
          value={experienciaPositiva}
          onChange={(e) => setExperienciaPositiva(e.target.value)}
        />
        <Botao texto="Criar card" type="submit" />
      </form>
    </section>
  );
};

export default Formulario;