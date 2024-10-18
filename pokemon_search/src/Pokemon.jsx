import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function Pokemon({searchValue}) {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=120";
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  
  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );
      setPokemons(detailedPokemons);
      console.log(detailedPokemons)
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
  const searchData = pokemons.filter((curr)=>
  curr.name.toLowerCase().includes(searchValue.toLowerCase()))
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <img
          className="w-16 h-16 animate-bounce"
          src="https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825800omhst.png"
          alt="Loading..."
        />
        <p className="text-white mt-4 animate-pulse">Loading Pokémon...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {searchData .map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          url={pokemon.sprites.front_default}
          name={pokemon.name}
          types={pokemon.types}
          height={pokemon.height}
          weight={pokemon.weight}
          speed={pokemon.stats[5].base_stat}
          attack={pokemon.stats[1].base_stat}
        />
      ))}
    </div>
  );
}

export default Pokemon;