import React from 'react';
import { Link } from '@reach/router';
import { Paper, Button } from '@material-ui/core';
import DeleteButton from './DeleteButton';


const styles = {
    paper: {
        width: "60rem", padding: "1rem", margin: "20px auto"
    }
}

export default props => {
    const { removefromdom } = props;

    return (
        <Paper elevation={3} style={styles.paper}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.players.map((player, idx) => {
                        return <tr key={idx}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td><DeleteButton playerId={player._id} removefromdom={removefromdom}>Delete</DeleteButton>
                                <Link to={"/players/" + player._id + "/edit"}>
                                    <Button className="ml-2" variant="contained" size="small" color="primary">Edit</Button>
                                </Link></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </Paper>
    )
}