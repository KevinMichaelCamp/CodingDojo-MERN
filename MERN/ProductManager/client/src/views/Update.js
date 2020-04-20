import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import axios from 'axios';

export default props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res));
        navigate('/products');
    }

    return (
        <div className="container">
            <h1 className="display-4">Update a Product</h1>
            {loaded &&
                <ProductForm
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description} />
            }
        </div>
    )
}
