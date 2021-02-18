import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from '@reach/router';
import axios from 'axios';
import PlayerList from '../components/PlayerList';

export default () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data);
                setLoaded(true);
            })
    }, [])

    const removefromdom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }

    return (
        <div className="container">
            <h1 className="display-4">Team Manager</h1>
            <Link to="/players/add"><Button variant="contained" color="primary">Add Player</Button></Link>
            <Link to="/players/detail"><Button className="ml-2" variant="contained" color="primary">Manage Players</Button></Link>
            {loaded && <PlayerList players={players} removefromdom={removefromdom} />}
        </div>
    )
}
