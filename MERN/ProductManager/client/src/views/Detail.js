import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => console.log(res));
        navigate("/products");
    }

    return (
        <div>
            <h1 className="display-4 mt-4 border-bottom">{product.title}</h1>
            <h4>Price: ${product.price}</h4>
            <h6>Description: {product.description}</h6>
            <button className="btn btn-primary">
                <Link style={{ color: "white" }} to={"/products/" + product._id + "/edit"}>Edit Product</Link>
            </button>
            <button className="btn btn-danger ml-2" onClick={(e) => { deleteProduct(product._id) }}>Delete Product</button>
        </div>
    )
}