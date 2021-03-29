import React, { useState, useEffect } from 'react';
import './style.css';
import { getPokemon, getAllPokemon } from './Pokemon';
import Card from './Card';
import Info from './Info';

function App() {

  
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('');
  
  const [specificPokemon, setSpecificPokemon] = useState({});

  
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAllPokemon('https://pokeapi.co/api/v2/pokemon?limit=100');
      const pokemon = await loadingPokemon(resp.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  
  const loadingPokemon = async (data) => {
      const pokemonInfo = await Promise.all(data.map(async pokemon => {
      const pokemonRec = await getPokemon(pokemon.url);
      return pokemonRec;
    }));
   
    setPokemonData(pokemonInfo);
  };
  
  
  const removePokemon = (remPokemon) => {
    const newPokemon = pokemonData.filter(pokemon => pokemon !== remPokemon)
    setPokemonData(newPokemon);
  }
  
 
  const goToPokemon = (PokemonInfo) => {
    setSpecificPokemon(PokemonInfo)
    setView('Info');
  }

  
  switch (view) {
    case 'Info':
      return (
        <div className='flex-container'>
          <Info specificPokemon={specificPokemon} setView={setView} />
        </div>
      )
    default:
      return (
        
        <div>
          <div class="logo-container"><img alt="PokéAPI" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" /></div>
          {loading ? (
            <h1>Loading...</h1>) : (
            <>
              <div className='flex-container'>
                {pokemonData.map((pokemon, i) => {
                  return <Card key={i} pokemon={pokemon} removePokemon={removePokemon} goToPokemon={goToPokemon}  />;
                })}
              </div>
            </>
          )}
        </div>
      );
  }
}

export default App;

