import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Card, BoxOne, BoxTwo, Image, MiniBoxOne, HInMiniBoxOne, MiniBoxTwo, Button} from "./ProductsHome.styles";

export default function ProductsHome(){
    


    const [dataApi, setDataApi] = useState(null);
    const navigate = useNavigate();
  
  
    useEffect(() => {
      const request = async () => {
        const response = await fetch(" http://api-cors.ca-central-1.elasticbeanstalk.com/categories");
        const result = await response.json();
        setDataApi(result);}
        request();
      }, []);
  
  
    
    return(
        <>
        {dataApi && dataApi.map((item) => (
          <Container key={item.id}>
             <Card>
                <BoxOne> 
                    <MiniBoxOne> 
                        <h3> {item.title} </h3> 
                        <HInMiniBoxOne> {item.category} </HInMiniBoxOne>
                        <HInMiniBoxOne> {item.location}</HInMiniBoxOne>
                        <Button onClick={() => navigate("product")} > Ver más </Button>
                       

                    </MiniBoxOne>

                    <MiniBoxTwo>
                        <div> 
                            <p> {item.description}</p>
                        </div>
                    </MiniBoxTwo>
                </BoxOne>

                <BoxTwo>
                    <Image src={item.img} alt={item.title} /> 
                </BoxTwo>
            </Card>
          </Container>
        ))}
      </>
    );
}