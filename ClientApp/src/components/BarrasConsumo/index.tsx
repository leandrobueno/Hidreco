import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Progress } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import Consume from '../../models/Consume';

const Container = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: flex-start;
 align-items: center;
 margin-bottom: 1rem;

 & > div {
  border-radius: 6px;
 }
`;

const Title = styled.span`
 width: 50px;
`;

export default function BarrasConsumo() {
 const [data, setData] = useState([]);

 useEffect(() => {
  fetch('https://hidreco.azurewebsites.net/api/Sabesp/GetWeekReadings')
   .then((r) => {
    return r.json();
   })
   .then((data) => {
    setData(data);
   });
 }, []);

 return (
  <div>
   {data.map((consume: Consume) => (
    <Tooltip label={consume.value} key={consume.name}>
     <Container>
      <Title>{consume.name}</Title>
      <Progress width='100%' height='32px' value={consume.value} colorScheme='twitter' />
     </Container>
    </Tooltip>
   ))}
  </div>
 );
}
