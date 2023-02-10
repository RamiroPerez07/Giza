import React from 'react';
import { Card, Heading, Button, ButtonGroup, Divider, Stack, Text, CardFooter, Image, CardBody } from '@chakra-ui/react';
import {BsFillCartFill} from 'react-icons/bs';
import { colorPalette } from '../../styles/colors';
import { useColorModeValue } from '@chakra-ui/react';
import { StyledCardBody } from './ProductCard';

export const ProductCard = (product) => {
  const {id, name, brand, shortDescription, description, price, stock, imgUrl, freeShipping} = product;
  return (
    <>
      <Card maxW='sm'>
        <StyledCardBody>
          <Image src={imgUrl} alt='Imagen del producto' borderRadius='lg' maxW="150px" maxH="150px" />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
            <Text>{shortDescription}</Text>
            <Text color={useColorModeValue(colorPalette.light.terciary,colorPalette.dark.terciary)} fontSize='2xl' fontWeight="500">$ {price}</Text>
          </Stack>
        </StyledCardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button leftIcon={<BsFillCartFill />} variant='solid' colorScheme={colorPalette.chakraScheme.button}>Agregar</Button>
            <Button variant='ghost' colorScheme={colorPalette.chakraScheme.button}>Mas info</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}

