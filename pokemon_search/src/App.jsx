import React, { useState } from 'react';
import './index.css';
import Pokemon from './Pokemon';
import Battle from './Battle';

function App() {
  const [search,setSearch] = useState('');
  return (
    <div className="w-screen min-h-screen bg-cyan-800 relative"> 
      <div className="p-4 bg-black/50 mb-4">
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-white">Pokédex</h1>
            <p className="text-gray-300 text-sm mt-1">Enter a Pokémon name to find its information</p>
          </div>
          <div className='flex w-full md:w-auto'>
            <input 
              type="text" 
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className='flex-1 md:w-64 p-2 rounded-lg focus:outline-none' 
              placeholder='Search Pokémon...' 
            />
            {/* <button className="bg-red-600 p-2 rounded-l-none">
              <CiSearch className="w-6 h-6 text-white" />
            </button> */}
          </div>
          <button className='bg-gradient-to-bl from-yellow-700 to-red-700 font-bold' onClick={()=>alert('Feature Coming Soon...')}>🔥 Battle Now 🔥</button>
        </div>
      </div>
      <div className='container mx-auto px-4'> 
        <Pokemon searchValue={search}/>
      </div>
    </div>
  );
}
export default App;