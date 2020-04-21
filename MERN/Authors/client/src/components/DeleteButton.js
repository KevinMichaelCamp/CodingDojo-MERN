import React from 'react';
import axios from 'axios';

export default props => {
    const { authorId, removeFromDom } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId);
            })
    }

    return (
        <button className="btn btn-sm btn-danger" onClick={deleteAuthor} removeFromDom={removeFromDom}>Delete</button>
    )
}