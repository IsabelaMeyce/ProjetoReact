import { useEffect, useState } from "react";
import Pokemons from "../../components/Pokemons";
import axios from "axios";
import "./styles.css";

const PokemonPage = () => {
  const [referenciasPokemons, setReferenciasPokemons] = useState([]);
  const [listaPokemons, setListaPokemons] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const pegar100ReferenciasPokemons = async () => {
    try {
      const resposta = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      setReferenciasPokemons(resposta.data.results);
    } catch (error) {
      console.error("Erro ao buscar as referencias dos pokemons", error);
    }
  };

  useEffect(() => {
    pegar100ReferenciasPokemons();
  }, []);

  const pegarListaDePokemons = async () => {
    const listaTemporaria = [];

    for (const referencia of referenciasPokemons) {
      try {
        const resposta = await axios.get(referencia.url);
        listaTemporaria.push(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar o pokemon", error);
      }
    }

    setListaPokemons(listaTemporaria);
    setCarregando(false);
  };

  useEffect(() => {
    pegarListaDePokemons();
  }, [referenciasPokemons]);

  return (
    <div className="pokemon-container">
      {carregando ? (
        <div className="loading">
          <img className="img" src="/loading-gif.gif" alt="Carregando" />
        </div>
      ) 
      : (
        
        listaPokemons.map((pokemon) => (
          <Pokemons
            key={pokemon.id}
            nome={pokemon.name}
            foto={pokemon.sprites.front_default}
            id={pokemon.id}
            url={pokemon.forms[0].url}
          />
        ))
      )}
    </div>
  );
};

export default PokemonPage;
