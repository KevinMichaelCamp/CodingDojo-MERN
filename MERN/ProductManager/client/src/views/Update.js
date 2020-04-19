import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
        navigate('/products');
    }

    return (
        <div className="container">
            <h1 className="display-4">Update a Product</h1>
            <form onSubmit={updateProduct}>
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <td><label>Title:</label></td>
                            <td><input className="form-control" value={title} type="text" onChange={(e) => setTitle(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><label>Price:</label></td>
                            <td><input className="form-control" value={price} type="number" step=".01" onChange={(e) => setPrice(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><label>Description:</label></td>
                            <td><textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary" type="submit">Update Product</button>
            </form>
        </div>
    )
}
