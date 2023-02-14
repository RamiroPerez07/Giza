import React from 'react';
import { Container, Divider, SimpleGrid, Text } from '@chakra-ui/react';
import { Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerContent, DrawerBody, Button, DrawerFooter } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { CartProductCard } from '../CartProductCard/CartProductCard.jsx';
import { removeAllProductsFromCart } from '../../redux/actions/cart-actions.js';

export const ShoppingCart = (props) => {
  //desestructuro las propiedades de administrador de visibilidad del carro
  const {isOpen, onClose, btnRef} = props;

  //llamo al estado de productos en el carro
  const {productsCart} = useSelector(state => state.cart);

  const dispatch = useDispatch()

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent top="80px !important">
          <DrawerCloseButton />
          <DrawerHeader>Tus productos en carrito</DrawerHeader>

          <DrawerBody>
            <Container mb="20px" p="5px" display="grid" gap="10px" gridAutoRows="min-content" h="250px" overflowY="scroll" centerContent>
              {
                productsCart?.map(product => <CartProductCard key={product.id} {...product} />)
              }
            </Container>
            <Divider />
            <SimpleGrid columns={2} spacing="10px" p="10px">
              <Text fontSize="md" fontWeight="bold">Subtotal</Text>
              <Text fontSize="md" justifySelf="end">$1500</Text>
              <Text fontSize="md" fontWeight="bold">Envio</Text>
              <Text fontSize="md" justifySelf="end">$3200</Text>
            </SimpleGrid>
            <Divider />
            <SimpleGrid columns={2} spacing="10px" p="10px">
              <Text fontSize="md" fontWeight="bold">Total</Text>
              <Text fontSize="md" justifySelf="end">$4700</Text>
            </SimpleGrid>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme='blue' mr={3}>Confirmar</Button>
            <Button variant='outline' mr={3} onClick={() => dispatch(removeAllProductsFromCart())}>Eliminar todos</Button>
            <Button variant='outline' mr={3} onClick={onClose}>Salir</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

