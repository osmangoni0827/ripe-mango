import React from 'react';
import '../Bannar.css';
const Bannar3 = () => {
    return (
        
<div className='bannar1 row '>
           
           <div className='col-md-6 col-12 col-sm-12 col-lg-6 order-sm-1 order-2 '>
              <div className='info'>
              <h1> FAZLI MANGO</h1>
               <h6>Only 100 rupees per kg</h6>
               <button className='bannarOrderButton'>Order Now</button>
              </div>
           </div>
           <div className='col-md-6 col-12 col-sm-12 col-lg-6  order-sm-2 order-1 '>
               <img src="https://i.ibb.co/nBJtBBF/fozli-removebg-preview.png" alt="" />
           </div>
   </div>
    );
};

export default Bannar3;