import React, { useState } from 'react';

const PokeList = props => {
    const [pokemon, setPokemon] = useState([]);

    const onClick = e => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=964")
            .then(res => {
                return res.json();
            })
            .then(res => {
                setPokemon(res.results);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <h1>Pokemon API</h1>
            <button onClick={onClick}>Get Pokemon</button>
            <ul>
                {pokemon.map((poke, i) => (
                    <li key={i}>{poke.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PokeList;