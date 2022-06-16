import React from 'react';
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import Card from '../../components/Card';
import { Grid, GridItem } from '@chakra-ui/react';

function Dicas() {
  return (
    <div>
      <Heading as="h4" size="md">
        Como ajudar o planeta
      </Heading>
      <Text fontSize="sm">
        Aqui você pode ver e compartilhar dicas para um consumo consciente e
        sustentável
      </Text>
      <br />
      <Grid templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
          '2xl': 'repeat(5, 1fr)',
        }} gap={6}>
        <GridItem w="100%">
          <Card />
        </GridItem>
        <GridItem w="100%">
          <Card />
        </GridItem>
        <GridItem w="100%">
          <Card />
        </GridItem>
        <GridItem w="100%">
          <Card />
        </GridItem>
        <GridItem w="100%">
          <Card />
        </GridItem>
        <GridItem w="100%">
          <Card />
        </GridItem>
      </Grid>
    </div>
  );
}

export default Dicas;
