import React from 'react';
import '../Bannar.css';
const Bannar2 = () => {
    return (
        
<div className='bannar1 row '>
           
           <div className='col-md-6 col-6 col-sm-6 col-lg-6 '>
              <div className='mt-5'>
              <h1>AMRAPALI MANGO</h1>
               <h6>Only 170 rupees per kg</h6>
               <button className='bannarOrderButton'>Order Now</button>
              </div>
           </div>
           <div className='col-md-5 col-5 col-sm-5 col-lg-5'>
               <img src="https://i.ibb.co/zPs72wg/amarpali.jpg" alt="" />
           </div>
   </div>
    );
};

export default Bannar2;