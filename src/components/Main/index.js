import React, {useEffect, useState} from 'react';

import api from '../services/api';
import {Container} from '../styles/styled';

function Main() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    async function getDataApi() {
      try {
        const data = await api.get();
        setNutri(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDataApi();
  }, []);

  return (
    <>
      <Container>
        <ul>
          {nutri.map(nutriItem => (
            <li key={nutriItem.id}>{nutriItem.titulo}</li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export default Main;
