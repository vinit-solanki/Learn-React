import React, { useEffect, useState } from "react";

export default function Battle() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [round, setRound] = useState(1);
  const [userPokemon, setUserPokemon] = useState(null);
  const [cpuPokemon, setCpuPokemon] = useState(null);

  const [userWins, setUserWins] = useWins(0);
  const [cpuWins, setCpuWins] = useState(0);
  const [result, setResult] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=200";

  const fetchAll = async () => {
    let res = await fetch(API);
    let data = await res.json();
    const detailed = await Promise.all(
      data.results.map(async (p) => {
        let r = await fetch(p.url);
        return await r.json();
      })
    );
    setAllPokemon(detailed);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const randomPokemon = () =>
    allPokemon[Math.floor(Math.random() * allPokemon.length)];

  const startRound = () => {
    if (allPokemon.length === 0) return;
    const user = randomPokemon();
    const cpu = randomPokemon();
    setUserPokemon(user);
    setCpuPokemon(cpu);

    const score = comparePokemons(user, cpu);
    if (score > 0) setUserWins((v) => v + 1);
    else if (score < 0) setCpuWins((v) => v + 1);
  };

  const comparePokemons = (u, c) => {
    let us = 0,
      cs = 0;

    // compare: speed, attack, height, weight
    if (u.stats[5].base_stat > c.stats[5].base_stat) us++;
    else cs++;

    if (u.stats[1].base_stat > c.stats[1].base_stat) us++;
    else cs++;

    if (u.height > c.height) us++;
    else cs++;

    if (u.weight > c.weight) us++;
    else cs++;

    // type advantage
    const typeAdv = {
      grass: "water",
      fire: "grass",
      water: "fire",
      poison: "grass",
      psychic: "poison",
    };

    const uType = u.types[0].type.name;
    const cType = c.types[0].type.name;

    if (typeAdv[uType] === cType) us++;
    if (typeAdv[cType] === uType) cs++;

    return us - cs;
  };

  const nextRound = () => {
    if (round === 3) {
      if (userWins > cpuWins) setResult("🏆 You Won the Battle!");
      else if (cpuWins > userWins) setResult("💀 You Lost!");
      else setResult("🤝 It’s a Draw!");
      return;
    }
    setRound(round + 1);
    startRound();
  };

  useEffect(() => {
    if (allPokemon.length > 0) startRound();
  }, [allPokemon]);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-black to-cyan-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-4">
        ⚔ Pokémon Battle Arena ⚔
      </h1>

      <h2 className="text-center text-xl mb-6">
        Round <span className="font-bold">{round}</span> / 3
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* User Card */}
        {userPokemon && (
          <PokemonCardBattle
            pokemon={userPokemon}
            title="Your Pokémon"
            highlight={true}
          />
        )}

        {/* VS */}
        <div className="text-5xl font-bold animate-pulse text-red-500">VS</div>

        {/* CPU Card */}
        {cpuPokemon && (
          <PokemonCardBattle pokemon={cpuPokemon} title="Opponent" />
        )}
      </div>

      {/* Next Round / Result */}
      <div className="mt-10 text-center">
        {result ? (
          <div className="text-3xl font-bold mt-6">{result}</div>
        ) : (
          <button
            onClick={nextRound}
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-bold text-xl hover:bg-red-800 transition"
          >
            Next Round →
          </button>
        )}
      </div>
    </div>
  );
}

function PokemonCardBattle({ pokemon, title, highlight }) {
  return (
    <div
      className={`w-64 bg-gray-800 p-4 rounded-lg shadow-xl border ${
        highlight ? "border-yellow-400 shadow-yellow-400" : "border-gray-600"
      }`}
    >
      <h2 className="text-center text-xl font-bold mb-2">{title}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt=""
        className="w-32 h-32 mx-auto drop-shadow-lg"
      />
      <h3 className="mt-3 text-center text-lg capitalize font-bold">
        {pokemon.name}
      </h3>

      <div className="mt-4 space-y-1 text-sm">
        <p>⚡ Speed: {pokemon.stats[5].base_stat}</p>
        <p>🗡 Attack: {pokemon.stats[1].base_stat}</p>
        <p>📏 Height: {pokemon.height} m</p>
        <p>⚖ Weight: {pokemon.weight} kg</p>
        <p className="capitalize">
          🔮 Type: {pokemon.types[0].type.name}
        </p>
      </div>
    </div>
  );
}