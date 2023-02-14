import React from 'react';
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button } from '@chakra-ui/react';
import { addProductToCart, decreaseProductFromCart } from '../../redux/actions/cart-actions';
import { useDispatch } from 'react-redux';

export const CartProductCard = (product) => {
  const {name, shortDescription, imgUrl, quantity} = product;

  const dispatch = useDispatch();

  return (
    <>
      <Card
        direction= "row"
        overflow='hidden'
        variant='outline'
        h="auto"
      >
        <Image
          objectFit='contain'
          w= "80px"
          src= {imgUrl}
          alt='Imagen del producto'
          padding="7px"
        />

        <Stack>
          <CardBody p="7px 7px 0px 7px">
            <Heading as="h3" size='xs'>{name}</Heading>

            <Text py='2' fontSize="xs">
              {shortDescription}
            </Text>
          </CardBody>

          <CardFooter mt="0px !important" p="0px 7px 7px 7px" alignItems="center">
            <Text fontSize="xs" mr="10px">Cantidad</Text>
            <Button onClick={()=> dispatch(decreaseProductFromCart(product))} variant='solid' colorScheme='blue' size="xs" mr="10px">-</Button>
            <Text fontSize="xs" fontWeight="bold" mr="10px" minW="15px" align="center">{quantity}</Text>
            <Button onClick={() => dispatch(addProductToCart(product))} variant='solid' colorScheme='blue' size="xs">+</Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  )
}

