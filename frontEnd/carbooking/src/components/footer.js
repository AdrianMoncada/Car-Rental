import { Footers,SocialMediaContainer,FaceBook,Instagram,LinedIn,Twetter,AuthRigth } from '../pages/home/home.styles';
import React from 'react';
const Footer = () =>{
    return (
         <Footers>
             <AuthRigth>
             <p>©2021 Digital Booking</p> 
             </AuthRigth>
            
             <SocialMediaContainer>
                <FaceBook src='/facebook.png' alt='logo facebook'/>
                <LinedIn src='/linkedin.png' alt='logo linkedin'/>
                <Twetter src='/tweet.png' alt='logo tweeter'/>
                <Instagram src='/instagram.png' alt='logo instagram'/> 
             </SocialMediaContainer>
            
         </Footers>
    )
}

export default Footer