import "./styles.css";

const CardEstudante = ({
  fotoUrl,
  nome,
  comidaQueNaoGosta,
  experienciaPositiva,
}) => {
  return (
    <div className="card">
      <img src={fotoUrl} alt="foto da estudante" />

      <div className="container">
        <h4>{nome}</h4>

        <p>
          <b>Uma comida que não gosta: </b>
          {comidaQueNaoGosta}
        </p>

        <p>
          <b>Uma experiência positiva: </b>
          {experienciaPositiva}
        </p>
      </div>
    </div>
  );
};

export default CardEstudante;
