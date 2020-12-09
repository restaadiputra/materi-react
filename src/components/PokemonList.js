import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then(({ data }) => {
        setTimeout(() => {
          setLoading(false);
          console.log(data);

          setPokemonData(data);
        }, 3000);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <div>
        <p>loading ....</p>
      </div>
    );
  }

  return (
    <div>
      <p>Pokemon Name: {pokemonData && pokemonData.name}</p>
      <p>Pokemon Name: {pokemonData?.weight}</p>
    </div>
  );
};

export default PokemonList;
