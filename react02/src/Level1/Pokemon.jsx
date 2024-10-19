import React, { useEffect, useState } from "react";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const getNum = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };
  // const fetchPokemon = () => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${getNum()}`)
  //     .then((response) => response.json())
  //     .then((data) => setPokemon(data))
  //     .catch((err) => console.error(err));
  // };
 const fetchPokemon = async () =>{
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getNum()}`)
    const data = await response.json()
    setPokemon(data)
  }catch(err){
    console.error(err)
  }
 }
  useEffect(() => {
    fetchPokemon(); // Fetch Pokémon data on component mount
  }, []);

  return pokemon ? (
    <div className="w-full h-full items-center text-justify justify-between flex flex-col bg-white bg-opacity-10 rounded-lg p-4 text-center items-center">
      <div className="w-full flex flex-row text-center justify-center items-center gap-x-3 p-2 text-end">
        <button onClick={fetchPokemon} className="bg-white bg-opacity-20">
          Reload
        </button>
        <a className="bg-yellow-700 p-2 text-white rounded-lg" href="https://my-pokemons-pearl.vercel.app/">Visit the Pokedex Website</a>
      </div>
      <p className="bg-black px-1 rounded-t-lg">Get a Random Pokemon</p>
      <div className="bg-black bg-opacity-30 p-4 rounded-3xl shadow-lg flex flex-col items-center gap-6 max-w-sm">
        {/* Pokémon Name */}
        <div className="text-3xl font-bold text-gray-200 capitalize">
          {pokemon.name}
        </div>

        {/* Pokémon Image */}
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="w-40 h-40"
        />

        {/* Pokémon Info */}
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex gap-x-4">
            <p className="text-lg">
              <strong>Height:</strong> {pokemon.height / 10} m
            </p>
            |
            <p className="text-lg">
              <strong>Weight:</strong> {pokemon.weight / 10} kg
            </p>
          </div>

          <div className="text-lg text-yellow-400 font-bold">
            <strong>Types:</strong>{" "}
            {pokemon.types.map((type, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-black bg-opacity-50 rounded-lg m-1"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2 w-full text-end"><button className="bg-green-700 p-2">Get Code</button></div>
    </div>
  ) : (
    <div className="w-full h-full items-center text-justify justify-between flex flex-col bg-white bg-opacity-10 rounded-lg p-4 text-center items-center gap-y-2">
      Loading...
    </div>
  );
}

export default Pokemon;
