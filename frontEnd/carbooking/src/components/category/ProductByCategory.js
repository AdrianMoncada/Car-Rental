import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { FaCar, FaDesktop, FaWifi, FaRegHeart } from 'react-icons/fa';
import { Cards, Image, Information, ImageContainer, HeartContainer, IconContainer } from './ProductByCategory.styled'


const ProductByCategory = ({setCategory}) => {

    const { id } = useParams();
    const [dataCategory, setDataCategory] = useState(null);
    useEffect(() => {
        const request = async () => {
            const response = await fetch("http://18.219.33.103:8080/categories");
            const result = await response.json();
            setDataCategory(result);
        }
        request();
    }, [id]);



    return (
        <>
         <Cards>
                {dataCategory &&
                 dataCategory.map((category) => (
                        <>
                          <ImageContainer>
                              <Image src={category.img} alt="Img"/>
                          </ImageContainer>
                          <Information>
                               <HeartContainer>
                                    <FaRegHeart style= {{fontSize: '30px'}}/> 
                               </HeartContainer>
                               <h3>{category.name}</h3>
                               <h2>{category.name}</h2>
                               <IconContainer>
                                    <FaCar /> 
                                    <FaDesktop/> 
                                    <FaWifi/> 
                               </IconContainer>
                               {/* <p>{location}</p>
                               <p>{description}</p> */}
                          </Information>
                        </>
                     ))
                }
            </Cards>
        </>
    );
};

export default ProductByCategory