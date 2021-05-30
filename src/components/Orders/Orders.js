import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fackData';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './actions/index'
import './Orders.css';
const Orders = () => {
    
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const { ProductName } = useParams();
    const Product = fakeData.find((pd) => pd.name === ProductName);
    const [productData]=useState(Product);
     const { name, image, prize, quality, Kind, description, Demand, Stock }=productData
//   console.log(Product)
const handleBuyNow =() =>{
    alert(`Thanks For Buying ${counter} Kg ${name}.`)
}
    return (
        <div>
           <Navbar></Navbar>
            <div className='row product-order '>
                            {/* Product Information */}
            <div className='col-md-5 col-lg-5 col-sm-12 col-12 image'>
                <img src={image} alt=""></img>
                <h6>{description}</h6>
            </div>
            <div className='col-md-7 col-lg-7 col-sm-12 col-12  order-information'>
                <h1>{name}</h1>
                <ul>
                    <li>Quality: {quality}</li>
                    <li>Kind: {Kind}</li>
                    <li>{Demand}</li>
                </ul>
                <h4>Stock: {Stock}</h4>
                <h4>Price: {prize}</h4>

                             {/* Input quantity, and basket size */}

              
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><h5>Your Location</h5></label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Your Location</option>
                            <option value="1">Dhaka</option>
                            <option value="2">Chittagong</option>
                            <option value="3">Feni</option>
                        </select>
                    </div>
                    <div class="mb-3">
                    <h5>No of KG : {counter} </h5>
                        <button style={{ marginRight: '5px' }} className="btn btn-secondary " onClick={() => dispatch(increment())}>+</button>
                        <button className="btn btn-secondary" onClick={() => dispatch(decrement())}>-</button>
                        <button onClick={handleBuyNow} className="d-block mt-3 btn btn-primary">Buy Now</button>
                    </div>
                   
                
            </div>
        </div>
            <Footer></Footer>
        </div>
    )
};

export default Orders;
