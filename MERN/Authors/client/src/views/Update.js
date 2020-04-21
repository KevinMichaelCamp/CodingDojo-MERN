import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

export default props => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        navigate('/authors');
    }

    return (
        <div className="container">
            <h1 className="display-4">Update Author</h1>
            {loaded &&
                <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialName={author.name}
                    initialQuote={author.quote} />
            }
        </div>
    )
}

