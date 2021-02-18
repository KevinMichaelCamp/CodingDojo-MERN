import React from 'react';
import axios from 'axios';

export default props => {
    const { authorId, removefromdom } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removefromdom(authorId);
            })
    }

    return (
        <button className="btn btn-sm btn-danger" onClick={deleteAuthor} removefromdom={removefromdom}>Delete</button>
    )
}