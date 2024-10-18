import React from "react";

function PokemonCard({ name, url, types, height, weight, speed , attack}) {
  const getTypeColor = (type) => {
    switch(type) {
      case 'grass': return 'bg-green-500';
      case 'fire': return 'bg-red-500';
      case 'water': return 'bg-blue-500';
      case 'electric': return 'bg-yellow-500';
      case 'poison': return 'bg-purple-500';
      case 'ground': return 'bg-yellow-700';
      case 'rock': return 'bg-yellow-800';
      case 'bug': return 'bg-green-600';
      case 'ghost': return 'bg-purple-700';
      case 'steel': return 'bg-gray-500';
      case 'flying': return 'bg-blue-400';
      case 'psychic': return 'bg-pink-500';
      case 'ice': return 'bg-blue-300';
      case 'dragon': return 'bg-purple-600';
      case 'dark': return 'bg-gray-800';
      case 'fairy': return 'bg-pink-400';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
      <div className="bg-black bg-opacity-25 rounded-lg p-2 mb-3">
        <img 
          src={url} 
          alt={name} 
          className="w-full h-32 object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h2 className="text-xl font-bold text-white capitalize mb-2 text-center">{name}</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-2">
        {types.map((type, index) => (
          <span
            key={index}
            className={`${getTypeColor(type.type.name)} px-3 py-1 rounded-full text-white text-sm capitalize shadow-md`}
          >
            {type.type.name}
          </span>
        ))}
      </div>
      <div className="mt-2 flex flex-col">
        <p className="flex justify-between"><span className="font-semibold">Height:</span><span>{height} m</span></p>
        <p className="flex justify-between"><span className="font-semibold">Weight:</span><span>{weight} kg</span></p>
        <p className="flex justify-between"><span className="font-semibold">Speed:</span><span>{speed} m/s</span></p>
        <p className="flex justify-between"><span className="font-semibold">Attacks:</span><span>{attack} </span></p>
      </div>
    </div>
  );
}

export default PokemonCard;
