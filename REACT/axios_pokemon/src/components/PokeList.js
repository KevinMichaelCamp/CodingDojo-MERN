import React, { useState } from 'react';
import axios from 'axios';

const PokeList = props => {
    const [pokemon, setPokemon] = useState([]);

    const onClick = e => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964")
            .then(res => {
                setPokemon(res.data.results);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <button onClick={onClick}>Get Pokemon</button>
            <ul>
                {pokemon.map((poke, i) =>
                    <li key={i}>{poke.name}</li>
                )}
            </ul>
        </div>
    )
}

export default PokeList;