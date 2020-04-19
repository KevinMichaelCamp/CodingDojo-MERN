import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <table className="table mt-5">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((product, idx) => {
                    return <tr key={idx}>
                        <td><Link to={"/products/" + product._id}>{product.title}</Link></td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td><button className="btn btn-sm btn-danger" onClick={(e) => { deleteProduct(product._id) }}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}