import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Card, BoxOne, BoxTwo, Image, MiniBoxOne, HInMiniBoxOne, MiniBoxTwo, Button} from "./ProductsHome.styles";

export default function ProductsHome({city}){
    


    const [dataApi, setDataApi] = useState(null);
    const navigate = useNavigate();
  
  
    useEffect(() => {
      const request = async () => {
        const response = await fetch("http://18.219.33.103:8080/products");
        const result = await response.json();
        setDataApi(result);}
        request();
      }, []);
  
      // Ciudades aleatorias 
    //  const productsRandom = dataApi
    //   .map(value => ({ value, sort: Math.random() }))
    //   .sort((a, b) => a.sort - b.sort)
    //   .map(({ value }) => value)

    
    return(
      <>
      {dataApi && dataApi.map(item => {
              return city === "" || city === item.city.name ? 
              <Container  key={item.id}>
              <Card>
              <BoxOne> 
                  <MiniBoxOne> 
                      <h3> {item.name} </h3> 
                      <HInMiniBoxOne> {item.category.name} </HInMiniBoxOne>
                      <HInMiniBoxOne> {item.city.name}</HInMiniBoxOne>
                      <Button onClick={() => navigate("product")} > Ver más </Button>
                     

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
              :
              <span></span>
          }
      )}
  </>
    );
}