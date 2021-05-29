import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fackData';
import Product from '../Home/Product/Product';

const ProductDetails = () => {

    const { name, prize, image } = Product();
    console.log(name);
    const { productId } = useParams();

    return (
        <div>
            fakeData.map(pd => <li>pd</li>)
            <h1>This is a Product Details{name}</h1>
            <h1>This is a Product Details{prize}</h1>
        </div>
    );
};

export default ProductDetails;