import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';

export default props => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])

    const removeFromDom = productId => {
        console.log("DEBUG>>>>>>>>>>>>>>>>>");
        setProducts(products.filter(product => product._id !== productId))
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
                        <td><DeleteButton
                            productId={product._id}
                            successCallback={() => removeFromDom(product._id)} />
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}