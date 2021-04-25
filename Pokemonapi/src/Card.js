import React from 'react';

function Card({ pokemon, removePokemon, goToPokemon }) {
    const clickHandler = () => {
        const PokemonInfo = pokemon
        goToPokemon(PokemonInfo);
    }
    
    const removeHandler = () => {
        const remPokemon = pokemon
        removePokemon(remPokemon);
    }
    
    return (
        <div className = 'Card'>
            <div className = 'Card-img'>
            <img src = {pokemon.sprites.front_default} onClick={clickHandler} alt= ''/>       
            </div>
            <div className='Card-Name'>{pokemon.name}</div>
            <button onClick={removeHandler} className='removeBtn'>Remove</button>
        </div>
    );
}

export default Card;
