import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmit}>
            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td><label>Title:</label></td>
                        <td><input className="form-control" type="text" onChange={(e) => setTitle(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label>Price:</label></td>
                        <td><input className="form-control" type="number" step=".01" onChange={(e) => setPrice(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label>Description:</label></td>
                        <td><textarea className="form-control" onChange={(e) => setDescription(e.target.value)}></textarea></td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-primary" type="submit">Add Product</button>
        </form>
    )
}