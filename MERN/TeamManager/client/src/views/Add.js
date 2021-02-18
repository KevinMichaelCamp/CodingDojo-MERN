import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import PlayerForm from '../components/PlayerForm'
import { Link, navigate } from '@reach/router';

export default props => {
    const [errors, setErrors] = useState([]);


    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players', player)
            .then(res => {
                console.log(res);
                navigate('/players')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <>
            <h1 className="display-4">Add Player</h1>
            <PlayerForm
                onSubmitProp={createPlayer}
                initialName=""
                initialPosition="" />
            <Link to="/players"><Button variant="contained" color="primary">Back</Button></Link>
            {errors.map((err, idx) =>
                <p className="text-danger" key={idx}>{err}</p>
            )}
        </>
    )
}