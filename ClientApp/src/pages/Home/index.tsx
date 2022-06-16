import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import GraficoLinha from '../../components/GraficoLinha';
import GraficoBarras from '../../components/GraficoBarras';
import GraficoPizza from '../../components/GraficoPizza';
import BarrasConsumo from '../../components/BarrasConsumo';
import { Heading } from '@chakra-ui/react';

function Home() {
 return (
  <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(2, 1fr)' gap={4}>
   <GridItem colSpan={1}>
    <GraficoLinha />
   </GridItem>
   <GridItem rowSpan={2} colSpan={1}>
    <div
     style={{
      width: '100%',
      height: '100%',
      border: '2px solid #eee',
      borderRadius: '6px',
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '4',
     }}
    >
     <Heading as='h4' size='md'>
      Consumo do dia
     </Heading>
     <GraficoPizza />
     <Heading as='h4' size='md'>
      Seu consumo semanal
     </Heading>
     <br />
     <BarrasConsumo />
    </div>
   </GridItem>
   <GridItem colSpan={1}>
    <GraficoBarras />
   </GridItem>
  </Grid>
 );
}

export default Home;
