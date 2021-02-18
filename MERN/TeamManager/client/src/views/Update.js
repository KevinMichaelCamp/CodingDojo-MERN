import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import PlayerForm from '../components/PlayerForm';
import axios from 'axios';

export default props => {
    const { id } = props;
    const [player, setPlayer] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/' + id)
            .then(res => {
                setPlayer(res.data);
                setLoaded(true);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const updatePlayer = player => {
        axios.put('http://localhost:8000/api/players/' + id, player)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        navigate('/players');
    }

    return (
        <div className="container">
            <h1 className="display-4">Update Player</h1>
            {loaded &&
                <PlayerForm
                    onSubmitProp={updatePlayer}
                    initialName={player.name}
                    initialPosition={player.position} />
            }
        </div>
    )
}