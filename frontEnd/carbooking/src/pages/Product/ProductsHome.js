import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Card, BoxOne, BoxTwo, Image, MiniBoxOne, HInMiniBoxOne, MiniBoxTwo, Button} from "./ProductsHome.styles";

const ProductsHome =() =>{
    const [dataApi, setDataApi] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
      const request = async () => {
        const response = await fetch("http://18.219.33.103:8080/products");
        const result = await response.json();
        setDataApi(result);}
        request();
      }, []);
    return(
        <>
        {
        dataApi && 
        dataApi.map(item => 
          <Container key={item.id}>
             <Card>
                <BoxOne> 
                    <MiniBoxOne> 
                        <h3> {item.name} </h3> 
                        <HInMiniBoxOne> {item.category.name} </HInMiniBoxOne>
                        <HInMiniBoxOne> {item.city.name}</HInMiniBoxOne>
                        <Button onClick={() => navigate(`/product/${item.id}`)} > Ver más </Button>
                       

                    </MiniBoxOne>

                    <MiniBoxTwo>
                        <div> 
                            <p> {item.characteristics}</p>
                        </div>
                    </MiniBoxTwo>
                </BoxOne>

                <BoxTwo>
                    <Image src={item.images.url} alt={item.name} /> 
                </BoxTwo>
            </Card>
          </Container>
        )
        }
      </>
    );
};
export default ProductsHome;