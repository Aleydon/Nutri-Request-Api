import React, { useEffect, useState } from 'react';
import api from '../Services/api';
import { Container } from '../Styles/styled';




function Main() {
    const [nutri, setNutri] = useState([]);


    useEffect(() => {
        async function getDataApi(){
            try{
                const data = await api.get();
                setNutri(data.data);
            }catch(error){
                console.log(error);
            }
        }
    getDataApi();
    }, []);


  return (
    <>
        <Container>
            <ul>
                {nutri.map((nutri) => {
                    return <li key={nutri}>{nutri.titulo}</li>
                })}
            </ul>
        </Container>
    </>
  );
}

export default Main;
