import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaCar, FaDesktop, FaWifi, FaRegHeart } from 'react-icons/fa';
import { Cards, Image, Button, Information, ButtonContainer, ImageContainer, HeartContainer, IconContainer } from './ProductByCategory.styled'


const ProductByCategory = () => {

    const { id } = useParams();
    const [dataProduct, setDataUser] = useState(null);
    useEffect(() => {
        const request = async () => {
            const response = await fetch(`http://api-cors.ca-central-1.elasticbeanstalk.com/categories${id}`);
            const result = await response.json();
            setDataUser(result);
        }
        request();
    }, [id]);
    return (
        <>
         <Cards>
                {dataApi &&
                 dataApi.map((product) => (
                        <>
                          <ImageContainer>
                              <Image src={img} alt="Img"/>
                          </ImageContainer>
                          <Information>
                               <HeartContainer>
                                    <FaRegHeart style= {{fontSize: '30px'}}/> 
                               </HeartContainer>
                               <h3>{category}</h3>
                               <h2>{title}</h2>
                               <IconContainer>
                                    <FaCar /> 
                                    <FaDesktop/> 
                                    <FaWifi/> 
                               </IconContainer>
                               <p>{location}</p>
                               <p>{description}</p>
                               <ButtonContainer>
                                 <Button> Ver más </Button>
                               </ButtonContainer>
                          </Information>
                        </>
                     ))
                }
            </Cards>
        </>
    );
};

export default ProductByCategory