import React from 'react';
import fakeData from '../../../fackData';
import Product from '../Product/Product';
import './AllProducts.css';
const AllProducts = () => {
    return (
        <section className="mt-5 All-products">
            <div className='container'>
                <h1 className='text-center'>Populer Mangos</h1>
                <div className='row py-5'>

                    {
                        fakeData.map(pd => <Product key={pd.id} pdDescription={pd}></Product>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllProducts;