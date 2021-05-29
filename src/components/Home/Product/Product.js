import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetails from '../../ProductDetails/ProductDetails';
import './Product.css';
const Product = ({ pdDescription }) => {
    // product information
    const { name, prize, image, id } = pdDescription;

    return (

        <div className='col-md-6 col-sm-6 col-12 col-lg-4'>
            <div className='productCard shadow'>
                <img src={image} alt='' ></img>
                <div>
                    <h4>{name}</h4>
                    <h5>{prize}</h5>
                </div>
                <Link to={`/product/${id}`}>
                    <button className='order-button'>Order Now</button>
                    {/* <ProductDetails /> */}
                </Link>
            </div>
        </div >

    );
};

export default Product;