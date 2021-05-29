import React from 'react';
import '../Bannar.css';
const Bannar1 = () => {
    return (
        
<div className='bannar1 row '>
           
           <div className='col-md-6 col-6 col-sm-6 col-lg-6 '>
              <div className='mt-5'>
              <h1>HARIBHANGA MANGO</h1>
               <h6>Only 150 rupees per kg</h6>
               <button className='bannarOrderButton'>Order Now</button>
              </div>
           </div>
           <div className='col-md-5 col-5 col-sm-5 col-lg-5'>
               <img src="https://i.ibb.co/R33G7Mq/image.jpg" alt="" />
           </div>
   </div>
    );
};

export default Bannar1;