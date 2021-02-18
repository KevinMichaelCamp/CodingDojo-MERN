import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core'
import axios from 'axios';


const styles = {
    paper: {
        width: "20rem", padding: "1rem", margin: "20px auto"
    }
}

export default props => {
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/' + props.id)
            .then(res => setPlayer({
                ...res.data
            }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Paper elevation={3} style={styles.paper}>
            <h1 className="display-4">{player.name}</h1>
        </Paper>
    )
}