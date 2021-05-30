import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Orders from '../../Orders/Orders';
import './Product.css';
const Product = ({pdDescription}) => {
    // product information
    const{name,prize,image}=pdDescription;
    
    return (
        // <div className=''>
            <div className='col-md-6 col-sm-6 col-12 col-lg-4'>
              <div className='productCard shadow'>
              {/* Information */}
               <div>
               <img src={image} alt='' ></img>
                   <h4>{name}</h4>
                   <h5>{prize}</h5>
               </div>
               <Link to={`/${name}`}>
                    <button className='order-button'>Order Now</button>
                    {/* <Order Button /> */}
                </Link>
              </div>
            </div>
        // </div>
    );
};

export default Product;