import React from 'react';
import { IconButton,Card, Image, Stack, CardBody, Heading, Text, CardFooter } from '@chakra-ui/react';
import { addProductToCart, decreaseProductFromCart } from '../../redux/actions/cart-actions';
import { useDispatch } from 'react-redux';
import { colorPalette } from '../../styles/colors.js';
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import { DeleteProductConfirm } from '../DeleteProductConfirm/DeleteProductConfirm';
import { useDisclosure } from '@chakra-ui/react';


export const CartProductCard = (product) => {
  const {name, shortDescription, imgUrl, quantity} = product;

  const dispatch = useDispatch();

  //llamo al diclosure para administrar el modal
  const { isOpen: isDeleteProductOpen, onOpen: onDeleteProductOpen, onClose: onDeleteProductClose } = useDisclosure({id:"eliminar-producto"})

  
  //handle decrease product
  const handleDecreaseProduct = product => {
    if (product.quantity === 1){
      onDeleteProductOpen();
    }else{
      dispatch(decreaseProductFromCart(product));
    }
  }


  return (
    <>
      <Card
        direction= "row"
        overflow='hidden'
        variant='outline'
        h="auto"
      >
        <IconButton
          colorScheme={colorPalette.chakraScheme.button}
          aria-label='Eliminar producto de carrito'
          icon={<DeleteIcon />}
          position="absolute"
          right="5px"
          top="5px"
          size="xs"
          fontSize='12px'
          variant="ghost"
          onClick={onDeleteProductOpen}
        />
        
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
            <IconButton onClick={() => handleDecreaseProduct(product)} variant='solid' colorScheme='blue' size="xs" mr="10px" icon={product.quantity === 1 ? <DeleteIcon boxSize="3" /> : <MinusIcon boxSize="2.5" />} />
            <Text fontSize="xs" fontWeight="bold" mr="10px" minW="15px" align="center">{quantity}</Text>
            <IconButton onClick={() => dispatch(addProductToCart(product))} variant='solid' colorScheme='blue' size="xs" icon={<AddIcon boxSize="2.5" />} />
          </CardFooter>
        </Stack>
      </Card>
      <DeleteProductConfirm isOpen={isDeleteProductOpen} onClose={onDeleteProductClose} product={product} />
    </>
  )
}

