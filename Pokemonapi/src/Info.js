import React from 'react';
import './style.css';

function Info({ specificPokemon, setView }) {
    console.log(specificPokemon);
    const backHandler = () => {
        setView('card');
    }
    return (
        <div className='Card'>
            <div className='Card-img'>
                <img src={specificPokemon.sprites} alt='' />
            </div> 
            <div className='Card-types'>{specificPokemon.types.map((type, i) => {
                return (<div className='Card-type' key={i}>{type.type.name}</div>)
            })}
            </div>
            <div className='Card-info'>
                <div className='Card-data Card-data--weight'>
                    <p className='titles'>Weight: </p>
                    <p>{specificPokemon.weight}</p>
                </div>
                <div className='Card-data Card-data--height'>
                    <p className='titles'>Height: </p>
                    <p>{specificPokemon.height}</p>
                </div>
                <div className='Card-data Card-data--ability'>
                    <p className='titles'>Ability: </p>
                    <p>{specificPokemon.abilities.map((ability, i) => {
                        return (<div key={i}>{ability.ability.name}</div>)
                    })}</p>
                </div>
            </div>
            <button onClick={backHandler} className='backBtn'>Go back</button>
        </div>
    );
}

export default Info;


