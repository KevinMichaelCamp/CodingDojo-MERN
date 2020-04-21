import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            });
    }, [])

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => {
                setAuthors([...authors, res.data]);
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

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }

    return (
        <div className="container">
            <h1 className="display-4">Favorite Authors</h1>
            <AuthorForm
                onSubmitProp={createAuthor}
                initialName=""
                initialQuote="" />
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom} />}
            {errors.map((err, idx) =>
                <p className="text-danger" key={idx}>{err}</p>
            )}
        </div>
    )
}