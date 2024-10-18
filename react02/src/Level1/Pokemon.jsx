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
      <div className="w-full flex text-center justify-center items-end flex-col p-2 text-end">
        <button onClick={fetchPokemon} className="w-1/6 bg-white bg-opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
            >
            <path d="M 25 2 A 1.0001 1.0001 0 1 0 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 18.307314 7.130711 12.364806 12 8.5195312 L 12 15 A 1.0001 1.0001 0 1 0 14 15 L 14 6.5507812 L 14 5 L 4 5 A 1.0001 1.0001 0 1 0 4 7 L 10.699219 7 C 5.4020866 11.214814 2 17.712204 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z"></path>
          </svg>
        </button>
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
    </div>
  ) : (
    <div className="w-full h-full items-center text-justify justify-between flex flex-col bg-white bg-opacity-10 rounded-lg p-4 text-center items-center gap-y-2">
      Loading...
    </div>
  );
}

export default Pokemon;
