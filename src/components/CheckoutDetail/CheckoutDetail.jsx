import { Divider, Heading, SimpleGrid, Stack, Text, Container } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import {CartProductCard} from '../CartProductCard/CartProductCard.jsx';
import { calculateTotal } from '../../utils/subtotals.js';

export const CheckoutDetail = () => {
  //llamo al estado del carrito
  const {productsCart} = useSelector(state => state.cart);

  //llamo a la funcion totalizadora y le paso como parametro los productos del carro
  const {subtotal, shippingCost, total} = calculateTotal(productsCart);

  return (
    <>
      <Stack w="full" maxW="425px">
        <Heading as="h2" fontSize="md">Detalle del pedido</Heading>
        <Container mb="20px" p="5px" display="grid" gap="10px" gridAutoRows="min-content" h="250px" overflowY="scroll" centerContent>
          {
            productsCart?.map(product => <CartProductCard key={product.id} {...product} />)
          }
        </Container>
        <Divider />
        <SimpleGrid w="full" columns={2} p="10px 25px" gap="5px">
          <Text>Subtotal</Text>
          <Text justifySelf="end" fontWeight="bold">$ {subtotal}</Text>
          <Text>Envío</Text>
          <Text justifySelf="end" fontWeight="bold">$ {shippingCost}</Text>
        </SimpleGrid>
        <Divider />
        <SimpleGrid w="full" columns={2} p="10px 25px">
          <Text>Total</Text>
          <Text justifySelf="end" fontWeight="bold">$ {total}</Text>
        </SimpleGrid>
      </Stack>
    </>
  )
}

