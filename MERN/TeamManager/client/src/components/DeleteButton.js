import React from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';

export default props => {
    const { playerId, removefromdom } = props;

    const deletePlayer = e => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res => {
                removefromdom(playerId);
            })
    }

    return (
        <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={deletePlayer}
            removefromdom={removefromdom}>Delete</Button>
    )
}