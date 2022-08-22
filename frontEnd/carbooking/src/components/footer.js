import { Footers,SocialMediaContainer,AuthRigth } from '../pages/home/home.styles';
import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () =>{
    return (
         <Footers>
             <AuthRigth>

             <p>©2022 Morgam Rent</p> 

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
