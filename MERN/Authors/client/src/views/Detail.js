import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import { Paper } from '@material-ui/core';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';

const styles = {
    paper: {
        width: "20rem", padding: "1rem", margin: "20px auto"
    }
}

export default props => {
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + props.id)
            .then(res => setAuthor({
                ...res.data
            }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Paper elevation={3} style={styles.paper}>
            <h1 className="display-4">{author.name}</h1>
            <h4>Quote: {author.quote} </h4>
            <Link to="/authors"><button className="btn btn-primary btn-sm mr-2">Back</button></Link>
            <Link to={"/authors/" + author._id + "/edit"}><button className="btn btn-success btn-sm mr-2">Edit</button></Link>
            <DeleteButton authorId={author._id} successCallback={() => navigate("/authors")} />
        </Paper>
    )
}
