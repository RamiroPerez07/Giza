import React from 'react';
import { SimpleGrid, Grid } from '@chakra-ui/react';
import { ProductCard } from '../ProductCard/ProductCard.jsx';

export const ProductContainer = () => {
  return (
    <Grid w="full" maxW="1000px">
      <SimpleGrid spacing="20px" minChildWidth="300px" w="full" justifyItems="center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SimpleGrid>
    </Grid>
  )
}

