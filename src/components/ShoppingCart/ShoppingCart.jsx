import React from 'react';
import { SimpleGrid, Stack } from '@chakra-ui/react';
import { Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerContent, DrawerBody, Button, DrawerFooter } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { CartProductCard } from '../CartProductCard/CartProductCard.jsx';

export const ShoppingCart = (props) => {
  //desestructuro las propiedades de administrador de visibilidad del carro
  const {isOpen, onClose, btnRef} = props;

  //llamo al estado de productos en el carro
  const {productsCard} = useSelector(state => state.cart);

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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Tus productos en carrito</DrawerHeader>

          <DrawerBody>
            <Stack spacing={3} minH="200px">
              <CartProductCard />
              {
                productsCard?.map(product => <CartProductCard key={product.id} {...product} />)
              }
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

