import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fackData';
import Product from '../Home/Product/Product';
import './ProductDetail.css';


const ProductDetails = () => {

    const { pdId } = useParams()

    const product = fakeData.find(pd => pd.id == pdId)

    const { name, image, prize } = product;


    console.log(product);

    return (
        // <div className="product-container">
        //     {/* <img src={image} alt="" /> */}
        //     <div className="product">
        //         {/* <h1>Name: {name}</h1> */}
        //         <p>Price: {prize}</p>
        //     </div>



        <div className="card mb-3 " style={{ width: ' 940px', marginLeft: '40px', marginTop: '30px' }}>
            <div className="row g-0">
                <div className="col-md-4  alignItems: 'center' ">
                    <img src={image} alt="..." />
                </div>
                <div className="col-md-10 ">
                    <div className="card-body text-center">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">{prize}</small></p>
                    </div>
                </div>
            </div>




        </div>
        // </div >
    );
};

export default ProductDetails;