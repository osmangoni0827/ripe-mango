import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fackData';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Orders.css';
const Orders = () => {
    const { ProductName } = useParams();
    const Product = fakeData.find((pd) => pd.name === ProductName);
    const [productData]=useState(Product);
     const { name, image, prize, quality, Kind, description, Demand, Stock }=productData
  console.log(Product)
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

                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><h4>Basket Size</h4></label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Basket Size</option>
                            <option value="1">One kg</option>
                            <option value="2">Two Kg</option>
                            <option value="3">Three Kg</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="quantity" class="form-label"><h4>Quantity</h4></label>
                        <input type="number" class="form-control" id="quantity" />
                    </div>
                    <button type="submit" class="btn btn-primary">Order</button>
                </form>
            </div>
        </div>
            <Footer></Footer>
        </div>
    )
};

export default Orders;
