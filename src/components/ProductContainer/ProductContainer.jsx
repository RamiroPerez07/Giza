import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { ProductCard } from '../ProductCard/ProductCard.jsx';
import { useSelector } from 'react-redux';
import { InfoAlert } from '../InfoAlert/InfoAlert.jsx';

export const ProductContainer = () => {

  //llamo al estado de los productos para renderizarlos
  const products = useSelector(state => state.filterProducts.filterProducts);

  return (
    <Box w="full" maxW="1000px">
      <SimpleGrid spacing="20px" minChildWidth="300px" w="full" justifyItems="center">
        {/*Renderizado dinamico de los productos*/}
        {
          products.length !== 0 ?
          products.map(product => <ProductCard key={product.id} {...product}></ProductCard>) : 
          <InfoAlert text="No se encontraron coincidencias según los filtros solicitados, ¡intentá con otros parametros de búsqueda!" />}
      </SimpleGrid>
    </Box>
  )
}

