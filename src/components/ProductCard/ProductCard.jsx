import React from 'react';
import { Card, Heading, Button, ButtonGroup, Divider, Stack, Text, CardFooter, Image, useToast } from '@chakra-ui/react';
import {BsFillCartFill} from 'react-icons/bs';
import { colorPalette } from '../../styles/colors';
import { useColorModeValue } from '@chakra-ui/react';
import { StyledCardBody } from './ProductCard';
import { useDispatch } from 'react-redux';
import {addProductToCart} from '../../redux/actions/cart-actions.js';
import { handleAddProductToCart } from '../../utils/cartEvents';
import {MdLocalShipping} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/general';

export const ProductCard = (product) => {
  const {id, name, brand, shortDescription, description, price, stock, imgUrl, freeShipping} = product;

  //llamo al despachador de acciones
  const dispatch = useDispatch();

  //llamo a la funcion de modales
  const toast = useToast();

  //llamo al use navigate para entrar al product detail
  const navigate = useNavigate();

  return (
    <>
      <Card maxW="280px">
        <StyledCardBody >
          <Image src={imgUrl} alt='Imagen del producto' borderRadius='lg' boxSize="100px" objectFit="contain" />
          <Stack mt='6' spacing='2'>
            <Heading fontSize={{base:"xs",sm:"sm"}}>{name}</Heading>
            <Text minH="48px" fontSize={{base:"xs",sm:"sm"}}>{shortDescription}</Text>
            <Stack direction="row" minH="20px">
              {product.freeShipping && 
              <>
                <MdLocalShipping color={colorPalette.chakraScheme.green} />
                <Text color={colorPalette.chakraScheme.green} fontSize={{base:"xs",sm:"sm"}} fontWeight="bold">Envío gratuito</Text>
              </>
              }
            </Stack>
            <Text color={useColorModeValue(colorPalette.light.terciary,colorPalette.dark.terciary)} fontSize={{base:"xs",sm:"sm"}} fontWeight="500">{formatPrice(price)}</Text>
          </Stack>
        </StyledCardBody>
        <Divider />
        <CardFooter display="grid" justifyItems="center">
          <ButtonGroup spacing='2'>
            <Button size="sm" onClick={()=>handleAddProductToCart(product, toast, dispatch, addProductToCart)} leftIcon={<BsFillCartFill />} variant='solid' colorScheme={colorPalette.chakraScheme.button}>Agregar</Button>
            <Button size="sm" variant='ghost' colorScheme={colorPalette.chakraScheme.button} onClick={()=>navigate(`${product.name}`,{state:{id:product.id}})}>Mas info</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}

