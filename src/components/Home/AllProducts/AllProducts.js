import React from 'react';
import fakeData from '../../../fackData';
import Product from '../Product/Product';
import './AllProducts.css';
const AllProducts = () => {
    return (
        <section className="mt-5 All-products">
            <div className='container text-center'>
            <h1 className=''>Populer Mangos</h1>
            <div className='row py-5'>
                                {/* All Mango List  */}
                {
                    fakeData.map(pd=><Product pdDescription={pd}></Product>)
                }
            </div>
        </div>
        </section>
    );
};

export default AllProducts;