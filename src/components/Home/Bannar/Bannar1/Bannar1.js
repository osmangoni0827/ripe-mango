import React from 'react';
import '../Bannar.css';
const Bannar1 = () => {
    return (
        
<div className='bannar1 row '>
           
           <div className='col-md-6 col-12 col-sm-12 col-lg-6 '>
              <div className='mt-5'>
              <h1> SPECIAL LANGRA MANGO</h1>
               <h6>Only 150 rupees per kg</h6>
               <button className='bannarOrderButton'>Order Now</button>
              </div>
           </div>
           <div className='col-md-6 col-12 col-sm-12 col-lg-6'>
               <img src="https://i.ibb.co/k1knpn3/LANGRA-removebg-preview.png" alt="" />
           </div>
   </div>
    );
};

export default Bannar1;