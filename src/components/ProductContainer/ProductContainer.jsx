import React from 'react';
import { SimpleGrid, Grid } from '@chakra-ui/react';
import { ProductCard } from '../ProductCard/ProductCard.jsx';
import { useSelector } from 'react-redux';

export const ProductContainer = () => {

  //llamo al estado de los productos para renderizarlos
  const products = useSelector(state => state.filterProducts.filterProducts);

  return (
    <Grid w="full" maxW="1000px">
      <SimpleGrid spacing="20px" minChildWidth="300px" w="full" justifyItems="center">
        {/*Renderizado dinamico de los productos*/}
        {products?.map(product => <ProductCard key={product.id} {...product}></ProductCard>)}
      </SimpleGrid>
    </Grid>
  )
}

