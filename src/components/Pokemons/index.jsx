import "./styles.css";

const Pokemons = ({ url, nome, foto, id }) => {
  return (
    <a href={url} key={id} className="pokemon-item">
      <img src={foto} alt="Foto do pokemon" />
      <p> {nome} </p>
    </a>
  );
};

export default Pokemons;