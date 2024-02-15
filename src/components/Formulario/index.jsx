import Botao from "../Botao";
import CaixaDeTexto from "../CaixaDeTexto";
import "./styles.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <b>Preencha com os dados da mulher referência para cirar um card</b>
        <CaixaDeTexto label="Nome" placeholder="Digite o seu nome..." />
        <CaixaDeTexto label="Foto" placeholder="Digite a url da sua imagem..." />
        <CaixaDeTexto
          label="Comida que não gosta"
          placeholder="Digite uma comida que você não gosta..."
        />
        <CaixaDeTexto label="Uma experiência positiva" placeholder="Uma experiência positiva.." />
        <Botao texto="Criar card" />
      </form>
    </section>
  );
};

export default Formulario;
