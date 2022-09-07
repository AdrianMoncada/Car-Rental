import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Card, BoxOne, BoxTwo, Image, MiniBoxOne, PCity, HInMiniBoxOne, MiniBoxTwo, Button} from "./ProductsHome.styles";



export default function ProductsHome({city, category, initialDate, finalDate}){
    console.log("initialDate: ", initialDate);
    console.log("finalDate: ", finalDate);

    const [dataApi, setDataApi] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
      const request = async () => {
        const response = await fetch("http://18.219.33.103:8080/products");
        const result = await response.json();
        setDataApi(result);}
        request();
      }, []);

      const productsRandom = dataApi?.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
   
      if( city != ""){
        Product = Product.filter( product => product.city.name == city );
    }

    if( category != ""){
        Product = Product.filter( product => product.category.id == category );
    }
    
    return(
      <>
      {productsRandom && productsRandom.map(item => {
              return city === "" || city === item.city.name ? 
              <Container  key={item.id}>
              <Card>
              <BoxOne> 
                  <MiniBoxOne> 
                      <h3> {item.name} </h3> 
                      <HInMiniBoxOne> {item.category.name} </HInMiniBoxOne>
                      <HInMiniBoxOne> <PCity> {item.city.name} </PCity></HInMiniBoxOne>
                      <Button onClick={() => navigate(`/product/${item.id}`)} > Ver más </Button>

                  </MiniBoxOne>

                  <MiniBoxTwo>
                      <div> 
                          <p> {item.characteristics}</p>
                      </div>
                  </MiniBoxTwo>
              </BoxOne>

              <BoxTwo>
                  <Image src={item.mainImage} alt={item.name} /> 
              </BoxTwo>
          </Card>
          </Container>
              :
              <span></span>
          }
      )}
  </>
    );
};
