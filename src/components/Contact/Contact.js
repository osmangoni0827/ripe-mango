import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import Navbar from '../Shared/Navbar/Navbar';
const Contact = () => {
    const emailSend = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_csd5vqk', 'template_bcco4fk', e.target, 'user_hBPzm8aK7wRUkSbU50AAW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    return (
       <div>
           <Navbar></Navbar>
           <div className='d-flex justify-content-center container'>
            
            <div className='contacts'>
            <h2>Contact Us</h2>
            <div className='contact'>
            
                <form className='formclass' onSubmit={emailSend}>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" name='email' class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name='name' class="form-control" id="name" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" class="form-control" name='Subject' id="subject" placeholder="Subject" />
                    </div>
                    <div class="form-group massage" >
                        <label for="massage">Massage</label>
                        <input type="text" name='massage' class="form-control " id="massage" placeholder="Massage" />
                    </div>
                    <button type="submit" class="btn btn-primary">Send Massage</button>
                </form>
            </div>
            </div>
        </div>
       </div>
    );
};

export default Contact;