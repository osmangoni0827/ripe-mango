import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin,faYoutube,faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
           <section className='footer'>
        <p>Copyright © Ripe Mango Shop  All Rights Reserved</p>
        <div >
            <a target ='_blank' href='#'>
            <FontAwesomeIcon className='icon' icon={faFacebook} size='2x' color="#FFFFFF"/>
            </a>
            <a target ='_blank' href='#'>
            <FontAwesomeIcon className='icon' icon={faEnvelope} size='2x'  color="#FFFFFF"/>
            </a>
            <a target ='_blank' href='#'>
            <FontAwesomeIcon className='icon' icon={faGithub} size='2x'  color="#FFFFFF"/>
            </a>
            <a target ='_blank' href='#'>
            <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x'  color="#FFFFFF"/>
            </a>
            <a target ='_blank' href=''>
            <FontAwesomeIcon className='icon' icon={faTwitter} size='2x'  color="#FFFFFF"/>
            </a>
            <a target ='_blank' href='#'>
            <FontAwesomeIcon className='icon' icon={faYoutube} size='2x'  color="#FFFFFF"/>
            </a>

        </div>
   </section>
        </footer>
    );
};

export default Footer;