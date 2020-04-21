import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { Paper } from '@material-ui/core';
import DeleteButton from './DeleteButton';
import axios from 'axios';

const styles = {
    paper: {
        width: "20rem", padding: "1rem", margin: "20px auto"
    }
}

export default props => {
    const { removeFromDom } = props;

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/authors')
    //         .then(res => setAuthors(res.data));
    // }, [])

    // const removeFromDom = authorId => {
    //     setAuthors(authors.filter(author => author._id !== authorId))
    // }

    return (
        <Paper elevation={3} style={styles.paper}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authors.map((author, idx) => {
                        return <tr key={idx}>
                            <td><Link to={"/authors/" + author._id}>{author.name}</Link></td>
                            <td><Link to={"/authors/" + author._id + "/edit"}><button className="btn btn-sm btn-success mr-2">Edit</button></Link>
                                <DeleteButton authorId={author._id} removeFromDom={removeFromDom}></DeleteButton></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </Paper>
    )
}