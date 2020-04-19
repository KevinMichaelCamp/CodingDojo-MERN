import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div className="container p-2">
            <h1 className="display-4 mb-5">Product Manager</h1>
            <ProductForm />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}