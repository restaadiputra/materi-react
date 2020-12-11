import React from "react";

import useFetch from "../hooks/useFetch";

const PokemonList = () => {
  const { response, loading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/ditto"
  );

  if (loading) {
    return (
      <div>
        <p>loading ....</p>
      </div>
    );
  }

  return (
    <div className='App'>
      <p>Pokemon Name: {response && response.name}</p>
      <p>Pokemon Name: {response?.weight}</p>
    </div>
  );
};

export default PokemonList;
