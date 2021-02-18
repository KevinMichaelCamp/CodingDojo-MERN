import React, { useState } from 'react';
import { Paper, FormControl, InputLabel, OutlinedInput, Button } from '@material-ui/core';

const styles = {
    paper: {
        width: "20rem", padding: "1rem", margin: "20px auto"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

export default props => {
    const { initialName, initialPosition, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialPosition);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, position });
    }

    return (
        <Paper elevation={3} style={styles.paper}>
            <form onSubmit={onSubmitHandler}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Position</InputLabel>
                    <OutlinedInput
                        type="text"
                        name="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)} />
                </FormControl>
                <FormControl style={styles.button}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary">Submit</Button>
                </FormControl>
            </form>
        </Paper>
    )
}