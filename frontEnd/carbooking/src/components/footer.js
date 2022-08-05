import { Footers,SocialMediaContainer,FaceBook,Instagram,LinedIn,Twetter,AuthRigth } from '../pages/home/home.styles';
import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () =>{
    return (
         <Footers>
             <AuthRigth>
             <p>©2021 Digital Booking</p> 
             </AuthRigth>
            
             <SocialMediaContainer>
                <FaFacebook />
                <FaLinkedinIn />
                <FaTwitter />
                <FaInstagram />
             </SocialMediaContainer>
            
         </Footers>
    )
}

export default Footer